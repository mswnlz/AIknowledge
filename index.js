const core = require('@actions/core');
const { TwitterApi } = require('twitter-api-v2');

async function run() {
  try {
    const message = core.getInput('message');
    // 原有功能：打印 message
    console.log(message);

    // 检查是否配置了 Twitter API 环境变量
    const apiKey = process.env.TWITTER_API_KEY;
    const apiSecretKey = process.env.TWITTER_API_SECRET_KEY;
    const accessToken = process.env.TWITTER_ACCESS_TOKEN;
    const accessSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET;

    // 只有全部配置了才发推，否则跳过
    if (apiKey && apiSecretKey && accessToken && accessSecret) {
      try {
        const client = new TwitterApi({
          appKey: apiKey,
          appSecret: apiSecretKey,
          accessToken: accessToken,
          accessSecret: accessSecret,
        });
        const tweet = await client.v2.tweet(message);
        console.log('Tweet sent:', tweet);
      } catch (tweetErr) {
        // 发推失败只警告，不让整个 action 失败
        console.warn('Failed to send tweet:', tweetErr.message);
      }
    } else {
      console.log('Twitter API credentials not set, skip tweeting.');
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
