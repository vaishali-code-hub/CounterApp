import "./styles.css";
import { useState } from "react";

export default function App() {
	const [
		counter,
		setCounter
	] = useState(0);
	const [
		counterArr,
		setCounterArr
	] = useState([]);
	const [
		active,
		setActive
	] = useState("");
	const handleClick = (event) => {
		setActive(event.target.id);
	};
	function increamentCounter() {
		setCounter(
			(prevCounter) =>
				prevCounter + 1
		);
	}

	function decreamentCounter() {
		if (counter > 0)
			setCounter(
				(prevCounter) =>
					prevCounter - 1
			);
	}
	function onGenerate() {
		let arr = [];
		for (
			let i = 1;
			i <= counter;
			i++
		) {
			arr.push(i);
		}
		console.log(
			"counterArr elements array : ",
			arr
		);
		setCounterArr(arr);
	}
	const boxes = counterArr.map(
		(elem, index) => {
			return (
				<div
					key={index}
					className={
						active ===
						index + ""
							? "active"
							: undefined
					}
					id={index}
					onClick={
						handleClick
					}
				>
					{index + 1}
				</div>
			);
		}
	);
	return (
		<div>
			<h1>
				Increment and Decrement
				counter
			</h1>

			<div className="container">
				<button
					onClick={
						decreamentCounter
					}
					className="btn"
				>
					-
				</button>
				<span className="counter">
					{counter}
				</span>
				<button
					onClick={
						increamentCounter
					}
					className="btn"
				>
					+
				</button>
			</div>
			<button
				onClick={onGenerate}
				className="btn"
			>
				Generate
			</button>

			<div className="box-container">
				{boxes}
			</div>
		</div>
	);
}

// Make it so that pressing “generate” creates as many boxes as the
// count value. Their content should be their position (index + 1).
