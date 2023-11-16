import { Link } from "react-router-dom";


function NewEventPage(){

    return(
        <div>
        <h1>Create new Event</h1>
        <p><Link to ="../.." relative="path">Back</Link></p>
        </div>

    );
}
export default NewEventPage;