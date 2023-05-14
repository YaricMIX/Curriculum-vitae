import { useState } from 'react';

export function CounterExperience() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div>
		<h2>Counter</h2>
		<p>Count: {count}</p>
		<button onClick={increment}>Increase</button>
		<button onClick={decrement}>Reduce</button>
		</div>
	);
}
