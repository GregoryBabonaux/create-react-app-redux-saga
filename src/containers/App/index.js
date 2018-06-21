import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

// components
import Home from '../../scenes/Home';
import About from '../../scenes/About';
import Auth from '../../scenes/Auth';

const { Header, Content, Footer } = Layout;

const App = props => {
  const setDefaultSelectedMenuItem = () => {
    switch (props.pathname) {
      case '/about-us':
        return ['2'];
      case '/auth':
        return isEmpty(props.auth.user) ? ['3'] : ['0'];
      default:
        return ['1'];
    }
  }

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={setDefaultSelectedMenuItem()}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/about-us">About</Link></Menu.Item>
          <Menu.Item key="3" style={{ float: 'right'}}>
            {!isEmpty(props.auth.user) ? props.auth.user.username 
              : <Link to="/auth">Auth</Link>
            }
          </Menu.Item>
        </Menu>
      </Header>

      <Content style={{ padding: '0 50px' }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={About} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Create React App Redux enhanced
      </Footer>
    </Layout>
  );
}

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
