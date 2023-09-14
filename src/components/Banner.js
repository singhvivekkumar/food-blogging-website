import React from "react";

const Banner = () => {
	return (
		<div className=" h-full w-full m-0 flex flex-col lg:flex-row-reverse ">
			{/* first container */}
			<div className=" relative w-full lg:w-1/2 flex ">
				<img alt="rectangle" src="images/Group 289.png" className="" />
				<img
					alt="vector"
					src="images/Vector 1.png"
					className=" absolute top-0 right-0 "
				/>
				<button className=" absolute top-6 right-6 lg:top-10 lg:right-10 rounded-full border text-xs lg:text-sm  border-white text-white p-2 px-4 ">
					Get in touch
				</button>
			</div>
			{/* second container */}
			<div className=" w-full lg:w-1/2 flex flex-col p-20 lg:space-y-16 ">
				{/* logo */}
				<div className=" hidden lg:block ">
					<img alt="food-truck" src="images/Screenshot_669 1.png" />
				</div>
				{/* content */}
				<div className=" flex flex-col items-center space-y-8">
					<span className=" text-center lg:text-left text-4xl text-[#0E2368] lg:text-6xl font-bold w-full lg:w-2/3">
						Discover the{" "}
						<span className=" font-sans text-red-500 ">Best</span>{" "}
						Food and Drinks
					</span>
					<span className=" text-xs text-center lg:text-left lg:text-lg lg:w-2/3 text-slate-600 ">
						Nat urally made Healthcare Products for the better care
						& support of your body.
					</span>
					<button className=" bg-red-500 text-white text-lg p-3 px-4 w-44 rounded-full">
						Explore Now!
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
