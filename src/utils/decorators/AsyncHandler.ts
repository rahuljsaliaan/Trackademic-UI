import { IBaseService } from '@/types/core.types';
import { ClassMethodDecoratorTargetFunction } from '@/types/utility.types';

/**
 * Creates an asynchronous method handler decorator that automatically handles errors by invoking
 * the `handleError` method of the class it's applied to. This decorator is intended for use with
 * methods of classes implementing the `IBaseService` interface.
 *
 * @template This The class instance type that extends `IBaseService<unknown>`.
 * @template Args The types of the arguments the method accepts.
 * @template Return The type of the value returned by the method, wrapped in a Promise.
 * @param originalMethod The original method to be decorated, which returns a Promise.
 * @returns A function that returns a Promise. When invoked, it calls the original method and catches any errors thrown, passing them to the `handleError` method of the class.
 */
export default function AsyncHandler<
  This extends IBaseService<unknown>,
  Args extends unknown[],
  Return
>(
  originalMethod: ClassMethodDecoratorTargetFunction<
    This,
    Args,
    Promise<Return>
  >
  //   context: ClassMethodDecoratorContext
) {
  return async function (this: This, ...args: Args) {
    try {
      await originalMethod.apply(this, args);
    } catch (error) {
      this.handleError(error);
    }
  };
}
