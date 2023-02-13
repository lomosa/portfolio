import React from "react";
import womenindata from "./womenindata.png";
import wtm from "./wtm.png";
import {Col, Row} from 'antd';
import {Button, Space} from 'antd';
import {LinkedinFilled,TwitterOutlined,GithubOutlined} from '@ant-design/icons';

function Volunteering(){
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
            <h1 className="abouth"> VOLUNTEERING </h1>
            <p className="aboutp"> I spend my free time volunteering for these two organizations. <br/>  <br/> 
            I mainly deal with event organization, branding and volunteer organization </p>
            <h2 className="projectname">1. Women Techmaker's Nairobi </h2>
            <p className="skillsp"> <img style={{width:"200px", height:"200px", display:"block", margin:"0 auto" }}src={wtm} alt="wtm" className="project "/>
           WTM is a community of women for women in Tech, and are building a world where all women can thrive in tech.
           <br/> Google's Women Techmakers program provides viability, community, and resources for women in technology.
             <br/>
             <br/>
             <br/>
             <Space wrap>
         <a href="https://developers.google.com/womentechmakers"> <Button className="button2" type=" primary"> CHECK IT OUT </Button> </a>
        </Space>
              </p>
            </div>
            <div className="about">

            <h2 className="projectname">2. Women In Data Nairobi</h2>
           <p className="skillsp"> <img style={{width:"200px", height:"200px", display:"block", margin:"0 auto" }}src={womenindata} alt="womenindata" className="project"/> 
           Women in Data is a non-profit organization with a mission to increase diversity in data careers <br/>
           <br/>
           <br/>
             <br/>
             <Space wrap>
        <a href="https://www.womenindata.org/?gclid=CjwKCAiA0JKfBhBIEiwAPhZXD1_2qSZqmWK3HEewqgWwb6WV4ieHqa3mew8DfWqj1RgsLlX98z2-ohoCJzAQAvD_BwE"> <Button className="button2" type=" primary"> CHECK IT OUT </Button>  </a> 
        </Space>
        </p>
            </div>
          </Col>
        </Row>
    );
}

export default Volunteering;