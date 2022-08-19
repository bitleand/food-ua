class cardMenu {
  constructor(img, alt, title, text, price, parentSelector, ...classes) {
    this.img = img;
    this.alt = alt;
    this.title = title;
    this.text = text;
    this.price = price;
    this.classes = classes;
    this.parent = document.querySelector(parentSelector);
    this.transfer = 30;
    this.changeToUAH();
  }

  changeToUAH() {
    this.price = this.price * this.transfer;
  }

  cardRender() {
    const el = document.createElement('article');
    this.classes.forEach(classEl => el.classList.add(classEl));
    el.innerHTML = `
      <div class="card-content">
        <img src=${this.img} class="card-content__img" alt=${this.alt}>
        <h3 class="card-content__subtitle">${this.title}</h3>
        <p class="card-content__text">${this.text}</p>
      </div>
      <div class="card-price">
        <span class="card-price__subtitle">Ціна:</span>
        <p class="card-price__total">
          <span class="card-price__total--num">${this.price}</span>
          грн/день
        </p>
      </div>`;
    this.parent.append(el);
  }
}

new cardMenu(
  "img/tabs/vegy.jpg",
  "vegy",
  'Меню "Фітнес"',
  `Меню "Фітнес" - це новий підхід до приготування страв: більше свіжих овочів та фруктів.
  Продукт активних та здорових людей. Це абсолютно новий продукт з оптимальною ціною та високою якістю!`,
  7,
  '.cards__container',
  'card'
).cardRender();

new cardMenu(
  "img/tabs/elite.jpg",
  "elite",
  'Меню “Преміум”',
  `У меню "Преміум" ми використовуємо не тільки гарний дизайн упаковки, але та якісне виконання страв.
  Червона риба, морепродукти, фрукти – ресторанне меню без походу в ресторан!`,
  11,
  '.cards__container',
  'card'
).cardRender();

new cardMenu(
  "img/tabs/vegy.jpg",
  "vegy",
  'Меню "Пісне"',
  `Меню "Пісне" - це ретельний підбір інгредієнтів: повна відсутність
  продуктів тваринного походження, молоко з мигдалю, вівса, кокосу чи гречки, правильне
  кількість білків за рахунок тофу та імпортних вегетаріанських стейків.`,
  5,
  '.cards__container',
  'card'
).cardRender();

// todo: rewrite in a loop
