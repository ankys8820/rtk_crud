import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser } from "../features/userSlice";

const Home = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  return (
    <>
      <div className="text-center">
        <div className="inputs mt-2">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="User"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          <button
            onClick={() => {
              dispatch(
                addUser({
                  id: userList[userList.length - 1].id + 1,
                  name,
                  username,
                })
              );
            }}
          >
            Add User
          </button>
        </div>

        <div className="displayUsers">
          {userList.map((user) => {
            return (
              <div key={user.id}>
                <h2>{user.name}</h2>
                <h4>{user.username}</h4>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteUser({ id: user.id }))}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
