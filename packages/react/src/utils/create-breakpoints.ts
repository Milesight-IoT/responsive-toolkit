import type { OverridableStringUnion } from '../types';

export interface BreakpointOverrides {}

export type Breakpoint = OverridableStringUnion<
    'xs' | 'sm' | 'md' | 'lg' | 'xl',
    BreakpointOverrides
>;

export interface Breakpoints {
    keys: Breakpoint[];

    /**
     * Each breakpoint (a key) matches with a fixed screen width (a value).
     * @default {
     *    // extra-small
     *    xs: 0,
     *    // small
     *    sm: 576,
     *    // medium
     *    md: 768,
     *    // large
     *    lg: 992,
     *    // extra-large
     *    xl: 1200,
     * }
     */
    values: { [key in Breakpoint]: number };

    /**
     * @param key - A breakpoint key (`xs`, `sm`, etc.) or a screen width number in px.
     * @returns A media query string ready to be used with most styling solutions,
     * which matches screen widths greater than the screen size given by the breakpoint
     * key (inclusive).
     */
    up: (key: Breakpoint | number) => string;

    /**
     * @param key - A breakpoint key (`xs`, `sm`, etc.) or a screen width number in px.
     * @returns A media query string ready to be used with most styling solutions, which matches screen widths less than the screen size given by the breakpoint key (exclusive).
     */
    down: (key: Breakpoint | number) => string;

    /**
     * @param start - A breakpoint key (`xs`, `sm`, etc.) or a screen width number in px.
     * @param end - A breakpoint key (`xs`, `sm`, etc.) or a screen width number in px.
     * @returns A media query string ready to be used with most styling solutions,
     * which matches screen widths greater than the screen size given by the breakpoint
     * key in the first argument (inclusive) and less than the screen size given by the
     * breakpoint key in the second argument (exclusive).
     */
    between: (start: Breakpoint | number, end: Breakpoint | number) => string;

    /**
     * @param key - A breakpoint key (`xs`, `sm`, etc.) or a screen width number in px.
     * @returns A media query string ready to be used with most styling solutions,
     * which matches screen widths starting from the screen size given by the breakpoint
     * key (inclusive) and stopping at the screen size given by the next breakpoint
     * key (exclusive).
     */
    only: (key: Breakpoint) => string;

    /**
     * @param key - A breakpoint key (`xs`, `sm`, etc.).
     * @returns A media query string ready to be used with most styling solutions,
     * which matches screen widths stopping at the screen size given by the breakpoint
     * key (exclusive) and starting at the screen size given by the next breakpoint
     * key (inclusive).
     */
    not: (key: Breakpoint) => string;

    /**
     * The unit used for the breakpoint's values.
     * @default 'px'
     */
    unit?: string | undefined;
}

export interface BreakpointsOptions extends Partial<Breakpoints> {
    /**
     * The increment divided by 100 used to implement exclusive breakpoints.
     * For example, `step: 5` means that `down(500)` will result in `'(max-width: 499.95px)'`.
     * @default 5
     */
    step?: number | undefined;

    /**
     * The unit used for the breakpoint's values.
     * @default 'px'
     */
    unit?: string | undefined;
}

// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
export const breakpointKeys = ['xs', 'sm', 'md', 'lg', 'xl'];

const sortBreakpointsValues = (values: Breakpoints['values']) => {
    const breakpointsAsArray = Object.keys(values).map(key => ({
        key,
        val: values[key as Breakpoint],
    })) || [];

    // Sort in ascending order
    breakpointsAsArray.sort(
        (breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val,
    );

    return breakpointsAsArray.reduce((acc, obj) => {
        return {
            ...acc,
            [obj.key]: obj.val,
        };
    }, {} as Breakpoints['values']);
};

// Keep in mind that @media is inclusive by the CSS specification.
export default function createBreakpoints(breakpoints: BreakpointsOptions): Breakpoints {
    const {
        // The breakpoint **start** at this value.
        // For instance with the first breakpoint xs: [xs, sm).
        values = {
            xs: 0,
            // phone
            sm: 576,
            // tablet
            md: 768,
            // small laptop
            lg: 992,
            // desktop / large screen
            xl: 1200,
        },
        unit = 'px',
        step = 5,
        ...other
    } = breakpoints;
    const sortedValues = sortBreakpointsValues(values);
    const keys = Object.keys(sortedValues) as Breakpoint[];

    function up(key: Breakpoint | number) {
        const value = typeof values[key as Breakpoint] === 'number'
            ? values[key as Breakpoint]
            : key;
        return `@media (min-width:${value}${unit})`;
    }

    function down(key: Breakpoint | number) {
        const value = typeof values[key as Breakpoint] === 'number'
            ? values[key as Breakpoint]
            : key as number;
        return `@media (max-width:${value - step / 100}${unit})`;
    }

    function between(start: Breakpoint | number, end: Breakpoint | number) {
        const endIndex = keys.indexOf(end as Breakpoint);

        return (
            `@media (min-width:${
                typeof values[start as Breakpoint] === 'number'
                    ? values[start as Breakpoint]
                    : start
            }${unit}) and `
            + `(max-width:${(
                endIndex !== -1 && typeof values[keys[endIndex] as Breakpoint] === 'number'
                    ? values[keys[endIndex] as Breakpoint]
                    : end as number
            ) - step / 100}${unit})`
        );
    }

    function only(key: Breakpoint) {
        if (keys.indexOf(key) + 1 < keys.length) {
            return between(key, keys[keys.indexOf(key) + 1] as Breakpoint);
        }
        return up(key);
    }

    function not(key: Breakpoint) {
        // handle first and last key separately, for better readability
        const keyIndex = keys.indexOf(key);
        if (keyIndex === 0) {
            return up(keys[1] as Breakpoint);
        }
        if (keyIndex === keys.length - 1) {
            return down(keys[keyIndex] as Breakpoint);
        }
        return between(key, keys[keys.indexOf(key) + 1] as Breakpoint).replace(
            '@media',
            '@media not all and',
        );
    }

    return {
        keys,
        values: sortedValues,
        up,
        down,
        between,
        only,
        not,
        unit,
        ...other,
    };
}
