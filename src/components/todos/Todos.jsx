import { React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Todos = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const getTodo = async () => {
    await axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/todos",
    })
      .then((res) => {
        console.log(res.data);
        setList(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    getTodo();
  }, []);

  return (
    <>
      {list.slice(0, 10).map((item, key) => (
        <div
          key={key}
          onClick={() => {
            // history.push(`/todo/${item.id}`);
            navigate(`/todo/${item.id}`);
          }}
          className="App"
        >
          <h6>{item.title} </h6>
          <h5>{item.id}</h5>
        </div>
      ))}
    </>
  );
};

export default Todos;
