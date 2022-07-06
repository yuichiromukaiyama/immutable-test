import React, { useEffect } from "react";
import { Map } from "immutable";

type IForm = { a: string; b: string; c: string };

function App() {
  const [state, setState] = React.useState(Map({ a: "", b: "", c: "" }));

  const handle = (key: keyof IForm, value: string) => {
    setState(state.set(key, value));
  };

  useEffect(() => {
    console.log("入力を監視");
    console.log(state.toJSON());
  }, [state]);

  return (
    <div
      style={{
        width: "100vw",
        height: "95vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          borderRadius: "10px",
          border: "1px solid black",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "stretch",
          alignItems: "stretch",
          gap: "15px",
          width: "80vw",
          maxWidth: "500px",
        }}
      >
        <p style={{ fontSize: "1em", fontWeight: "bold" }}>入力フォーム</p>
        <input
          value={state.get("a")}
          onChange={(e) => handle("a", e.currentTarget.value)}
          placeholder="入力A"
        />
        <input
          value={state.get("b")}
          onChange={(e) => handle("b", e.currentTarget.value)}
          placeholder="入力B"
        />
        <input
          value={state.get("C")}
          onChange={(e) => handle("c", e.currentTarget.value)}
          placeholder="入力C"
        />
      </div>
    </div>
  );
}

export default App;
