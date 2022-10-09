import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";

const mountedStyle = { animation: "inAnimation 250ms ease-in" };
const unmountedStyle = {
  animation: "outAnimation 270ms ease-out",
  animationFillMode: "forwards",
};

const divFlexColumn = { flexDirection: "column" };
const divFlexRow = { flexDirection: "row" };

const showForm = { display: "flex", flexDirection: "column", width: "80%" };
const hideForm = { display: "none" };

const Filter = () => {
  const [wrapperOff, setWrapperOff] = useState(false);

  const filterShow = () => {
    setWrapperOff(!wrapperOff);
  };

  return (
    <>
      <Wrapper style={!wrapperOff ? mountedStyle : unmountedStyle}>
        <DivFlex style={!wrapperOff ? divFlexRow : divFlexColumn}>
          <h1>Form</h1>
          {!wrapperOff && <IconLeft onClick={filterShow} />}
          {wrapperOff && <IconRight onClick={filterShow} />}
        </DivFlex>
        <form style={!wrapperOff ? showForm : hideForm}>
          <label>Name</label>
          <Input type="text" name="name" />
          <label>Surname</label>
          <Input type="text" name="name" />
          <label>Email</label>
          <Input type="text" name="name" />
        </form>
        <Button type="submit" style={!wrapperOff ? null : hideForm}>
          Save
        </Button>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 270px;
  height: 400px;
  border-radius: 8px;
  background: green;
  transition: width 0.5s;

  @keyframes inAnimation {
    0% {
      width: 90px;
      visibility: hidden;
    }
    100% {
      width: 270px;
      visibility: visible;
    }
  }

  @keyframes outAnimation {
    0% {
      width: 270px;
    }
    100% {
      width: 90px;
      /* visibility: hidden; */
    }
  }
`;

const DivFlex = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
`;

const IconLeft = styled(AiOutlineArrowLeft)`
  font-size: 40px;
  cursor: pointer;
  transition: all 0.5s;
`;
const IconRight = styled(AiOutlineArrowRight)`
  font-size: 40px;
  cursor: pointer;
  transition: all 0.5s;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 18px;
  transition: all 0.5s;
`;

const Button = styled.button`
  padding: 10px 16px;
  margin-top: 8px;
  background: black;
  color: white;
  font-size: 20px;
  border-radius: 8px;
`;

export default Filter;
