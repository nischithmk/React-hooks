import React, { useEffect, useState } from "react";
import { employee } from "../array";
// import people from "./forms";
import { EmployeeForm } from "./forms";

const UseEffectFunction = (props) => {
  const url = "https://api.github.com/users";

  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const getUsers = async () => {
    var response = await fetch(url);
    var users = await response.json();
    console.log(users);
    setUsers(users);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const DataNotReturned = () => {
    return (
      <div class="load-9">
        <div class="spinner">
          <div class="bubble-1"></div>
          <div class="bubble-2"></div>
        </div>
      </div>
    );
  };

  const DataReturned = () => {
    return (
      <div>
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
      </div>

      // <div className="github">
      //   <ul>
      //     {people.map((p) => {
      //       const { id, name, email } = p;
      //       return (
      //         <li key={id}>
      //           {/* <img src={avatar_url} alt={login} /> */}
      //           <div>
      //             <h3>{name}</h3>
      //             <a href={email} target="_blank">
      //               profile
      //             </a>
      //           </div>
      //         </li>
      //       );
      //     })}
      //   </ul>
      // </div>
    );
  };

  return <div>{isLoading ? <DataNotReturned /> : <DataReturned />};</div>;
};
export default UseEffectFunction;
