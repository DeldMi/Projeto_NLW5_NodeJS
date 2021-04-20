import express from "express";

import "./database";

// import { router } from "./routes"

const app = express();
const port = 3333

/**
 * GET = Buscas
 * POST = Criação
 * PUt = Alteração
 * DELETE = DELETAR
 * PATCH = Altera uma informação especifica
 */

// app.get("/", (request, response) => { // "request" Tudo o que ta vindo "response" tudo o que vai retona para o usuario
//     // return response.send("ola")// retona para a pagina body > ola

//     return response.json({ // retona para a pagina body > {"message":"ola"}
//         message: "ola"
//     });
// });


// app.post("/", (request, responses) => {

//     return responses.json({ message: "Usuário salvo com sucesso" })

// });




app.use(express.json())


app.listen(port, () => console.log(`o servidor esta rodando nao porta: ${port}`))