export default () => ({
  mainPort: Number(process.env.MAIN_PORT) || 3000,
  smsApiKey: process.env.SMS_API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN,
});
