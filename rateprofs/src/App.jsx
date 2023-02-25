import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/nav";
import MainPageCard from "./components/mainpagecard";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar></NavBar>
      <MainPageCard></MainPageCard>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        {/* <Route path="/about" element={<AboutUs />}></Route> */}
      </Routes>
    </div>
  );
}

// const Home = () => {
//   return <div>Home</div>;
// };
// const AboutUs = () => {
//   return <div>About Us</div>;
// };

export default App;
