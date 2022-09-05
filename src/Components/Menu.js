import { Link } from "react-router-dom";

function Menu(props){
    return (
        <div className="menu">
            <div  className=  "navbar navbar-expand-lg bg-dark" >
                <div className="menu-list">
                <Link to="/">Home</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/career'>Career</Link>
                <Link to='/aboutme'>Aboutme</Link>
                <div className="logout-btn">
                    <button className="btn btn-primary" onClick={props.onLogout}>Logout</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;