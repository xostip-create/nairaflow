import { twitterClient } from '@/lib/twitter';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const callbackUrl = process.env.NEXT_PUBLIC_CALLBACK_URL;
        if (!callbackUrl) {
            return NextResponse.json({ error: 'Callback URL not configured' }, { status: 500 });
        }

        const { url, oauth_token, oauth_token_secret } = await twitterClient.generateAuthLink(callbackUrl, { authAccessType: 'write' });

        // In a real app, you'd save oauth_token_secret in a session or cookie
        // For this simple standalone app, we'll pass it in the URL or use a cookie
        const response = NextResponse.redirect(url);
        response.cookies.set('oauth_token_secret', oauth_token_secret, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 600, // 10 minutes
        });

        return response;
    } catch (error) {
        console.error('Error generating auth link:', error);
        return NextResponse.json({ error: 'Failed to generate auth link' }, { status: 500 });
    }
}
