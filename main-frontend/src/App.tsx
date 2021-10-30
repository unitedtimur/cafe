import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Link, useLocation, useHistory } from 'react-router-dom';

import { Layout, Menu, Avatar, Drawer, Divider } from 'antd/es';
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
import SelectVolume from './features/SelectVolume';
import { IState } from './intarfaces';
import mp3 from './music/main.mp3';

import './App.css';

const { Sider, Content, Header } = Layout;

const App: React.FC = () => {
    const { pathname } = useLocation();
    const history = useHistory();

    const { isBeginPage, volume, isMusicPlay } = useSelector((state: IState) => state);

    const [ collapsed, setCollapsed ] = useState<boolean>(true);
    const [ sound ] = useState<HTMLAudioElement>(new Audio(mp3));
    const [ isVisibleDrawer, setIsVisibleDrawer ] = useState<boolean>(false);

    useEffect(() => {
        history.push('/');
    }, []);

    useEffect(() => {
        sound.volume = volume;
    }, [ volume ]);

    useEffect(() => {
        if (isMusicPlay) {
            sound.play();
        } else {
          sound.pause();
        }
    }, [ isMusicPlay ]);

    const modal = (
        <Drawer
            title="Настройки"
            width={500}
            placement="right"
            zIndex={1000}
            onClose={() => setIsVisibleDrawer(false)}
            visible={isVisibleDrawer}
        >
            <SelectVolume />
            <Divider />
        </Drawer>
    )

    return (
        <div className="App">
            {modal}
            <Layout style={{ minHeight: '100vh' }}>
                <Header style={{ background: 'white', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <div onClick={() => setIsVisibleDrawer(true)}>
                        <Avatar
                            style={{ backgroundColor: '#87d068', cursor: "pointer" }}
                            icon={<UserOutlined />}
                        />
                    </div>
                </Header>
                <Content className="site-layout-background">
                    <Switch>
                        <Route exact path='/' component={BeginPage} />
                        <Route path='/cafe' component={Cafe} />
                        <Route path='/kitchen' component={Kitchen} />
                    </Switch>
                </Content>
            </Layout>
        </div>
    );
};

export default App;
