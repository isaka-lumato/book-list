const ulParent = document.querySelector('.listParent');

const input = document.querySelector('#input');

const form = document.querySelector('form');

let n = 0;
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const list = document.createElement('li');
  const button = document.createElement('button');
  button.textContent = 'delete me';
  const m = n + 1;
  list.textContent = `${m}. ${input.value}`;
  n = m;
  if (input.value !== 'please type here') {
    if (input.value.length >= 1) {
      ulParent.appendChild(list);
      list.appendChild(button);
      input.value = '';
      input.focus();

      button.addEventListener('click', () => {
        const buttParent = button.parentElement;
        buttParent.remove();
      });
    } else {
      input.style.border = '3px solid red';
      input.value = 'please type here';
      // input.style.width = '18%'
      input.style.color = '#888';
      input.addEventListener('click', () => {
        input.value = '';
        input.style.color = '#111';
        input.style.border = '0px solid black';
      });
    }
  } else {
    input.value = '';
  }
});