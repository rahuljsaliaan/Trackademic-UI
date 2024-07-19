/**
 * Interface representing a base service with error handling capabilities.
 * @template T The type of error that the service can handle.
 */
export interface IBaseService<T> {
  /**
   * Handles an error.
   * @param error The error to handle.
   */
  handleError(error: T): void;
}

export interface IEventData {
     [key:string]: unknown
}

export type EventCallBack = (data:IEventData)=> void;