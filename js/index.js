var p = document.createElement('hide');
p.innerHTML = '<a href="#">Hide</a>';
function hide () {
    setTimeout(function () {
        document.getElementById('hide').style.display='none';
        document.getElementById('hide1').style.display='none';
    }, 10000);
    return false;
};

hide();
