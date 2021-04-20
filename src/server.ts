import express from "express";

import "./database";

const app = express();

const port = 3333

app.use(express.json())

app.listen(port, () => console.log(`O servidor esta rodando nao porta: ${port}`));