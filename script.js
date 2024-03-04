let header = document.createElement('header');
let left_hd = document.createElement('div');
let right_hd = document.createElement('div');
let img_cll = document.createElement('img');
let sc_img = document.createElement('img');
let city = document.createElement('a');
let club = document.createElement('a');
let shop = document.createElement('a');
let dostavka = document.createElement('a');
let blog = document.createElement('a');
let bizness = document.createElement('a');
let phone = document.createElement('a');

left_hd.classList.add('left_hd');
right_hd.classList.add('right_hd');
header.classList.add('first_hd');

img_cll.src = "./img/call.png";
sc_img.src = "./img/location.png";

city.innerHTML = "Москва";
shop.innerHTML = "Магазины";
dostavka.innerHTML = "Доставка";
blog.innerHTML = "Блог «М.Клик»";
club.innerHTML = "M.Club";
bizness.innerHTML = "Для бизнесса";
phone.innerHTML = "8-800-600-7775";

header.append(left_hd, right_hd);
left_hd.append(sc_img, city, shop, dostavka);
right_hd.append(blog, club, bizness, img_cll, phone);

document.body.append(header);

let main_hd = document.createElement('div');
let main_a = document.createElement('a');
let main_img = document.createElement('img');
let main_button = document.createElement('button');
let main_input = document.createElement('input');
let right_of = document.createElement('div');
let right_two = document.createElement('div')

main_hd.classList.add('main_hd');
main_a.classList.add('a');
main_img.classList.add('img');
main_button.classList.add('button');
main_input.classList.add('main_input');

main_a.href = "https://www.mvideo.ru/";
main_img.src = './img/Снимок экрана 2024-03-02 в 21.16.15.png';
main_a.append(main_img);

main_button.innerHTML = 'Каталог';
main_input.placeholder = 'Искать Топ-скидки до 50%';
main_input.name = 'text';

right_of.classList.add('right_of');
right_two.classList.add('right_two')

for (let i = 0; i < 4; i++) {
    let right_a = document.createElement('a');
    let right_img = document.createElement('img');
    let right_p = document.createElement('p');


    right_a.classList.add('right_a');
    right_img.classList.add('right_img');
    right_p.classList.add('right_p');


    right_a.href = 'https://www.mvideo.ru/';
    right_img.src = './img/time.png';
    right_p.innerHTML = 'Статус';

    if (i === 1) {
        right_p.innerHTML = 'Сравнение';
        right_img.src = './img/music.png'
    }
    if (i === 2) {
        right_p.innerHTML = 'Избранное'
        right_img.src = './img/love.png'
    }
    if (i === 3) {
        right_p.innerHTML = 'Корзина'
        right_img.src = './img/store.png'
    }

    right_a.append(right_img, right_p);
    right_of.append(right_a);
}

let main_end = document.createElement('div')
let main_b = document.createElement('b')

main_end.classList.add('main_end');

for (let i = 0; i < 9; i++) {

    let main_b = document.createElement('b');
    main_b.innerHTML = 'All'
    main_b.innerHTML = 'All'
    main_b.innerHTML = 'Skidka'
    main_b.innerHTML = 'Samsung + Iphon'
    main_b.innerHTML = 'Laptops'
    main_b.innerHTML = 'Buy'
    main_b.innerHTML = 'Freezing'
    main_b.innerHTML = 'Tv'
    main_b.innerHTML = 'Premium'
    main_b.innerHTML = 'Car washes'

    main_end.append(main_b);
}

document.body.append(main_hd);
main_hd.append(main_a, main_button, main_input, right_of, right_two);

document.body.append(main_end)
main_end.append(main_b)

let countainer = document.createElement('div')
let box = document.createElement('div')
let button_fir = document.createElement('button')
let button_sec = document.createElement('button')
let count_img = document.createElement('img')

countainer.classList.add('countainer')
count_img.src = './img/fir.png'
button_fir.innerHTML = 'right'
button_sec.innerHTML = 'left'

button_fir.onclick = () => {
    count_img.src = './img/sce.png'
}

button_sec.onclick = () => {
    count_img.src = './img/fir.png'
}

document.body.append(countainer)
countainer.append(box, button_fir, button_sec, count_img)
box.append(count_img, button_fir, button_sec)