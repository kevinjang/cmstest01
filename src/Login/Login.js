import React from 'react'
import {Alert} from 'antd'
import 'antd/lib/style/css'
import {Router, Redirect} from 'react-router'
import Login from 'ant-design-pro/lib/Login'
import 'ant-design-pro/lib/Login/style/css'
import { browserHistory } from 'react-router'

const { Tab, UserName, Password,Captcha, Submit, Mobile } = Login

class Login1 extends React.Component {
    state = {
        type: 'tab1',
        notice: '',
        loggedIn: false,
        routes: [
            {
                path: './MainFrame/MainFrame'
            }
        ]
    }
    constructor(props) {
        super(props)
        // this.state = {
        //     tabs:[]
        // }
    }

    onTabChange = (e)=>{
        // console.log(this)
        this.setState({
            type: e
        })
    }

    onSubmit= (err,values)=>{
        this.setState({
            notice: '消息提醒'
        })
        // Router.Redirect('./MainFrame/MainFrame')
    }

    render() {
        const usernameRules = [{
            required:true,
            message:'请输入用户名'
        }];
        const passwordRules = [{
            required:true,
            message:'请输入密码'
        }];
        const mobileRules = [{
            required:true,
            message:"请输入手机号"
        },{
            min: 11,
            message:'请输入11位手机号'
        },{
            max: 11,
            message:'请输入11位手机号'
        }]
        return <div style={{ height: '100vh' }}>
            <Login 
                defaultActiveKey={this.state.type}
                onTabChange={this.onTabChange}
                onSubmit={this.onSubmit}
                style={{ marginTop: '100px',marginLeft: '500px' }}>
                <Tab key="tab1" tab="账号登录">
                    <UserName name="username" placeholder="用户名" rules={usernameRules}></UserName>
                    <Password name="password" placeholder="密码" rules={passwordRules}></Password>
                </Tab>
                <Tab key="tab2" tab="手机号登录">
                    <Mobile name="mobile" placeholder="手机号" rules={mobileRules}></Mobile>
                    <Captcha name="captcha" placeholder="验证码"></Captcha>
                </Tab>
                <Submit>
                    登录
                </Submit>
            </Login>
            <Router history={browserHistory}>
                <Redirect to='./MainFrame/MainFrame'>123</Redirect>
            </Router>
            {
                this.state.notice &&
                <Alert message={this.state.notice} type="info" showIcon closable></Alert>
            }
        </div>
    }
}

export default Login1