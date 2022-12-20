/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('.button-link');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function(в) {
	alert('В понимании')
})
