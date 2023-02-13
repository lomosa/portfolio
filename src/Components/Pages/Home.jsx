import React from "react";
import {Col, Row} from 'antd';
import manji from './manji.webp';
import {Button, Space} from 'antd';
import {LinkedinFilled,TwitterOutlined,GithubOutlined} from '@ant-design/icons';

function Home () {
    return (
        <Row>
        <Col className ="part-1" span ={12}>
        <div className="manjih1"> 
        <p> <br/> </p>
        <h1 className="mnanjih3" > LAUREN OMOSA INC. </h1>
        <h2 className="manjih2"> Hi, <br/> Welcome to my Portfolio. </h2>

        <Space wrap>
         <a href="./contact"> <Button className="button1" type=" primary"> LETS CHAT </Button> </a> 
        </Space>
        </div>
        
        <div className="connect">
         <h2> CONNECT WITH ME </h2>
         <Space size={'large'}>
         <a href="https://www.linkedin.com/in/lauren-omosa-39a035258/"> <LinkedinFilled /> </a> 
         <a href=" "> <TwitterOutlined /> </a> 
         <a href="https://github.com/lomosa "><GithubOutlined /> </a>
         </Space>
        </div>
          </Col>
      
          <Col className="part-2" span ={12}>

            <p>  <br/>  <br/> <br/> </p>
          <img style={{width:"600px", height:"600px", display:"block", margin:"0 auto" }}src={manji} alt="manji" />
         </Col>
        </Row>
      );
}

export default Home;