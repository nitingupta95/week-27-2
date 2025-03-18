import { WebSocketServer } from "ws";
import {client} from "@repo/db/client"
const server= new WebSocketServer({
    port :8081
})

server.on("connection", async (socket)=>{
    socket.send("you are connected to websocket server");
    await client.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString()
        },
    })
})