import { useState } from "react";
import { users } from "../mock/auth";
import "./Contact.css";

const Contacts = () => {
  const [nameInput, setNameInput] = useState("");
  const [passInput, setPassInput] = useState("");

  const [credentialsCond, setCredentialsCond] = useState("");
  const user = users.find(
    (user) => user.username === nameInput && user.password === passInput
  );

  const onHandleSubmit = (e) => {
    e.preventDeafault();
    setCredentialsCond("");

    if (user) {
      return alert("benvenuto");
    }
    setCredentialsCond(`La password di ${nameInput} non è ${passInput}`);
  };

  const onHandleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setNameInput(e.target.value);
        break;

      case "password":
        setPassInput(e.target.value);
        break;
    }
  };
  return (
    <form className="Contacts" onSubmit={onHandleSubmit}>
      <label htmlFor="name"> Nome </label>
      <input
        type="text"
        placeholder="Inserisci il tuo nome"
        name="name"
        value={nameInput}
        onChange={onHandleChange}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Inserisci la tua password"
        name="password"
        value={passInput}
        onChange={onHandleChange}
      />

      <input type="submit" value="Invia" />

      {credentialsCond && (
        <p className="Contacts__credentialsCond">{credentialsCond}</p>
      )}
    </form>
  );
};
export default Contacts;
