import React, { useEffect, useState } from "react";
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
  popupStyle,
  overlayStyle,
  titleStyle,
  qrContainerStyle,
  buttonContainerStyle,
} from "./Styles/style";

function App() {
  const [temp, setTemp] = useState("");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [size, setSize] = useState(100);
  const [qrCode, setQrCode] = useState("");
  const [word, setWord] = useState("React");
  const [qrList, setQrList] = useState([]);
  const [page, setPage] = useState(0);
  const [selectedQr, setSelectedQr] = useState(null);

  const itemsPerPage = 5; // Number of items per page

  const handleTextChange = (e) => setTemp(e.target.value);
  const handleBgColorChange = (e) => setBgColor(e.target.value);
  const handleDimensionChange = (e) => setSize(e.target.value);

  useEffect(() => {
    setQrCode(
      `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${word}`
    );
  }, [word, size, bgColor]);

  const handleGenerate = (e) => {
    e.preventDefault();
    if (temp.trim() !== "") {
      setWord(temp);
      const newQr = {
        qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${temp}`,
        bgColor: bgColor,
        size: size,
        word: temp,
      };
      setQrList((prevList) => [...prevList, newQr]);
      setTemp(""); // Clear the input field after generating
    }
  };

  const handleRemoveQr = (index) => {
    setQrList((prevList) => {
      const updatedList = prevList.filter((_, idx) => idx !== index);
      const totalPages = Math.ceil(updatedList.length / itemsPerPage);
      if (page >= totalPages && totalPages > 0) {
        setPage(totalPages - 1); // Adjust page if necessary
      }
      return updatedList;
    });
  };

  const startIndex = page * itemsPerPage;
  const currentItems = qrList.slice(startIndex, startIndex + itemsPerPage);

  const handleShowMore = () => {
    if (startIndex + itemsPerPage < qrList.length) {
      setPage(page + 1);
    }
  };

  const handlePrevious = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleQrClick = (qr) => setSelectedQr(qr);
  const closePopup = () => setSelectedQr(null);

  return (
    <div style={appStyle}>
      <h1>QR Code Generator</h1>
      <form onSubmit={handleGenerate}>
        <div>
          <Input
            style={inputStyle}
            type="text"
            placeholder="Enter Your Text to Encode"
            value={temp}
            handleOnChange={handleTextChange}
          />
          <Button text="Generate" type="submit" />
        </div>
        <div style={rowContainerStyle}>
          <div style={rowStyle}>
            <h5>Background Color</h5>
            <div style={boxStyles}>
              <div style={innerBoxStyles}>
                <Input
                  type="color"
                  style={{ border: "none", width: "50px", height: "50px" }}
                  defaultValue={"#ffffff"}
                  handleOnChange={handleBgColorChange}
                />
              </div>
            </div>
            <h5>{`#${bgColor}`}</h5>
            <Input
              type="range"
              min={200}
              max={300}
              value={size}
              style={{ width: "200px", accentColor: "cf505f" }}
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
          style={{ ...qrStyles, backgroundColor: `#${bgColor}` }}
          src={qrCode}
          alt="QR Code"
        />
      </div>
      <Button
        text="Download"
        type="button"
        onClick={() => {
          fetch(qrCode)
            .then((res) => res.blob())
            .then((blob) => {
              const url = window.URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.href = url;
              link.download = `QRCode_${new Date().toISOString()}.png`;
              link.click();
              window.URL.revokeObjectURL(url);
            });
        }}
      />

      <h2>Generated QR Codes</h2>
      <div>
        {currentItems.map((qr, index) => (
          <div
            key={index}
            style={{
              margin: "10px 0",
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: "#fff",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <img
              src={qr.qrCode}
              alt={`QR Code ${index}`}
              style={{
                width: `${qr.size}px`,
                height: `${qr.size}px`,
                backgroundColor: `#${qr.bgColor}`,
              }}
              onClick={() => handleQrClick(qr)}
            />
            <p style={{ margin: "5px 0", fontWeight: "bold" }}>{qr.word}</p>
            <span
              style={{
                position: "absolute",
                top: "5px",
                right: "10px",
                cursor: "pointer",
                color: "red",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={() => handleRemoveQr(startIndex + index)}
            >
              ×
            </span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        {page > 0 && <Button text="Previous" handleOnClick={handlePrevious} />}
        {startIndex + itemsPerPage < qrList.length && (
          <Button text="Show More" handleOnClick={handleShowMore} />
        )}
      </div>

      {selectedQr && (
        <div style={overlayStyle}>
          <div style={popupStyle}>
            <div style={titleStyle}>QR Code</div>
            <div style={qrContainerStyle}>
              <img
                src={selectedQr.qrCode}
                alt="Selected QR Code"
                style={{
                  width: `${selectedQr.size}px`,
                  height: `${selectedQr.size}px`,
                  backgroundColor: `#${selectedQr.bgColor}`,
                }}
              />
            </div>
            <div style={buttonContainerStyle}>
              <Button
                text="Download"
                type="button"
                onClick={() => {
                  fetch(selectedQr.qrCode)
                    .then((res) => res.blob())
                    .then((blob) => {
                      const url = window.URL.createObjectURL(blob);
                      const link = document.createElement("a");
                      link.href = url;
                      link.download = `QRCode_${selectedQr.word}.png`;
                      link.click();
                      window.URL.revokeObjectURL(url);
                    });
                }}
              />
              <Button text="Close" handleOnClick={closePopup} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
