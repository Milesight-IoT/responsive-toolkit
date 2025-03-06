/**
 * Converts a camelCase string to a kebab-case string.
 *
 * @template S - The camelCase string to be converted.
 * @returns The resulting kebab-case string.
 */
export type CamelToKebab<S extends string> = S extends `${infer T}${infer U}`
    ? `${T extends Lowercase<T> ? '' : '-'}${Lowercase<T>}${CamelToKebab<U>}`
    : S;

/**
 * Converts a union type to an intersection type.
 * Principle: Utilizes the contravariant nature of function parameters. Each member of the union type
 * is converted into a function parameter type, ultimately resulting in an intersection type.
 *
 * @template U - The union type to be converted.
 * @returns The converted intersection type.
 */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
    k: infer I
) => void
    ? I
    : never;

/**
 * Retrieves the last member of the union type U.
 * Principle: First, each member of the union type U is converted into a function type that returns that member.
 * Then, the UnionToIntersection type is used to convert these function types into an intersection type.
 * Finally, a conditional type is used to infer the return value of the intersection type function, which is the last member of the union type.
 *
 * @template U - The union type to be processed.
 * @returns The type of the last member in the union type U.
 */
export type LastInUnion<U> = UnionToIntersection<
    U extends any ? () => U : never
> extends () => infer R
    ? R
    : never;

/**
 * Converts a union type to a tuple type.
 *
 * @template U - The union type to be converted.
 * @template Last - The last member of the union type, by default obtained using LastInUnion<U>.
 * @returns The converted tuple type.
 */
export type UnionToTuple<U, Last = LastInUnion<U>> = [Last] extends [never]
    ? []
    : [...UnionToTuple<Exclude<U, Last>>, Last];

/**
 * Joins the elements of a string array with 'and' to form a single string.
 *
 * @template T - The type of the array to be processed. Usually, the array elements are of string type.
 * @returns The resulting string type. If the array is empty, it returns the 'never' type.
 */
export type JoinWithAnd<T extends any[]> = T extends [infer H, ...infer R]
    ? R extends []
        ? H
        : `${H & string} and ${JoinWithAnd<R>}`
    : never;

/**
 * Joins the elements of a string array with ',' to form a single string.
 *
 * @template T - The type of the array to be processed. Usually, the array elements are of string type.
 * @returns The resulting string type. If the array is empty, it returns the 'never' type.
 */
export type JoinWithComma<T extends any[]> = T extends [infer H, ...infer R]
    ? R extends []
        ? H
        : `${H & string}, ${JoinWithComma<R>}`
    : never;

/**
 * Converts an object type with camelCase keys to a media query string.
 *
 * @template T - The object type to be converted.
 * @returns The resulting media query string.
 */
export type ToMediaQuery<T> = T extends string
    ? T
    : T extends Array<Record<string, any>>
        ? JoinWithComma<UnionToTuple<{ [I in keyof T]: ToMediaQuery<T[I]> }[number]>>
        : JoinWithAnd<
            UnionToTuple<
                {
                    [K in keyof T]: K extends string
                        ? T[K] extends number
                            ? `(${CamelToKebab<K>}: ${T[K]}px)`
                            : T[K] extends string
                                ? `(${CamelToKebab<K>}: ${T[K]})`
                                : T[K] extends true
                                    ? CamelToKebab<K>
                                    : T[K] extends false
                                        ? `not ${CamelToKebab<K>}`
                                        : never
                        : never;
                }[keyof T]
            >
        >;

// Example usage:
// type Case1 = ToMediaQuery<'screen and (min-width: 100px)'>;
// type Case2 = ToMediaQuery<{ screen: true; maxWidth: 300 }>;
// type Case3 = ToMediaQuery<[{ screen: false; maxWidth: 600 }, { minWidth: 300 }]>;
