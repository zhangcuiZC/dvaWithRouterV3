import React from "react";
import { Button, Row } from "antd";

class Example extends React.Component {
  render() {
    return (
      <div>
        Example Page
        <Row>
          <Button type="primary" onClick={() => this.props.router.goBack()}>
            回退
          </Button>
        </Row>
      </div>
    );
  }
}

export default Example;
