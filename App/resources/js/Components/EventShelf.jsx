import SearchInput from '@/Components/SearchInput';
import Dropdown from '@/Components/DropdownInput';
import PrimaryButton from '@/Components/PrimaryButton';
import EventCard from '@/Components/EventCard'


/**
 * This component displays a list of events. These events can be filtered using the
 * search bar and more events can be loaded via the `Show More` button.
 * 
 * @param {*} param0 
 * @returns
 */
export default function EventShelf() {
    return (
        <>
            <div className="flex bg-tertiary-col py-4 px-6 text-left rounded-md w-full space-x-5">
                <SearchInput placeholder="Enter event name..." />
                <Dropdown placeholder="Filter" />
            </div>

            <div className="flex w-full text-font-col mx-auto max-w-7xl pt-6 space-x-6">
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
            <div className="flex w-full text-font-col mx-auto max-w-7xl py-6 space-x-6">
                <EventCard />
                <EventCard />
                <EventCard />
            </div>

            <div className="m-auto">
                <PrimaryButton>Show More</PrimaryButton>
            </div>
        </>
    )
}