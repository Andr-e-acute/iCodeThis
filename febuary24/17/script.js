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
const prevButt = document.querySelector("#prev");
const nextButt = document.querySelector("#next");

let currentImg = 2;
function createImg(index) {
  const img = document.createElement("img");
  img.src = profilePicUrl[index];
  img.addEventListener("click", () => {
    currentImg = index;
    createImgSet();
  });
  return img;
}
function createImgSet() {
  profileImages.innerHTML = "";
  // condition when current Img is first img/hide return Butt
  const activeImg = createImg(currentImg);
  activeImg.classList.add("active");

  if (currentImg < 1) {
    prevButt.disabled = true;
    nextButt.disabled = false;
    // still can be clicked.
    profileImages.appendChild(activeImg);
    profileImages.appendChild(createImg(currentImg + 1));
    profileImages.appendChild(createImg(currentImg + 2));
    // hide butt prev
  } else if (currentImg >= profilePicUrl.length - 1) {
    prevButt.disabled = false;
    nextButt.disabled = true;
    profileImages.appendChild(createImg(currentImg - 2));
    profileImages.appendChild(createImg(currentImg - 1));
    profileImages.appendChild(activeImg);
    // hide butt next
  } else {
    prevButt.disabled = false;
    nextButt.disabled = false;
    profileImages.appendChild(createImg(currentImg - 1));
    profileImages.appendChild(activeImg);
    profileImages.appendChild(createImg(currentImg + 1));
  }

  //   condition when current is last /hide next Butt
}

prevButt.addEventListener("click", () => {
  currentImg--;
  createImgSet();
});
nextButt.addEventListener("click", () => {
  currentImg++;
  createImgSet();
});
createImgSet();

let images;
