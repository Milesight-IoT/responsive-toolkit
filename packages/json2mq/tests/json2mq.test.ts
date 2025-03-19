import { json2mq } from '../src';

describe('json2mq()', () => {
    it('should handle string param', () => {
        const query = 'min-width: 600px';
        const result = json2mq(query);

        expect(result).toEqual(query);
    });

    it('should handle array param', () => {
        const queries = [{ minWidth: 600 }, { maxWidth: 800 }];
        const result = json2mq(queries);

        expect(result).toEqual('(min-width: 600px), (max-width: 800px)');
    });

    it('should handle simple object param', () => {
        const query = { minWidth: 600 };
        const result = json2mq(query);

        expect(result).toEqual('(min-width: 600px)');
    });

    it('should handle complex object param', () => {
        const query = { minWidth: '10rem', maxWidth: 800 };
        const result = json2mq(query);

        expect(result).toEqual('(min-width: 10rem) and (max-width: 800px)');
    });

    it('should handle true value in object param', () => {
        const query = { screen: true, maxWidth: 800 };
        const result = json2mq(query);

        expect(result).toEqual('screen and (max-width: 800px)');
    });

    it('should handle false value in object param', () => {
        const query = { screen: false, maxWidth: 800 };
        const result = json2mq(query);

        expect(result).toEqual('not screen and (max-width: 800px)');
    });
});
