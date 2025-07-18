import Navbar from '@/Components/NavBar';
import Footer from '@/Components/Footer';
import PrimaryButton from '@/Components/PrimaryButton';

import { v4 as uuidv4 } from 'uuid';

import { Head  } from '@inertiajs/react';


export default function UserDashboard({ auth, events })
{
    console.log(events);
    /**
     * generate all table rows from data.
     */
    const rows = []

    for (const event of events)
    {
        rows.push(
            <tr key={uuidv4()}>
                <td className="align-top"><p className="m-3 line-clamp-4">{event.event_name}</p></td>
                <td className="align-top"><p className="m-3 line-clamp-4">{event.event_desc}</p></td>
                <td className="align-top"><p className="m-3 line-clamp-4">{event.event_date}</p></td>
                <td className="align-top"><p className="m-3 line-clamp-4">{event.event_location}</p></td>
                <td><img className="my-3 mx-auto h-28 w-28 object-cover" src={event.event_thumb} alt="image" /></td>
                    <a href={route('leave', {id: event._id} )} className="underline">leave</a>
                <td className="text-center m-3 space-x-2">
                    
                </td>
            </tr> 
        );           
    }    


    /**
     * Render the page.
     */
    return (    
        <div className="flex flex-col min-h-screen justify-between bg-background-col">
            
            <Head title="Event Dashboard" />

            {/* Display Navbar */}
            <Navbar prop={auth} />
       
            
            {/* Body Container */}
            <div className="min-h-screen flex w-full h-full text-font-col mx-auto max-w-7xl px-2 sm:p-5 lg:px-8">
                
                <div className="w-full">

                    <h1 className="flex justify-between text-xl py-6 bg-foreground-col text-center rounded-lg mb-6">
                        <div className="w-2/3 mx-6 flex items-center text-left">
                            Your user Events
                        </div>
                    </h1>

                    <div className="overflow-x-auto shadow-md rounded-lg">
                        <table className="w-full bg-tertiary-col ">
                            <thead className="bg-foreground-col">
                                <tr className="">
                                    <th className="p-6 w-1/6 text-center">Event Name</th>
                                    <th className="p-6 w-1/3 text-center">Event Description</th>
                                    <th className="p-6 w-1/6 text-center">Event Date</th>
                                    <th className="p-6 w-1/6 text-center">Event Location</th>
                                    <th className="p-6 w-1/6 text-center">Event Thumbnail</th>
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