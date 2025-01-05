import React, { useState } from "react";
import "./index.css";

export default function Song() {
  // Songs data
  const songs = [
    {
      title: "APT",
      color: "Aquamarine",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Ros%C3%A9_and_Bruno_Mars_-_Apt..png/220px-Ros%C3%A9_and_Bruno_Mars_-_Apt..png",
      audio: "/songs/song1.mp3",
    },
    {
      title: "Die With Smile",
      color: "BlueViolet",
      image:
        "https://upload.wikimedia.org/wikipedia/en/1/12/Lady_Gaga_and_Bruno_Mars_-_Die_with_a_Smile.png",
      audio: "/songs/song2.mp3",
    },
    {
      title: "Enemy",
      color: "Chartreuse",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Enemy_Imagine_Dragons.jpg/220px-Enemy_Imagine_Dragons.jpg",
      audio: "/songs/song3.mp3",
    },
    {
      title: "Broken Angel",
      color: "CornflowerBlue",
      image:
        "https://c.saavncdn.com/050/Broken-Angel-English-2011-20180305091944-500x500.jpg",
      audio: "/songs/song4.mp3",
    },
  ];

  // State for selected song
  const [selectedSong, setSelectedSong] = useState(songs[0]);

  const divStyle = { backgroundColor: selectedSong.color };

  return (
    <div style={divStyle} className="song-container">
      <h2>{selectedSong.title}</h2>
      <img
        src={selectedSong.image}
        alt={selectedSong.title}
        className="song-image"
      />
      <audio controls src={selectedSong.audio}></audio>

      {songs.map((song, index) => (
        <button
          key={index}
          onClick={() => setSelectedSong(song)}
          className={selectedSong.title === song.title ? "active-button" : ""}
        >
          {song.title}
        </button>
      ))}
    </div>
  );
}
