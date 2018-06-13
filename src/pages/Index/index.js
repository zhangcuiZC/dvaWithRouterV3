import React from "react";
import { Button, Row } from "antd";
import { Link } from "dva/router";
import styles from "./index.less";

class Index extends React.Component {
  render() {
    return (
      <div className={styles.title}>
        Index Page<i>index</i>
        <Row>
          <Link to="/example">
            <Button type="primary">to example</Button>
          </Link>
        </Row>
      </div>
    );
  }
}

export default Index;
