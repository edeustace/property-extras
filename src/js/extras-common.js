(function(root) {

  root.com = root.com || {};
  root.com.ee = root.com.ee || {};

  function ExtrasCommon() {

    this.run = function() {

      var asking = this.getAsking();
      var sizes = this.getSizes();

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

        this.setPricePerArea(prices);

        console.log('asking: ', asking, 'sizes:', sizes, 'prices', prices);
      }
    };
  }

  root.com.ee.ExtrasCommon = ExtrasCommon;

})(this);
