import React, { Component } from "react";
import styled from "styled-components";
import Button from "./component/button.js";
import Button1 from "./component/buttonOperator.js";
import _ from "lodash";

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
  flex-wrap:  wrap;
  background-color: pink;
  align-items: flex-start;
  font-size: xx-large;
  align-content: center;
  padding-right:10px;
`;
const CalBlock = styled.div`
  width: 150px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  background-color: skyblue;
`;
const titletest = [
  { title: "1" },
  { title: "2" },
  { title: "3" },
  { title: "4" },
  { title: "5" },
  { title: "6" },
  { title: "7" },
  { title: "8" },
  { title: "9" },
  { title: "0" },
  { title: "." },
  { title: "=" }
];
const oprator = [
  { title: "C" },
  { title: "CE" },
  { title: "+" },
  { title: "-" },
  { title: "*" },
  { title: "/" }
];

class App extends Component {
  state = { total: "" };

  renderDiv = () => {
    //console.log("renderDiv");
    const myDiv = _.map(titletest, item => {
      const title1 = _.get(item, "title");
      // console.log(title1);
      return (
        <Button
          title={title1}
          onClickButton={() => this.handleClickButton(title1)}
        />
      );
    });
    return myDiv;
  };
  renderDiv1 = () => {
    //console.log("renderDiv");
    const myDiv = _.map(oprator, item => {
      const title1 = _.get(item, "title");
      //console.log(title1);
      return (
        <Button1
          title={title1}
          onClickButton={() => this.handleClickButton(title1)}
        />
      );
    });
    return myDiv;
  };

  handleClickButton = sum => {
    const { total } = this.state;
    let x = total;
    console.log(sum);
    try {
      if (sum === "C") {
        x = "";
        // console.log("");
      } else if (sum === "=") {
        x = eval(total);
      } else if (sum === "CE") {
        x = total.slice(0, -1);
      } else if (
        (sum === "+" || sum === "-" || sum === "*" || sum === "/") &&
        !/^\d+$/.test(total)
      ) {
        // console.log(sum);
      } else if (
        (sum === "+" || sum === "-" || sum === "*" || sum === "/") &&
        !!!/^\d+$/.test(total)
      ) {
        x = total.slice(0, -1);
      } else if (sum === "." && !!!/^\d+$/.test(total)) {
        x = total.slice(0, -1);
      } else {
        x = `${total}${sum}`;
      }
      this.setState({ total: x });
    } catch (e) {
      this.setState({ total: "Error" });
    }
  };

  //EVAL // sum
  render() {
    const { total } = this.state;
    return (
      <div>
        <Block>
          <ShowBlock>
            <span style={{ textAlign: 'right', width: '100%' }}>{total}</span>
          </ShowBlock>
          <NumBlock>
            {/* <Button
              title = "1"
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
            /> */}
            {this.renderDiv()}
          </NumBlock>
          <CalBlock>{this.renderDiv1()}</CalBlock>
        </Block>
      </div>
    );
  }
}

export default App;
