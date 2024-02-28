document.addEventListener("DOMContentLoaded", function() {
    var familyLink = document.querySelector('.family > a');
    var familyList = document.querySelector('.familys');

    familyLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        if (familyList.style.display === "none" || familyList.style.display === "") {
            familyList.style.display = "block";
            familyLink.classList.add('color');
        } else {
            familyList.style.display = "none";
            familyLink.classList.remove('color');
        }
    });
});
