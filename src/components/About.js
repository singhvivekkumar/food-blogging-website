import React from "react";

const About = () => {
	return (
		<div className=" w-full h-full">
		<div className=" flex justify-evenly w-full h-[468px] bg-[#F0F1F7] px-10 lg:mt-36">
			<img alt="about" src="images/girl (lp).png" className=" hidden lg:block w-[384px] " />
			<div className=" flex flex-col justify-center items-center space-y-5 lg:w-1/3 ">
				<h2 className=" text-[#0E2368] font-bold text-center text-3xl ">About Us</h2>
				<span className="text-[#444957] text-sm text-center lg:text-left ">
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book. t has survived not only five centuries.
				</span>
				<button className=" max-w-fit bg-[#E23744] text-white text-sm rounded-full p-2 px-5 ">Read More</button>
			</div>
		</div>
		</div>
	);
};

export default About;
