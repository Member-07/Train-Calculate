import React from "react";
import styled from "styled-components";

const Button = styled.div`
  background-color: skyblue;
  width: 150px;
  height: 60px;
  padding-top: 20px;
  text-align: center;
  font-size: x-large;
`;
export default class componentName extends React.Component {
  state = { padding: 30 };

  render() {
    const { onClickButton, title, padding } = this.props;
    return (
      <Button onClick={onClickButton} padding={padding} >
        {title}
        
      </Button>
    );
  }
}

componentName.propTypes = {};
