import React, {Component} from 'react';
import {Layout, Breadcrumb, Menu} from 'antd'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import routes from '../../routes';
const {Header, Content, Footer} = Layout;

const getkey = (pathname) => {
  let arr = []
  routes.forEach(({path}) => {
    console.log(pathname, path)
    if (pathname.includes(path)) {
      arr.push(path)
    }
  })
  return arr
}
class BaseLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  pathJump = path => {
    const {history} = this.props
    history.push(path)
  }
  render() {
    const {children, location: {
        pathname
      }} = this.props
    const keys = getkey(pathname)
    console.log(12, this.props)
    return (
      <Layout className="layout">
        <Header>
          <div className="logo"/>
          <Menu
            theme="light"
            mode="horizontal"
            selectedKeys={keys}
            onSelect={value => {
            this.pathJump(value.key)
          }}
            style={{
            lineHeight: '64px'
          }}>
            {routes.map(({path, name}) => (
              <Menu.Item key={path}>{name}</Menu.Item>
            ))}
          </Menu>
        </Header>
        <Content style={{
          padding: '0 50px'
        }}>
          {/* <Breadcrumb style={{
            margin: '16px 0'
          }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            style={{
            background: '#fff',
            padding: 24,
            minHeight: 280
          }}>{children}</div>
        </Content>
        <Footer style={{
          textAlign: 'center'
        }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default connect()(withRouter(BaseLayout));