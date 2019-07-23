export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-training-app"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://7tg2ja62i6.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_7UbNXwUco",
    APP_CLIENT_ID: "n2ndd6sm5ltubf9ul85qdugtg",
    IDENTITY_POOL_ID: "us-east-2:7093f3d8-a028-4464-9761-2823eb21a582"
  }
};
