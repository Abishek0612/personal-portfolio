import Menu from "./Menu";
function home (props){
    return(
        <div className="home">
            <Menu onLogout={props.onLogout} />
            <h1 className="home-page">Welcome to my home page</h1>          
        </div>
    )
}

export default home;
