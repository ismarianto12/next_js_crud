
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./features/Users";
import { Head } from 'next/head'
function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <>

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />

      <div className="row">
        <div className="container">

          <div className="App">
            {" "}
            <div className="addUser">
              <input
                type="text"
                className="form-control"
                placeholder="Name..."
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Username..."

                className="form-control"

                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(
                    addUser({
                      id: 1,
                      name,
                      username,
                    })
                  );
                }}
              >
                {" "}
                Add User
              </button>
            </div>
            <div className="displayUsers">
              {userList.map((user) => {
                return (
                  <div>
                    <h1> {user.name}</h1>
                    <h1> {user.username}</h1>
                    <input
                      type="text"
                      placeholder="New Username..."
                      onChange={(event) => {
                        setNewUsername(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        dispatch(
                          updateUsername({ id: user.id, username: newUsername })
                        );
                      }}
                    >
                      {" "}
                      Update Username
                    </button>
                    <button
                      onClick={() => {
                        if (confirm('are u sure')) {
                          dispatch(deleteUser({ id: user.id }))
                        }
                      }}
                    >
                      Delete User
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
