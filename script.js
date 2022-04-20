const container = document.querySelector('.container');
const jumbotron = document.querySelector('.jumbotron');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
    if (e.target.className == 'thumb') {
        jumbotron.src = e.target.src;
        jumbotron.classList.add('fade');
        setTimeout(function() {
            jumbotron.classList.remove('fade');
        }, 500);

        thumbs.forEach(function(i) {
            // if (i.classList.contains('ative')) {
            //     i.classList.remove('active');
            // }
            i.className = 'thumb';
        });
        
        e.target.classList.add('active');
    }
});