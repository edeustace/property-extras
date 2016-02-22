(function(root) {

  root.com = root.com || {};
  root.com.ee = root.com.ee || {};

  root.com.ee.ExtrasDaft = function ExtrasDaft(doc) {

    var obj = Object.create(new com.ee.ExtrasCommon());

    obj.getAsking = function() {

      var el = document.querySelector('#smi-price-string');

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
      var node = doc.querySelector('#smi-price-string');
      var extras = '(m²: €' + ppa.perSqM + ', ft²: €' + ppa.perSqFt + ')';
      var newContent = node.textContent + ' ' + extras;
      node.textContent = newContent;
    };

    obj.getSizes = function() {

      var xpath = '//strong[contains(text(), "Overall Floor Area:")]';
      var root = doc.evaluate(xpath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

      if(root && root.singleNodeValue && root.singleNodeValue.nextSibling){
        var text = root.singleNodeValue.nextSibling.textContent.trim();
        var regex = /^([0-9\.]*?)\sSq. Metres.*/;
        var matches = text.match(regex);
        if(matches && matches.length >= 2){
          var meters = parseInt(matches[1], 10);
          return {squareFoot: undefined, squareMeters: meters};
        }
      }
    };
    return obj;
  };

})(this);
