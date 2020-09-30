const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImage = 0;
let photoArray = [];
let proxyUrl = `https://nameless-stream-30379.herokuapp.com/`
let isInitailLoad = true;

// unsplash api
let initialCount = 5;
const apiKey = 'FCCcMaa113N9UHx7aAlpHo-aFRor0N9G-yqe9UBqcAo';
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${initialCount}`;


//update pic when it reach initail count
function updatePhoto(Photocount) {
    apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${Photocount}`;
}
//check if all image were loaded
function imageLoaded() {
    
    imagesLoaded++;
    console.log('imagesLoaded', imagesLoaded);
    if (imagesLoaded === totalImage) {
        ready = true;
        loader.hidden = true;
       
        
    }

}
//helper function to set attributes on DOM elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    

}


//create element for link & photo ,add to DOM
function displayPhotos() {
    imagesLoaded = 0;
    totalImage = photoArray.length;
    
    //run function for each array in photoArray
    photoArray.forEach((photo) => {
        //create <a> to link to unsplash
        const item = document.createElement('a');
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        //create <img> for photo
        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        //eventlistener , check when each is finish loading
        img.addEventListener('load', imageLoaded);
        // put <img> inside <a>, then put both inside image-container
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// get photo from unsplash api
async function getPhotos() {
    try{
        const response = await fetch(proxyUrl + apiUrl);
        photoArray = await response.json();
        displayPhotos();
        if (isInitailLoad) {
            updatePhoto(30)
            isInitailLoad = false
        }
    
    }catch (error){
    // catch error here
    }
}

//check to see if scrolling near bottom of page, load more photos
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000
        && ready) {
        ready = false;    
        getPhotos();
    }
});

//on load
getPhotos();