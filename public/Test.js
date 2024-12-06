var sel = document.getElementById("select_id");
sel.addEventListener(
  "click",
  function (el) {
    var options = this.children;
    for (var i = 0; i < this.childElementCount; i++) {
      options[i].style.color = "white";
    }
    var selected = this.children[this.selectedIndex];
    selected.style.color = "red";
  },
  false
);
