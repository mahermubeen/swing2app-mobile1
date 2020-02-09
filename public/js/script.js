// var btn1 = document.getElementById("option-btn2");
// var content_btn = document.getElementById("option-btn3");

// var home = document.getElementById("home");
// var contents = document.getElementById("contents");

// btn1.addEventListener("click", function() {
//     home.style.display = "none";
//     contents.style.display = "grid";

//     this.className += " active";
//     btn3.className = btn3.className.replace(" active", "");
// });

// content_btn.addEventListener("click", function() {
//     home.style.display = "none";
//     contents.style.display = "block";

//     this.className += " active";
//     btn2.className = btn2.className.replace(" active", "");
// });

$('.header-section nav a').click(function() {

    $('.header-section nav a.active').removeClass('active');
    $(this).addClass('active');
});

$('.brand-wrapper a').click(function() {

    if ($('.container .contents-wrapper.block') && $('.container .home-wrapper.hidden')) {


        $('.container .contents-wrapper.block').removeClass('block');
        $('.container .home-wrapper.hidden').removeClass('hidden');

        $('.container .home-wrapper.hidden').removeClass('hidden');

        $('.container .home-wrapper').addClass('block');
        $('.container .contents-wrapper').addClass('hidden');

        $('.header-section nav a.active').removeClass('active');
    } else {
        $('.header-section nav a.active').removeClass('active');
    }
});




$(window).click(function(e) {
    var target = $(event.target);
    if (target.is(".active-img")) {

        if ($('.container .contents-wrapper.block') && $('.container .home-wrapper.hidden')) {


            $('.container .contents-wrapper.block').removeClass('block');
            $('.container .home-wrapper.hidden').removeClass('hidden');

            $('.container .home-wrapper.hidden').removeClass('hidden');

            $('.container .home-wrapper').addClass('block');
            $('.container .contents-wrapper').addClass('hidden');

            $('.header-section nav a.active').removeClass('active');
        }
    }

});



$('.header-section nav #content-btn').click(function() {

    if ($('.container .contents-wrapper.hidden') && $('.container .home-wrapper.block')) {

        $('.container .contents-wrapper.hidden').removeClass('hidden');
        $('.container .home-wrapper.block').removeClass('block');


        $('.container .home-wrapper').addClass('hidden');
        $('.container .contents-wrapper').addClass('block');
    }

});

// window.onclick = function(event) {
//     $('.header-section nav a.active').removeClass('active');
// }

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }


// var dropdowns = document.getElementsByClassName("dropdown-content");
// var i;
// for (i = 0; i < dropdowns.length; i++) {
//     var openDropdown = dropdowns[i];
//     if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//     }
// }


// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//         document.getElementById('myDropdown').style.display = "none";
//     }
// }

// var up_btn = document.getElementById('up-btn');
// var down_btn = document.getElementById('down-btn');
// var mobile_wrapper = document.getElementById('mobile-wrapper');

// down_btn.addEventListener("click", function() {
//     mobile_wrapper.className = mobile_wrapper.className.replace(" up", " down");
// });


// up_btn.addEventListener("click", function() {
//     mobile_wrapper.className = mobile_wrapper.className.replace(" down", " up");
// });



// var page_toggle = document.getElementById('page-toggle');
// var page_2 = document.getElementById('page-2');
// var page_1 = document.getElementById('page-1');

// page_toggle.addEventListener("click", function() {

//     var ul = this.parentElement.parentElement.firstElementChild.firstElementChild;


//     ul.classList.toggle("page-two");
//     page_1.classList.toggle("new-hidden");
//     page_2.classList.toggle("new-hidden1");

// });