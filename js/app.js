$(function () {
  $('[data-toggle="popover"]').popover()
})


// var owl = document.getElementById("owl");
// var bob = document.getElementById("bob");
//
// var pos = 0;
// var pos2 = 0;
// var id = setInterval(frame, 2);
// var id2 = setInterval(frame2, 2);


// //function frame() {
//   if (pos == 700) {
//     clearInterval(id);
//   } else if (pos > 450 && pos < 700) {
//     pos++;
//     owl.style.bottom = pos + 'px';
//     owl.style.left = pos + 'px';
//   } else {
//     pos++;
//     owl.style.top = pos + 'px';
//     owl.style.left = pos + 'px';
//   }
// }
//
// function frame2() {
//   if (pos2 == 700) {
//     clearInterval(id2);
//   } else if (pos2 > 200 && pos2 < 700) {
//     pos2++;
//     bob.style.bottom = pos2 + 'px';
//     bob.style.left = pos2 + 'px';
//   } else {
//     pos2++;
//     bob.style.top = pos2 + 'px';
//     bob.style.left = pos2 + 'px';
//   }
// }
//


// localStorage.clear()


$(function () {
  $('body').on('click', '.titlesImg', function() {
    var thing = $('textarea').val();
    var currentThings = JSON.parse(window.localStorage.getItem('titles')) || []
    currentThings.push(thing)
    window.localStorage.setItem('titles', JSON.stringify(currentThings));
    $('input').val('');
  })

  // quotationsImg, getItem and setItem,
  $('body').on('click', '.quotationsImg', function() {
    var thing = $('textarea').val();
    debugger
    var currentThings = JSON.parse(window.localStorage.getItem('quotations')) || []
    currentThings.push(thing)
    window.localStorage.setItem('quotations', JSON.stringify(currentThings));
    $('input').val('');
  })
})
