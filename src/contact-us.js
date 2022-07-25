import Photo from './contact-us.jpg';

export default function() {
    const content = document.getElementById("content");

    const header = document.createElement('h1');
    header.innerText = 'Contact Us';
    content.appendChild(header);

    const homeImg = new Image();
    homeImg.src = Photo;
    content.appendChild(homeImg);

    const paragraph = document.createElement('p');
    paragraph.innerText = 'At urna condimentum mattis pellentesque id nibh. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Vestibulum morbi blandit cursus risus at. Porttitor lacus luctus accumsan tortor. Rutrum quisque non tellus orci. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Quisque sagittis purus sit amet volutpat consequat mauris. Massa sapien faucibus et molestie. Tristique senectus et netus et malesuada fames ac turpis egestas. Feugiat pretium nibh ipsum consequat nisl vel.';
    content.appendChild(paragraph);

}