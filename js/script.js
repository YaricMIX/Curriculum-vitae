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

fetch('https://api.github.com/users/YaricMIX/repos')
.then(response => response.json())
.then(data => {
	data.forEach(repo => {
		const projectList = document.getElementById('projects-list');
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.href = repo.html_url;
		a.textContent = repo.full_name;
		li.appendChild(a);
		if (repo.description) {
			const p = document.createElement('p');
			p.textContent = repo.description;
			li.appendChild(p);
		}
		projectList.appendChild(li);
	});
})
.catch(error => console.error(error));