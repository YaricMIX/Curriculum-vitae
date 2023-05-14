import { useState } from 'react';
import { Study } from './Learning';

export function Studies() {
	const [studies, setStudies] = useState([]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [name, setName] = useState('');
	const [link, setLink] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		const newStudy = {
			title: title,
			description: description,
			name: name,
			link: link,
		};
	
		setStudies([...studies, newStudy]);
	
		setTitle('');
		setDescription('');
		setName('');
		setLink('');
		};
	
		return (
		<div>
			<h2>Learning experience</h2>
	
			<form onSubmit={handleSubmit}>
			<label>
				Name of the institution:
				<input
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Description:
				<input
				type="text"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				/>
			</label>
			<br />
			<label>
				The company name:
				<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Link:
				<input
				type="text"
				value={link}
				onChange={(e) => setLink(e.target.value)}
				/>
			</label>
			<br />
			<button type="submit">Add</button>
			</form>
	
			{studies.map((study, index) => (
			<Study
				key={index}
				title={study.title}
				description={study.description}
				name={study.name}
				link={study.link}
			/>
			))}
		</div>
		);
}