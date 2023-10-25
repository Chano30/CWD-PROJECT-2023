$(document).ready(function(){
// for side nav
$('.sidenav').sidenav({
    edge: 'right'
});




$(document).ready(function(){
$('.sidenav').sidenav({
    edge: "right",
    inDuration: 400,
    outDuration:300
});
});


$(document).ready(function(){

    $('.collapsible').collapsible();
});

// Collapsible cards

const collapHead = document.getElementById('collap-head');
const collapBell = document.getElementById('bell');
const collapBodies = document.getElementsByClassName('collapsible-body');

function updateCollapsible() {
    var bodyWidth = $('.about-section').width();

    if (bodyWidth < 600) {
        collapHead.classList.remove('active');
        collapBell.classList.add('fa-shake');
        for (let i = 0; i < collapBodies.length; i++) {
            collapBodies[i].style.display = "none";
        }
    } else {
        collapHead.classList.add('active');
        collapBell.classList.remove('fa-shake');
        for (let i = 0; i < collapBodies.length; i++) {
            collapBodies[i].style.display = "block";
        }
    }
}

updateCollapsible();

collapHead.addEventListener('click', function() {
    if(!collapHead.classList.contains('active')){
        collapBell.classList.remove('fa-shake')
    } else {
        collapBell.classList.add('fa-shake')
    }
});

var heroSectionWidth = $('.hero-section').width();



$(document).ready(function(){
// Function to update the floating action button based on the hero section width
function updateFloatingActionButton(){
    // Select the element with the class "hero-section" using jQuery
    

    if (heroSectionWidth > 400) {
    $('.fixed-action-btn').floatingActionButton({
        direction: 'top'
    }, 
    document.getElementById('floating-btn').classList.remove('direction-left')
    );
    } else {
    $('.fixed-action-btn').floatingActionButton({
        direction: 'left'
    });
    }
};
// Call the function on document ready
updateFloatingActionButton();

// Attach a resize event handler to the window
$(window).resize(function() {
    updateFloatingActionButton();
    updateCollapsible();
});

});


// Slider 
$(document).ready(function(){
    $('.slider').slider({
        indicators: true,
        height: 450,
        duration:500,
        interval: 2000
    });
});

// scrollspy
// $(document).ready(function(){
//     $('.scrollspy').scrollSpy({
//         throttle:0
//     }
// });

const arrowButton = document.getElementById('arrow-up-icon');

window.onscroll=function() {myFunction()};

function myFunction(){
if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
    document.getElementById("floating-btn").classList.add("hide-btn");
    arrowButton.classList.remove('hide-btn')
} else {
    document.getElementById("floating-btn").classList.remove("hide-btn");
    arrowButton.classList.add('hide-btn');
}
};
$(document).ready(function(){
$('.parallax').parallax();
});




//image hide
// $('.blck-logo').hover(function(){
//     $('.blck-logo').hide();
//     $('.red-logo').show();
// });


$(".nav-item").click(function() {  
    $(".nav-item").removeClass("active"); // This will remove active classes from all <li> tags
    $(this).addClass("active"); // This will add active class in clicked <li>   
    });
});


// Tabs

$(document).ready(function(){
    $('.tabs').tabs({
        swipeAble: true,
        responsiveThreshold: 400
    });
});

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});
        
$('.carousel.carousel-slider-1').carousel({
    fullWidth: true,
    indicators: true
});









// startImageTransition(); 
    
// function startImageTransition() { 

//     // images stores list of all images of 
//     // class test. This is the list of images 
//     // that we are going to iterate 
//     var images = document.getElementsByClassName("fade"); 

//     // Set opacity of all images to 1 
//     for (var i = 0; i < images.length; ++i) { 
//         images[i].style.opacity = 1; 
//     } 

//     // Top stores the z-index of top most image 
//     var top = 1; 

//     // cur stores the index of the image currently 
//     // on top images list contain images in the  
//     // same order they appear in HTML code  
//     /* The tag with class test which appears last 
//         will appear on top of all the images thus, 
//         cur is set to last index of images list*/
//     var cur = images.length - 1; 

//     // Call changeImage function every 3 second 
//     // changeImage function changes the image 
//     setInterval(changeImage, 4000); 

//     // Function to transitions from one image to other 
//     async function changeImage() { 

//         // Stores index of next image 
//         var nextImage = (1 + cur) % images.length; 

//         // First set the z-index of current image to top+1 
//         // then set the z-index of nextImage to top 
//         /* Doing this make sure that the image below 
//             the current image is nextImage*/
//         // if this is not done then during transition 
//         // we might see some other image appearing 
//         // when we change opacity of the current image 
//         images[cur].style.zIndex = top + 1; 
//         images[nextImage].style.zIndex = top; 

//         // await is used to make sure 
//         // the program waits till transition() 
//         // is completed 
//         // before executing the next line of code 
//         await transition(); 

//         // Now, the transition function is completed 
//         // thus, we can say that the opacity of the 
//         // current image is now 0 

//         // Set the z-index of current image to top 
//         images[cur].style.zIndex = top; 

//         // Set the z-index of nextImage to top+1 
//         images[nextImage].style.zIndex = top + 1; 

//         // Increment top 
//         top = top + 1; 

//         // Change opacity of current image back to 1 
//         // since zIndex of current is less than zIndex 
//         // of nextImage 
//         /* changing it's opacity back to 1 will not 
//             make the image appear again*/
//         images[cur].style.opacity = 1; 

//         // Set cur to nextImage 
//         cur = nextImage; 
//     } 

//     /* This function changes the opacity of 
//     current image at regular intervals*/
//     function transition() { 
//         return new Promise(function (resolve, reject) { 

//             // del is the value by which opacity is 
//             // decreased every interval 
//             var del = 0.01; 

//             // id stores ID of setInterval 
//             // this ID will be used later 
//             // to clear/stop setInterval 
//             // after we are done changing opacity 
//             var id = setInterval(changeOpacity, 10); 

//             // changeOpacity() decreasing opacity of 
//             // current image by del 
//             // when opacity reaches to 0, we stops/clears 
//             // the setInterval and resolve the function 
//             function changeOpacity() { 
//                 images[cur].style.opacity -= del; 
//                 if (images[cur].style.opacity <= 0) { 
//                     clearInterval(id); 
//                     resolve(); 
//                 } 
//             } 
//         }) 
//     } 
// } 