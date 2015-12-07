document.addEventListener('click', function(e) {
  var target = e.target;
    if(!(target.classList.contains('menu_icon'))){
      document.querySelector('.menu').classList.remove('is_open');
    }

    if(target.classList.contains('menu_icon')) {
      if (document.querySelector('.menu').classList.contains('is_open')) {
        document.querySelector('.menu').classList.remove('is_open');
      } else {
        document.querySelector('.menu').classList.add('is_open');
      }
    }
});
