import{ Link } from 'react-router-dom'
import { Row, Col, Space } from 'antd';


function Navigation (){
    return (
        <div>
            <Row>
            <Col className='part-1' span={12}>
                <p> </p>
                <h1 style={{fontFamily:"cursive", textIndent:"1em"}}> </h1> 



 
            </Col>
            <Col className='part-2' span={12}>
            <nav className='navigation'>
                <p> </p>
                <Space size={'large'}> 
                <Link className='linking' to='/'>     HOME    </Link>
                <Link className='linking' to='/about'>    ABOUT    </Link>
                <Link className='linking' to ='/projects'>    PROJECTS    </Link>
                <Link className='linking' to='/volunteering'>    VOLUNTEERING    </Link>
                <Link className='linking' to ='/contact'>    CONTACT    </Link>
                </Space>
                </nav>
            </Col>
            </Row>


        </div>
    );
}

export default Navigation;