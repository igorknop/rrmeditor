var srcElement = null;
var rrm = {
  bg: 0,
  bgColors: ["blue","green","yellow", "red"]
}
document.addEventListener("DOMContentLoaded", function() {
  var card = document.querySelector("section");
  card.addEventListener("click", function(){
    rrm.bg += (rrm.bg<3)?1:-3;
    card.style.backgroundColor = rrm.bgColors[rrm.bg];
  });
});
