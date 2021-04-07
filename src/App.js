import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const email = useInput("");

  const password = useInput("");

  const name = useInput("");

  const city = useInput("");

  const submit = () => alert(`email: ${email.value}, password: ${password.value}`);

  return (
    <div className="App">
      <div className="container">
        <input placeholder="email" value={email.input} onChange={email.handleInput} />
        <input
          placeholder="password"
          value={password.value}
          onChange={password.handleInput}
        />
        <input placeholder="name" value={name.value} onChange={name.handleInput} />
        <input placeholder="city" value={city.value} onChange={city.handleInput} />
        <button onClick={submit} type="button">
          login
        </button>
      </div>
    </div>
  );
}

function useInput(initial){
  const [value, setValue] = useState(initial);

  //返したいものを返して良い(返り値の型とか考えなくて良い)
  //useStateを使用する単なる関数を定義すると捉える
  //カスタムフック === フックを使った便利関数
  const handleInput = e => setValue(e.target.value);
  return {value, handleInput};
}
