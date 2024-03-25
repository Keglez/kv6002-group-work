import SearchInput from '@/Components/SearchInput';
import Dropdown from '@/Components/DropdownInput';
import EventCard from '@/Components/EventCard'


/**
 * This component displays a list of events. These events can be filtered using the
 * search bar and more events can be loaded via the `Show More` button.
 * 
 * @param {*} param0 
 * @returns
 */
export default function EventShelf( props ) {
    
    var events = props.events;    
    var event_one = events.at(0);
    var event_two = events.at(1);
    var event_three = events.at(2);    

    var displaySearchBar = props.displaySearchBar;
    var searchBar;

    if(displaySearchBar)
    {
        searchBar = 
        <div className="flex bg-tertiary-col py-4 px-6 text-left rounded-md w-full space-x-5">
            <SearchInput placeholder="Enter event name..." />
            <Dropdown defaultValue="0">
                <option disabled value="0">No Filter</option>
                <option value="2">Reccomended</option>
                <option value="1">Recently Added</option>
            </Dropdown>
        </div>;
    } 

    

    console.log("Search Bar: " + displaySearchBar);
    
    return (
        <>
            {searchBar}

            <div className="flex justify-between w-full text-font-col mx-auto max-w-7xl pt-6">
                <EventCard event_details={event_one} />
                <EventCard event_details={event_two} />
                <EventCard event_details={event_three} />
            </div>
            <div className="flex justify-between w-full text-font-col mx-auto max-w-7xl pt-6">
                <EventCard event_details={event_two} />
                <EventCard event_details={event_one} />
                <EventCard event_details={event_three} />
            </div>
        </>
    )
}