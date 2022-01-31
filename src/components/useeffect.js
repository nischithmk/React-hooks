import React, { useEffect, useState } from "react";

const UseEffectFunction = () => {
  const url = "https://api.github.com/users";

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    var response = await fetch(url);
    var users = await response.json();
    console.log(users);
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="github">
      <ul>
        {users.map((user) => {
          const { id, login, avatar_url, url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h3>{login}</h3>
                <a href={url} target="_blank">
                  profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseEffectFunction;
