(function(root) {

  root.com = root.com || {};
  root.com.ee = root.com.ee || {};

  root.com.ee.ExtrasMyHome = function ExtrasMyHome(doc) {

    var obj = Object.create(new com.ee.ExtrasCommon());
    
    obj.getAsking = function() {

      var el = doc.querySelector('.brochurePrice');

      if(el){
        var trimmed = el.textContent.trim();
        var numbersOnly = trimmed.replace('€', '').replace(/,/g, '').replace(/\./g, '');
        try {
          return parseInt(numbersOnly, 10);
        } catch (e){
          console.error('failed to parse: ', numbersOnly, 'as an int');
        }
      }
    };

    obj.setPricePerArea = function(ppa){
      var existing = doc.querySelector('.brochurePrice').textContent; 
      var extra = '(m²: €' + ppa.perSqM + ', ft²: €' + ppa.perSqFt + ')';
      doc.querySelector('.brochurePrice').innerHTML = existing + ' ' + extra;
    };

    obj.getSizes = function() {
      var description = doc
        .querySelector('.brochureDescription');

      if(description){
        var span = description.querySelector('span');
        if(span){
          var content = span.textContent;
          var matches = content.match(/^.*\s([0-9\.]*?)\sm².*/);
          if(matches && matches.length >= 2){
            var meters = parseInt(matches[1], 10);
            return {squareFoot: undefined, squareMeters: meters};
          }
        }
      } 
    };

    return obj;
  };


})(this);
