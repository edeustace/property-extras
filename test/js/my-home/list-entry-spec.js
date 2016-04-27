describe('my-home-list-entry', function(){

  var page, doc, node;

  beforeEach(function(){

    doc = {};
    el = {
      textContent: '€1000'
    };

    node = {
      querySelector: jasmine.createSpy('querySelector').and.returnValue(el)
    }; 
    page = new com.ee.MyHomeListEntry(doc, node);
  });

  describe('getAsking', function(){

    it('returns the number in the node as an int', function(){
      var asking = page.getAsking();
      expect(asking).toEqual(1000);
    });
  });

  describe('getSizes', function(){

    it('returns the size object', function(){

      var  el = {
        textContent: ' 1000 m²'
      };

      node.querySelector = jasmine.createSpy('querySelector').and.returnValue(el);

      expect(page.getSizes()).toEqual({squareMeters: 1000});
    });
  });
});
