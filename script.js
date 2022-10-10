const display = document.querySelector('.display');

const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');

function f(i,j,k)
{
    $('.smallkeys').removeClass('smallkeys'+i);
    $('.smallkeys').removeClass('smallkeys'+j);
    $('.smallkeys').addClass('smallkeys'+k);

    $('.twokeys').removeClass('twokeys'+i);
    $('.twokeys').removeClass('twokeys'+j);
    $('.twokeys').addClass('twokeys'+k);

    $('.del').removeClass('del'+i);
    $('.del').removeClass('del'+j);
    $('.del').addClass('del'+k);

    $('.keyboard').removeClass('keyboard'+i);
    $('.keyboard').removeClass('keyboard'+j);
    $('.keyboard').addClass('keyboard'+k);

    $('.calc').removeClass('calc'+i);
    $('.calc').removeClass('calc'+j);
    $('.calc').addClass('calc'+k);

    $('.display').removeClass('display'+i);
    $('.display').removeClass('display'+j);
    $('.display').addClass('display'+k);

    $('.equal').removeClass('equal'+i);
    $('.equal').removeClass('equal'+j);
    $('.equal').addClass('equal'+k);

    $('.reset').removeClass('reset'+i);
    $('.reset').removeClass('reset'+j);
    $('.reset').addClass('reset'+k);

    $('.topp').removeClass('top'+i);
    $('.topp').removeClass('top'+j);
    $('.topp').addClass('top'+k);

    $('body').removeClass('body'+i);
    $('body').removeClass('body'+j);
    $('body').addClass('body'+k);

    $('.btns').removeClass('btns'+i);
    $('.btns').removeClass('btns'+j);
    $('.btns').addClass('btns'+k);
}

b1.addEventListener('click', () => {

    b1.style.opacity = '1';
    b2.style.opacity = '0';
    b3.style.opacity = '0';
    b1.style.backgroundColor = 'hsl(6, 63 %, 50 %)';
    f(1, 2, 0);
});
b2.addEventListener('click', () => {
    b2.style.opacity = '1';
    b1.style.opacity = '0';
    b3.style.opacity = '0';
    b2.style.backgroundColor = 'hsl(25, 98%, 40%)';
    f(0, 2, 1);
});
b3.addEventListener('click', () => {
    b3.style.opacity = '1';
    b2.style.opacity = '0';
    b1.style.opacity = '0';
    b3.style.backgroundColor = 'hsl(176, 100%, 44%)';
    f(1, 0, 2);
});
let ans = "";
$(".smallkey").click(
    function ()
    {
        let text = display.innerText;
        let key = $(this).text();
        display.innerText = text + key;
    }
)

$(".op").click(
    function () {
        let op = $(this).text();
        if (op == "x") op = '*';
        display.innerText = display.innerText+op;
    }
)

$(".reset").click(
    function ()
    {
        display.innerText = "";
        ans = "";
    }
)

$(".equal").click(
    function () {
        display.innerText = eval(display.innerText).toString();
    }
)

$(".del").click(
    function () {
        display.innerText = display.innerText.slice(0,-1);
    }
)

display.innerText = "";

