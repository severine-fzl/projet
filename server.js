import dotenv from "dotenv";
import express from "express";
import route from "./routes/routes.js";
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const { APP_HOSTNAME, APP_PORT } = process.env;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ==========
// App routers
// ==========

const app = express();
app.use("/", route);

app.set("view engine", "pug");

app.use(express.static(__dirname + '/public'));

// ==========
// App start
// ==========

app.listen(APP_PORT, () => {
    console.log(`App listening at http://${APP_HOSTNAME}:${APP_PORT}`);
});