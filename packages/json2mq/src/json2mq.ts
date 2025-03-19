import type { ToMediaQuery } from './typings';

import camel2kebab from './camel2kebab';

/**
 * Checks if the given feature name is a dimension property (e.g., height or width).
 * @param {string} feature - The feature name to check.
 * @returns {boolean} - Returns true if the feature name is a dimension property, otherwise false.
 */
export const isDimension = (feature: string): boolean => {
    const re = /^width|height$/;
    return re.test(feature);
};

/**
 * Converts an object containing media query features into a media query string.
 * @param {Record<string, any>} obj - The object containing media query features.
 * @returns {string} - The generated media query string.
 */
export const obj2mq = (obj: Record<string, any>): string => {
    let mq = '';
    const features = Object.keys(obj);
    features.forEach((feature, index) => {
        let value = obj[feature];
        feature = camel2kebab(feature);
        // Add px to dimension features
        if (isDimension(feature) && typeof value === 'number') {
            value = `${value}px`;
        }
        if (value === true) {
            mq += feature;
        }
        else if (value === false) {
            mq += `not ${feature}`;
        }
        else {
            mq += `(${feature}: ${value})`;
        }
        if (index < features.length - 1) {
            mq += ' and ';
        }
    });
    return mq;
};

/**
 * Converts a JSON object or string format media query into a media query string.
 * @param {string | Record<string, any> | Array<Record<string, any>>} query - The JSON object or string format media query.
 * @returns {string} - The generated media query string.
 */
export const json2mq = <
    T extends string | Record<string, any> | Record<string, any>[],
>(
    query: T,
): ToMediaQuery<T> => {
    let mq = '';
    if (typeof query === 'string') {
        return query as ToMediaQuery<T>;
    }
    // Handling array of media queries
    if (Array.isArray(query)) {
        query.forEach((q, index) => {
            mq += obj2mq(q);
            if (index < query.length - 1) {
                mq += ', ';
            }
        });
        return mq as ToMediaQuery<T>;
    }
    // Handling single media query object
    return obj2mq(query) as ToMediaQuery<T>;
};
