const profileImages = document.querySelector(".profile-images");
const profilePicUrl = [
  "https://source.unsplash.com/3ujVzg9i2EI",
  "https://source.unsplash.com/8A7fD6Y5VF8",
  "https://source.unsplash.com/n2WT4H30L9k",
  "https://source.unsplash.com/KBv5dEN3QtY",
  "https://source.unsplash.com/3TLl_97HNJo",
  "https://source.unsplash.com/a19OVaa2rzA",
  "https://source.unsplash.com/KBv5dEN3QtY",
];

let currentImg = 6;
function createImg(index) {
  const img = document.createElement("img");
  img.src = profilePicUrl[index];
  return img;
}
function createImgSet() {
  // condition when current Img is first img/hide return Butt
  const activeImg = createImg(currentImg);
  activeImg.classList.add("active");

  if (currentImg < 1) {
    profileImages.appendChild(activeImg);
    profileImages.appendChild(createImg(currentImg + 1));
    profileImages.appendChild(createImg(currentImg + 2));
  } else if (currentImg >= profilePicUrl.length - 1) {
    profileImages.appendChild(createImg(currentImg - 2));
    profileImages.appendChild(createImg(currentImg - 1));
    profileImages.appendChild(activeImg);
  } else {
    profileImages.appendChild(createImg(currentImg - 1));
    profileImages.appendChild(activeImg);
    profileImages.appendChild(createImg(currentImg + 1));
  }

  //   condition when current is last /hide next Butt
}

createImgSet();
