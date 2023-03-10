document.addEventListener("DOMContentLoaded", function (event) {
	/* Проверка поддержки webp */
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});

	// плавная прокрутка к форме
	const buttons = document.querySelectorAll('.button-to');
	
	buttons.forEach(button => {
		button.addEventListener("click", function (e) {
			document.querySelector('.contact').scrollIntoView({
				behavior: 'smooth'
			});
		});
	})

});








