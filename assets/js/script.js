// DOM
const navbar = document.querySelector('.navbar');
const qa = document.querySelector('.qa');
const link = document.querySelector('.tema');
const theme = document.querySelector('select');
const background = document.querySelector('.background');



// storage key
const LSK_setTheme = `local_storage_setTheme`;



// saat load halaman
window.addEventListener(`load`, function() {
	changeTheme(loadData(LSK_setTheme))
	theme.value = `${loadData(LSK_setTheme) || `Dark`}`
});



//awal bar navigasi
navbar.addEventListener('click', function(event) {
	if(event.target.className == "hammenu"){
		qa.classList.toggle('show');
	}
});



// // ubah tema
theme.addEventListener('change', function(e) {
	const target = theme.value;
	upData(LSK_setTheme,target);
	changeTheme(loadData(LSK_setTheme));
	theme.value = `${loadData(LSK_setTheme)}`;
});