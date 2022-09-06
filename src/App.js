import Home from './Components/Home';
import Career from './Components/Career';
import Contact from './Components/Contact';
import Aboutme from './Components/Aboutme';
import Login from './Components/Login';
import { BrowserRouter,Routes,Route, } from 'react-router-dom';
import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      isLoggedIn: false
    };
  }
  onLogin = () => {
    this.setState({isLoggedIn:true});
  }
  onLogout =() => {
    this.setState({isLoggedIn:false});
  }

  render() {
    return (
      
      <div className='App'>
       <BrowserRouter>
       <Routes>
         <Route path='/' element={this.state.isLoggedIn ? <Home  onLogout ={this.onLogout} /> :<Login onLogin={this.onLogin} />} />
         <Route path='/contact' element={this.state.isLoggedIn ? <Contact onLogout ={this.onLogout} /> : <Login onLogin={this.onLogin} />} />
         <Route path='/career' element ={this.state.isLoggedIn ? <Career onLogout={this.onLogout} />: <Login onLogin={this.onLogin} /> } />
         <Route path='/aboutme' element ={this.state.isLoggedIn ? <Aboutme onLogout={this.onLogout} />: <Login onLogin={this.onLogin} /> } /> 
       </Routes>
       </BrowserRouter>

     </div>
     
      
     );      
  }
}

export default App;