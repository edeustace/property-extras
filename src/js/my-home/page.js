(function(root){

  root.com = root.com || {};
  com.ee  = com.ee || {};
  com.ee.MyHomePage = function(doc, node){
    
    this.getAsking = function() {

      var el = node.querySelector('.brochurePrice');

      if(el){
        var trimmed = el.textContent.trim();

        if(trimmed === 'Sale Agreed'){
          var xpath = '//script[contains(@src,"kvminprice")]';
          var root = doc.evaluate(xpath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
          if(root && root.singleNodeValue){
            console.log(root.singleNodeValue);
            var src = root.singleNodeValue.getAttribute('src');
            var matches = src.match(/^.*?kvminprice=(\d*)[\.|;].*/);
            if(matches && matches.length === 2){
              var kvmPrice = matches[1];
              el.textContent = el.textContent + '(asking:' + kvmPrice + ')';
              return kvmPrice;
            }
          }
        } else {
          var numbersOnly = trimmed.replace('€', '').replace(/,/g, '').replace(/\./g, '');
          try {
            return parseInt(numbersOnly, 10);
          } catch (e){
            console.error('failed to parse: ', numbersOnly, 'as an int');
          }
        }
      }
    };

    this.setPricePerArea = function(ppa){
      var existing = node.querySelector('.brochurePrice').textContent; 
      var extra = '(m²: €' + ppa.perSqM + ', ft²: €' + ppa.perSqFt + ')';
      node.querySelector('.brochurePrice').innerHTML = existing + ' ' + extra;
    };

    this.getSizes = function() {
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
  };
})(this);