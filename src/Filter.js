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
      {!wrapperOff && (
        <Wrapper>
          <DivFlex>
            <h1>Filter</h1>
            <IconLeft onClick={filterShow} />
          </DivFlex>
          <form
            style={{ display: "flex", flexDirection: "column", width: "80%" }}
          >
            <label>Name</label>
            <Input type="text" name="name" />
            <label>Surname</label>
            <Input type="text" name="name" />
            <label>Email</label>
            <Input type="text" name="name" />
          </form>
          <Button type="submit">Save</Button>
        </Wrapper>
      )}
      {wrapperOff && (
        <Wrapper style={{ width: "90px", transition: "all .5s ease" }}>
          <DivFlex style={{ flexDirection: "column" }}>
            <h1>Filter</h1>
            <IconRight onClick={filterShow} />
          </DivFlex>
          <form style={{ display: "none" }}>
            <label>Name</label>
            <Input style={{ display: "none" }} />
          </form>
          <Button style={{ display: "none" }}>Save</Button>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 270px;
  /* width: ${(wrapperOff) => (wrapperOff ? "270px" : "90px")}; */
  height: 400px;
  border-radius: 8px;
  background: green;
  transition: width 0.5s;
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
