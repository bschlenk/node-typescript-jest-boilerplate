import * as utils from '../utils';

describe('utils', () => {
  describe('utils#getMessage()', () => {
    it('should return a message', () => {
      const message = utils.getMessage();
      expect(message).toEqual('Hello world!');
    });
  });
});
