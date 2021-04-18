/**
 * Create path aliases
 */
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@css": path.resolve(__dirname, "src/css"),
      "@components": path.resolve(__dirname, "src/components"),
      "@services": path.resolve(__dirname, "src/services"),
    },
  },
  // devServer: {
  //   proxy: {
  //     "/api/**": {target: "http://localhost:8080"},
  //   },
  // },
};
