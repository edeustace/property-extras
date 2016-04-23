(function(root){

  root.com = root.com || {};
  com.ee  = com.ee || {};
  com.ee.addExtraInfo = function(obj){

    var asking = obj.getAsking();
    var sizes = obj.getSizes();

    if (asking && sizes) {

      if(sizes.squareMeters){
        sizes.squareFoot = Math.floor(sizes.squareMeters * 10.764); 
      }

      if(sizes.squareFoot && !sizes.squareMeters){
        sizes.squareMeters = Math.floor(sizes.squareFoot / 10.764);
      }

      var prices = {
        perSqFt:  Math.floor(asking / sizes.squareFoot),
        perSqM: Math.floor(asking / sizes.squareMeters) 
      };

      obj.setPricePerArea(prices);
    }
  };
})(this);