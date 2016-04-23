(function(root){

  root.com = root.com || {};
  com.ee  = com.ee || {};
  com.ee.MyHomeListEntry = function(doc, node){

    this.getAsking = function(){

      var n = node.querySelector('.price');

      if(n){
        var string = n.textContent.trim().replace(/[,|€|\.]/g, '');
        var asking = parseInt(string, 10);
        if(!isNaN(asking)){
          return asking;
        }
      }
    };

    this.getSizes = function(){
      var n = node.querySelector('.descriptionTitle > .floatLeft');

      if(n){
        var cleaned= n.textContent.replace(/,/, '');
        var match = cleaned.match(/.*?([\d|\.]+)\sm².*/);

        if(match && match.length == 2){
          var meterString = match[1];
          var meters = parseFloat(meterString, 10);
          return {squareMeters: meters};
        }
      }
    };

    this.setPricePerArea = function(ppa){

      var n = node.querySelector('.price');
      
      if(n){
        var span = doc.createElement('span');
        span.innerHTML = '&nbsp;(m²: €' + ppa.perSqM + ', ft²: €' + ppa.perSqFt + ')';
        n.appendChild(span);
      }
    };


  };
})(this);