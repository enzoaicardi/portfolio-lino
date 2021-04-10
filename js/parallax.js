
var body = document.body;
var navette = document.querySelector('.navette');
var astronaute = document.querySelector('.astronaute');
var job = document.querySelector('.job');
var pid = 0;

document.addEventListener('scroll', Parallax, {passive:true});

function anime(){

    pid++;
    var st = body.scrollTop;
    var jt = job.offsetTop;
    var dh = window.innerHeight;

    var v = st > jt ? st < jt+dh ? st-jt : dh : 0;
    var deg = (v/dh)*20;

    if(pid >= 3){

        pid = 0;
        // body.style.backgroundPosition = 'left 0px top ' + st/2 + 'px';
        navette.style.transform = 'translateY(' + st/1.5 + 'px)';
        astronaute.style.transform = 'translateY(' + deg*10 + 'px) rotateZ(-' + deg + 'deg)'; 

    }
}

function Parallax(e){
    requestAnimationFrame(anime);
}
