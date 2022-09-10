const loge4js = require("log4js");
let customLogger;
const logger = () => customLogger || setupLogger();
const setupLogger = (user) => {
  loge4js.configure({
    appenders: {
      out: {
        type: "stdout",
        layout: {
          type: "pattern",
          pattern: "%[ %d %z %p %x{user} %l %f{3} %m %] %n",
          tokens: {
            user: function () {
              return user || "SYSTEM";
            },
          },
        },
      },
    },
    categories: {
      default: { appenders: ["out"], level: "info", enableCallStack: true },
    },
  });
  customLogger = loge4js.getLogger();
  customLogger.level = "debug";
  return customLogger;
};

module.exports = {
  setupLogger,
  logger,
};
