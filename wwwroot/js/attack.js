
var planetHealth = 100;
var creatureHealth = 100;



function createStarGate() {
    var gate = $('<div>')
    gate.addClass('gateParent');
    gate.html(
        '<div class="gatepiece"><div class="gatepiece"><div class="gatepiece"><div class="gatepiece"><div class="gatepiece"><div class="gatepiece"><div class="gatepiece"><div class="gatepiece"><div class="gatepiece"><div class="gatepiece"><div class="gatepiece"><div class="gatepiece"><div class="gatepiece"><div class="gatepiece"><div class="gatepiece"><div class="gatepiece"><div class="gatepiece"><div class="gatepiece"><div class="gatepiece"><div class="gatepiece"><div class="gatepiece"><div class="gatepiece"><div class="gatepiece"></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>'
    )
    $('.battlePage').prepend(gate);
    var gateParts = $('.gatepiece');
    for (let i = 0; i < gateParts.length; i++) {
        setTimeout(() => {
            let red = Math.random() * 250;
            let green = Math.random() * 250;
            let blue = Math.random() * 250;
            $(gateParts[gateParts.length - (i + 1)]).css('background', 'rgb(' + red + ',' + green + "," + blue)
        }, 500 + i * 30);

    }




}

function createGlobe() {

    var globe = $('<div>')
    globe.addClass('globe')

    $('.battlePage').append(globe)
    for (i = 0; i < 20; i++) {
        let height = Math.random() * 30 + 10;
        let width = Math.random() * 30 + 10
        let top = Math.random() * 90 + 10
        let left = Math.random() * 90 + 10
        let round = Math.random() * 40 + 10
        let landPiece = $('<div>')
        landPiece.addClass('landpiece')
        landPiece.css('height', height + '%');
        landPiece.css('width', width + "%");
        landPiece.css('border-radius', round + "%");
        landPiece.css('top', top + "%");
        landPiece.css('left', left + "%");
        $('.globe').append(landPiece);
    }
    for (i = 0; i < 7; i++) {
        let height = Math.random() * 30 + 10;
        let width = Math.random() * 30 + 10
        let top = Math.random() * 90 + 10
        let left = Math.random() * 90 + 10
        let round = Math.random() * 40 + 10
        let landPiece = $('<div>')
        landPiece.addClass('cloud')
        landPiece.css('height', height + '%');
        landPiece.css('width', width + "%");
        landPiece.css('border-radius', round + "%");
        landPiece.css('top', top + "%");
        landPiece.css('left', left + "%");
        $('.globe').append(landPiece);
    }


}
function createBattleScene() {
    $('.battlePage').html('');
    var creature = $('.monsterDisplay').html();
    var creatureContainer = $('<div>')
    creatureContainer.addClass('creatureContainer');
    creatureContainer.html(creature);
    createGlobe();
    createStarGate();
    setTimeout(() => {
        $('.battlePage').prepend(creatureContainer)
        setTimeout(() => {
            $('.gateParent').css('visibility', 'hidden')
            beaminterval = setInterval(() => {
                firebeams();

            }, 2000);
        }, 500);

    }, 1500);

}
function addStars() {
    for (i = 0; i < 145; i++) {
        var star = $("<div>");
        star.addClass('star');
        var XLen = Math.floor(Math.random() * 100);
        var YLen = Math.floor(Math.random() * 70)
        star.css('left', XLen + '%')
        star.css('top', YLen + '%')
        $(".battlePage").append(star);
    }

}

function explosion() {

    for (let i = 0; i < 9; i++) {
        setTimeout(() => {
            let top = Math.random() * 80 + 20
            let left = Math.random() * 80 + 20


            var explosion = $('<div>');
            explosion.addClass('explosion');
            explosion.css('top', top + "%");
            explosion.css('left', left + "%");
            $('.globe').append(explosion)

        }, i * 50);

        addReduceHealth();



    }

}
function firebeams() {
    var beam = $('<div>')
    beam.addClass('beam');

    let left = Math.random() * 80 + 10
    let red = Math.random() * 250;
    let green = Math.random() * 250;
    let blue = Math.random() * 250;
    beam.css('background', 'rgb(' + red + ',' + green + "," + blue)
    beam.css('left', left + "%");
    $('.monsterBody').append(beam);
    explosion();

}

console.log("attack")
if ($(".battlePage").length>0) {
    console.log($(".battlePage"));
    createBattleScene()
    addStars();
}


function createShip(){
    var plane = $("<div>");
    plane.addClass("plane")
    var tail = $("<div>")
    plane.append(tail);
    tail.addClass("planeTail")
    for(i=0; i<5; i++){
        let window= $("<div>")
        window.addClass("window")
        plane.prepend(window);

    }
    var fire = $("<div>")
    fire.addClass("fire")
    plane.append(fire)
    //match the plane's height to the monster's
    var monster = $(".creatureContainer");
    console.log(monster)
    var monsterHeight = monster.position().top
        console.log(monsterHeight);
    //randomize the plane's position
    var planeY = Math.random()*100;
    plane.css("top", monsterHeight+planeY+"px");
    plane.css("left", "80%");

    $(".battlePage").append(plane);
}

setTimeout(() => {
    createShip();
    // launchMissle();
    
}, 2000);
function planeExplode(plane){
    //get the position of the plane
    var planePos = plane.position();
    var planeX = planePos.X;
    var planeY = planePos.Y;
    //create explosion
    var explosion = $("<div>");
    explosion.addClass("explosion");
    explosion.css("top", planeY);
    explosion.css("left", planeX);
    $(".battlePage").append(explosion);
}

function createMissle(){
    var missle = $("<div>");
    missle.addClass("missle");
    var fire = $("<div>");
    fire.addClass("fire");
    missle.append(fire);
    $(".battlePage").append(missle);
}
//launch missle from the position of the plane to the position of the monster
function launchMissle(){
    var plane = $(".plane");
    var planePos = plane.position();
    var planeX = planePos.X;
    var planeY = planePos.Y;
    var missle = $(".missle");
    missle.css("top", planeY);
    missle.css("left", planeX);
    var monster = $(".monsterDisplay");
    var monsterPos = monster.position();
    var monsterX = monsterPos.X;
    var monsterY = monsterPos.Y;
    var distance = Math.sqrt(Math.pow(monsterX-planeX,2)+Math.pow(monsterY-planeY,2));
    var time = distance/10;
    missle.animate({top: monsterY, left: monsterX}, time, "linear", ()=>{
        missle.remove();
        monsterExplode();
    })
}
function monsterExplode(){
    var monster = $(".monsterDisplay");
    var monsterPos = monster.position();
    var monsterX = monsterPos.left;
    var monsterY = monsterPos.top;
    var explosion = $("<div>");
    explosion.addClass("explosion");
    explosion.css("top", monsterY);
    explosion.css("left", monsterX);
    $(".battlePage").append(explosion);
}

function addSmallExplosion(item){
    var explosion = $("<div>");
    explosion.addClass("explosion");
    //add random size to the explosion
    var size = Math.random()*100+50;
    //add a tandom explosion class with a random number at the end
    var rand = Math.floor(Math.random()*4);
    explosion.addClass("explosion"+rand);

    explosion.css("width", size+"px");
    explosion.css("height", size+"px");
    explosion.css("top", (Math.random()*200-100)+"px"+item.position().top);
    explosion.css("left", (Math.random()*200-100)+"px"+item.position().left);
    $(".battlePage").append(explosion);
}

function addReduceHealth(){
    var health = $(".planethealth");
    var healthVal = parseInt(health.text());
    var earth = $(".globe");
    //get absolutel locatin of earth div accounting for margin 
    //
    var earthPos = earth.position();
    var earthX = earthPos.x;
    var earthY = earthPos.y;
    var displayText = $("<div>");
    displayText.addClass("displayText");
    displayText.css('color', 'red');
    displayText.css('position', 'absolute');
    displayText.text("-1");
  
    displayText.css("top", earthY+earth.height()/2);
    displayText.css("left", "50%");
    $(".battlePage").append(displayText);
      setTimeout(() => {
        displayText.remove();
      }, 1000);
    health.text(healthVal-1);
    if(healthVal<=1){
        earthExplode();
    }
    if(healthVal<=0){
        $(".battlePage").html("<h1>Game Over</h1>")
    
}
}


function earthExplode(){
    var earth = $(".globe");
    console.log(earth)
    var earthPos = $(earth).position();
    console.log(earthPos)
    var earthX = earthPos.left;
    var earthY = earthPos.top;
    var explosion = $("<div>");
    explosion.addClass("explosion");
    explosion.css("top", earthY);
    explosion.css("left", earthX);
    $(".battlePage").append(explosion);
}


$(window).on("click",".plane", (e)=>{
e.stopPropagation();
e.preventDefault();
planeExplode($(e.target));
})

$(window).on("click", ".missle", (e) => {
  e.stopPropagation();
  e.preventDefault();
  planeExplode($(e.target));
});
function earthDefence(){
    
}