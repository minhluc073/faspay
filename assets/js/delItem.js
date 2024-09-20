var delItem = document.querySelectorAll(".del-item");

delItem.forEach(function(e) {
  e.addEventListener("click", function() {
    var listItem = this.closest(".share-item");
    listItem.remove();
  });
});