const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circlesElList = document.querySelectorAll('.circle');

let currentActive = 1;

const update = () => {
  circlesElList.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const active = document.querySelectorAll('.active');

  progress.style.width =
    ((active.length - 1) / (circlesElList.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  if (currentActive === circlesElList.length) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
};

nextBtn.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circlesElList.length) {
    currentActive = circlesElList.length;
  }
  update();
});

prevBtn.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});
