const tabItem = document.querySelectorAll('.tab-item');
const tabContent = document.querySelectorAll('.tab-content-item');

// panggil event
tabItem.forEach(el => el.addEventListener('click', selectItem));

function selectItem(el) {
  // 
  removeBorder();
  removeShow();
  this.classList.add('tab-border');
  // grab content item
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');

}

function removeBorder() {
  tabItem.forEach(el => el.classList.remove('tab-border'));
}

function removeShow() {
  tabContent.forEach(el => el.classList.remove('show'));
}