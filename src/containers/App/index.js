import React from 'react';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { func, object, string } from 'prop-types';

// redux
import { logout } from 'modules/auth/actions';

// scenes
import Home from 'scenes/Home';
import About from 'scenes/About';
import Auth from 'scenes/Auth';
import Dog from 'scenes/Dog';
import Basket from 'scenes/Basket';

const { Header, Content, Footer } = Layout;

const App = props => {
  const navigation = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/about-us',
      name: 'About',
    },
    {
      path: '/dogs',
      name: 'Dogs',
      authed: true,
    },
    {
      path: '/basket',
      name: 'Panier',
    },
  ];

  const setDefaultSelectedMenuItem = () => {
    navigation.forEach((link, index) => {
      if (link.path === props.pathname) {
        return [index.toString()];
      }
    });
  };

  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={setDefaultSelectedMenuItem()}
            style={{ lineHeight: '64px' }}>
            {navigation.map((link, index) => {
              //eslint-disable-line
              if ((link.authed && !isEmpty(props.auth.user)) || !link.authed) {
                return (
                  <Menu.Item key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </Menu.Item>
                );
              }
            })}

            <Menu.Item key="4" style={{ float: 'right' }}>
              {!isEmpty(props.auth.user) ? (
                <a onClick={props.logout}>{props.auth.user.username}</a>
              ) : (
                <Link to="/auth">Auth</Link>
              )}
            </Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: '0 50px' }}>
          *
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-us" component={About} />
            <Route path="/dogs" component={Dog} />
            <Route path="/basket" component={Basket} />
            <Route path="/auth" component={Auth} />
          </Switch>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Create React App Redux enhanced
        </Footer>
      </Layout>
    </Router>
  );
};

App.propTypes = {
  logout: func,
  pathname: string,
  auth: object,
};

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  auth: state.auth,
});

const mapDispatchToProps = {
  logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
