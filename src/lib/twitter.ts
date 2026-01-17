import { TwitterApi } from 'twitter-api-v2';

const appKey = process.env.TWITTER_API_KEY;
const appSecret = process.env.TWITTER_API_SECRET;

const client = (appKey && appSecret)
    ? new TwitterApi({ appKey, appSecret })
    : null as any;

export const twitterClient = client;
