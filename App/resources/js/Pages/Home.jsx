import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NavBarGuest from '@/Components/NavBarGuest';

import EventShelf from '@/Components/EventShelf';
import PrimaryButton from '@/Components/PrimaryButton';

import NavBarAuthed from '@/Components/NavBarAuthed';
import Footer from '@/Components/Footer';
import { Head, useRemember  } from '@inertiajs/react';



export default function Home({ events }) 
{
    const [ev, setEvents] = useRemember([]);

    function handleAdd()
    {
        const e = [...ev,[]];
        setEvents(e);
    }

    console.log(events);
    return (
        <>        
        <div className="flex flex-col min-h-screen justify-between bg-background-col">
            
            <Head title="Home" />

            <NavBarGuest />
            {/* <NavBarAuthed /> */}            
            
            {/* Body Container */}
            <div className="flex flex-col w-full  text-font-col mx-auto max-w-7xl px-2 sm:p-5 lg:px-8">
                
                {/* <h1>{events.event_name}</h1> */}
                
                
                <EventShelf events={events} displaySearchBar></EventShelf>

                {
                    ev.map((data, i) => {
                        return (
                            <EventShelf key={i} events={events}></EventShelf>
                        )
                    })
                }

                <div className="m-auto pt-6">
                    <PrimaryButton onClick={handleAdd}>Show More</PrimaryButton>
                </div>

            </div>
            {/* Display Footer */}
            <Footer />
        </div>
        </>
    );
}