import errorHandler from "errorhandler";

import app from "./app";
import https from "https";
import fs from "fs";

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */

const server = process.env.NODE_ENV == "production" ? https.createServer({
  key: fs.readFileSync(process.env.KEY),
  cert: fs.readFileSync(process.env.CERT),
  passphrase: process.env.PASSPHRASE
}, app)
  .listen(app.get("port"), () => {
    console.log(
      "  App is running at http://localhost:%d in %s mode",
      app.get("port"),
      app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
  }) : app.listen(app.get("port"), () => {
    console.log(
      "  App is running at http://localhost:%d in %s mode",
      app.get("port"),
      app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
  });
export default server;
