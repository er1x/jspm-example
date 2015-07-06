import Memes from 'js/memes';

function renderMemes (memes) {
  console.log(memes);
  let urls = memes
            .filter(obj => obj.data.post_hint === 'image')
            .filter(obj => !obj.data.over_18)
            .map(obj => obj.data.url);
  urls.forEach(url => {
    let element = document.createElement('img');
    element.setAttribute('src', url);
    document.body.appendChild(element);
  });
}

let memes = new Memes();
memes.list()
     .then(renderMemes);
