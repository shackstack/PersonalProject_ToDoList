import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo, deleteTodo, detailId } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TodoListContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos.todos);

  const onClickCom = (id) => {
    dispatch(
      completeTodo({
        id,
      })
    );
  };

  const onClickDelete = (id) => {
    dispatch(
      deleteTodo({
        id,
      })
    );
  };

  const onClickDetail = (id) => {
    dispatch(
      detailId({
        id,
      })
    );
    navigate("/Detail");
  };

  console.log(todos);
  return (
    <>
      <h1>Working.. 🔥</h1>
      <StTodos>
        {todos.map((todos) =>
          !todos.isDone === true ? (
            <StTodo key={todos.id}>
              <button onClick={() => onClickDetail(todos.id)}>상세보기</button>
              <h1>{todos.title}</h1>
              <div>{todos.content}</div>
              <BtnLayout>
                <BtnCom onClick={() => onClickCom(todos.id)}>완료</BtnCom>
                <BtnDel onClick={() => onClickDelete(todos.id)}>삭제</BtnDel>
              </BtnLayout>
            </StTodo>
          ) : null
        )}
      </StTodos>
      <h1>Done.. 🔥</h1>
      <StTodos>
        {todos.map((todos) =>
          todos.isDone === true ? (
            <StTodo key={todos.id}>
              <button onClick={() => onClickDetail()}>상세보기</button>
              <h1>{todos.title}</h1>
              <div>{todos.content}</div>
              <BtnLayout>
                <BtnCom onClick={() => onClickCom(todos.id)}>취소</BtnCom>
                <BtnDel onClick={() => onClickDelete(todos.id)}>삭제</BtnDel>
              </BtnLayout>
            </StTodo>
          ) : null
        )}
      </StTodos>
    </>
  );
};

export default TodoListContainer;

const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
const StTodo = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px;
`;

const BtnCom = styled.button`
  border: 1px solid red;
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`;
const BtnDel = styled.button`
  border: 1px solid green;
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`;
const BtnLayout = styled.footer`
  display: flex;
  -webkit-box-pack: end;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;
