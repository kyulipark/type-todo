"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const TodosPage = () => {
  const [todos, setTodos] = useState<
    {
      id: string;
      title: string;
      contents: string;
      isDone: boolean;
    }[]
  >([]);

  useEffect(() => {
    // (1) 비동기 함수를 만드는 것
    const fetchTodos = async () => {
      // (1) axios 또는 fetch를 통해서 json-server에 있는 데이터 가져오기
      const response = await axios.get("http://localhost:4000/todos");

      // (2) setTodos
      setTodos(response.data);
    };

    // (2) 비동기 함수를 실행시키는 것
    fetchTodos();

    // useEffect가 실행되는 순서 : 최초 렌더링 직후!!
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.contents}</p>
            <p>{todo.isDone ? "완료됨" : "미완료됨"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosPage;
