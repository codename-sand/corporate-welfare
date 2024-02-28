window.addEventListener('load', function() {
    load('#js-load', '24');

    document.querySelector(".more_btn").addEventListener("click", function() {
        load('#js-load', '24', '.more_btn');
    });
});

function load(id, cnt, btn) {
    var girlsList = document.querySelectorAll(id + " .js-load:not(.active)");
    var girlsLength = girlsList.length;
    var girlsTotalCnt;
    
    if (cnt < girlsLength) {
        girlsTotalCnt = cnt;
    } else {
        girlsTotalCnt = girlsLength;
        if (btn) document.querySelector(btn).style.display = 'none';
    }

    for (var i = 0; i < girlsTotalCnt; i++) {
        girlsList[i].classList.add("active");
    }
}
