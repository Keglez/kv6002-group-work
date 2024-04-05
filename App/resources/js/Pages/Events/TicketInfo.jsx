import React from 'react';
import Navbar from '@/Components/NavBar';
import Footer from '@/Components/Footer';
import PrimaryButton from '@/Components/PrimaryButton';

import { Head } from '@inertiajs/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';


export default function TicketInfo({ auth, tickets })
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
            
            <Head title="Ticket Dashboard" />


            {/* Display Navbar */}
            <Navbar prop={auth} />
       
            
            {/* Body Container */}
            <div className="min-h-screen flex w-full h-full text-font-col mx-auto max-w-7xl px-2 sm:p-5 lg:px-8">
                
                <div className="w-full">

                    <div className="flex-col justify-between text-xl bg-foreground-col rounded-lg space-y-6 py-6">

                        <div className="tracking-wide py-2 w-full mx-6 text-2xl flex items-center">
                            <span><p className="flex">Ticket Info</p></span>
                        </div>

                        
                        

                        <div className="flex items-middle px-8 text-left space-x-6 text-base">

                            <div className="space-y-2 flex flex-col w-1/3">
                                
                                <div className="flex flex-col">
                                    <span className="underline pb-3">Time:</span>
                                    <span className="pb-3">{tickets_date}</span>
                                </div>       

                                <div className="flex flex-col">
                                    <span className="underline pb-3">Location:</span>
                                    <span className="">Central Mall, Kuala Lumpur, Malaysia</span>
                                    <span className="">Kuala Lumpur,</span>
                                    <span className="pb-3">Malaysia</span>
                                </div>


                                <div>
                                    <span>
                                            Watch Ticket</span>
                                </div>                                
                            </div>


                            <div className="w-2/3">
                                <h2 className="underline pb-3">Description:</h2>
                                {tickets_desc}
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
