import './Card.css';
import { ListGroup } from "react-bootstrap";
import Menu from "./Menu"
import Card from 'react-bootstrap/Card';
<ListGroup.Item>Cras justo odio</ListGroup.Item>


function Contact (props){
    return(
        <div>
            <Menu onLogout={props.onLogout} />
            <div className="contact">
                <Card style={{ width: '18rem' }}>
                    <ListGroup className='contact-card' variant="flush">
                    <ListGroup.Item>Name : Abishek  U</ListGroup.Item>
                    <ListGroup.Item >Email:uabishek6@gmail.com</ListGroup.Item>
                    <ListGroup.Item>Phone:7550259062</ListGroup.Item>
                </ListGroup>
                </Card>
            </div>
        </div>
        
        
    )
}

export default Contact;