import type { CamelToKebab } from './typings';

/**
 * Converts a camelCase string to a kebab-separated string.
 *
 * @param str - The camelCase string to convert.
 * @returns The kebab-separated string.
 */
const camel2kebab = <T extends string>(str: T): CamelToKebab<T> => {
  return str
    .replace(/[A-Z]/g, (match) => {
      return '-' + match.toLowerCase();
    })
    .toLowerCase() as CamelToKebab<T>;
};

export default camel2kebab;
