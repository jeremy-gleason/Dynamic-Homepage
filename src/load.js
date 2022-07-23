import Photo from './food.jpg';

export default function() {
    const content = document.getElementById("content");

    let header = document.createElement('h1');
    header.innerText = 'The Great Restaurant';
    content.appendChild(header);

    const homeImg = new Image();
    homeImg.src = Photo;
    content.appendChild(homeImg);
}