import React, { Component } from 'react';
import { connect } from 'react-redux';

// 组件
import Nav from '../../Common/Nav';
import Index from '../../Modules/Index/Index';
import List from '../../Modules/List/List';
import Not404 from '../../RouterView/Not404/Not404'

// 路由
// import Router from '../router/index';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


import { Breadcrumb, Button, Icon } from 'antd'


class Home extends Component {
    constructor(props) {
        super(props);
        // if (this.props.location.pathname == "/") this.props.history.push("/Index");
    }

    state = {
        collapsed: true,
        breadcrumbArr: []
    }

    pathNameSplit() {
    }

    callBack(val) {
        // nav收缩状态
        this.setState({
            collapsed: val
        })
    }


    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        let is404 = false;
        var breadcrumbNameMap = {
            Index: "首页",
            List: "列表页"
        }
        // 判断用户是否登录
        if (!this.props.isLogin) {
            // return <Redirect to="/Login" push={false} />
        }
        // /匹配到Index
        if (this.props.location.pathname == "/") {
            return <Redirect to="/Index" push={false} />
        }
        let pathSnippets = this.props.location.pathname.split('/').filter(i => i);
        const extraBreadcrumbItems = pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            is404 = !breadcrumbNameMap[_];
            return (
                <Breadcrumb.Item key={url}>
                    <Link to={url}>
                        {breadcrumbNameMap[_]}
                    </Link>
                </Breadcrumb.Item>
            );
        });
        let locationDom =
            <div className="location">
                <Button type="primary" onClick={() => this.toggleCollapsed()}>
                    <Icon type={this.state.collapsed ? 'menu-fold' : 'menu-unfold'} />
                </Button>
                <Breadcrumb>
                    {extraBreadcrumbItems}
                </Breadcrumb>
            </div>;
        return (
            <div className="wrap">
                <Nav collapsed={this.state.collapsed} />
                <div className="content_wrap" style={{ paddingLeft: this.state.collapsed ? 256 : 80 }}>
                    <div className="main">
                        {is404 ? null : locationDom}
                        <Switch>
                            <Route title="首页" path="/Index" component={Index} />
                            <Route exact title="列表页" path="/List" component={List} />
                            <Route component={Not404} />
                        </Switch>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        isLogin: state.isLogin
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
}
var HomeApp = withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
export default HomeApp;