window.onload = function () {
    document.getElementById("tah_audio").play();
};

let btn = document.querySelector(".btn2");
btn.addEventListener("mouseover", function(){
    
    btn.style.top = (Math.floor(Math.random() * 300)+ 50) + 'px';
    btn.style.right = (Math.floor(Math.random() * 400)+ 150) + 'px';
    

});

// let btn1 = document.querySelector(".btn1");
// let span = document.querySelector(".span");

// btn1.addEventListener("click",function(){
//     span.innerHTML = "Than Hire me";
//     // document.querySelector(".span").style.width = "100%";
// });



function show() {
 
    /* Access image by id and change
    the display property to block*/
    document.getElementById('image100')
            .style.display = "block";

    document.getElementById('btnID')
            .style.display = "none";
}

function show1() {
 
    /* Access image by id and change
    the display property to block*/
    document.getElementById('span')
            .style.display = "block";

    document.getElementById('btnID')
            .style.display = "none";
}





$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Java Developer", "Software Developer", "Full-Stack Developer", "Web-Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Java Developer", "Software Developer", "Full-Stack Developer", "Web-Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

