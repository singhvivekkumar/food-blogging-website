import React, { useState } from "react";

const firstArticles = [
	{
		name: "Grilled Tomatoes at Home",
		url: "images/firstArticles/grilled-tomatoes-1-846x846 3.png",
		text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
	},
	{
		name: "Snacks for Travel",
		url: "images/firstArticles/grilled-tomatoes-1-846x846 4.png",
		text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
	},
	{
		name: "Post-workout Recipes",
		url: "images/firstArticles/grilled-tomatoes-1-846x846 5.png",
		text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
	},
];

const secondArticles = [
	{
		name: "How to Grill corn",
		url: "images/secondArticles/grilled-tomatoes-1-846x846 6.png",
		text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
	},
	{
		name: "Crunchwrap Supreme",
		url: "images/secondArticles/grilled-tomatoes-1-846x846 7.png",
		text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
	},
	{
		name: "Broccoli Cheese Soup",
		url: "images/secondArticles/grilled-tomatoes-1-846x846 8.png",
		text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
	},
];

const Articles = () => {
	const [counter, setCounter] = useState(1);

	let cardsList;
	if (counter === 2) {
		cardsList = secondArticles;
	} else {
		cardsList = firstArticles;
	}

	return (
		<div className=" flex flex-col p-10 pt-16 lg:px-36  ">
			{/* Latest Articles */}
			<div className=" text-4xl lg:text-5xl font-bold text-[#0E2368] mb-12">
				Latest Articles
			</div>

			{/* cards */}
			<div className=" flex flex-col space-y-7 items-center lg:items-baseline lg:flex-row justify-between">
				{cardsList.map((item) => {
					return (
						<div
							key={item.name}
							className=" flex flex-col space-y-5 border w-80 lg:w-[22rem] border-slate-300 bg-slate-50 rounded-3xl pt-3 pb-6 px-6">
							<img
								alt={item?.name}
								src={item.url}
								className=" my-2 "
							/>
							<div className=" flex flex-col items-center lg:items-start space-y-4">
								<span className=" text-[#0E2368] text-center text-[1.35rem] lg:text-right font-bold lg:text-[1.5rem] ">
									{item?.name}
								</span>
								<span className=" text-sm lg:text-xs line-clamp-5 lg:line-clamp-3 ">
									{item?.text}
								</span>
								<button className=" border border-black p-2 px-5 text-sm rounded-full ">
									Read More
								</button>
							</div>
						</div>
					);
				})}
			</div>

			{/* button */}
			<div className=" flex justify-center items-center space-x-4 text-sm py-10 ">
				<button
					onClick={() => setCounter(1)}
					className=" w-6 pb-1 px-1 rounded-md border border-slate-700 visited:bg-slate-200 ">
					&lt;
				</button>
				<span className=" text-xl">{counter}/2</span>
				<button
					onClick={() => setCounter(2)}
					className=" w-6 pb-1 px-1 rounded-md border border-slate-700 visited:bg-slate-200 ">
					&gt;
				</button>
			</div>
		</div>
	);
};

export default Articles;
