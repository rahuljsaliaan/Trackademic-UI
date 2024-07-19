import AppConfig from "@/config/AppConfig";
import { EventCallBack, IEventData } from "@/types/core.types";
import { io, Socket } from "socket.io-client"

class SocketManager {
    private socket:Socket;

    constructor(serverURL:string){
       this.socket = io(serverURL);
       this.initializeSocket();
    }

   private initializeSocket(): void {
        this.socket.on('connect',()=>{
           console.log('Connected to server');
        });

        this.socket.on('disconnect',()=>{
          console.log('Disconnected from server');
        })
    }

    onListen(event:string,callback:EventCallBack): void{
          this.socket.on(event,callback)
    }

    onEmit(event:string,data:IEventData): void{
        this.socket.emit(event,data)
    }

    disconnect(): void {
     this.socket.disconnect();
    }
}

export default new SocketManager(AppConfig.Api.BASE_URL)