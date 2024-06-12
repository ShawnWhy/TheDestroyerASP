
// var planetHealth = 100;
// var creatureHealth = 100;
var beaminterval;
var shootmissleInterval;
var movemissleInterval;
var createPlaneInterval;
//create stargeate
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

//setup the globe
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

//monster shoot lazers and trigger multiple small explosions
function firebeams() {
    console.log("firebeams2");
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


//create the battle scene with the monster
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
                console.log("firebeams1")
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

//small explosions
function explosion() {
    console.log("explosion")
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


function shootMissile(){
     var ships = $(".plane");
     if(ships.length<1){
         return;
     }
     else{
 
    $(ships).each((index, element) => {
        setTimeout(() => {
           var missile = $("<div>");
           missile.addClass("missile");
           missile.css("top", ships.position().top);
           missile.css("left", ships.position().left);
        missile.css('top', $(element).position().top);
        missile.css('left', $(element).position().left);
        $(".battlePage").append(missile);


        }, (index+1)*200);
        
    });
}
}
function moveMissile(){
    var missiles = $('.missile');
    missiles.each((index, element) => {
//move the missle leftwards by 10px if it halfway to the center of window, explode
        setTimeout(() => {
            $(element).css('left', $(element).position().left-10);

        }, (index+1)*200);
       if ($(element).position().left < window.innerWidth / 2) {
        planeExplode($(element));
        monsterShake();
        addReduceHealthMonster();
                      // $(element).remove();
       }
    });
}
shootmissleInterval = setInterval(() => {
    shootMissile();
}, 3000);
movemissleInterval = setInterval(() => {
    moveMissile()
}, 100);
createPlaneInterval = setInterval(() => {
  createShip();
}, 5000);
if ($(".battlePage").length>0) {
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
    var monsterHeight = monster.position().top
    //randomize the plane's position
    var planeY = Math.random()*100;
    plane.css("top", monsterHeight+planeY+"px");
    plane.css("left", "80%");

    $(".battlePage").append(plane);
}


function planeExplode(plane){
    //get the position of the plane
    var planePos = plane.position();
    var planeY = planePos.top;
    var planeX = planePos.left;
    //create explosion
    var explosion = $("<div>");
    explosion.addClass("explosionBig");
    explosion.css("top", planeY-50);
    explosion.css("left", planeX-50);
    plane.remove();
    $(".battlePage").append(explosion);
    setTimeout(() => {
        explosion.remove();
    }, 500);
    explosionBig(planePos);
}





//exploding monster
function monsterExplode(){
    var monster = $(".monsterDisplay");
    var monsterPos = monster.position();
    var monsterX = monsterPos.left;
    var monsterY = monsterPos.top;
    var explosion = $("<div>");
    explosion.addClass("explosionBig");
    explosion.css("top", monsterY+monster.height()/2)
    explosion.css("left", monsterX+monster.height()/2);
    $(".battlePage").append(explosion);
    explosionBig({top: monsterY, left: monsterX});
    clearInterval(beaminterval)
    setTimeout(() => {
        explosion.remove();
        $(".creatureContainer").remove();
        $(".explosion").remove();
    }, 500);
}

function addReduceHealth(){
    console.log("addressing health++++++planet")
    var planethealth = $(".planethealth");
    var healthVal = parseInt(planethealth.text());
    var earth = $(".globe");
    //get absolutel locatin of earth div accounting for margin 
    //
    var earthPos = $(earth).position();
    var earthX = earthPos.left;
    var earthY = earthPos.top;
    var displayText = $("<div>");
    displayText.addClass("displayText");
    displayText.css('color', 'red');
    displayText.css('position', 'absolute');
    displayText.text("-1");
    displayText.css("top", earthY + earth.height()/2);
    displayText.css("left", "50%");
    $(".battlePage").append(displayText);
      setTimeout(() => {
        displayText.remove();
      }, 1000);
    planethealth.text(healthVal-1);
    console.log("healthva;", healthVal);
    if(healthVal<=1){
        earthExplode();
    }
    if(healthVal<=0){
    $(".globe").remove();
    clearInterval(beaminterval);
    clearInterval(shootmissleInterval);
    clearInterval(movemissleInterval);
    clearInterval(createPlaneInterval);
    $(".missile").remove();
    $(".battlePage").append("<h1 class='endgame'>Earth is Destroyed in this Universe</h1>");
    
}
}

function addReduceHealthMonster() {
  var health = $(".creaturehealth");
  var healthVal = parseInt(health.text());
  var monster = $(".battlePage .monsterBody");
  //get absolutel locatin of earth div accounting for margin
  //
  var monsterPos = $(monster).position();
  var monsterX = monsterPos.left;
  var monsterY = monsterPos.top;
  var displayText = $("<div>");
  displayText.addClass("displayText");
  displayText.css("color", "red");
  displayText.css("position", "absolute");
  displayText.text("-1");

  displayText.css("top", monsterY + monster.height() / 2);
  displayText.css("left",'50%');
  $(".battlePage").append(displayText);
  setTimeout(() => {
    displayText.remove();
  }, 1000);
  health.text(healthVal - 10);
  if (healthVal <= 1) {
    monsterExplode();
  }
  if (healthVal <= 0) {
        clearInterval(shootmissleInterval);
        clearInterval(movemissleInterval);
        clearInterval(createPlaneInterval);
        $(".missile").remove()
    $(".battlePage").append("<h1 class='endgame'>Monster is Destroyed in this Universe</h1>");
  }
}


function earthExplode(){
    var earth = $(".globe");
    var earthPos = earth.position();
    var earthX = earthPos.left;
    var earthY = earthPos.top;
    var explosion = $("<div>");
    explosion.addClass("explosionBig");
    explosion.css("top", earthY);
    explosion.css("left", "50%");
    $(".battlePage").append(explosion);
    explosionBig({top: earthY, left: $("body").width()/2});
}


function explosionBig(position) {
  for (let i = 0; i < 9; i++) {
    setTimeout(() => {
      let top = Math.random() * 280 -140;
      let left = Math.random() * 280 -140;

      var explosion = $("<div>");
      explosion.addClass("explosion");
      explosion.css("top", (position.top+top) + "px");
      explosion.css("left", (position.left+left) +"px");
      $(".battlePage").append(explosion);
    }, i * 50);

  }
  setTimeout(() => {
    $(".explosion").remove();
  }, 550);
}

$('body').on("click",".plane", (e)=>{
e.stopPropagation();
e.preventDefault();

planeExplode($(e.target));
})

$("body").on("click", ".missile", (e) => {
  e.stopPropagation();
  e.preventDefault();

  planeExplode($(e.target));
});

$("body").on("click", ".missle", (e) => {
  e.stopPropagation();
  e.preventDefault();
  planeExplode($(e.target));
});
function earthDefence(){
    
}



function monsterShake(){
    var monstereyes = $(".eye:nth-child(even) .iris");
    var monstereyes2 = $(".eye:nth-child(even) .iris");
    var monsterMouth = $(".monsterMouth");
    monstereyes.addClass("irisShake1");
    monstereyes2.addClass("irisShake2");
    monsterMouth.addClass("monsterMouthShake");
    setTimeout(() => {
        monstereyes.removeClass("irisShake1");
        monstereyes2.removeClass("irisShake2");
        monsterMouth.removeClass("monsterMouthShake");
    }, 500);
}

// function undateMonsterDeathAjax(){
//     $.ajax({
//         url: "/Monster/UpdateMonsterDeath",
//         type: "POST",
//         success: function (data) {
//             console.log(data);
//         },
//         error: function (error) {
//             console.log(error);
//         }
//     });
// }