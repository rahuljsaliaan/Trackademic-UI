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

/**
 * Interface representing the structure of event data.
 * It allows for an index signature to accommodate various keys with unknown types.
 */
export interface IEventData {
  [key: string]: unknown;
}

/**
 * Type definition for a callback function used in event handling.
 * The callback function takes an `IEventData` object as its only parameter.
 *
 * @param data - The event data passed to the callback when an event occurs.
 */
export type EventCallBack = (data: IEventData) => void;
