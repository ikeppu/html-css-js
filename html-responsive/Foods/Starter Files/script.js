let iconsList = document.querySelectorAll('.section-1-icons i');

let counter = 1;

setInterval(() => {
  counter++;
  const icon = document.querySelector('.section-1-icons .change');

  icon.classList.remove('change');

  if (counter > iconsList.length) {
    iconsList[0].classList.add('change');
    counter = 1;
  } else {
    icon.nextElementSibling.classList.add('change');
  }
  //   next icon
}, 4000);

document.querySelector('.menu').addEventListener('click', () => {
  document.querySelectorAll('.target').forEach((item) => {
    item.classList.toggle('change-menu');
  });
});
