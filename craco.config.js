const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },

  },

  devServer: {
    proxy: {
      "/api": {
        // target: "https://api.gaime.fun/api",
        //target: "https://api-staging.gaime.fun/api",
        target: "https://api-staging.gaime.fun/api",
        // target: "https://api.gaime.fun/api",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
