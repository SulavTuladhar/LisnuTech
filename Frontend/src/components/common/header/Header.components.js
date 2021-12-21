/* functional component */
import './Header.components.css';
import { withRouter } from 'react-router-dom';

const logout = (history) =>{
    // Clearning Local storage
    localStorage.clear();
    history.push('/login')
    // Navigate to Loginpage
}

const HeaderComponent = (props)=>{
    console.log('props is >>', props)
    let content = props.isLoggedIn
        ?   <ul className="nav-list-loggedIn">
                <li className="nav-loggedIn-item right-border"><img src='./images/Home.svg' alt='home-icon' className='svg-icon' /></li>
                <h3 className="logo"> Chatta Mitho </h3> 
                <li className="nav-loggedIn-item left-border" > <img src='./images/logout.svg' onClick={()=>logout(props.history)} alt='logout-icon' className='svg-icon logout' /> </li>
            </ul>
        :   <ul className="nav-list">
                <li className="nav-logo"><h3 className="logo"> Chatta Mitho </h3> </li>
                <div className="side-nav">
                <li className="nav-item">About us</li>
                <li className="nav-item">Menu</li>
                <li className="nav-item">Contacts</li>
                </div>
            </ul>
    return(
        <div className="nav-bar">

            {content}

        </div>
    )
}

export const Header = withRouter(HeaderComponent) 