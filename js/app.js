$(function () {
  $('[data-toggle="popover"]').popover()
})

//dismiss popovers
$('body').on('click', '.filmImg', function() {
  console.log('hello')
})

$('html').on('click', function(e) {
  if (typeof $(e.target).data('original-title') == 'undefined' &&
     !$(e.target).parents().is('.popover.in')) {
    $('[data-original-title]').popover('hide');
  }
});

$(document).ready(function() {
    $(".hometitle").mouseenter(function() {
        $("body").css("background-color","yellow");
    });
    $(".hometitle").mouseleave(function() {
        $("body").css("background-color","#006cf1");
    });
});

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

//DOG BOOK TITLES//
$(function () {
  $('body').on('click', '.dogImg', function() {
    var thing = $('#dogt').val();
    var currentThings = JSON.parse(window.localStorage.getItem('dog')) || [];
    currentThings.push(thing);
    window.localStorage.setItem('dog', JSON.stringify(currentThings));
    $('#dogt').val('');
  });

  //ACTIVITY//
  // quotationsImg, getItem and setItem,
  $('body').on('click', '.activityImg', function() {
    var thing = $('#actt').val();
    var currentThings = JSON.parse(window.localStorage.getItem('activity')) || []
    currentThings.push(thing)
    window.localStorage.setItem('activity', JSON.stringify(currentThings));
    $('#actt').val('');
  });

  //FEELINGS
  // quotationsImg, getItem and setItem,
  $('body').on('click', '.feelingsImg', function() {
    var thing = $('#feelt').val();
    var currentThings = JSON.parse(window.localStorage.getItem('feelings')) || []
    currentThings.push(thing)
    window.localStorage.setItem('feelings', JSON.stringify(currentThings));
    $('#feelt').val('');
  });

  //FILM
  // quotationsImg, getItem and setItem,
  $('body').on('click', '.filmImg', function() {
    console.log('hello')
    var thing = $('#filmt').val();
    var currentThings = JSON.parse(window.localStorage.getItem('film')) || []
    currentThings.push(thing)
    window.localStorage.setItem('film', JSON.stringify(currentThings));
    $('#filmt').val('');
  });

  //MUSIC
  // quotationsImg, getItem and setItem,
  $('body').on('click', '.musicImg', function() {
    var thing = $('#musict').val();
    var currentThings = JSON.parse(window.localStorage.getItem('music')) || []
    currentThings.push(thing)
    window.localStorage.setItem('music', JSON.stringify(currentThings));
    $('#musict').val('');
  });

  //PERSON
  // quotationsImg, getItem and setItem,
  $('body').on('click', '.personImg', function() {
    var thing = $('#pt').val();
    var currentThings = JSON.parse(window.localStorage.getItem('person')) || []
    currentThings.push(thing)
    window.localStorage.setItem('person', JSON.stringify(currentThings));
    $('#pt').val('');
  });

  //PLACE
  // quotationsImg, getItem and setItem,
  $('body').on('click', '.placeImg', function() {
    var thing = $('#placet').val();
    var currentThings = JSON.parse(window.localStorage.getItem('place')) || []
    currentThings.push(thing)
    window.localStorage.setItem('place', JSON.stringify(currentThings));
    $('#placet').val('');
  });

  //QUOTATIONS
  // quotationsImg, getItem and setItem,
  $('body').on('click', '.quotationsImg', function() {
    var thing = $('#quot').val();
    var currentThings = JSON.parse(window.localStorage.getItem('quotations')) || []
    currentThings.push(thing)
    window.localStorage.setItem('quotations', JSON.stringify(currentThings));
    $('#quot').val('');
  });
});
