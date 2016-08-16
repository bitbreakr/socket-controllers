import {OnConnect, SocketController, ConnectedSocket, OnDisconnect, SocketBody, OnMessage} from "../../src/decorators";
import {Message} from "./Message";

@SocketController()
export class MessageController {

    @OnConnect()
    connection(@ConnectedSocket() socket: any) {
        console.log("client connected");
    }

    @OnDisconnect()
    disconnect(@ConnectedSocket() socket: any) {
        console.log("client disconnected");
    }

    @OnMessage("save")
    save(@ConnectedSocket() socket: any, @SocketBody() message: Message) {
        console.log("received message:", message);
        console.log("setting id to the message and sending it back to the client");
        message.id = 1;
        socket.emit("message_saved", message);
    }

}