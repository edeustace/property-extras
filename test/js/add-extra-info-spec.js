describe('add-extra-info', function(){

  describe('run', function(){

    var o;
    
    beforeEach(function(){
      o = {}; 
      o.setPricePerArea = jasmine.createSpy();
      o.getAsking = jasmine.createSpy().and.returnValue(100000);
      o.getSizes =  jasmine.createSpy().and.returnValue({squareMeters: 100});
    });

    it('calls setPricePerArea', function(){
      com.ee.addExtraInfo(o);
      expect(o.setPricePerArea).toHaveBeenCalledWith({perSqFt: 92, perSqM: 1000});
    });
  });
});
