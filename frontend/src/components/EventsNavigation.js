import classes from './EventsNavigation.module.css';
import { NavLink } from 'react-router-dom';

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
        <li>
            <NavLink to = "new" className={({isActive})=>isActive? classes.active:undefined}>Add Event</NavLink>
          </li>
          <li>
            <NavLink to = "id/edit" className={({isActive})=>isActive? classes.active:undefined}>Edit Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );  
}

export default EventsNavigation;
