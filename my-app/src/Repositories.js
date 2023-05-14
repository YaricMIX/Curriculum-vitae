import { useState, useEffect } from 'react';

export function GitHubRepositories({ username }) {
	const [repositories, setRepositories] = useState([]);

	useEffect(() => {
		const fetchRepositories = async () => {
		try {
			const response = await fetch(`https://api.github.com/users/${username}/repos`);
			const data = await response.json();
			setRepositories(data);
		} catch (error) {
			console.log('Error fetching repositories:', error);
		}
		};

		fetchRepositories();
	}, [username]);

	return (
		<div>
		<h2>GitHub Repositories</h2>
		{repositories.length > 0 ? (
			<ul>
			{repositories.map((repo) => (
				<li key={repo.id}>
				<a href={repo.html_url} target="_blank" rel="noopener noreferrer">
					{repo.name}
				</a>
				</li>
			))}
			</ul>
		) : (
			<p>No repositories found.</p>
		)}
		</div>
	);
}
