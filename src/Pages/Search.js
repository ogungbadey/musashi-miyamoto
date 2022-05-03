import React, { useContext } from "react";
import Card from "../components/Card/Card";
import { ThemeContext } from "../context/ThemeContext";
// import second from 'first'

export default function Search() {
  const theme = useContext(ThemeContext);
  const recents = [
    {
      name: "Visitor 1",
      image: "imageText",
    },
    {
      name: "Visitor 1",
      image: "imageText",
    },
    {
      name: "Visitor 1",
      image: "imageText",
    },
    {
      name: "Visitor 1",
      image: "imageText",
    },
    {
      name: "Visitor 1",
      image: "imageText",
    },
  ];
  return (
    <div
      style={{
        padding: "8px 24px",
        color: "white",
      }}
    >
      <div>
        <h1 style={{
            color: theme.state.darkMode ? "white" : "black"
        }}>Recent Searches</h1>
        <div
          style={{
            marginTop: "8px",
            height: "192px",
            minWidth: "320px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {recents.map((v, i) => (
            <Card key={i} image={v.image} name={v.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
