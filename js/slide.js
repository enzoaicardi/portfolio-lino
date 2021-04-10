
var logos = [
    'autre_par',
    'atelier_floriane',
    'luxpo',
    'manon_paulet',
    'meet'
]

var logo_id = 0;

var slide = document.querySelector('.logo');

var btn = slide.querySelectorAll('div > svg');
var prev = btn[0], next = btn[1];
var img = slide.querySelector('img');

prev.addEventListener('click', function(){changeLogo('prev');}, {passive:true});
next.addEventListener('click', function(){changeLogo();}, {passive:true});

function changeLogo(type){
    if(type === 'prev'){ logo_id--; }
    else{ logo_id++; }
    logo_id = logo_id > logos.length-1 ? 0 : logo_id < 0 ? logos.length-1 : logo_id;

    img.src = 'img/logos/'+logos[logo_id]+'.png';
}
