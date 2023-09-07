var reset = document.querySelecotr('#clear');

//EventListener will clear scores and store them.
reset.addEventListener('click', function () {
    location.reload();
    localStorage.clear();
})

