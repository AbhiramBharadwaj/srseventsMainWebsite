// src/utils/logger.js

const logger = {
  info: (message) => {
    console.log(`Info: ${new Date().toISOString()} - ${message}`);
  },
  error: (message) => {
    console.error(`Error: ${new Date().toISOString()} - ${message}`);
  },
  debug: (message) => {
    if (process.env.NODE_ENV === 'development') {  // Only log debug messages in development
      console.debug(`Debug: ${new Date().toISOString()} - ${message}`);
    }
  },
  warn: (message) => {
    console.warn(`Warning: ${new Date().toISOString()} - ${message}`);
  }
};

export default logger;
