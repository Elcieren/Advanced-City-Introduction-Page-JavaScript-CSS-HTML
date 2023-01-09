window.onload = function() {
    var startTime = new Date().getTime();
  
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function(event) {
        
        var endTime = new Date().getTime();
        
        var spentTime = (endTime - startTime) / 1000;
        
        alert("Bu sayfada " + spentTime + " saniye kaldınız.");
      });
    }
  };
  