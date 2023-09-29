import Appartment from "./Apartment";

function AptsAppliedTo() {
    return (
        // no fetch in this component since currentUser.appartments will be user and currentUser context not state
        <div>
            <h2 style={{color: "red"}}>AptsAppliedTo</h2>
            {/* will mapp over currentUser.appartments and render <Appartment /> for each appartment */}
            {/* click on appartment to view applicaiton? */}
            <Appartment />
            <Appartment />
        </div>
    )
}

export default AptsAppliedTo;