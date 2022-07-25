import Photo from './menu.jpg';

export default function() {
    const content = document.getElementById("content");

    const header = document.createElement('h1');
    header.innerText = 'Menu';
    content.appendChild(header);

    const homeImg = new Image();
    homeImg.src = Photo;
    content.appendChild(homeImg);

    const paragraph = document.createElement('p');
    paragraph.innerText = 'Proin fermentum leo vel orci porta non pulvinar neque. Eget duis at tellus at. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Fermentum dui faucibus in ornare. Turpis nunc eget lorem dolor sed viverra. Id semper risus in hendrerit. Sed turpis tincidunt id aliquet risus feugiat in. Faucibus interdum posuere lorem ipsum dolor sit amet. Dictumst quisque sagittis purus sit amet volutpat. Interdum velit laoreet id donec. Vitae sapien pellentesque habitant morbi. Dignissim enim sit amet venenatis. Sed velit dignissim sodales ut eu. A diam maecenas sed enim ut sem viverra aliquet. Porta non pulvinar neque laoreet suspendisse interdum.';
    content.appendChild(paragraph);

}