import { http } from "./http"
import "./websocket/client"


const port: number = 3333;
const message: string = (
  `O servidor esta rodando acesse: localhost:${port}`
)


http.listen(port, () => console.log(message)); // test



