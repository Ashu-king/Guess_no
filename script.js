'use strict';

/*console.log(document.querySelector('.message').textContent);
/document obj model
document.querySelector('.guess').value = 10
*console.log(document.querySelector('.message').textContent = 'corrrect numeber 😘');
document.querySelector('.number').textContent = 1;
document.querySelector('.score').textContent = 120;

document.querySelector('.guess').value = 10

*/

let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = "?";
document.querySelector('.check').addEventListener('click', function () {
    const x = Number(document.querySelector('.guess').value);

    if (score > 0) {
        if (!x) {
            console.log(document.querySelector('.message').textContent = 'No number😘');

        } else if (x === secret_number) {
            console.log(document.querySelector('.message').textContent = 'corrrect numeber !!!😘');
            score = score + 1;
            document.querySelector('.score').textContent = score;
            document.querySelector('.highscore').textContent = score;
            document.querySelector('body').style.
                backgroundColor = '#60b347';
            document.querySelector('.number').style.Width = '30rem'
            document.querySelector('.number').textContent = secret_number;
        }

        else if (x < secret_number) {
            console.log(document.querySelector('.message').textContent = 'No, Wrong number. Too low😘');
            document.querySelector('body').style.
                backgroundColor = 'lightred';
            score = score - 1;
            document.querySelector('.score').textContent = score;



        } else if (x > secret_number) {
            console.log(document.querySelector('.message').textContent = 'No, Wrong number. Too heigh😘');
            score = score - 1;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.
                backgroundColor = 'red';

        }
    }
    if (score < 1) {
        document.querySelector('.message').textContent = 'You lost!!😭😿';
    }

})



