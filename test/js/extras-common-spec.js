describe('extras-common', function(){

  describe('constructor', function(){
    it('constructs', function(){
      var common = com.ee.ExtrasCommon();
      expect(common).not.toBe(null);
    });
  });

  describe('run', function(){

    var o;
    
    beforeEach(function(){
      o = new com.ee.ExtrasCommon();
      o.setPricePerArea = jasmine.createSpy();
      o.getAsking = jasmine.createSpy().and.returnValue(100000);
      o.getSizes =  jasmine.createSpy().and.returnValue({squareMeters: 100});
    });

    it('calls setPricePerArea', function(){
      o.run();
      expect(o.setPricePerArea).toHaveBeenCalledWith({perSqFt: 92, perSqM: 1000});
    });
  });
});
