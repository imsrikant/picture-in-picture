const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to Select medio stream, pass to video elemet, than play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
  }
}

button.addEventListener("click", async () => {
  // Disable Button
  button.Disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.Disabled = false;
});

// On load
selectMediaStream();
