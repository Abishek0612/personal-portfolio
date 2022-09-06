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



