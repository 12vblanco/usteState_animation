import Filter from "./Filter.js";

function App() {
  return (
    <>
      <Filter></Filter>
    </>
  );
}

export default App;

// import { useState } from "react";
// import "./style.css";

// const mountedStyle = { animation: "inAnimation 250ms ease-in" };
// const unmountedStyle = {
//   animation: "outAnimation 270ms ease-out",
//   animationFillMode: "forwards",
// };

// export default function App() {
//   const [showDiv, setShowDiv] = useState(false);
//   return (
//     <div className="App">
//       <button onClick={() => setShowDiv(!showDiv)}>Show/Hide</button>
//       <div
//         className="transitionDiv"
//         style={showDiv ? mountedStyle : unmountedStyle}
//       ></div>
//     </div>
//   );
// }
