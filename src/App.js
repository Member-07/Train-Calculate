
import React, { Component } from "react";
import styled from "styled-components";
import Button from "./component/button";

const Block = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  background-color: blue;
`;
const NumBlock = styled.div`
  width: 450px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  background-color: green;
  align-items: flex-start;
  align-content: flex-start;
`;

const ShowBlock = styled.div`
  width: 600px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  background-color: red;
`;
const CalBlock = styled.div`
  width: 150px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  background-color: yellow;
`;

class App extends Component {
  render() {


    return (
      <div>
        <Block>
          <ShowBlock />
          <NumBlock>
            <Button
              title="1"
              backgroundColor="blue"
              onClickButton={() => this.handleClickButton("1")}
            />
            <Button
              title="2"
              backgroundColor="blue"
              onClickButton={() => this.handleClickButton("2")}
            />
            <Button
              title="3"
              backgroundColor="blue"
              onClickButton={() => this.handleClickButton("3")}
            />
            <Button
              title="4"
              backgroundColor="blue"
              onClickButton={() => this.handleClickButton("4")}
            />
            <Button
              title="5"
              backgroundColor="blue"
              onClickButton={() => this.handleClickButton("5")}
            />
            <Button
              title="6"
              backgroundColor="blue"
              onClickButton={() => this.handleClickButton("6")}
            />
            <Button
              title="7"
              backgroundColor="blue"
              onClickButton={() => this.handleClickButton("7")}
            />
            <Button
              title="8"
              backgroundColor="blue"
              onClickButton={() => this.handleClickButton("8")}
            />
            <Button
              title="9"
              backgroundColor="blue"
              onClickButton={() => this.handleClickButton("9")}
            />
            <Button
              title="0"
              backgroundColor="blue"
              onClickButton={() => this.handleClickButton("0")}
            /> 
          </NumBlock>
          <CalBlock />
        </Block>
      </div>
    );
  }
  handleClickButton = iii => {
    console.log(iii);

    if (this.title === "1") {
      console.log("1");
    }
  };

}

export default App;