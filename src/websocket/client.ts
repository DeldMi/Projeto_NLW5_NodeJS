import { io } from "../http";



io.on("connect", (Socket) => {
  Socket.on("client_first_access", (params) => {
    console.log(params)
  })
}); //? 