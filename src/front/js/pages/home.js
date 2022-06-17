import React, { useState } from "react";
import "../../styles/home.css";

export const Home = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="text-center body counter">
			<h2>[ {count} ]</h2>
			<button onClick={() => setCount(count + 1)}>
				+
			</button>
			<button onClick={() => setCount(count - 1)}>
				-
			</button>			
		</div>
	);
};
