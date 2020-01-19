const functions = require("firebase-functions");
const {Nuxt} = require("nuxt");

const nuxt = new Nuxt({
  buildDir: "ssr",
  dev: false,
});

exports.nuxtServer = functions.https.onRequest(async (req, res) => {
  await nuxt.ready();
  return nuxt.render(req, res);
});
