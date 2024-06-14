// const { set } = require("express/lib/application");
    var window;
    var windowHeight;
    var windowWidth;
var livingMonsters = {

}
var monsters;

function moveMonsters() {

//   console.log(windowHeight, windowWidth)
  //for each monster div move it based on its vertical and horizontal velocity
  monsters = $('.monsterDisplay').not('.monsterDead');
  monsters.each(function ( index, item) {
    //get the current position of the monster
    let itemindex = index
    console.log(item);
    let monsterPosition = $(item).position();
    
    console.log("monster position", monsterPosition.top, monsterPosition.left)
    let monsterverticalVelocity = livingMonsters[itemindex].vertical;
    let monsterHorizontalVelocity = livingMonsters[itemindex].horizontal;

    let newTop = monsterPosition.top - monsterverticalVelocity;

    let newLeft = monsterPosition.left + monsterHorizontalVelocity;

        if (newTop > windowHeight || newTop < 0) {
          livingMonsters[itemindex].vertical = -1*monsterverticalVelocity;
        }
        if (newLeft > windowWidth || newLeft < 0) {
          livingMonsters[itemindex].horizontal = -1*monsterHorizontalVelocity;
        }
    console.log(livingMonsters);
    $(item).css("top", newTop + "px");
    $(item).css("left", newLeft + "px");
  })
};   
//wait for jquery to load
$(document).ready(function () {
  //find all of hte monster divs with the class monsterDisplay but with out the class monsterDead
    console.log("moveMonsters");
    window = $(document);
    console.log(window);
    windowHeight = parseFloat($(window).height());
    windowWidth = parseFloat($(window).width());
  monsters = $('.monsterDisplay').not('.monsterDead');
  //for each monster div create a vertical and horizontal velocity
    monsters.each(function ( index, item) {
        var monsterverticalVelocity = Math.floor(Math.random() * 20) + 1;
        var monsterHorizontalVelocity = Math.floor(Math.random() * 20) + 1;
        livingMonsters[index] = { vertical: monsterverticalVelocity, horizontal: monsterHorizontalVelocity };
        });

        // console.log(livingMonsters)

        setInterval(() => {
            moveMonsters()
        }, 100);
});

