$(document).ready(function () {
    // Sticky menu(service section)
    $(".js--service-section").waypoint(function (direction) {
        if (direction == "down") {
            $("header").addClass("sticky")
        } else {
            $("header").removeClass("sticky")
        }
    });

    // Custom scroll top



    // Mixit Up js
    var mixer = mixitup('.gallery');

    // mobile-menu
    $(".cross").hide();
    $(".mobile-menu").hide();
    $(".hamburger").click(function () {
        $(".mobile-menu").slideToggle("slow", function () {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });

    $(".cross").click(function () {
        $(".mobile-menu").slideToggle("slow", function () {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });
    $(".mobile-menu li a").click(function () {
        $(".mobile-menu").hide();
        $(".cross").hide();
        $(".hamburger").show();
    });


    // Animated Progressbar Skill Section
    $('svg.radial-progress').each(function (index, value) {
        $(this).find($('circle.complete')).removeAttr('style');
    });

    $(window).scroll(function () {
        $('svg.radial-progress').each(function (index, value) {
            // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
            if (
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {
                // Get percentage of progress
                percent = $(value).data('percentage');
                // Get radius of the svg's circle.complete
                radius = $(this).find($('circle.complete')).attr('r');
                // Get circumference (2πr)
                circumference = 2 * Math.PI * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                // Transition progress for 1.25 seconds
                $(this).find($('circle.complete')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1250);
            }
        });
    }).trigger('scroll');


    
});


//Active menu item
// Get the container element
var menuContainer = document.getElementById("main-menu");

// Get all buttons with class="btn" inside the container
var menus = menuContainer.getElementsByClassName("menu-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < menus.length; i++) {
    menus[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", " ");
        this.className += " active";
    });
}


// Smooth Scroll for browser Compatibility
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//   Scroll Top 
function scrollToTop() {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
  }

  $("#scrolltop").hide()
  $(window).scroll(function () {
      var scrollPosition = $(this).scrollTop();
      if (scrollPosition < 500) {
          $("#scrolltop").fadeOut()
      } else {
          $("#scrolltop").fadeIn()
      }

  });




