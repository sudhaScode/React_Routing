import { useParams, Link } from "react-router-dom";


function EventDetailPage(){
    const params = useParams();

    return (
        <>
        <h1>
            Event overview
        </h1>
        <p>{params.id}</p>
        <Link to = "../.." relative="path">Back</Link>
        </>
    );
}

export default EventDetailPage;