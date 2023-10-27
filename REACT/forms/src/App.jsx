import { useState } from "react";
import "./App.css";

function App() {
  const [form, setFormData] = useState({
    userName: "",
    lastName: "",
  });

  const handleInput = (evt) => {
    console.log(evt);
    setFormData({ ...form, [evt.target.name]: evt.target.value });
  };

  return (
    <>
      <label htmlFor="">Usuario</label>
      <input
        type="text"
        name="userName"
        value={form.usernamuserName}
        onChange={handleInput}
      />
      <label htmlFor="">Apellido</label>
      <input
        type="text"
        name="lastName"
        value={form.lastName}
        onChange={handleInput}
      />
    </>
  );
}

export default App;
