// В інформації товару - кнопка "купити".
// При натисканні на "купити" нижче з'являється форма оформлення замовлення з наступними полями:
// ПІБ покупця
// Місто(вибір зі списку)
// Склад Нової пошти для надсилання
// Післяплати або оплати банківської картки
// Кількість продукції, що купується
// Коментар до замовлення
// 2. Реалізувати перевірку всіх даних користувача під час підтвердження замовлення
//     - обов'язкові поля заповнені. Інакше - виводити помилку на сторінку
// 3. Виводити інформацію про замовлення на сторінку(інформація про товар та про доставку)


const categories = [
    {
        categories: "iphone",
        img: "img/iphone.png"
    },
    {
        categories: "notebook",
        img: "img/mac.png"
    },
    {
        categories: "watch",
        img: "img/watch.png"
    },
];

const product = [
    {
        categories: "iphone",
        name: "iPhone 2G",
        img: "img/1.png",
        description: "<p>Сеть: GSM / GPRS WCDMA / HSDPA (850 / 1900 / 2100 МГц)</p><p> Операционная система: iPhone 2.0 OS.</p><p>Дисплей: сенсорный, 3,5 дюйма, 480 х 320 точек</p><p>Аккумулятор: 1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки</p><p>Экран: 3.5, сенсорный, 480x320, емкостный, TFT, 16 млн. ...</p><p>Камера: 2 мпикс, 1600x1200, пинч-зум</p><p>Вид: Моноблок, 135 г, 115x61x11.6 мм</p>"
    },
    {
        categories: "iphone",
        name: "iPhone 3G",
        img: "img/2.png",
        description: "<p>Сеть: GSM / GPRS WCDMA / HSDPA (850 / 1900 / 2100 МГц)</p><p> Операционная система: iPhone 2.0 OS.</p><p>Дисплей: сенсорный, 3,5 дюйма, 480 х 320 точек</p><p>Аккумулятор: 1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки</p><p>Экран: 3.5, сенсорный, 480x320, емкостный, TFT, 16 млн. ...</p><p>Камера: 2 мпикс, 1600x1200, пинч-зум</p><p>Вид: Моноблок, 135 г, 115x61x11.6 мм</p>"
    },
    {
        categories: "notebook",
        name: "macBook Air",
        img: "img/mac1.png",
        description: "<p>Сеть: GSM / GPRS WCDMA / HSDPA (850 / 1900 / 2100 МГц)</p><p> Операционная система: iPhone 2.0 OS.</p><p>Дисплей: сенсорный, 3,5 дюйма, 480 х 320 точек</p><p>Аккумулятор: 1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки</p><p>Экран: 3.5, сенсорный, 480x320, емкостный, TFT, 16 млн. ...</p><p>Камера: 2 мпикс, 1600x1200, пинч-зум</p><p>Вид: Моноблок, 135 г, 115x61x11.6 мм</p>"
    },
    {
        categories: "notebook",
        name: "iMac",
        img: "img/mac2.png",
        description: "<p>Сеть: GSM / GPRS WCDMA / HSDPA (850 / 1900 / 2100 МГц)</p><p> Операционная система: iPhone 2.0 OS.</p><p>Дисплей: сенсорный, 3,5 дюйма, 480 х 320 точек</p><p>Аккумулятор: 1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки</p><p>Экран: 3.5, сенсорный, 480x320, емкостный, TFT, 16 млн. ...</p><p>Камера: 2 мпикс, 1600x1200, пинч-зум</p><p>Вид: Моноблок, 135 г, 115x61x11.6 мм</p>"
    },
    {
        categories: "notebook",
        name: "macBook pro",
        img: "img/mac3.png",
        description: "<p>Сеть: GSM / GPRS WCDMA / HSDPA (850 / 1900 / 2100 МГц)</p><p> Операционная система: iPhone 2.0 OS.</p><p>Дисплей: сенсорный, 3,5 дюйма, 480 х 320 точек</p><p>Аккумулятор: 1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки</p><p>Экран: 3.5, сенсорный, 480x320, емкостный, TFT, 16 млн. ...</p><p>Камера: 2 мпикс, 1600x1200, пинч-зум</p><p>Вид: Моноблок, 135 г, 115x61x11.6 мм</p>"
    },
    {
        categories: "watch",
        name: "apple watch white",
        img: "img/watch1.png",
        description: "<p>Сеть: GSM / GPRS WCDMA / HSDPA (850 / 1900 / 2100 МГц)</p><p> Операционная система: iPhone 2.0 OS.</p><p>Дисплей: сенсорный, 3,5 дюйма, 480 х 320 точек</p><p>Аккумулятор: 1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки</p><p>Экран: 3.5, сенсорный, 480x320, емкостный, TFT, 16 млн. ...</p><p>Камера: 2 мпикс, 1600x1200, пинч-зум</p><p>Вид: Моноблок, 135 г, 115x61x11.6 мм</p>"
    },
    {
        categories: "watch",
        name: "apple watch metal",
        img: "img/watch2.png",
        description: "<p>Сеть: GSM / GPRS WCDMA / HSDPA (850 / 1900 / 2100 МГц)</p><p> Операционная система: iPhone 2.0 OS.</p><p>Дисплей: сенсорный, 3,5 дюйма, 480 х 320 точек</p><p>Аккумулятор: 1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки</p><p>Экран: 3.5, сенсорный, 480x320, емкостный, TFT, 16 млн. ...</p><p>Камера: 2 мпикс, 1600x1200, пинч-зум</p><p>Вид: Моноблок, 135 г, 115x61x11.6 мм</p>"
    },
    {
        categories: "watch",
        name: "apple watch red",
        img: "img/watch3.png",
        description: "<p>Сеть: GSM / GPRS WCDMA / HSDPA (850 / 1900 / 2100 МГц)</p><p> Операционная система: iPhone 2.0 OS.</p><p>Дисплей: сенсорный, 3,5 дюйма, 480 х 320 точек</p><p>Аккумулятор: 1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки</p><p>Экран: 3.5, сенсорный, 480x320, емкостный, TFT, 16 млн. ...</p><p>Камера: 2 мпикс, 1600x1200, пинч-зум</p><p>Вид: Моноблок, 135 г, 115x61x11.6 мм</p>"
    }
];

const container = document.createElement("div");
container.classList.add("container");
document.body.append(container);

const icon = document.createElement("div");
icon.classList.add("categories");
container.append(icon);

const number = document.createElement("div");
number.classList.add("product");
container.append(number);

const inform = document.createElement("div");
inform.classList.add("inform");
container.append(inform);

const form = document.querySelector("form");

const button = document.getElementById("button");
const button2 = document.querySelector("button2");
const buttonSmall = document.getElementById("buttonSmall");

const div = document.createElement("div");

const formWidth = document.querySelector("form");
const info = document.getElementById("info");
const town = document.getElementById("town");
const name1 = document.getElementById("name");
const numberInfo = document.getElementById("number");
const card = document.getElementById("card");
const adress = document.getElementById("adress");
const productInfo = document.getElementById("productInfo")
const coment = document.getElementById("coment")

categories.forEach(i => {
    const div = document.createElement("div");
    div.classList.add(`klass`);
    icon.append(div);

    const img = document.createElement("img");
    img.setAttribute("src", `${i.img}`);
    div.append(img);

    div.addEventListener("click", () => {
        number.innerHTML = "";
        inform.innerHTML = "";

        product.forEach((y) => {
            if (i.categories === y.categories) number.append(rander(y));
        });
    });
});

let forInfo;

function rander(y, per) {

    if (per) {
        const position = document.createElement("div");
        const positionName = document.createElement("p");
        position.append(positionName);
        positionName.innerText = `${y.name}`;
        const img = document.createElement("img");
        img.setAttribute("src", `${y.img}`);
        img.setAttribute("width", `80px`);
        position.append(img);

        const forDescription = document.createElement("div");
        forDescription.innerHTML = `${y.description}`;
        position.append(forDescription);
        const forButton = document.createElement("div");
        const button = document.createElement("button");
        button.classList.add("button");
        button.innerText = `Придбати`;
        forButton.append(button);
        forDescription.append(forButton);
        inform.append(position);

        button.addEventListener("click", () => {
            check();
            forInfo = y;
        });

    } else {
        const position = document.createElement("div");
        const positionName = document.createElement("p");
        position.append(positionName);
        positionName.innerText = `${y.name}`;
        const img = document.createElement("img");
        img.setAttribute("src", `${y.img}`);
        img.setAttribute("width", `130px`);
        position.append(img);

        position.addEventListener("click", () => {
            inform.innerHTML = "";
            rander(y, "l")
        });
        return position;
    };
};

let stopInterval = 0;

function check() {
    let i = -410;

    stopInterval += 1

    div.classList.add("black");
    document.body.append(div);

    form.classList.remove("none");

    setInterval(() => {
        i += 5
        form.style.top = `${i}px`;
        if (i === 350) {
            clearInterval(stopInterval);
        }
    }, 5);
};

buttonSmall.addEventListener("click", (e) => {
    e.preventDefault();
    div.classList.add("none");
    form.classList.add("none");
    form.style = "top: -410px;"
});

button.addEventListener("click", (e) => {
    e.preventDefault();
    checkInfoOff();
    checkInfo(name1.value, town.value, numberInfo.value, card.value, adress.value, productInfo.value);

    document.getElementById("person").innerText = ` ${name1.value}`;
    document.getElementById("city").innerText = ` ${town.value}`;
    document.getElementById("mail").innerText = ` ${numberInfo.value}`;
    document.getElementById("bank").innerText = ` ${card.value}`;
    document.getElementById("street").innerText = ` ${adress.value}`;
    document.getElementById("numbers").innerText = ` ${productInfo.value}`;
    document.getElementById("coments").innerText = ` ${coment.value}`;
});

let stopInterval2 = 1;

function checkInfo(h, city, mail, bank, street, numbers) {
    let n = true;
    if (h.length === 0) {
        name1.setAttribute("style", "background-color: rgba(237, 129, 129, 0.27);");
        n = false;
    } if (city === "Ваше місто") {
        town.setAttribute("style", "background-color: rgba(237, 129, 129, 0.27);");
        n = false;
    } if (mail === "") {
        numberInfo.setAttribute("style", "background-color: rgba(237, 129, 129, 0.27);");
        n = false;
    } if (bank === "") {
        card.setAttribute("style", "background-color: rgba(237, 129, 129, 0.27);");
        n = false;
    } if (street.length === 0) {
        adress.setAttribute("style", "background-color: rgba(237, 129, 129, 0.27);");
        n = false;
    } if (numbers === "") {
        productInfo.setAttribute("style", "background-color: rgba(237, 129, 129, 0.27);");
        n = false;
    } if (n === true) {

        document.getElementById("ht").append(rander(forInfo));

        info.classList.remove("none");
        let t = -410;

        stopInterval += 1;

       let ht = setInterval(() => {
            t += 5
            info.style.top = `${t}px`;
            if (t === 370) {
                clearInterval(stopInterval);
                console.log(ht);
            }
        }, 5);
        formWidth.classList.add("none");
    };
};

function checkInfoOff() {
    name1.setAttribute("style", "");
    town.setAttribute("style", "");
    numberInfo.setAttribute("style", "");
    card.setAttribute("style", "");
    adress.setAttribute("style", "");
    productInfo.setAttribute("style", "");
};

document.getElementById("button2").addEventListener("click", () => {
    location.reload();
});