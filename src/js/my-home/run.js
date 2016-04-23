(function(){
  document.addEventListener('DOMContentLoaded', function() {

    var nodes = document.querySelectorAll('li#resultItem');
    if(nodes.length > 0){
      for (var i = nodes.length - 1; i >= 0; i--) {
        var n = nodes[i];
        var entry = new com.ee.MyHomeListEntry(document, n);
        com.ee.addExtraInfo(entry);
      }
    } else {
      var page = new com.ee.MyHomePage(document, document);
      com.ee.addExtraInfo(page);
    }
  });
}());