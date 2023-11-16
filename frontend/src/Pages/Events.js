import { useState, useEffect } from "react";
import EventsList from "./EventsList";


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
 return(
    <>
    
    <EventsList />

    </>
 );

}
/**<div style={{textAlign: 'center'}}>     
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

    </div> 
    {!loading && <EventsList events = {fetchedEvents}/>}*/

export default EventsPage;