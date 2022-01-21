import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
const Todo = () => {
  const { id } = useParams();
  let [todoDetail, setTodoDetail] = useState([{}]);
  const getTodo = async () => {
    await axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/todos/${id}`,
    })
      .then((res) => {
        console.log(res.data);
        setTodoDetail(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    getTodo();
  }, []);
  return (
    <div>
      {todoDetail ? (
        <div>
          <div className="App">
            <h1>{`ID: ${todoDetail.id}`}</h1>
            <h1>{`userId: ${todoDetail.userId}`}</h1>
            <h1>{`title: ${todoDetail.title}`}</h1>
            <h1>{`comleted: ${todoDetail.completed}`}</h1>
          </div>
        </div>
      ) : (
        <CircularProgress color="secondary" />
      )}
    </div>
  );
};

export default Todo;
