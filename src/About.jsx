import React, { useEffect } from "react";
import { useState } from "react";

const About = () => {
  const [data, setData] = useState([]);

  //  APLICATION PROGRAMMING INTERFACE

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return <h1>ABOUT</h1>;
};

export default About;
