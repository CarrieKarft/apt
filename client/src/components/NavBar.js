

function NavBar() {
    return (
        // might get rid of view applicaitons
        // all of these will become links with reactRouterDom
        // search will take you to AppartmetsListingPage
        // Logout will trigger fetch to sessions#delete
        <div>
            <button>Logout</button>
            <button>Search For Appartments</button>
            <button>View Applications</button>
        </div>
    )
}

export default NavBar;