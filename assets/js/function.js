// FUNCTION MODULE


function upData(key,data) {
	localStorage.setItem(key, JSON.stringify(data));
}

function loadData(key) {
	return JSON.parse(localStorage.getItem(key));
}

function changeTheme(target) {
	if(target == 'Neon') {
		link.href = 'assets/css/neonUI.css';
		background.style.display = 'block';
	}

	if(target == 'Dark') {
		link.href = 'assets/css/darkUI.css';
		background.style.display = 'none';
	}
}



function changeThemeIdPage(target) {
	if(target == 'Neon') {
		link.href = '../assets/css/neonUI.css';
		background.style.display = 'block';
	}

	if(target == 'Dark') {
		link.href = '../assets/css/darkUI.css';
		background.style.display = 'none';
	}
}