function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgTextG = document.getElementById("imgtextG");
    expandImg.src = imgs.src;
    imgTextG.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";

}