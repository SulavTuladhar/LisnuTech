/* functional component */
import './Header.components.css';

export const Header = (props)=>{
    console.log('props is >>', props)
    let content = props.isLoggedIn
        ?   <ul className="nav-list">
                <li className="nav-item">About Us</li>
                <li className="nav-item">Menu</li>
                <li className="nav-item">Contacts</li>
                <li className="nav-item">Add </li>
                <li className="nav-item">Logout</li>
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