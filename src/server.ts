import express from "express";

import "./database";

import { routes } from "./routes";

const app = express();
const port = 3333;

app.use(express.json());

app.use(routes);

app.listen(port, () => console.log(`O servidor esta rodando nao porta: ${port} !`))