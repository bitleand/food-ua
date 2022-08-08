const tabsParent = document.querySelector('.tab-menu__list');
const tabsItem = document.querySelectorAll('.tab-menu__item');
const tabsContent = document.querySelectorAll('.tab-content');

const hideTabContent = () => {
  tabsContent.forEach(el => el.classList.add('hide') & el.classList.remove('show', 'fade'));
  tabsItem.forEach(el => el.classList.remove('tab-menu__item--active'));
};

const showTabContent = (i = 0) => {
  tabsContent[i].classList.add('show', 'fade');
  tabsContent[i].classList.remove('hide');
  tabsItem[i].classList.add('tab-menu__item--active');
};

const clickTabItem = () => {
  tabsParent.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('tab-menu__item')) {
      tabsItem.forEach((el, i) => {
        e.target === el ? hideTabContent() & showTabContent(i) : false;
      });
    }
  });
};

hideTabContent();
showTabContent();
clickTabItem();
