// flag that indicates if the webpage (Interact UAD app) is secure - https vs http
const https = false;

module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: https ? "https://localhost:8080/" : "http://localhost:8080/", // fixes runtime require/chunks
  devServer: {
    disableHostCheck: https ? true : false, // may need to find a better solution for https
    https: https ? true : false,
    public: "localhost:8080", // access localhost resources, even when proxied
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
};
