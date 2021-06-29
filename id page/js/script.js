const LSK_setTheme = `local_storage_setTheme`;
const link = document.querySelector('.tema');
const background = document.querySelector('.background');

window.addEventListener(`load`, function(e) {
	changeThemeIdPage(loadData(LSK_setTheme));
})