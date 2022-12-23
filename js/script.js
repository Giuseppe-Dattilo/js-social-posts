console.log('JS OK');

/* 
# Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore (potrebbe mancare a qualcuno),
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
# ****BONUS**
 1. Formattare le date in formato italiano (gg/mm/aaaa)
 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola  => LF).
 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
*/ 

// Prendo gli elementi dal Dom
const targetElement = document.getElementById('container');
const targetButtons = document.querySelectorAll('.like,button');



// Creo un array di oggettiß
const posts =[
     {  id: 1,
        userName: 'Giovanni Rossi',
        userPic:'https://picsum.photos/300/300?random=1',
        data: '09-09-2015',
        userText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        img:'https://picsum.photos/300/300?random=1',
        likes:'1328'
    },
    {   id: 2,
        userName: 'Andrea Chiari',
        userPic:'https://picsum.photos/300/300?random=1',
        data: '05-29-2005',
        userText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        img:'https://picsum.photos/300/300?random=1',
        likes:'2433'
    },
    {   id: 3,
        userName: 'Giulia Verdi',
        userPic:'https://picsum.photos/300/300?random=1',
        data: '03-03-2020',
        userText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        img:'https://picsum.photos/300/300?random=1',
        likes:'345'
    },
    {   id: 4,
        userName: 'Daniela Bianchi',
        userPic:'https://picsum.photos/300/300?random=1',
        data: '24-05-2021',
        userText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        img:'https://picsum.photos/300/300?random=1',
        likes:'398'
    },
]

// Funzioni
const printFeed = array => array.reduce((acc, {userName, userPic, data, userText, img, likes}) => acc + 

`<div class="post">
<div class="post__header">
  <div class="post-meta">
    <div class="post-meta__icon">
      <img class="profile-pic" src="${userPic}" alt="${userName}"/></div>
    <div class="post-meta__data">
      <div class="post-meta__author">${userName}</div>
      <div class="post-meta__time">${data}</div>
    </div>
  </div>
</div>
<div class="post__text">${userText}</div>
<div class="post__image">
  <img src="${img}" alt="${img}"/></div>
<div class="post__footer">
  <div class="likes js-likes">
    <div class="likes__cta">
      <button class="like-button js-like-button" href="#" data-postid="1">
        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
        <span class="like-button__label">Mi Piace</span>
      </button>
    </div>
    <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone</div>
  </div>
</div>
</div>
`
, 0);

targetElement.innerHTML = printFeed(posts);




let isClicked = false;
 
// Eventi dinamici

