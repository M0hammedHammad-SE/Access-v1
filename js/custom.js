



$('#filters li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('#portfoliolist1 .portfolio1').hide()
    $($(this).data('content')).fadeIn();
});

$(window).scroll(function () {
  if ($(this).scrollTop() >= 100) {
    $(".icon-angle").fadeIn(500);
  } else {
    $(".icon-angle").fadeOut(500);

  }
});
$('.icon-angle').click(function () {

  $('html , body').animate({
    scrollTop: 0
  });
});
// *************************
$(window).on('scroll', function () {
  if ($(window).scrollTop() >= 10) {
    $('.navbar').addClass('fixed-nav')
  } else {
    $('.navbar').removeClass('fixed-nav')

  }
});



// *************************************
// Change navigation active class on scroll
var sections = document.querySelectorAll("section");

onscroll = function () {
    var scrollPosition = document.documentElement.scrollTop;

    sections.forEach((section) => {
        if (
            scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
            scrollPosition <
            section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
        ) {
            var currentId = section.attributes.id.value;
            removeAllActiveClasses();
            addActiveClass(currentId);
        }
    });
};

var removeAllActiveClasses = function () {
    document.querySelectorAll("nav a").forEach((el) => {
        el.classList.remove("active");
    });
};

var addActiveClass = function (id) {
    // console.log(id);
    var selector = `nav a[href="#${id}"]`;
    document.querySelector(selector).classList.add("active");
};

var navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        var currentId = e.target.attributes.href.value;
        var section = document.querySelector(currentId);
        var sectionPos = section.offsetTop;


        window.scroll({
            top: sectionPos,
            behavior: "smooth",
        });
    });
});