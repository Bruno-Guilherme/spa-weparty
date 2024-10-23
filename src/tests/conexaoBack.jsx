import React, { useState } from "react";
import Parse from "parse/dist/parse.min.js";

// Inicializar o Parse
Parse.initialize(
  "NdRhReEWkw5qlw1rLVZ0q0ob0HE8TmMI06klzPt3",
  "VwKu5hsCgL74VzbndaO5V32FQhrSYua4SlrSpeWj"
);
Parse.serverURL = "https://parseapi.back4app.com/";

const CreateUserComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCreateUser = async () => {
    const user = new Parse.User();
    user.set("username", username);
    user.set("password", password);
    user.set("email", email);

    try {
      const result = await user.signUp();
      setMessage(`User created successfully: ${result.get("username")}`);
    } catch (error) {
      setMessage(`Error while creating user: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Create a New User</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleCreateUser}>Create User</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateUserComponent;
