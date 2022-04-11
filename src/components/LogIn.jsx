import { useState } from "react";
import users from "../private/users.json";

function LogIn() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  console.log(users);

  let n = 3;
  return (
    <div className="login-container">
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <div className="buttons-container">
        <button
          onClick={() => {
            users.forEach((user) => {
              if (user.username === username && user.password === password) {
                alert("hello");
              }
            });
          }}
        >
          log in
        </button>
        <button
          onClick={() => {
            const newUser = {
              id: n + 1,
              username: username,
              password: password,
            };
            n++;
            console.log(newUser);
            users.push(newUser);
            console.log(users);
          }}
          className="create-user-btn"
        >
          sign up
        </button>
      </div>
    </div>
  );
}

export default LogIn;
