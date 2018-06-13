import React from "react";
import { Layout, Menu, Icon, Row, Col, Dropdown } from "antd";
import styles from "./IndexLayout.css";
import logo from "../assets/yay.jpg";
const { Header, Content } = Layout;

class IndexLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      selectedKeys: [`/${location.pathname.split("/")[1]}`]
    };
  }

  render() {
    return (
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <Row
            className={styles.row}
            type="flex"
            justify="start"
            align="middle"
          >
            <Col span={6}>
              <div className={styles.logo}>
                <img src={logo} title="图" />
                Dva
              </div>
            </Col>
            <Col span={12} style={{ textAlign: "left" }} />
            <Col span={6} style={{ textAlign: "right" }}>
              <div className={styles.user}>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item key="1">修改密码</Menu.Item>
                      <Menu.Item key="2">退出登录</Menu.Item>
                    </Menu>
                  }
                >
                  <span className="ant-dropdown-link">
                    <Icon type="user" /> UserName<Icon type="down" />
                  </span>
                </Dropdown>
              </div>
            </Col>
          </Row>
        </Header>
        <Content className={styles.content}>
          <div>{this.props.children}</div>
        </Content>
      </Layout>
    );
  }
}

export default IndexLayout;
