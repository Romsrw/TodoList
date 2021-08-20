import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const count = useSelector(state => state.todos.length);  
  
    return <h1>Список задач: {count}</h1>;
};
export default Header;