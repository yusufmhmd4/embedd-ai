import React from "react";
import "./index.css";

import { featured,featured1,featuredNav,tryTheseList,trysaying,forYou} from "../../data"
function Home() {
  return (
    <div className="home-container">
      <div className="welcome-back-heading">Welcome Back,</div>
      <div className="name-search-container">
        <div className="name">Yusuf</div>
        <div className="search-container">
          <input type="search" className="input-search" placeholder="search" />
        </div>
      </div>
      <div className="try-these-conatiner">
        <div className="container-label">For You</div>
        <ul className="try-these-list-container">
          {forYou.map((e, i) => (
            <li className="featured-list-el" key={i}>
                <img  src={e.img_url} alt={e.title} className="featured-image"/>
                <div className="featured-content-container">
                    <div className="featured-name">{e.title}</div>
                    <div className="featured-label">{e.lable}</div>
                    <div className="featured-desc">{e.discription.slice(0,)}</div>
                    <div className="featured-comment">{e.time}</div>
                </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="try-these-conatiner">
        <div className="container-label">Try These</div>
        <ul className="try-these-list-container">
          {tryTheseList.map((e, i) => (
            <li className="list-container-el" key={i}>
              <img
                src={e.imageUrl}
                alt={e.name}
                className="try-these-list-image"
              />
              <div className="try-these-name-container">
                <div className="try-these-name">{e.name}</div>
                <div className="try-these-user-name">{e.newName}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="try-these-conatiner">
        <div className="container-label">Try Saying</div>
        <ul className="try-these-list-container">
          {trysaying.map((e, i) => (
            <li className="try-saying-list-el" key={i}>
                <div className="try-saying-name-container">
                    <img src={e.image} alt={e.name} />
                    <div className="try-saying-name">{e.name}</div>
                </div>
                <div className="verse-fight">{e.batman}</div>
                <div className="verse-fight">{e.knight}</div>
                <div className="verse-fight">{e.Lebron}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="try-these-conatiner">
        <div className="container-label">Featured</div>
        <ul className="try-these-list-container">
          {featured.map((e, i) => (
            <li className="featured-list-el" key={i}>
                <img  src={e.img_url} alt={e.title} className="featured-image"/>
                <div className="featured-content-container">
                    <div className="featured-name">{e.title}</div>
                    <div className="featured-label">{e.lable}</div>
                    <div className="featured-desc">{e.discription.slice(0,50)}</div>
                    <div className="featured-comment">{e.time}</div>
                </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="try-these-conatiner">
        <ul className="feature">
          {featuredNav.map((e, i) => (
            <li className="featured-button">{e.title}</li>
          ))}
        </ul>
      </div>
      <div className="try-these-conatiner">
        <ul className="try-these-list-container">
          {featured1.map((e, i) => (
            <li className="featured-list-el" key={i}>
                <img  src={e.img_url} alt={e.title} className="featured-image"/>
                <div className="featured-content-container">
                    <div className="featured-name">{e.title}</div>
                    <div className="featured-label">{e.lable}</div>
                    <div className="featured-desc">{e.discription.slice(0,50)}</div>
                    <div className="featured-comment">{e.comments}</div>
                </div>
            </li>
          ))}
        </ul>
      </div>
     
      <div className="create-character-container">
        <div className="create-char-image-container">
            <img src="https://character.ai/_next/image?url=%2Fhomeassets%2Fzeus.webp&w=128&q=25" className="create-ava-image" alt="Character"/>
        </div>
        <div className="create-character-description">
          <div className="create-char-descr">Create a Character</div>
          <div className="create-char-bio">
            Not vibing with any characters? Create one of your own! Customize
            things like their voice, conversation starts, their tone, and more!{" "}
          </div>
          <button type="button" className="create-avatar-button">Create a Character</button>
        </div>
      </div>
      <div className="footer-links-container">
        <div className="footer-link">About</div>
        <div className="footer-link">Career</div>
        <div className="footer-link">Blog</div>
      </div>
    </div>
  );
}

export default Home;
