import React, { useState, useRef } from "react";
import "./index.css";

const Character = () => {
  const [image, setImage] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [greeting, setGreeting] = useState("");
  const fileInputRef = useRef(null);

  const totalCharacterLimit = {
    characterName: 20,
    tagline: 50,
    description: 500,
    greeting: 2048,
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (value, setter, type) => {
    if (value.length <= totalCharacterLimit[type]) {
      setter(value);
    }
  };

  const handlePencilClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="avatar-creator-container">
      <div className="character-header-container">
        
      </div>
      <div className="avatar-image-container" onClick={handlePencilClick}>
        {image ? (
          <img src={image} alt="Avatar" className="avatar-image" />
        ) : (
          <div className="pencil-icon"></div>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      <div className="input-container">
        <label className="input-label" htmlFor="name">
          Character Name
        </label>
        <input
          type="text"
          placeholder="e.g. Albert Einstein"
          value={characterName}
          id="name"
          onChange={(e) =>
            handleInputChange(e.target.value, setCharacterName, "characterName")
          }
        />
        <div className="character-name-count">
          {characterName.length}/{totalCharacterLimit.characterName}
        </div>
      </div>
      <div className="input-container">
        <label htmlFor="tagline" className="input-label">
          {" "}
          Tagline
        </label>
        <input
          type="text"
          placeholder="Add a short tagline of your Character"
          value={tagline}
          id="tagline"
          onChange={(e) =>
            handleInputChange(e.target.value, setTagline, "tagline")
          }
        />
        <div className="character-name-count">
          {tagline.length}/{totalCharacterLimit.tagline}
        </div>
      </div>
      <div className="input-container">
        <label className="input-label" htmlFor="description">
          Description
        </label>
        <textarea
          placeholder="How would your Character describe themselves?"
          value={description}
          id="description"
          onChange={(e) =>
            handleInputChange(e.target.value, setDescription, "description")
          }
        />
        <div className="character-name-count">
          {description.length}/{totalCharacterLimit.description}
        </div>
      </div>
      <div className="input-container">
        <label htmlFor="greeting" className="input-label">
          Greeting
        </label>
      <textarea
        placeholder="e.g. hello, I am Albert. Ask me anything about scientific contributions."
        value={greeting}
        id="greeting"
        onChange={(e) =>
          handleInputChange(e.target.value, setGreeting, "greeting")
        }
        />
      <div className="character-name-count">
         {greeting.length}/{totalCharacterLimit.greeting}
      </div>
        </div>
        <div className="voice-option-container">
          <label className="input-label">Voice</label>
          <select>
            <option value="voice">Add</option>
          </select>
        </div>
        <div className="more-options">More options <span>^</span></div>
        <div className="create-avater-button">Create Character</div>
    </div>
  );
};

export default Character;