function toggleZoom(img) {
	if (img.classList.contains('zoomed')) {
		zoomOut(img);
	} else {
		zoomIn(img);
	}
}

function zoomIn(img) {
	let currentWidth = img.offsetWidth;
	let currentHeight = img.offsetHeight;
	let targetWidth = currentWidth * 1.2;
	let targetHeight = currentHeight * 1.2;
	let duration = 500;

	img.classList.add('zoomed');

	let startTime = null;

function animate(timestamp) {
	if (!startTime) startTime = timestamp;
		let elapsed = timestamp - startTime;
		let progress = elapsed / duration;
	if (progress > 1) progress = 1;
		let newWidth = currentWidth + (targetWidth - currentWidth) * progress;
		let newHeight = currentHeight + (targetHeight - currentHeight) * progress;
		img.style.width = newWidth + 'px';
		img.style.height = newHeight + 'px';
	if (progress < 1) {
		window.requestAnimationFrame(animate);
		}
	}
	window.requestAnimationFrame(animate);
}

function zoomOut(img) {
	let currentWidth = img.offsetWidth;
	let currentHeight = img.offsetHeight;
	let targetWidth = currentWidth / 1.2;
	let targetHeight = currentHeight / 1.2;
	let duration = 500;

	img.classList.remove('zoomed');

	let startTime = null;

function animate(timestamp) {
	if (!startTime) startTime = timestamp;
		let elapsed = timestamp - startTime;
		let progress = elapsed / duration;
	if (progress > 1) progress = 1;
		let newWidth = currentWidth + (targetWidth - currentWidth) * progress;
		let newHeight = currentHeight + (targetHeight - currentHeight) * progress;
		img.style.width = newWidth + 'px';
		img.style.height = newHeight + 'px';
	if (progress < 1) {
		window.requestAnimationFrame(animate);
		}
	}
	window.requestAnimationFrame(animate);
}

function handleKeyPress(event) {
	const keyCode = event.keyCode || event.which;
	if (keyCode >= 65 && keyCode <= 90) {
		const letter = String.fromCharCode(keyCode);
		const div = document.querySelector(`div[id^="${letter.toLowerCase()}"]`);
	if (div) {
		div.scrollIntoView({behavior: 'smooth'});
		}
	}
}
	window.addEventListener('keydown', handleKeyPress);

class GithubAPI {
	constructor(token, username) {
		this.token = token;
		this.username = username;
	}

	async getRepos() {
		const url = `https://api.github.com/users/${this.username}/repos`;
		const headers = new Headers({
		'Authorization': `Basic ${btoa(`${this.username}:${this.token}`)}`,
		});
		const response = await fetch(url, { headers });
		const data = await response.json();
	return data;
	}
}

async function displayProjects() {
	const token = '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';
	const username = 'YaricMIX';
	const github = new GithubAPI(token, username);
	const projectsList = document.getElementById('projects-list');
	try {
	const repos = await github.getRepos();
		repos.forEach((repo) => {
		const { full_name, html_url, description } = repo;
		const listItem = document.createElement('li');
		const link = document.createElement('a');
		link.href = html_url;
		link.textContent = full_name;
		listItem.appendChild(link);
		if (description) {
			const descriptionElem = document.createElement('p');
			descriptionElem.textContent = description;
			listItem.appendChild(descriptionElem);
		}
		projectsList.appendChild(listItem);
	});
	} catch (error) {
		console.error(error);
		projectsList.textContent = 'Failed to load projects.';
	}
}
window.addEventListener('load', displayProjects);
