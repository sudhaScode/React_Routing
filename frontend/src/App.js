// Challenge / Exercise

import EditEventPage from "./Pages/EditEventPage";
import EventDetailPage, {loader as useEventLoad, action as deleteAction} from "./Pages/EventDetailPage";
//import EventsList from "./Pages/EventsList";
import  EventsPage, {loader as eventsLoader} from "./Pages/Events";
import HomePage from "./Pages/HomePage";
import NewEventPage, {action as newEventAction} from "./Pages/NewEventPage";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from "./RootLayout";
import  ErrorPage from "./ErrorPage";
import EventRoot from "./EventRoot";
import { action as updateEventAction} from './components/EventForm';
import NewsletterPage, {action as newsletterAction} from "./Pages/NewsLetter";

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter(
  [{
    path:'/',
    element:<RootLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      //{path:'', element: <HomePage/>},
      {index:true, element: <HomePage/>,},
      {path: 'events', element:<EventRoot/>,
       children:[
           {index:true, 
            element: <EventsPage/>, 
            loader: eventsLoader, 
           },
           {path: ':eventid', 
            id:"event-detail",
            loader: useEventLoad, 
            children:[
              {index: true, element: <EventDetailPage/>, action: deleteAction  },
              {path: 'edit', element:<EditEventPage/>, action: updateEventAction}
            ]
          },  
           {path:'new', element:<NewEventPage/>, action: updateEventAction}, 
           ]},
           {
            path: 'newsletter',
            element: <NewsletterPage/>,
            action: newsletterAction,
          }, 
          ],
    }
  ]);

function App() {
  return <RouterProvider router= {router}/>
}

export default App;
