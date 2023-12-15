import {NavLink} from 'react-router-dom';

function NavBar({ onHandleLogout }) {
    return (
        // might get rid of view applicaitons
        // all of these will become links with reactRouterDom
        // search will take you to AppartmetsListingPage
        // Logout will trigger fetch to sessions#delete
        <div>
            <button onClick={(e) => onHandleLogout(e.target.value)}>Logout</button>
            <NavLink to={'/appartment-listings'}><button>Search For Appartments</button></NavLink>
            <NavLink to={'/appartment-listings'}><button>View Applications</button></NavLink>
        </div>
    )
}

export default NavBar;