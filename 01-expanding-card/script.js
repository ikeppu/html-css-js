const panelsElList = document.querySelectorAll('.panel');

const removeActiveClasses = () => {
  panelsElList.forEach((panel) => {
    panel.classList.remove('active');
  });
};

panelsElList.forEach((panel) => {
  console.log(panel);
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});
