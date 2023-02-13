import React from "react";
import {Col, Row} from 'antd';
import {Button, Space} from 'antd';

import {LinkedinFilled,TwitterOutlined,GithubOutlined} from '@ant-design/icons';

function About()
{
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
              <h1 className="abouth"> ABOUT ME </h1>
              <p className="aboutp"> I am currently enrolled in the United States International University-Africa
                , puruing B.SC in Applied Computer Science.
              </p>
              <p className="aboutp"> I am a fourth year student concentrating in software engineering and have a couple of projects that you can check
                out from <a href="./projects "> here. </a>
              </p>
              <p className="aboutp"> I am mainly a front-end developer and I enjoy working on design of webapps.</p>

            </div>

            <div className="about">
              <h1 className="abouth"> SKILLS </h1>
              <p className="skillsp"> Working on different projects has enabled me to gain different skills in this fields and those skills include:</p>

              <p className="skillsp"> PHP, JavaScript, CSS, SQL and React </p>

            </div>
          </Col>
        </Row>
    );
}

export default About;