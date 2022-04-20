const container = document.querySelector('.container');
const jumbotron = document.querySelector('.jumbotron');
container.addEventListener('click', function(e) {
    if (e.target.className == 'thumb') {
        jumbotron.src = e.target.src;
        jumbotron.classList.add('fade');
        setTimeout(function() {
            jumbotron.classList.remove('fade');
        }, 500);

        e.target.classList.add('active');
    }
});