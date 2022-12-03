const btn = document.querySelector('#btn');
const main = document.querySelector('iframe');
main.style.display = 'none';

let condation = false;

btn.onclick = () => {
  condation = !condation;

  console.log(condation);
  if (condation === false) {
    main.style.display = 'none';
  } else {
    main.style.display = 'block';
  }
};

console.log(condation);
