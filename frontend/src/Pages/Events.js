//import { useState, useEffect } from "react";
import EventsList from "./EventsList";
import { useLoaderData } from "react-router-dom";


function EventsPage(){
  /*const [fetchedEvents, setFetchedEvents] = useState();
 const [loading, setLoading] =  useState(false);
 const [error,setError] = useState();

useEffect(()=>{
    async function fetchEvents(){
        setLoading(true);
     try{
        const response = await fetch('http://localhost:8080/events');
        
        if(!response.ok){
            setError("Fetching events got failed");
        }
        else{
            const resData = await response.json();
            console.log("event "+ JSON.stringify(resData.events) || "no event");
            setFetchedEvents(resData.events);
        }
    }
    catch(error){
        console.error("Error fetching events:", error);
        setError("An error occurred while fetching events");
    }
        setLoading(false);
        
    }
    fetchEvents();
 }, []);*/
 const data = useLoaderData();
 const events = data.events;
 
 return(
    <>
    {events&&<EventsList events={events}/>}
    </>
 );

}
/**<div style={{textAlign: 'center'}}>     
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

    </div> 
    {!loading && <EventsList events = {fetchedEvents}/>}*/
export default EventsPage;

export async function loader(){
    const response = await fetch('http://localhost:8080/events');
    
    if(!response.ok){
     // return {isErorr: true, message:"Couldn't"}
     throw new Response(JSON.stringify({title: "error", message:"Couldn't load data"}),
     {status: 500})
    }
    else{
      //  const resData = await response.json();
        return response;
    }
}