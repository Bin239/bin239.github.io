


class enemy {
    constructor() {
        this.strength = 20;
    }
}

let firstEnemy = new enemy;


class finalEnemy {
    constructor() {
        this.strength = 40;
    }
}

let finalBoss = new finalEnemy;



class samurai {
    constructor() {
        this.strength = 100,
            this.score = 5;
        this.time = 45;
    }
}

let mySamurai = new samurai();

window.onload = function () { setInterval(enemyAttack, 2000); };

function timeremaining() {
    if (mySamurai.time > 0) {
        mySamurai.time--;
        $(".time").text("Time Remaining: " + mySamurai.time + " Sec.")


    }
}
let Timedecrease = setInterval(timeremaining, 1000);




function feedSamurai() {
    if (mySamurai.strength < 90) {
        mySamurai.strength += 10;
    }

}

function resetEnemy() {
    firstEnemy.strength = 20;
    $("#image3").attr("src", "pics/secondEnemy.gif");
    $("#image3").css("height", "280px");
    $("#image3").css("width", "280px");
    $("#samurai").css("margin-top", "420px");
}

function enemyDeadPicture() {
    $("#image3").attr("src", "pics/explode.gif");

}

function enemyAttack() {
    gameOver();

    if (mySamurai.strength > 4 && $("#samurai").offset().left < 320) {
        mySamurai.strength -= 5;
    }

}


for (let i = 0; i < 3; i++) {

    function attack() {



        if (($("#samurai").offset().left < 320)) {


            $("#score").text("Score: " + mySamurai.score);

            if (firstEnemy.strength > 0) {

                firstEnemy.strength -= 5;

            }
            mySamurai.score += 5;

        }

        $("#samurai").attr("src", "pics/samurai3.gif");

        if (firstEnemy.strength < 1) {
            setTimeout(enemyDeadPicture, 1000);
            clearTimeout(enemyDeadPicture);
            setTimeout(resetEnemy, 1700);

        }

        setTimeout(resetCharacter, 1700);
    }
}

function moveLeft() {
    $("#samurai").stop().animate({
        left: '-=100'
    });
}

function moveright() {
    $("#samurai").stop().animate({
        left: '+=100'
    });
}

function resetCharacter() {
    $("#samurai").attr("src", "pics/staticninja.gif")

}

//functionality for when pressing up/down/left/right arrow
$(document).keydown(function (e) {
    switch (e.which) {
        case 37:
            if (($("#samurai").offset().left > 260)) {
                moveLeft();

            }
            //left arrow key
            break;
        case 39:
            if (($("#samurai").offset().left < 1000)) {
                moveright();
            }
            //right arrow key
            break;
        case 32:
            //gameOver();

            if (mySamurai.strength > 9) {
                attack();
            }

            if (mySamurai.strength > 4) {
                mySamurai.strength -= 5;
            }
            break;
        case 38:
            feedSamurai();
            break;

    }

})




//samurai strength progressbar
function updateStrengthBar() {
    var elem = document.getElementById("strengthProgress");
    var id = setInterval(frame, 500);
    function frame() {

        if (width <= 0) {
            clearInterval(id);
        }

        else {
            var width = mySamurai.strength;
            elem.style.width = width + '%';
            elem.innerHTML = "Strength: " + width * 1 + '%';

        }
    }
}


updateStrengthBar();


function gameOver() {
    if (mySamurai.strength < 1 || mySamurai.time == 0) {
        $("#samurai").hide();
        $("#image3").hide();
        setTimeout(alertFunction, 300);
        $("#score").text("Score: " + mySamurai.score);


    }
}

function alertFunction() {
    alert("Gameover, your score was " + mySamurai.score + ". Press Ok to play again!!");
    location.reload();
}
