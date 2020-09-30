const videoElem = document.getElementById('video');
const button = document.getElementById('button');

//prompt to select media stream , pass to vdo elem ,then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElem.srcObject = mediaStream;
        videoElem.onloadedmetadata = () => {
            videoElem.play();
        }
    }catch (error) {
        //catch error
        console.log('oops! fail',error);
    }
}

button.addEventListener('click', async () => {
    //disable button
    button.disabled = true;
    //start pictureinpicture
    await videoElem.requestPictureInPicture();
    //reset button
    button.disabled = false;
});

//on load
selectMediaStream();