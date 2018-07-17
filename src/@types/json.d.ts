/**
 * Tell typescript how to understand imports of .json files.
 */
declare module '*.json' {
  const value: any;
  export default value;
}

