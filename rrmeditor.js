var srcElement = null;
var rrm = {
  bg: 0,
  bgColors: ["blue", "green", "yellow", "red", "grey"],
  in: [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
  ],
  inColors: [
    ["None.png", "MicCla.png", "MicEsc.png"],
    ["None.png", "GuitaCla.png", "GuitaEsc.png"],
    ["None.png", "BassCla.png", "BassEsc.png"],
    ["None.png", "DrumCla.png", "DrumEsc.png"]
  ],
  toggle: function(x) {
    var r = Math.floor((x - 1) / 2);
    var c = (x - 1) % 2;
    rrm.in[r][c] += (rrm.in[r][c] < 2) ? 1 : -2;
    if((c == 1) && (rrm.in[r][c]>0)){
      for(var i=0;i<4;i++){
        if(i==r) continue;
        rrm.in[i][1] = 0;
      }
    }
  }
}
document.addEventListener("DOMContentLoaded", function() {
  var card = document.querySelector("section");
  card.addEventListener("click", function() {
    rrm.bg += (rrm.bg < 3) ? 1 : -3;
    card.style.backgroundColor = rrm.bgColors[rrm.bg];
  }, false);

  var instruments = document.querySelectorAll("section > div");
  for (var i = 1; i < 9; i++) {
    instruments[i].addEventListener("click", (function(x) {
      return function(e) {
        e.stopPropagation();
        rrm.toggle(x);
        updateImages();
      };
    })(i), false);
  }
});

function updateImages(){
  var instruments = document.querySelectorAll("section > div");
  for(j=1;j<9;j++){
    var r = Math.floor((j - 1) / 2);
    var c = rrm.in[r][(j - 1) % 2];
    instruments[j].style.backgroundImage = "url(images/" + rrm.inColors[r][c] + ")";
  }
}
