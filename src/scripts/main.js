'use strict';

const list = document.querySelector('.tree');

const headers = list.querySelectorAll('li');

for (const item of headers) {
  const span = document.createElement('span');

  span.append(item.firstChild);
  item.prepend(span);
}

list.addEventListener('click', e => {
  const item = e.target;
  const nestedList = item.parentElement.querySelector('ul');

  if (!nestedList || item.tagName !== 'SPAN') {
    return;
  };

  if (nestedList.hidden) {
    nestedList.removeAttribute('hidden');
  } else {
    nestedList.hidden = `true`;
  }
});
