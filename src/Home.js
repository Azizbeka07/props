import React, { useEffect, useState } from "react";
import Header from "./components/Header";

const Home = () => {
  const [count, setCount] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setCount(json));
  }, []);

  return (
    <>
      <Header info={count} />
    </>
  );
};

export default Home;
