describe('my-home-page', function(){

  var page, doc, node;

  beforeEach(function(){

    doc = {};
    el = {
      textContent: '€1000'
    };

    node = {
      querySelector: jasmine.createSpy('querySelector').and.returnValue(el)
    }; 
    page = new com.ee.MyHomePage(doc, node);
  });

  describe('getAsking', function(){

    it('returns the number in the node as an int', function(){
      var asking = page.getAsking();
      expect(asking).toEqual(1000);
    });
  });

  describe('getSizes', function(){

    it('returns the size object', function(){

      var span = {
        textContent: ' 1000 m²'
      };
      
      var desc = {
        querySelector: jasmine.createSpy('querySelector').and.returnValue(span)
      };

      doc.querySelector = jasmine.createSpy('querySelector').and.returnValue(desc);

      expect(page.getSizes()).toEqual({squareFoot: undefined, squareMeters: 1000});
    });
  });
});
