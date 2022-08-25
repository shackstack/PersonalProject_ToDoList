import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { detailId } from "../redux/modules/todos";

const Detail = () =>{
    const todos = useSelector((state)=>state.todos.todos);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const onClickBack = (id) => {
        dispatch(
            detailId({id}));
        navigate('/');

    }
    return (
        <>
            {todos.map((item)=>
                item.isDetail === true ?
                (<StTodo id={item.id}>
                    <div>
                        <T1>ID : {item.id}</T1>
                        <Btn onClick={()=>{onClickBack(item.id)}}>돌아가기</Btn>
                    </div>
                    <h2>{item.title}</h2>
                    <footer>{item.content}</footer>
                </StTodo>)
                : null
            )
            }
        </>
      )
}

export default Detail

const T1 = styled.a`
position: relative;
`;

const Btn = styled.button`
position: relative;
top : 0px;
float: right;
border: 1px solid green;
height: 30px;
width: 80px;
background-color: rgb(255, 255, 255);
border-radius: 12px;
cursor: pointer;
`;


const StTodo = styled.div`
  position: relative;
  top : 300px;
  width: 300px;
  border: 5px solid teal;
  min-height: 150px;
  border-radius: 15px;
  padding: 36px 36px 36px;
  left:0; right:0; margin-left:auto; margin-right:auto;

`;