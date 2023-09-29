

function UpdateApplicationForm() {
    return (
        // prefil input fields with applicaiton data passes down as props from completed application
        <div>
            <h2 style={{color: "red"}}>UpdateApplicationForm</h2>
            <form>
            <lable> Full Name: 
                    <input type="text"
                    ></input>
                </lable>
                <lable> Email: 
                    <input type="text"
                    ></input>
                </lable>
                <lable> Yearly Income: 
                    <input type="text"
                    ></input>
                </lable>
                <lable> Current Residence Phone: 
                    <input type="text"
                    ></input>
                </lable>
                <lable> Current Residence Address: 
                    <input type="text"
                    ></input>
                </lable>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default UpdateApplicationForm;