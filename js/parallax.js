
var body = document.body;
var navette = document.querySelector('.navette');
var astronaute = document.querySelector('.astronaute');
var job = document.querySelector('.job');

document.addEventListener('scroll', Parallax, {passive:true});

function anime(){

    var st = body.scrollTop;
    var jt = job.offsetTop;
    var dh = window.innerHeight;

    var v = st > jt ? st < jt+dh ? st-jt : dh : 0;
    var deg = (v/dh)*20;

    body.style.backgroundPosition = 'left 0px top ' + st/2 + 'px';
    navette.style.top = Math.round(st/1.5-50) + 'px';
    astronaute.style.top = (deg/1.5 + 35) + '%';
    astronaute.style.transform = 'rotateZ(-' + deg + 'deg)';

}

function Parallax(e){
    requestAnimationFrame(anime);
}
