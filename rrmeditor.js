var srcElement = null;
var rrm = {
  bg: 0,
  bgColors: ["blue","green","yellow", "red", "grey"],
  in:[
    [0,0],
    [0,0],
    [0,0],
    [0,0]
  ],
  inColors:[
    ["","MicCla.png","MicEsc.png"],
    ["","GuitaCla.png","GuitaEsc.png"],
    ["","BassCla.png","BassEsc.png"],
    ["","DrumCla.png","DrumEsc.png"]
  ]
}
document.addEventListener("DOMContentLoaded", function() {
  var card = document.querySelector("section");
  card.addEventListener("click", function(){
    rrm.bg += (rrm.bg<3)?1:-3;
    card.style.backgroundColor = rrm.bgColors[rrm.bg];
  }, false);

  var instruments = document.querySelectorAll("section > div");
  console.log(instruments);
  for(var i =1; i<9; i++){
    instruments[i].addEventListener("click", (function(x) {
      return function(e){
        e.stopPropagation();
        toggle(x);
        var line = Math.floor((x-1)/2);
        var col = rrm.in[line][(x-1)%2];
        this.style.backgroundImage = "url(images/"+rrm.inColors[line][col]+")";
      };
    })(i), false);
  }
});

function toggle(x){
  var row = Math.floor((x-1)/2);
  var col = (x-1)%2;
  console.log(row, col, rrm.in);
  rrm.in[row][col]+=(rrm.in[row][col]<2)?1:-2;
}
