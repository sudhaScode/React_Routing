import { useRouteLoaderData,redirect, json} from "react-router-dom";
import EventItem from "../components/EventItem";


function EventDetailPage(){
  const data = useRouteLoaderData("event-detail");
  //const id = data.eventid;
  //console.log(data);
    return (
        <>
        <EventItem event={data.event}/>
        </>
    );}

export default EventDetailPage;

export async function loader({request, params}){
  const id = params.eventid;
    const response = await fetch('http://localhost:8080/events/'+id);
    if(!response.ok){
    throw json({title:"Details are not fetched", message:"Something went wrong"},{status:500});
    }
    else{
        const resdata = response.json();
        return resdata;
    }
}

export async  function action({request , params}){
  const id = params.eventid; // it takes path id from route deffination 
  console.log(id);
  const response = await fetch('http://localhost:8080/events/'+id, {method:request.method,});
  if(!response.ok){
    throw   json({message:"action is failed"},{status: 500});
  }
  return redirect('/events'); 
}