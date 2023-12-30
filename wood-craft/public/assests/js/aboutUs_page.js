document.addEventListener("DOMContentLoaded", function () {
    var images = ["image1.jpg", "image2.jpg", "image3.jpg"];
    var index = 0;
    var cardWithBackground = document.querySelector('.card-with-background');

    function changeBackground() {
        cardWithBackground.style.backgroundImage = "url('images/" + images[index] + "')";
        cardWithBackground.style.backgroundSize = "cover";
        cardWithBackground.style.backgroundRepeat = "no-repeat";
        cardWithBackground.style.backgroundPosition = "center";
        index = (index + 1) % images.length;
    }

    setInterval(changeBackground, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
    var teamMembers = document.querySelectorAll('.team-member');
    var currentIndex = 0;

    function updateTeamMembers() {
        for (var i = 0; i < teamMembers.length; i++) {
            if (i >= currentIndex && i < currentIndex + 3) {
                teamMembers[i].style.display = "block";
            } else {
                teamMembers[i].style.display = "none";
            }
        }
    }

    window.showPrevious = function () {
        currentIndex = Math.max(0, currentIndex - 3);
        updateTeamMembers();
    };

    window.showNext = function () {
        currentIndex = Math.min(teamMembers.length - 3, currentIndex + 3);
        updateTeamMembers();
    };

    // Initially show the first three team members
    updateTeamMembers();
});





