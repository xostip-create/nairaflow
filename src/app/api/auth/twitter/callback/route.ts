import { twitterClient } from '@/lib/twitter';
import { db } from '@/lib/firebaseAdmin';
import { NextRequest, NextResponse } from 'next/server';
import { TwitterApi } from 'twitter-api-v2';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const oauth_token = searchParams.get('oauth_token');
    const oauth_verifier = searchParams.get('oauth_verifier');
    const oauth_token_secret = request.cookies.get('oauth_token_secret')?.value;

    if (!oauth_token || !oauth_verifier || !oauth_token_secret) {
        return NextResponse.json({ error: 'Missing OAuth parameters' }, { status: 400 });
    }

    try {
        const client = new TwitterApi({
            appKey: process.env.TWITTER_API_KEY!,
            appSecret: process.env.TWITTER_API_SECRET!,
            accessToken: oauth_token,
            accessSecret: oauth_token_secret,
        });

        const { client: loggedClient, accessToken, accessSecret, screenName, userId } = await client.login(oauth_verifier);

        // Save to Firestore
        await db.collection('pool_accounts').doc(userId).set({
            userId,
            screenName,
            accessToken,
            accessSecret,
            connectedAt: new Date().toISOString(),
        });

        // Redirect to success page
        return NextResponse.redirect(new URL('/success', request.url));
    } catch (error) {
        console.error('Error in Twitter callback:', error);
        return NextResponse.json({ error: 'Failed to complete Twitter authentication' }, { status: 500 });
    }
}
