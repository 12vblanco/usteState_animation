import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";

const Filter = () => {
  const [wrapperOff, setWrapperOff] = useState(false);

  const filterShow = () => {
    setWrapperOff(!wrapperOff);
  };

  return (
    <>
      <Wrapper
        style={
          !wrapperOff
            ? { with: "270px", transition: "all .2s linear" }
            : {
                width: "90px",
                transition: "all .2s linear",
              }
        }
      >
        <DivFlex
          style={
            !wrapperOff ? { flexDirection: "row" } : { flexDirection: "column" }
          }
        >
          <h1>Form</h1>
          {!wrapperOff && <IconLeft onClick={filterShow} />}
          {wrapperOff && <IconRight onClick={filterShow} />}
        </DivFlex>
        <form
          style={
            !wrapperOff
              ? {
                  display: "flex",
                  flexDirection: "column",
                  width: "80%",
                  opacity: 1,
                  transition: "all .2s linear",
                }
              : {
                  opacity: 0,
                  width: "20%",
                  transition: "all .2s linear",
                }
          }
        >
          <label>Name</label>
          <Input type="text" name="name" />
          <label>Surname</label>
          <Input type="text" name="name" />
          <label>Email</label>
          <Input type="text" name="name" />
        </form>
        <Button
          type="submit"
          style={
            !wrapperOff
              ? null
              : {
                  opacity: 0,
                  width: "20%",
                  transition: "all .2s linear",
                }
          }
        >
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
