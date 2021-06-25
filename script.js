//awal bar navigasi
const navbar = document.querySelector('.navbar');
const qa = document.querySelector('.qa');

navbar.addEventListener('click', function(event) {
	// console.log(event.target);

	if(event.target.className == "hammenu"){
		qa.classList.toggle('show');
	}
});


// akhir bar navigasi


// // ubah tema

const link = document.querySelector('.tema');
const theme = document.querySelector('select');

const background = document.querySelector('.background');

theme.addEventListener('change', function(event) {
	// console.log(event.target.value);
	if(event.target.value == 'Neon') {
		link.href = 'neonUI.css';
		background.style.display = 'block';
	}
	if(event.target.value == 'Dark') {
		link.href = 'darkUI.css';
		background.style.display = 'none';
	}
});


// // akhir ubah tema