let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");
let video = document.querySelector("#video");

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true}).then((stream) => {
        video.srcObject = stream;
        video.play();
    });
}
function drawImageActualSize() {
    canvas.width = this.naturalWidth;
    canvas.height = this.naturalHeight;
    ctx.drawImage(video, 0, 0);
}

document.getElementById("snap").addEventListener("click", () => {
    document.getElementById("video").style.display = 'none';
    document.getElementById("snap").style.display = 'none';
    context.drawImage(video, 0, 0, this.width, this.height);
}
)