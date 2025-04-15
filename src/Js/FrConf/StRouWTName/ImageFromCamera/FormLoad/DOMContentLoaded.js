import { StartFunc as StartFuncFromCamera } from "./camera.js";

const StartFunc = () => {
    document.addEventListener("DOMContentLoaded", () => {
        StartFuncFromCamera();

        document.getElementById("captureButton").addEventListener("click", captureImage);
    });
};

function captureImage() {
    let video = document.getElementById("video");
    let canvas = document.getElementById("canvas");
    let capturedImagesContainer = document.getElementById("capturedImagesContainer");

    let context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    let imageDataURL = canvas.toDataURL("image/png");
    let newImage = document.createElement("img");
    newImage.setAttribute("id", "CapturedImageId");

    newImage.src = imageDataURL;
    newImage.alt = "Captured Image";
    newImage.style.display = "block";

    capturedImagesContainer.appendChild(newImage);
};


export { StartFunc };

