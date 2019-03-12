function addingEventListener(main,event) {
  const main = document.getElementById('main');

  main.addEventListener('click', function(event) {
    alert('I was clicked!');
  });
}
