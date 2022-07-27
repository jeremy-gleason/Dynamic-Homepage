import Photo from './food.jpg';

export default function() {
    const content = document.getElementById("content");

    const header = document.createElement('h1');
    header.innerText = 'The Great Restaurant';
    content.appendChild(header);

    const homeImg = new Image();
    homeImg.src = Photo;
    content.appendChild(homeImg);

    const paragraph = document.createElement('p');
    paragraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis volutpat est velit egestas. Aenean vel elit scelerisque mauris pellentesque pulvinar. Dolor magna eget est lorem ipsum dolor. Nulla aliquet enim tortor at auctor urna. Quisque id diam vel quam elementum pulvinar etiam. Diam maecenas sed enim ut sem. Sed velit dignissim sodales ut eu. A diam maecenas sed enim ut sem viverra aliquet. Porta non pulvinar neque laoreet suspendisse interdum.';
    content.appendChild(paragraph);

    const credit = document.createElement('cite');
    credit.innerText = 'Photo by Ella Olsson on Unsplash';
    content.appendChild(credit);

}