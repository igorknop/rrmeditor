var srcElement = null;
var rrm = {
  bg: 0,
  bgColors: ["blue", "green", "yellow", "red", "black"],
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
  document.querySelector("section>div:last-child").addEventListener("click", toggleBG, false);
  document.querySelector("section>div:nth-child(10)").addEventListener("click", toggleBG, false);
  document.querySelector("section>div:nth-child(11)").addEventListener("click", toggleBG, false);

  var instruments = document.querySelectorAll("section > div");
  instruments[0].addEventListener("dragover", function(e){
    e.preventDefault();
  });
  instruments[0].addEventListener("drop", function(e){
    e.preventDefault();
    e.stopPropagation();
    var file = e.dataTransfer.files[0];
    if(file.type.match('image.')){
      var reader = new FileReader();
      reader.onload = (function(fileName){
        var dataURI = fileName.target.result;
        instruments[0].style.backgroundImage = "url("+dataURI+")";
      });
      reader.readAsDataURL(file);
    }
  }, true);
  for (var i = 1; i < 9; i++) {
    instruments[i].addEventListener("click", (function(x) {
      return function(e) {
        e.stopPropagation();
        rrm.toggle(x);
        this.classList.remove("bounceIn");
        this.offsetWidth;
        this.classList.add("bounceIn");
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

function toggleBG() {
  rrm.bg += (rrm.bg < 4) ? 1 : -4;
  document.querySelector("section>div:last-child").style.backgroundColor = rrm.bgColors[rrm.bg];
}
