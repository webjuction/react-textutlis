import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import About from "./component/About";
import Alertmsg from "./component/Alertmsg";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Helmet } from 'react-helmet';


function App() {
  const [mode, setMode] = useState("Light");
  const [colorMode, setColorMode] = useState({
    backgroundColor: "white",
    color: "black",
  });

  const [alert, setAlert] = useState(false);

  const showcostumMsg = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    setMode("Dark");
    if (mode === "Light") {
      console.log(mode);
      setColorMode({
        backgroundColor: "Black",
        color: "White",
      });
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showcostumMsg("Dark Mode Enable!", "success");
    } else {
      console.log(mode);
      setMode("Light");
      setColorMode({
        backgroundColor: "White",
        color: "Black",
      });
      document.body.style.backgroundColor = "White";
      document.body.style.color = "black";
      showcostumMsg("Light Mode Enable!", "success");
    }
  };

  const SetCostumColor = () => {
    const bgColorPicker = document.getElementById("bgColorPicker").value;
    const textColorPicker = document.getElementById("textColorPicker").value;
    setColorMode({
      backgroundColor: bgColorPicker,
      color: textColorPicker,
    });
    document.body.style.backgroundColor = bgColorPicker;
    document.body.style.color = textColorPicker;
    showcostumMsg("Costum Color Mode Enable!", "success");
  };
  return (
    <>
  <Router>
<Navbar
          pageName="Textutils"
          colorMode={colorMode}
          toggleMode={toggleMode}
          SetCostumColor={SetCostumColor}
        />
        <Alertmsg alert={alert} />
       
    
       

        <Routes>
        <Route exact path="/" element={<div>
        <Helmet>
            <title>Textutils -Home</title>
          </Helmet>
          <Textform heading="Enter your text here!" colorMode={colorMode} showcostumMsg={showcostumMsg} />
          </div>}/>
          <Route exact path="/about" element={<div> <Helmet>
            <title>Textutils -About</title>
          </Helmet><About colorMode={colorMode}  /> </div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
