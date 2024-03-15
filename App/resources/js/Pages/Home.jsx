import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NavBarGuest from '@/Components/NavBarGuest';

import EventShelf from '@/Components/EventShelf';

import NavBarAuthed from '@/Components/NavBarAuthed';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Home({ events }) {

    return (
        <>        
        <div className="flex flex-col min-h-screen justify-between bg-background-col">
            
            <Head title="Home" />

            <NavBarGuest />
            {/* <NavBarAuthed /> */}            
            
            {/* Body Container */}
            <div className="flex flex-col w-full  text-font-col mx-auto max-w-7xl px-2 sm:p-5 lg:px-8">
                
                {/* <h1>{events.event_name}</h1> */}
                
                <EventShelf events={events}></EventShelf>

            </div>
            {/* Display Footer */}
            <Footer />
        </div>
        </>
    );
}