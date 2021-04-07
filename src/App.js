import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [email, setEmail] = useState("");
  const handleEmail = (e) => setEmail(e.target.value);

  const [password, setPassword] = useState("");
  const handlePassword = (e) => setPassword(e.target.value);

  const [name, setName] = useState("");
  const handleName = (e) => setName(e.target.value);

  const [city, setCity] = useState("");
  const handleCity = (e) => setCity(e.target.value);

  const submit = () => alert(`email: ${email}, password: ${password}`);

  return (
    <div className="App">
      <div className="container">
        <input placeholder="email" value={email} onChange={handleEmail} />
        <input
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
        <input placeholder="name" value={name} onChange={handleName} />
        <input placeholder="city" value={city} onChange={handleCity} />
        <button onClick={submit} type="button">
          login
        </button>
      </div>
    </div>
  );
}

function useInput(initial){
  const [input, setInput] = useState(initial);

  //返したいものを返して良い(返り値の型とか考えなくて良い)
  //useStateを使用する単なる関数を定義すると捉える
  //カスタムフック === フックを使った便利関数

}
