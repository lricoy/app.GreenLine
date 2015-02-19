'use strict';

describe('Service: cadastroService', function () {

  // load the service's module
  beforeEach(module('greenLineApp'));

  // instantiate service
  var cadastroService;
  beforeEach(inject(function (_cadastroService_) {
    cadastroService = _cadastroService_;
  }));

  it('should do something', function () {
    expect(!!cadastroService).toBe(true);
  });

});
