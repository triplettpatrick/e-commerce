document.querySelectorAll(".product-section img").forEach(image => {
    image.onclick = () => {
        document.querySelector(".modal-image").style.display = "block";
        document.querySelector(".modal-image img").src = image.getAttribute("src")
    }
});

document.querySelector(".modal-image span").onclick = () => {
    document.querySelector(".modal-image").style.display = "none";
}

document.querySelectorAll(".product-angle-container img").forEach(image => {
    image.onclick = () => {
        document.querySelector(".modal-image-1").style.display = "block";
        document.querySelector(".modal-image-1 img").src = image.getAttribute("src")
    }
});



document.querySelector(".modal-image-1 span").onclick = () => {
    document.querySelector(".modal-image-1").style.display = "none";
}