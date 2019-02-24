import React from 'react'
// import ReactDOM from 'react-dom'
import Button from 'antd/lib/button'
import Card from 'antd/lib/card'
import 'antd/dist/antd.css'
import Layout from 'antd/lib/layout'
// import Layout.Header from 'antd/lib/layout-header'
import Dropdown from 'antd/lib/dropdown'
import Menu from 'antd/lib/menu'
import Icon from 'antd/lib/icon'

class MainFrame extends React.Component{
    constructor(props){
        super(props)
    }

    handleMenuClick(e) {
        console.log('click', e);
    }

    render(){
        const menu = (
            <Menu onClick={this.handleMenuClick}>
              <Menu.Item key="1">1st item</Menu.Item>
              <Menu.Item key="2">2nd item</Menu.Item>
              <Menu.Item key="3">3rd item</Menu.Item>
            </Menu>
          );

        return <div style={{height:'100vh'}}>
        <Layout style={{height:'100vh'}}>
            <Layout.Header >
                头部
            </Layout.Header>                
            <Layout>
                <Layout.Sider style="{height:100vh}" collapsible>

                </Layout.Sider>
                <Layout.Content>
                <Card title="测试" size="small">
                    <Button type="primary">测试</Button>
                    <Button type="danger">警告</Button>
                </Card>
                <Dropdown overlay={menu}>
                    <Button>
                        Actions <Icon type="down" />
                    </Button>
                </Dropdown>
            </Layout.Content>
            </Layout>
            <Layout.Footer style={{background: 'cyan'}}>
                Footer
            </Layout.Footer>
        </Layout>
        </div>
    }
}

export default MainFrame