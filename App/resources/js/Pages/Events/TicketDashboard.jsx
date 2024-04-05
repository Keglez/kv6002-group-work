import Navbar from '@/Components/NavBar';
import Footer from '@/Components/Footer';
import PrimaryButton from '@/Components/PrimaryButton';

import { v4 as uuidv4 } from 'uuid';

import { Head  } from '@inertiajs/react';




export default function TicketDashboard({ events, organiser })
{
    /**
     * generate all table rows from data.
     */
    const rows = []
    var ticketnumber = 0;
    for (const event of events)
    {
        rows.push(
            <tr key={uuidv4()}>
                <td className="align-top"><p className="m-3 line-clamp-4">{event.tickets_title}</p></td>
                <td className="align-top"><p className="m-3 line-clamp-4">{event.tickets_desc}</p></td>
                <td className="align-top"><p className="m-3 line-clamp-4">{event.tickets_date}</p></td>
                <td className="align-top"><p className="m-3 line-clamp-4">{ticketnumber}</p></td>
                <td className="text-center m-3 space-x-2">
                    {/*<a href={route('edit', {id: event._id} )} className="underline">Edit</a>*/}
                    <span>|</span>
                    <a href={route('delete', {id: event._id} )} className="underline">Delete</a>
                </td>
            </tr> 
        );
        ticketnumber = ticketnumber+1;
    }    


    /**
     * Render the page.
     */
    return (    
        <div className="flex flex-col min-h-screen justify-between bg-background-col">
            
            <Head title="Ticket Dashboard" />

            {/* Display Navbar */}
            <Navbar auth={true} />
       
            
            {/* Body Container */}
            <div className="min-h-screen flex w-full h-full text-font-col mx-auto max-w-7xl px-2 sm:p-5 lg:px-8">
                
                <div className="w-full">

                    <h1 className="flex justify-between text-xl py-6 bg-foreground-col text-center rounded-lg mb-6">

                        <div className="w-2/3 mx-6 flex items-center text-left">
                            Ticket Dashboard - Management
                        </div>                        


                        <div className="w-1/3 mx-6 rounded-lg text-right bg-foreground-col">
                            <a href={route('create')}><PrimaryButton>Create Ticket</PrimaryButton></a>
                        </div>
                    </h1>

                    <div className="overflow-x-auto shadow-md rounded-lg">
                        <table className="w-full bg-tertiary-col ">
                            <thead className="bg-foreground-col">
                                <tr className="">
                                    <th className="p-6 w-1/6 text-center">Ticket Name</th>
                                    <th className="p-6 w-1/3 text-center">Ticket Description</th>
                                    <th className="p-6 w-1/6 text-center">Ticket Date</th>                                
                                    <th className="p-6 w-1/6 text-center">Ticket Number</th>
                                    <th className="p-6 w-1/6 text-center">Options</th>
                                </tr>
                            </thead>              
                            <tbody>
                                {rows}                                
                            </tbody>
                        </table>
                    </div>

                </div>
                

            </div>
            
            {/* Display Footer */}
            <Footer />
            
        </div>
    );
}
