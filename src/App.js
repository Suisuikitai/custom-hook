import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const email = useInput({initial: '', placeholder: 'email'});

  const password = useInput({initial: '', placeholder: 'password'});

  const name = useInput({initial: '', placeholder: 'name'});

  const city = useInput({initial: '', placeholder: 'city'});

  const submit = () => alert(`email: ${email.value}, password: ${password.value}`);

  return (
    <div className="App">
      <div className="container">
        <input placeholder={email.placeholder} value={email.value} onChange={email.onChange} />
        <input
        //適切なキーに値や関数を紐づければスプレッド構文が使える
        //めっちゃ楽
          {...password}
        />
        <input placeholder={name.placeholder} value={name.value} onChange={name.onChange} />
        <input placeholder={city.placeholder} value={city.value} onChange={city.onChange} />
        <button onClick={submit} type="button">
          login
        </button>
      </div>
    </div>
  );
}

function useInput({initial, placeholder}){
  const [value, setValue] = useState(initial);
  const handleChange = e => setValue(e.target.value);
  return {value, placeholder, onChange: handleChange};
}
