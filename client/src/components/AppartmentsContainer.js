import Appartment from "./Apartment";

function AppartmentsContainer() {
    // fetch to grab appartments from appartments#index then map to render Appartment component
    return (
        <div>
            <h1>AppartmentsContainer</h1>
            <Appartment />
            <Appartment />
            <Appartment />
        </div>
    )
}

export default AppartmentsContainer;