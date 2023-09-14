import React from "react";

const Footer = () => {
	return (
		<div className=" flex flex-col lg:flex-row bg-slate-100 p-10 ">

			<div className=" flex justify-center items-center p-16 lg:p-2 lg:w-1/4 ">
				<img alt="logo" src="images/Screenshot_669 1.png" className=" w-40 h-32" />
			</div>

			<div className=" flex flex-col  space-y-3 lg:w-1/4 p-10 ">
				<h2 className=" font-semibold text-[#0E2368] text-xl">Contact Us</h2>
				<ul className=" flex flex-col space-y-3 ">
					<li className=" font-normal text-[#646874] text-sm ">
						Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate
						near YTM Market, XYZ-343434
					</li>
					<li className=" text-[#646874] text-sm ">example2020@gmail.com</li>
					<li className=" text-[#646874] text-sm ">(904) 443-0343</li>
				</ul>
			</div>

			<div className=" flex flex-col space-y-3 lg:w-1/4 p-10 lg:pl-40">
				<h2 className=" font-semibold text-[#0E2368] text-xl ">More</h2>
				<ul className=" flex flex-col space-y-3">
					<li className=" text-[#646874] text-sm ">About Us</li>
					<li className=" text-[#646874] text-sm ">Products</li>
					<li className=" text-[#646874] text-sm ">Career</li>
					<li className=" text-[#646874] text-sm ">Contact Us</li>
				</ul>
			</div>

			<div className=" flex flex-col lg:flex-col-reverse lg:w-1/4 items-center space-y-2 justify-evenly p-10 ">
				<p className=" text-sm my-4 text-slate-500">© 2022 Food Truck Example</p>
				<h2 className=" text-xl font-semibold hidden lg:block text-[#0E2368] order-2 ">Social Media</h2>
				<ul className=" flex justify-center space-x-5 ">
					<li><img alt="instagram" src="images/icons/instagram.png" className=" h-4 w-4" /></li>
					<li><img alt="twitter" src="images/icons/twitter.png" className=" h-4 w-4" /></li>
					<li><img alt="facebook" src="images/icons/facebook.png" className=" h-4 w-4" /></li>
					
				</ul>
			</div>
		</div>
	);
};

export default Footer;
