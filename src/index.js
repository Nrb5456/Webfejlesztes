var win_header = document.getElementById('win');
var draw_header = document.getElementById('draw');
var loss_header = document.getElementById('loss');
var result = document.getElementById('result');
var computer_choise = document.getElementById('computer_img');
var win = 0;
var draw = 0;
var loss = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/*
    0 - rock
    1 - paper
    2 - scissors 
*/

function restart_game() {
    computer_choise.src="";
    win = 0;
    draw = 0;
    loss = 0;
    win_header.textContent = "Nyert - " + win;
    draw_header.textContent = "Döntetlen - " + draw;
    loss_header.textContent = "Vesztett - " + loss;
    result.textContent = "";
}

function game(player) {
    if (player == 0) {
        switch (getRandomInt(3)) {
            case 0:
                computer_choise.src="../res/rock.png";
                result.textContent = "Döntetlen!";
                draw++;
                draw_header.textContent = "Döntetlen - " + draw;
                break;
            case 1:
                computer_choise.src="../res/paper.png";
                result.textContent = "Vesztettél!";
                loss++;
                loss_header.textContent = "Vesztett - " + loss;
                break;
            case 2:
                computer_choise.src="../res/scissors.png";
                result.textContent = "Nyertél!";
                win++;
                win_header.textContent = "Nyert - " + win;
                break;
        }
    }

    if (player == 1) {
        switch (getRandomInt(3)) {
            case 0:
                computer_choise.src="../res/rock.png";
                result.textContent = "Nyertél!";
                win++;
                win_header.textContent = "Nyert - " + win;
                break;
            case 1:
                computer_choise.src="../res/paper.png";
                result.textContent = "Döntetlen!";
                draw++;
                draw_header.textContent = "Döntetlen - " + draw;
                break;
            case 2:
                computer_choise.src="../res/scissors.png";
                result.textContent = "Vesztettél!";
                loss++;
                loss_header.textContent = "Vesztett - " + loss;
                break;
        }
    }

    if (player == 2) {
        switch (getRandomInt(3)) {
            case 0:
                computer_choise.src="../res/rock.png";
                result.textContent = "Vesztettél!";
                loss++;
                loss_header.textContent = "Vesztett - " + loss;
                break;
            case 1:
                computer_choise.src="../res/paper.png";
                result.textContent = "Nyertél!";
                win++;
                win_header.textContent = "Nyert - " + win;
                break;
            case 2:
                computer_choise.src="../res/scissors.png";
                result.textContent = "Döntetlen!";
                draw++;
                draw_header.textContent = "Döntetlen - " + draw;
                break;
        }
    }
}