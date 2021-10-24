let timer;

let compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 7); //just for this demo today + 7 days

timer = setInterval(function () {
  timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
  let dateEntered = toDate;
  let now = new Date();
  let difference = dateEntered.getTime() - now.getTime();

  if (difference <= 0) {
    // Timer done
    clearInterval(timer);
  } else {
    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
  }
}

// модальное коно

document.addEventListener("DOMContentLoaded", function () {
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal-1"]').addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal-1').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#openModal-2"]').addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal-2').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#openModal-3"]').addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal-3').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close"]').addEventListener('click', function () {
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal-1').style.marginLeft = '0px';
    document.querySelector('#openModal-2').style.marginLeft = '0px';
    document.querySelector('#openModal-3').style.marginLeft = '0px';
  });
});

// скролл до элемента

$(".scrollto a").on("click", function () {
  let href = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(href).offset().top,
    },
    {
      duration: 370, // по умолчанию «400»
      easing: "linear", // по умолчанию «swing»
    }
  );

  return false;
});

// слайдер

let hsuma = 0;
$(document).ready(function () {
  $(".next").click(function () {
    hsuma += -100;
    if (hsuma >= -200)
      $(".h-items").animate({ marginLeft: hsuma + "%" }, "fast");
    else {
      hsuma = 0;
      $(".h-items").animate({ marginLeft: hsuma + "%" }, "fast");
    }
  });

  $(".prev").click(function () {
    if (hsuma == 0) {
      hsuma = -200;
      $(".h-items").animate({ marginLeft: hsuma + "%" }, "fast");
    } else {
      hsuma += 100;
      $(".h-items").animate({ marginLeft: hsuma + "%" }, "fast");
    }
  });
});



