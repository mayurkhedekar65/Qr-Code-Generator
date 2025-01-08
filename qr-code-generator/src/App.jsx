import { useEffect, useState } from "react";
import Input from "./Components/Input";
import Button from "./Components/Button";
import {
  appStyle,
  boxStyles,
  innerBoxStyles,
  rowContainerStyle,
  rowStyle,
  qrStyles,
  inputStyle,
} from "./Styles/style";

function App() {

  const [temp, setTemp] = useState("");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [size, setSize] = useState(100);
  const [qrCode, setQrCode] = useState("");
  const [word, setWord] = useState("React");


  const handleTextChange = (e) => {
    if (e.target.value.trim() !== "") {
      setTemp(e.target.value);
    }
  };
  const handleBgColorChange = (e) => {
    setBgColor(e.target.value);
  };
  const handleDimensionChange = (e) => {
    setSize(e.target.value);
  };

  useEffect(() => {
    setQrCode(
      `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${word}`
    );
  }, [word, size, bgColor]);

  const handleGenerate = (e) => {
    //Prevent form submission behavior
    e.preventDefault();

    if (temp.trim() !== "") {
      setWord(temp);
    }
  };

  return (
    <div style={appStyle}>
      <h1>Qr Code Generator</h1>
      <form onSubmit={handleGenerate}>
        <div>
          <Input style={inputStyle} 
          type="text"
            placeholder="Enter Your Text to Encode"
            handleOnChange={handleTextChange} />
          <Button
            text="Generate"
            type="submit"
          />
        </div>
        <div style={rowContainerStyle}>
          <div style={rowStyle}>
            <h5>Background Color</h5>

            <div style={boxStyles}>
              <div style={innerBoxStyles}>
                <Input type="color"
                  style={{ border: "none", width: "50px", height: "50px" }}
                  defaultValue={"#ffffff"}
                  handleOnChange={handleBgColorChange} />
              </div>
            </div>
            <h5>{`#${bgColor}`}</h5>
            <Input
              type="range"
              min={200}
              max={300}
              value={size}
              style={{
                width: "200px",
                accentColor: "cf505f",
              }}
              handleOnChange={handleDimensionChange}
            />
            <h5>
              {size}px X {size}px
            </h5>
          </div>
        </div>
      </form>
      <div>
        <img
          style={{
            ...qrStyles,
            backgroundColor: `#${bgColor}`,
          }}
          src={qrCode}
          alt="QR Code"
        />
      </div>
      <a href={qrCode} download="QRCode">
        <Button text="Download" type="button" />
      </a>
    </div>
  )
}

export default App
