import Elif from '../lib';

describe('@elifjs/elif', () => {
    it('should pass test', () => {
        const check = new Elif(10);
        expect(check.a).toStrictEqual(10);
    });
});
