import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const findmax = (arr) => {
    arr.sort((a, b) => {
      return a - b;
    });
    return arr[arr.length - 1].id;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "" || content === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    dispatch(
      addTodo({
        id: findmax(todos) + 1,
        title,
        content,
        isDone: 0,
        isDetail: 0,
      })
    );
    console.log(todos);
  };

  return (
    <StFormContainer>
      <form onSubmit={onSubmitHandler}>
        <label>제목</label>
        <StInput
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>내용</label>
        <StInput
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <AddBtn>추가하기</AddBtn>
      </form>
    </StFormContainer>
  );
};

export default AddForm;

const StFormContainer = styled.div`
  background-color: rgb(238, 238, 238);
  border-radius: 12px;
  margin: 0px auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0px 12px;
  margin-left: 20px;
  margin-right: 50px;
`;
const AddBtn = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: rgb(255, 255, 255);
  font-weight: 700;
  float: right;
`;
