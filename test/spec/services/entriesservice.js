'use strict';

describe('Service: EntriesService', function () {

  // load the service's module
  beforeEach(module('greenLineApp'));

  // instantiate service
  var EntriesService;
  beforeEach(inject(function (_EntriesService_) {
    EntriesService = _EntriesService_;
  }));

  it('should do something', function () {
    expect(!!EntriesService).toBe(true);
  });

});
