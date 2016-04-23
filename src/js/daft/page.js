(function(root) {

  root.com = root.com || {};
  root.com.ee = root.com.ee || {};

  root.com.ee.DaftPage = function DaftPage(doc, node) {

    this.getAsking = function() {

      var el = node.querySelector('#smi-price-string');

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

    this.setPricePerArea = function(ppa){
      var n = node.querySelector('#smi-price-string');
      var extras = '(m²: €' + ppa.perSqM + ', ft²: €' + ppa.perSqFt + ')';
      var newContent = n.textContent + ' ' + extras;
      n.textContent = newContent;
    };

    this.getSizes = function() {

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
  };

})(this);
