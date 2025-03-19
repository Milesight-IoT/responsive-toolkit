import camel2kebab from '../src/camel2kebab';

describe('camel2kebab()', () => {
    it('should convert camelCase to kebab-case', () => {
        expect(camel2kebab('camelCase')).toEqual('camel-case');
        expect(camel2kebab('anotherCamelCase')).toEqual('another-camel-case');
    });

    it('should handle empty string', () => {
        expect(camel2kebab('')).toEqual('');
    });

    it('should handle single character', () => {
        expect(camel2kebab('A')).toEqual('-a');
    });
});
