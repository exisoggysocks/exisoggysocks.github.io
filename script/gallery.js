var imageThumbs = document.getElementById("image-thumbs");
var currentImage = document.getElementById("current-image");

for (var i = 1; i <= 3; i++) {
  var thumb = document.createElement("img");
  thumb.src = "images/image" + i + ".png";
  thumb.alt = "Image " + i;
  thumb.classList.add("thumb");
  imageThumbs.appendChild(thumb);
  thumb.addEventListener(
    "click", function() {
      currentImage.src = this.src;
    }
  );
}