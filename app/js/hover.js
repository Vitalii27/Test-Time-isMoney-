var button = document.querySelector('.buy__container_column_btn_link')

var header = document.querySelector('.buy__container_column_title')

button.onmouseover = function(event) {
    var target = event.target;
    target.style.background = '#49cbcd';
    header.style.background = '#49cbcd';
};

button.onmouseout = function(event) {
    var target = event.target;
    target.style.background = '';
    header.style.background = '';
};