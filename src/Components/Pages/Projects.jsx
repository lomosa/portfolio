import React from "react";
import counselling from './counselling.webp';
import ecommerce from './e-commerce.webp';
import {Col, Row} from 'antd';
import {Button, Space} from 'antd';
import {LinkedinFilled,TwitterOutlined,GithubOutlined} from '@ant-design/icons';

function Projects() {
    return(
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
            <div className="about">
            <h1 className="abouth"> PROJECTS</h1>
            <p className="aboutp"> I have worked on two main projects which are:</p>
            <h2 className="projectname">1. An E-Commerce Bakery System</h2>
            <p className="skillsp"> <img style={{width:"200px", height:"200px", display:"block", margin:"0 auto" }}src={ecommerce} alt="ecommerce" className="project "/>
            This system is used by bakers to connect to customers.<br/> Tech Stack Used:<br/> php, bootstrap, javascript, mysql
             <br/> Key Challenge: <br/> Adding a payment system.
             <br/>
             <br/>
             <br/>
             <Space wrap>
          <a href="https://github.com/lomosa/smallbakeske.git"> <Button className="button2" type=" primary"> CHECK IT OUT </Button> </a>
        </Space>
              </p>
            </div>
            <div className="about">

            <h2 className="projectname">2. An Online Counselling System </h2>
           <p className="skillsp"> <img style={{width:"200px", height:"200px", display:"block", margin:"0 auto" }}src={counselling} alt="counselling" className="project"/> 
           This system is used by students to access counselling services and book sessions <br/> Tech Stack Used: <br/>
           php, bootstrap, javascript, mysql. <br/>
           Key Challenge: <br/>
           Inserting a video conferencing tool to the system 
           <br/>
           <br/>
             <br/>
             <Space wrap>
          <a href="https://github.com/lomosa/Onlinestudentcounselling.git"> <Button className="button2" type=" primary"> CHECK IT OUT </Button> </a>
        </Space></p>
            </div>
          </Col>
        </Row>
    );
}

export default Projects;