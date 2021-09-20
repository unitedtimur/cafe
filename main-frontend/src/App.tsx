import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Link, useLocation } from 'react-router-dom';

import { Layout, Menu, Avatar } from 'antd/es';
import {
    ShopOutlined,
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
} from '@ant-design/icons';

import Cafe from './features/Cafe';
import BeginPage from './features/BeginPage';
import Kitchen from './features/Kitchen';
import { IState } from './intarfaces';

import './App.css';

const { Sider, Content, Header } = Layout;

const App: React.FC = () => {
    const { pathname } = useLocation();

    const isBeginPage = useSelector((state: IState) => state.isBeginPage);

    const [ collapsed, setCollapsed ] = useState<boolean>(false);

  return (
      <div className="App">
          <Layout style={{ minHeight: '100vh' }}>
              {!isBeginPage && (
                  <Sider
                      trigger={null}
                      collapsible
                      width={170}
                      collapsed={collapsed}
                      style={{ position: 'absolute', zIndex: 2, minHeight: '100vh' }}
                      collapsedWidth={60}>
                      <div
                          onClick={() => setCollapsed(!collapsed)}
                          className="sider-controller">
                          {
                              collapsed ?
                                  <MenuUnfoldOutlined style={{ color: 'white' }} />:
                                  <MenuFoldOutlined style={{ color: 'white' }} />
                          }
                      </div>
                      <Menu theme="dark" mode="inline" selectedKeys={[ pathname ]}>
                          <Menu.Item key="/cafe" icon={<ShopOutlined />}>
                              <Link to="/cafe">Кафе</Link>
                          </Menu.Item>
                          <Menu.Item key="/kitchen" icon={<AppstoreOutlined />}>
                              <Link to="/kitchen">Кухня</Link>
                          </Menu.Item>
                      </Menu>
                  </Sider>)
              }
              <Layout className="site-layout">
                  <Header style={{ background: 'white', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                      <Avatar style={{ backgroundColor: '#87d068', cursor: "pointer" }} icon={<UserOutlined />} />
                  </Header>
                  <Content
                      className="site-layout-background"
                      style={{ paddingLeft: '60px' }}
                  >
                      <Switch>
                          <Route exact path='/' component={BeginPage} />
                          <Route path='/cafe' component={Cafe} />
                          <Route path='/kitchen' component={Kitchen} />
                      </Switch>
                  </Content>
              </Layout>
          </Layout>
      </div>
  );
}

export default App;
