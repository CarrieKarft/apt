

function SearchBar() {
    return (
        // onsubmit will trigger fetch for appartments#show
        <div>
            <lable>Search for appartments by name
                <input type="text"></input>
            </lable>
            <input type="submit"></input>
        </div>
    )
}

export default SearchBar;