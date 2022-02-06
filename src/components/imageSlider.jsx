import React, { useEffect, useState } from "react";

function ImageSlider() {
  const url = "https://api.github.com/users";
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currImageId, setCurrImage] = useState(1);

  const getUsers = async () => {
    var response = await fetch(url);
    var users = await response.json();
    console.log(users);
    setUsers(users);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, [url]);

  const NextImage = () => {
    if (currImageId >= 7) {
      return setCurrImage(1);
    }
    return setCurrImage(currImageId + 1);
  };

  return (
    <>
      <h1>Images</h1>
      <div>
        <div className="Image-container">
          <ul>
            {users.map((user) => {
              if (user.id == currImageId) {
                console.log(user);
                const { id, login, avatar_url, url } = user;
                return (
                  <div key={id}>
                    {/* <h1>{id}</h1> */}
                    <img src={avatar_url} alt={login} />
                    {/* <h3>{login}</h3> */}
                  </div>
                );
              }
            })}
          </ul>
        </div>
        <button onClick={NextImage}>></button>
      </div>
    </>
  );
}

export default ImageSlider;
