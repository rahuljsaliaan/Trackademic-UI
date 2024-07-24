import AppConfig from '@/config/AppConfig';
import { EventCallBack, IBaseService, IEventData } from '@/types/core.types';
import { io, Socket } from 'socket.io-client';
import Logger from '@/services/logger';
import { SocketEvent } from '@/types/enum.types';

class SocketService implements IBaseService<Error> {
  private socket: Socket;

  constructor(serverURL: string) {
    this.socket = io(serverURL);
    this.initializeSocket();
  }

  // TODO: Implement error handling
  handleError(_error: Error): void {}

  private initializeSocket(): void {
    this.socket.on(SocketEvent.Connect, () => {
      Logger.debug('Connected to server');
    });

    this.socket.on(SocketEvent.Disconnect, () => {
      Logger.debug('Disconnected from server');
    });
  }

  onListen(event: string, callback: EventCallBack): void {
    this.socket.on(event, callback);
  }

  onEmit(event: string, data: IEventData): void {
    this.socket.emit(event, data);
  }

  disconnect(): void {
    this.socket.disconnect();
  }
}

export default new SocketService(AppConfig.Api.BASE_URL);
