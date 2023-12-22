import {NavLink} from 'react-router-dom';

function NavBar({ onHandleLogout }) {
    return (

        <div>
            <button onClick={(e) => onHandleLogout(e.target.value)}>Logout</button>
            <NavLink to={'/appartment-listings'}><button>Search For Appartments</button></NavLink>
        </div>
    )
}

export default NavBar;