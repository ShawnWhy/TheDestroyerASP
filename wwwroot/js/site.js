// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
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

var beaminterval;


function wave() {
    var tentacleParts = $(".tentacleRoot .tentaclePart");
    for (let i = 0; i < tentacleParts.length; i++) {
        setTimeout(() => {
            // console.log(i);
            $(tentacleParts[i]).css('transform', "translate(-10%, -30%")

        }, i * 35);
    }

}



function wave2() {
    var tentacleParts = $(".tentacleRoot .tentaclePart");
    for (let i = 0; i < tentacleParts.length; i++) {
        setTimeout(() => {
            // console.log(i);
            $(tentacleParts[i]).css('transform', "translate(30%, 0%")

        }, i * 35);
    }

}

function wave3() {
    var tentacleParts = $(".tentacleRoot2 .tentaclePart");
    for (let i = 0; i < tentacleParts.length; i++) {
        setTimeout(() => {
            // console.log(i);
            $(tentacleParts[i]).css('transform', "translate(10%, -30%")

        }, i * 35);
    }

}

function wave4() {
    var tentacleParts = $(".tentacleRoot2 .tentaclePart");
    for (let i = 0; i < tentacleParts.length; i++) {
        setTimeout(() => {
            // console.log(i);
            $(tentacleParts[i]).css('transform', "translate(-30%, 0%")

        }, i * 35);
    }

}

setInterval(() => {
    wave();
    wave3()
    setTimeout(() => {
        wave2()
        wave4()

    }, 200);

}, 600);

var trottle = "on";

// $('.outerRed').change(console.log('outerred'))

$('.outerRed, .outerGreen, .outerBlue, .innerRed, .innerGreen, .innerBlue')
    .change(e => {
        console.log('change');
        e.preventDefault();
        e.stopPropagation();
        if (trottle == "on") {
            let outerRed = parseInt($('.outerRed').val());
            let outerGreen = parseInt($('.outerGreen').val());
            let outerBlue = parseInt($('.outerBlue').val());
            let innerRed = parseInt($('.innerRed').val());
            let innerGreen = parseInt($('.innerGreen').val());
            let innerBlue = parseInt($('.innerBlue').val());
            $('.monsterBody, .tentacleRoot, .tentaclePart, .tentacleRoot2').css('background-image', 'radial-gradient(rgb(' + innerRed + ',' + innerGreen + ',' + innerBlue + ')30% , rgb(' + outerRed + ',' + outerGreen + ',' + outerBlue + ')');

            trottle = 'off';
            setTimeout(() => {
                trottle = 'on'

            }, 500);
        }
    })

$('.width, .height').change(e => {
    e.preventDefault();
    e.stopPropagation();
    if (trottle == "on") {
        let width = parseInt($('.width').val());
        let height = parseInt($('.height').val());
        $('.monsterBody').css('height', height + '%');
        $('.monsterBody').css('width', width + '%');


        trottle = 'off';
        setTimeout(() => {
            trottle = 'on'

        }, 500);

    }

})

$('.topRoundness, .bottomRoundness').change(e => {
    e.preventDefault();
    e.stopPropagation();
    if (trottle == "on") {
        let topRD = parseInt($('.topRoundness').val());
        let bottomRD = parseInt($('.bottomRoundness').val());
        $('.monsterBody').css('border-radius', topRD + '% ' + topRD + '% ' + bottomRD + '%' + bottomRD + '%');
        if (bottomRD > 40) {
            var tentRoot1 = $('.tentacleRoot');
            var tentRoot2 = $('.tentacleRoot2')
            $(tentRoot1[0]).css('transform', 'translateY(-60%)')
            $(tentRoot2[1]).css('transform', 'translateY(-60%)')
        }
        else if (bottomRD > 30) {
            var tentRoot1 = $('.tentacleRoot');
            var tentRoot2 = $('.tentacleRoot2')
            $(tentRoot1[0]).css('transform', 'translateY(-30%)')
            $(tentRoot2[1]).css('transform', 'translateY(-30%)')
        }
        else {
            $('.tentacleRoot').css('transform', 'translateY(0)')
            $('.tentacleRoot2').css('transform', 'translateY(0)')

        }



        trottle = 'off';
        setTimeout(() => {
            trottle = 'on'

        }, 500);

    }

})

function InitialSetUpMonster() {
    console.log("settingupMonster")
    let eyeNumber = parseInt($('.eyeNumber').val());
    if (eyeNumber) {
        $('.monsterEyerow').html('')
        for (i = 0; i < eyeNumber; i++) {
            var eye = $('<div class="eye"><div class="iris"></div></div>')
            $('.monsterEyerow').append(eye);
        }
    }
    let name = $('.nameInput').val();
    if (name.length > 0) {
        $('.attackButton').removeClass('invisibleP')
        $('.monsterNameDisplay').html('')
        var nameletters = name.split('');
        for (let i = 0; i < nameletters.length; i++) {
            setTimeout(() => {
                var letter = $('<div class="nameLetter">' + nameletters[i] + '<div>');
                $('.monsterNameDisplay').append(letter)




            }, i * 50);
        }
    }

    let width = parseInt($('.width').val());
    let height = parseInt($('.height').val());
    $('.monsterBody').css('height', height + '%');
    $('.monsterBody').css('width', width + '%');
    let eyeHeight = parseInt($('.eyeHeight').val());
    $('.monsterEyerow').css('top', eyeHeight + '%')
    let topRD = parseInt($('.topRoundness').val());
    let bottomRD = parseInt($('.bottomRoundness').val());
    $('.monsterBody').css('border-radius', topRD + '% ' + topRD + '% ' + bottomRD + '%' + bottomRD + '%');
    if (bottomRD > 40) {
        var tentRoot1 = $('.tentacleRoot');
        var tentRoot2 = $('.tentacleRoot2')
        $(tentRoot1[0]).css('transform', 'translateY(-60%)')
        $(tentRoot2[1]).css('transform', 'translateY(-60%)')
    }
    else if (bottomRD > 30) {
        var tentRoot1 = $('.tentacleRoot');
        var tentRoot2 = $('.tentacleRoot2')
        $(tentRoot1[0]).css('transform', 'translateY(-30%)')
        $(tentRoot2[1]).css('transform', 'translateY(-30%)')
    }
    else {
        $('.tentacleRoot').css('transform', 'translateY(0)')
        $('.tentacleRoot2').css('transform', 'translateY(0)')

    }
    let outerRed = parseInt($('.outerRed').val());
    let outerGreen = parseInt($('.outerGreen').val());
    let outerBlue = parseInt($('.outerBlue').val());
    let innerRed = parseInt($('.innerRed').val());
    let innerGreen = parseInt($('.innerGreen').val());
    let innerBlue = parseInt($('.innerBlue').val());
    $('.monsterBody, .tentacleRoot, .tentaclePart, .tentacleRoot2').css('background-image', 'radial-gradient(rgb(' + innerRed + ',' + innerGreen + ',' + innerBlue + ')30% , rgb(' + outerRed + ',' + outerGreen + ',' + outerBlue + ')');
}


    


//$(window).load(function() {
        InitialSetUpMonster()
    //})

$('.width, .height').change(e => {
    e.preventDefault();
    e.stopPropagation();
    if (trottle == "on") {
        let width = parseInt($('.width').val());
        let height = parseInt($('.height').val());
        $('.monsterBody').css('height', height + '%');
        $('.monsterBody').css('width', width + '%');


        trottle = 'off';
        setTimeout(() => {
            trottle = 'on'

        }, 500);

    }

})

$('.eyeHeight').change(e => {
    let eyeHeight = parseInt($('.eyeHeight').val());
    $('.monsterEyerow').css('top', eyeHeight + '%')
})

$('.eyeNumber').change(e => {
    let eyeNumber = parseInt($('.eyeNumber').val());
    $('.monsterEyerow').html('')
    for (i = 0; i < eyeNumber; i++) {
        var eye = $('<div class="eye"><div class="iris"></div></div>')
        $('.monsterEyerow').append(eye);
    }
})


$('.mouthWidth').change(e => {
    let mouthwidth = parseInt($('.mouthWidth').val());
    $('.monsterMouth').css('width', mouthwidth + '%')
})


$('.nameInput').change(e => {
    e.preventDefault();
    e.stopPropagation();

    if (trottle == "on") {
        let name = $('.nameInput').val();
        if (name.length > 0) {
            $('.attackButton').removeClass('invisibleP')
            $('.monsterNameDisplay').html('')
            var nameletters = name.split('');
            for (let i = 0; i < nameletters.length; i++) {
                setTimeout(() => {
                    var letter = $('<div class="nameLetter">' + nameletters[i] + '<div>');
                    $('.monsterNameDisplay').append(letter)




                }, i * 50);
            }


            trottle = 'off';
            setTimeout(() => {
                trottle = 'on'

            }, 500);
        }
        else { $('.attackButton').addClass('invisibleP') }
    }
})

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

function createStarship() {

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

$('.attackButton').click(e => {


    e.preventDefault();
    e.stopPropagation();

    $('.battlePage').removeClass('invisibleP')
    $('.contentContainer').addClass('invisibleP')
    createBattleScene()
    addStars();
    var title = $('<div>')
    title.addClass('title');
    var monsterName = $('.nameInput').val();
    $('.battlePage').prepend(title)
    $('.title').html('<p>The Attack of ' + monsterName + '</p>')
    $('.createButton').removeClass('invisibleP')
    $('.attackButton').addClass('invisibleP')

})

$('.createButton').click(e => {
    e.preventDefault();
    e.stopPropagation();
    $('.battlePage').addClass('invisibleP')
    $('.contentContainer').removeClass('invisibleP')
    $('.beam').remove();
    clearInterval(beaminterval);
    $('.createButton').addClass('invisibleP')

})

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

// function eraseBeams(){
//     setInterval(() => {
//         var beams=$('.beams')
//         for(let i=0;i<beams.length;i++){
//             setTimeout(() => {
//                 $(beams[i]).remove();


//             }, i*100);
//         }

//     }, 500);
// }



