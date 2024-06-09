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