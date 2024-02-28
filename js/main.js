document.addEventListener("DOMContentLoaded", function() {
    var list = document.querySelectorAll('.main_slide li');
    var m_num = 0;

    document.querySelector('.next_btn').addEventListener("click", function() {
        if (m_num >= list.length - 1) {
            m_num = -1;
        }
        m_num++;
        document.querySelectorAll('.main_slide li').forEach(function(item) {
            item.style.opacity = '0';
        });
        list[m_num].style.opacity = '1';
        return false;
    });

    document.querySelector('.prev_btn').addEventListener("click", function() {
        if (m_num <= 0) {
            m_num = list.length;
        }
        m_num--;
        document.querySelectorAll('.main_slide li').forEach(function(item) {
            item.style.opacity = '0';
        });
        list[m_num].style.opacity = '1';
        return false;
    });
});
