
import ChatScreen from '@/Components/Messages/ChatScreen';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NavBarGuest from '@/Components/NavBarGuest';

import EventShelf from '@/Components/EventShelf';
import PrimaryButton from '@/Components/PrimaryButton';

import NavBarAuthed from '@/Components/NavBarAuthed';
import Footer from '@/Components/Footer';
import { Head, useRemember  } from '@inertiajs/react';

export default function Welcome({ chats }) {

    console.log(chats);
    var chat = chats.at(0);
    console.log(chat.messages.at(0).message);

    return (
        <>        
        <div className="flex flex-col min-h-screen justify-between bg-background-col">
            
            <Head title="Chat" />

            <NavBarGuest />
            {/* <NavBarAuthed /> */}            
            
            {/* Body Container */}
            <div className="flex flex-col w-full  text-font-col mx-auto max-w-7xl px-2 sm:p-5 lg:px-8">
                
                {/* <h1>{events.event_name}</h1> */}
                
                <ChatScreen query = {chat}/>
                

            </div>
            {/* Display Footer */}
            <Footer />
        </div>
        </>
        );
}
