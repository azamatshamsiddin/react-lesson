import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img className="header-logo" src="https://picsum.photos/id/0/50/50" />
      </header>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list__item">
            <a className="nav-link" href="#">
              Profile
            </a>
          </li>
          <li className="nav-list__item">
            <a className="nav-link" href="#">
              Messages
            </a>
          </li>
          <li className="nav-list__item">
            <a className="nav-link" href="#">
              News
            </a>
          </li>
          <li className="nav-list__item">
            <a className="nav-link" href="#">
              Music
            </a>
          </li>
          <li className="nav-list__item">
            <a className="nav-link" href="#">
              Settings
            </a>
          </li>
        </ul>
      </nav>
      <main className="main">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVlG9mYPLZGqa042niIJPYq-Xs0BYUB6-eaA&usqp=CAU" />

        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVlG9mYPLZGqa042niIJPYq-Xs0BYUB6-eaA&usqp=CAU" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make{" "}
          </p>
        </div>
        <div>posts</div>
        <div>new posts</div>
        <div>post 1</div>
        <div>post 1</div>
      </main>
    </div>
  );
}

export default App;
