export const appStyle = {
  textAlign: "center",
  backgroundImage: "linear-gradient(to top,#ff8177 0%,#fbc2eb 100%)",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  padding: "20px",
  borderRadius: "10px",
  minHeight: "100vh", // Allow dynamic growth
  boxSizing: "border-box", // Ensure padding is included in height calculations
};

  export const inputStyle = {
    padding: "0.1rem 1em",
    marginTop: "2em",
    borderRadius: "20px",
    border: "none",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontSize: "15px",
    fontWeight: "bold",
    height: "35px",
    width: "60%",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  };
  export const buttonStyle = {
    margin: "1em 0.5em",
    fontSize: "0.9em",
    borderRadius: "20px",
    border: "none",
    fontFamily: "'Segoe UI', Tahoma, Geneva , Verdana, sans-serif",
    backgroundColor: "#ffffff70",
    color: "#242424",
    fontSize: "15px",
    fontWeight: "bold",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    height: "38px",
    width: "100px",
    top: "-2px",
    color: "#242424",
    cursor: "pointer",
  };
  export const rowStyle = {
    display: "flex",
    gap: "10px",
    justifyContent: "flex-start",
    alignItems: "center",
  };
  export const boxStyles = {
    backgroundColor: "#ff0000",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    overflow: "hidden",
  };
  export const innerBoxStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "50px",
    marginTop: "-10px",
    marginLeft: "-10px",
    overflow: "hidden",
  };
  
  export const qrStyles = {
    padding: "1em",
    marginTop: "1em",
    borderRadius: "10px",
  };
  export const rowContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "1em",
    backgroundColor: "#ffffff70",
    alignItems: "center",
    borderRadius: "10px",
  };
  export const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Reduced opacity
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    backdropFilter: "blur(8px)",  // Blur effect applied behind popup
  };
  
  export const popupStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px",
    width: "60%",       // Set desired width
    maxWidth: "500px",  // Limit maximum width for small screens
    margin: "0 auto",   // Center the popup
  };
  

  export const qrContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px", // Space below the QR code
  };
  

export const titleStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "15px", // Add spacing below the title
};

export const buttonContainerStyle = {
  display: "flex",
  gap: "10px",       // Space between buttons
  justifyContent: "center",
  marginTop: "20px", // Space above buttons
};
