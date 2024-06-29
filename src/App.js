import "./App.css";
import Accordian from "./components/Accordian.jsx";
import RandomColor from "./components/random-color/index.jsx";
import StarRating from "./components/star-rating/index.jsx";
import ImageSlider from "./components/image-slider/index.jsx";

function App() {
  return (
    <div className="App">
      {/*Accordian components */}
      {/* <Accordian/> */}

      {/* Random color component */}
      {/* <RandomColor/> */}

      {/* Star rating component */}
      {/* <StarRating noOfStars={5}/> */}

      {/* image slider component */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"4"}
      />
    </div>
  );
}

export default App;
