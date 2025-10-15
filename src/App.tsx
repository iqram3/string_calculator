import { useState, useRef } from "react";
import { stringCalculator } from "./stringCalculator";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");
  const resultRef = useRef<HTMLParagraphElement | null>(null);

  const handleCalculate = () => {
    try {
      const res = stringCalculator(input);
      setResult(res);
      setError("");
      setTimeout(() => resultRef.current?.focus(), 100);
    } catch (err: any) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <main
      style={{
        padding: "20px",
        backgroundColor: "#fff",
        color: "#222",
        maxWidth: 600,
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
      aria-label="String Calculator Application"
    >
      <header>
        <h1 tabIndex={0}>String Calculator</h1>
      </header>

      <img
        src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop"
        width={600}
        height={400}
        alt="A workspace background with a calculator and notes"
        style={{ borderRadius: "8px", marginBottom: "10px" }}
      />

      <label htmlFor="number-input" style={{ fontSize: "18px" }}>
        Enter numbers
      </label>

      <textarea
        id="number-input"
        style={{
          margin: "10px 0",
          width: "100%",
          minHeight: "100px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "8px",
          fontSize: "16px",
          outlineColor: "#008cba",
        }}
        placeholder="e.g. 1,2,3 or //;\n1;2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-describedby="input-help"
        aria-label="Enter numbers to calculate the sum"
      />

      <div id="input-help" style={{ fontSize: "14px", color: "#555" }}>
        Separate numbers using commas or newlines. You can also define custom
        delimiters like <code>//;\n1;2</code>.
      </div>

      <button
        onClick={handleCalculate}
        style={{
          padding: "10px 20px",
          backgroundColor: "#008cba",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: "10px",
        }}
        onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
      >
        Calculate
      </button>

      {result !== null && (
        <p
          ref={resultRef}
          role="status"
          tabIndex={-1}
          style={{
            color: "green",
            marginTop: "15px",
            fontWeight: "bold",
            outline: "none",
          }}
        >
          Result: {result}
        </p>
      )}

      {error && (
        <div
          role="alert"
          tabIndex={-1}
          style={{
            color: "red",
            marginTop: "15px",
            fontWeight: "bold",
            outline: "none",
          }}
        >
          {error}
        </div>
      )}

      <footer style={{ marginTop: "20px", fontSize: "14px", color: "#555" }}>
        <p>Keyboard shortcuts:</p>
        <ul>
          <li>
            Use <kbd>Tab</kbd> to navigate between fields
          </li>
          <li>
            Press <kbd>Enter</kbd> on the “Calculate” button
          </li>
        </ul>
      </footer>
    </main>
  );
};

export default App;
