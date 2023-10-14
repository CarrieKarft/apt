

function NavBar({ onHandleLogout }) {
    return (
        // might get rid of view applicaitons
        // all of these will become links with reactRouterDom
        // search will take you to AppartmetsListingPage
        // Logout will trigger fetch to sessions#delete
        <div>
            <button onClick={(e) => onHandleLogout(e.target.value)}>Logout</button>
            <button>Search For Appartments</button>
            <button>View Applications</button>
        </div>
    )
}

export default NavBar;