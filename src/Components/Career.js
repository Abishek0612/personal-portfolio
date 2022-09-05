import Menu from "./Menu";
import './Career.css';

function Career (props) {
    return (
        <div className="career">
            <Menu onLogout={props.onLogout} />
            <h1 className="objective">CAREER OBJECTIVE:-</h1>
            <h4 className="objective-body">Seeking an entry-level position to begin my career in a high-level professional environment.i would like to develop and update my knowledge to latest technologies and be a part of a diverse and dynamic team that adds to both pesonal and profesional growth.</h4>
        </div>
    )
}

export default Career;



// import Menu from "./Menu";
// import Accordion from 'react-bootstrap/Accordion';


// function Aboutme(props) {
//     return(
//         <div>
//              <div className="home">
//             <Menu onLogout={props.onLogout} />
//                  <p>ddddddd</p>
//                  {/* {/* <Accordion className="career-align"> */}
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-circle" viewBox="0 0 16 16">
//   <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"/>
// </svg> Qualification:</Accordion.Header>
//         <Accordion.Body><h1>1)Bachelor of Computer Application</h1>
//                         <h1>2)MBA System Management</h1>
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="1">
//         <Accordion.Header><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-2-circle" viewBox="0 0 16 16">
//             <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z"/>
//         </svg>Skills</Accordion.Header>
//         <Accordion.Body>
//             <h3>HTML 5</h3>
//             <h3>CSS 3</h3>
//             <h3>JAVA SCRIPT</h3>
//             <h3>BOOTSTRAP 5</h3>
//             <h3>REACT JS</h3>
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion> */}
//             </div>
//         </div>
//     )
// }

// export default Aboutme;