import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (includeNumbers) {
      chars += "0123456789";
    }

    if (includeSymbols) {
      chars += "!@#$%^&*";
    }

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(result);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  };
  //outer container
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        fontFamily: "Arial, sans-serif",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h2>Password Generator</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={password}
          readOnly
          placeholder="Generated password will appear here"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            marginBottom: "10px",
          }}
        />
        <button onClick={copyPassword} disabled={!password}>
          Copy Password
        </button>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Length: {length}</label>
        <input
          type="range"
          min="6"
          max="30"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          style={{ width: "100%", marginTop: "5px" }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <div>
          <input
            type="checkbox"
            id="numbers"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          <label htmlFor="numbers"> Include Numbers</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="symbols"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          <label htmlFor="symbols"> Include Symbols</label>
        </div>
      </div>

      <button
        onClick={generatePassword}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Generate Password
      </button>
    </div>
  );
};

export default PasswordGenerator;
