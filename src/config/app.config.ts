export default () => ({
  mainPort: Number(process.env.MAIN_PORT) || 3000,
  smsApiKey: process.env.SMS_API_KEY,
  tokenSecret: process.env.TOKEN_SECRET,
});
