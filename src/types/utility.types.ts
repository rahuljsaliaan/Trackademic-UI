// #region Types

import { createBrowserRouter } from 'react-router-dom';

/**
 * Defines the shape of parameters accepted by API service methods.
 * This type allows for key-value pairs where keys are strings and values can be either strings or numbers.
 */
export type ApiServiceQueryParams = Record<string, string | number>;

/**
 * Represents a generic object with string keys and values of any type.
 * Useful for defining loosely structured data objects.
 */
export type ApiServiceData = Record<string, unknown>;

/**
 * Type definition for a class method decorator target function.
 * This type is used to describe the structure of the function that a class method decorator can be applied to.
 *
 * @template This The type of the `this` context within the function.
 * @template Args An array type representing the types of the arguments the function accepts.
 * @template Return The type of the value returned by the function.
 * @param this The instance of the class (the `this` context) on which the method is called.
 * @param args The arguments passed to the function.
 * @returns The return value of the function.
 */
export type ClassMethodDecoratorTargetFunction<
  This,
  Args extends unknown[],
  Return
> = (this: This, ...args: Args) => Return;

/**
 * Type definition for ReactRouter.
 * Utilizes the ReturnType utility type to infer the return type of the `createBrowserRouter` function.
 * This type is expected to represent the router object created by `createBrowserRouter`.
 */
export type ReactRouter = ReturnType<typeof createBrowserRouter>;

// #endregion
