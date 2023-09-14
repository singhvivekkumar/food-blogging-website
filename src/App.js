import "./App.css";
// import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const Layout = () => {
	return (
		<div className=" flex flex-col m-0 w-full">
			{/* <Header /> */}
			<Body />
			<Footer />
		</div>
	);
};

function App() {
	return (
		<div className="">
			<Layout />
		</div>
	);
}

export default App;
