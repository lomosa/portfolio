import React from "react";
import {Col, Row} from 'antd';
import "./form.css";
import {Button, Space} from 'antd';
import emailjs from '@emailjs/browser';
import {LinkedinFilled,TwitterOutlined,GithubOutlined} from '@ant-design/icons';




export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('service_wh8fh09', 'template_x6me7aa', e.target, 'Th9V-xWCTeaQJCZfW')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}


  /*const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional');
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };  */


  /* const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wh8fh09', 'template_dyxe77h', form.current, 'Th9V-xWCTeaQJCZfW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }; */



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
          
          <div className="contact">
            <h1 className="abouth"> CONTACT ME</h1>
            <p className="aboutp"> Please Feel Free To Contact Me. </p>

          {/* <Form
      form={form}
      layout="vertical"
      initialValues={{
        requiredMarkValue: requiredMark,
      }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark} 
      onSubmit ="sendEmail"
    >

      <Form.Item label="Name " required tooltip="This is a required field">
        <Input name="name" placeholder=" " />
      </Form.Item>
      <Form.Item  label="Email " required tooltip="This is a required field">
        <Input name="email" placeholder=" " />
      </Form.Item>
      <Form.Item  label="Message"
       required tooltip="This is a required field"
      >
        <Input name="message" placeholder=" " />
      </Form.Item>
      <Form.Item>
        <Button type="primary" className="button2"> SEND </Button>
      </Form.Item>
    </Form> 

 <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
  </form> */}
<Space>
<form onSubmit={sendEmail} className ="form" >
                    <div className="divform" >
                        <label> Name </label> <br/>
                        <input type="text" className="inputtext" name="name"/>
<br/>
                       <label> Email  </label> <br/>
                            <input type="email" className="inputtext" name="email"/> 
                           
                        <br/>
                        <label> Subject </label> <br/>
                        <input type="text" className="inputtext" name="subject"/>
<br/>
                        <label> Message </label> <br/>
                         <textarea className="inputtext" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
<br/>

                            <button type="submit" className="buttonsub" value="Send Message"> SEND </button>

                    </div>
                </form>
                </Space>
            </div>


          </Col>
        </Row>
    );
};
