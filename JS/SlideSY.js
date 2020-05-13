var i = 0; // Start point
var images = [];
var time = 4000;

// Image List

images[0] = 'sy/sy1.jpg';
images[1] = 'sy/sy2.jpg';
images[2] = 'sy/sy3.jpg';


// Change Image
function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;
