import React from 'react';
import Navbar from '@/Components/NavBar';
import Footer from '@/Components/Footer';
import PrimaryButton from '@/Components/PrimaryButton';

import { Head } from '@inertiajs/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';


export default function TicketInfo({ tickets })
{    
    const tickets_id = tickets._id;
    const tickets_title = tickets.tickets_title;    
    const tickets_desc = tickets.tickets_desc;
    const tickets_date = tickets.tickets_date;
    const tickets_num = tickets.tickets_num;

    /**
     * Render the page.
     */
    return (    
        <div className="flex flex-col min-h-screen justify-between bg-background-col">
            
            <Head title="Event Dashboard" />


            {/* Display Navbar */}
            <Navbar auth={true} />
       
            
            {/* Body Container */}
            <div className="min-h-screen flex w-full h-full text-font-col mx-auto max-w-7xl px-2 sm:p-5 lg:px-8">
                
                <div className="w-full">

                    <div className="flex-col justify-between text-xl bg-foreground-col rounded-lg space-y-6 py-6">

                        <div className="tracking-wide py-2 w-full mx-6 text-2xl flex items-center">
                            <span><p className="flex">Ticket Info</p></span>
                        </div>

                        {/* Event Thumbnail/Picture */}
                        <div className="w-full flex px-8 space-x-6">
                            

                            <div className="w-1/2">
                                <img src={event_thumb} className="object-cover w-full rounded" alt="image" />
                            </div>
                            

                            {/* Extra Images */}
                            <div className="w-1/2 flex flex-col space-y-6">

                                <div className="w-full h-1/2 flex flex-row space-x-6">
                                    <div className="flex text-5xl items-center justify-center bg-tertiary-col w-1/2 rounded">
                                        <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
                                    </div>

                                    <div className="flex text-5xl items-center justify-center bg-tertiary-col w-1/2 rounded">
                                        <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
                                    </div>

                                    {/* Swap out for real image functionality in future versions. */}
                                    {/* <img src={event_thumb} className="object-cover pr-3 w-1/2 rounded" alt="image" /> */}
                                    {/* <img src={event_thumb} className="object-cover pl-3 w-1/2 rounded" alt="image" /> */}
                                </div>

                                <div className="w-full h-1/2 flex flex-row space-x-6">
                                    <div className="flex text-5xl items-center justify-center bg-tertiary-col w-1/2 rounded">
                                        <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
                                    </div>

                                    <div className="flex text-5xl items-center justify-center bg-tertiary-col w-1/2 rounded">
                                        <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
                                    </div>

                                    {/* Swap out for real image functionality in future versions. */}
                                    {/* <img src={event_thumb} className="object-cover pr-3 w-1/2 rounded" alt="image" /> */}
                                    {/* <img src={event_thumb} className="object-cover pl-3 w-1/2 rounded" alt="image" /> */}
                                </div>

                            </div>

                        </div>
                        

                        <div className="flex items-middle px-8 text-left space-x-6 text-base">

                            <div className="space-y-2 flex flex-col w-1/3">
                                
                                <div className="flex flex-col">
                                    <span className="underline pb-3">Time:</span>
                                    <span className="pb-3">{event_date}</span>
                                </div>       

                                <div className="flex flex-col">
                                    <span className="underline pb-3">Location:</span>
                                    <span className="">Central Mall, Kuala Lumpur, Malaysia</span>
                                    <span className="">Kuala Lumpur,</span>
                                    <span className="pb-3">Malaysia</span>
                                </div>


                                <div>
                                    <span><a
                                                href={route("Joining_event", {
                                                    id: "UserID",
                                                    eventId: tickets_id,
                                                })}
                                                className="px-4 py-2 bg-red-200 rounded border border-gray-500 hover:bg-red-500 focus:outline-none focus:border-gray-600 focus:ring focus:ring-gray-500 focus:ring-opacity-50"
                                            >
                                            </a>Join Event</span>
                                </div>                                
                            </div>


                            <div className="w-2/3">
                                <h2 className="underline pb-3">Description:</h2>
                                {event_desc}
                            </div>
                        </div>
                        
                    </div>

                   

                </div>
                

            </div>
            
            {/* Display Footer */}
            <Footer />
            
        </div>
    );
}
