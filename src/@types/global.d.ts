/**
 * Omit field "K" from object "T".
 *
 * @template T The object to omit fields from.
 * @template K The keys to omit, given as or'd strings ('status' | 'name')
 *
 * @example
 *
 *   interface MyInterface {
 *     id: number;
 *     name: string;
 *     status: Status;
 *   }
 *
 *   type MyStatuslessInterface = Omit<MyInterface, 'status'>;
 *
 *   // MyStatuslessInterface == { id: number, name: string };
 */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
