import "./profilePage.scss";
import React from "react";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Udate Profile</button>
          </div>
          <div className="info">
            <span>
              Avator: <img src="/tree.png" alt="" />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              E-mail: <b>JohnDoe@gmail.com</b>
            </span>
            <button>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Add New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Save List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
