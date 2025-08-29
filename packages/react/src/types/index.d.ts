/**
 * Remove properties `K` from `T`.
 * Distributive for union types.
 */
declare type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

/**
 * Like `T & U`, but using the value types from `U` where their properties overlap.
 */
declare type Overwrite<T, U> = DistributiveOmit<T, keyof U> & U;

/**
 * Generate a set of string literal types with the given default record `T` and
 * override record `U`.
 *
 * If the property value was `true`, the property key will be added to the
 * string union.
 */
declare type OverridableStringUnion<T extends string | number, U = any> = GenerateStringUnion<
    Overwrite<Record<T, true>, U>
>;
