import Navbar from '@/Components/NavBar';
import Footer from '@/Components/Footer';
import PrimaryButton from '@/Components/PrimaryButton';

import { Head  } from '@inertiajs/react';




export default function EventDashboard({ events })
{    
    return (    
        <div className="flex flex-col min-h-screen justify-between bg-background-col">
            
            <Head title="Event Dashboard" />

            {/* Display Navbar */}
            <Navbar auth={true} />
       
            
            {/* Body Container */}
            <div className="min-h-screen flex w-full h-full text-font-col mx-auto max-w-7xl px-2 sm:p-5 lg:px-8">
                
                <div className="w-full">
                    <h1 className="text-xl py-6 bg-foreground-col text-center rounded-lg mb-6">Events Dashboard</h1>

                    <div className="overflow-x-auto shadow-md rounded-lg">
                        <table className="w-full bg-tertiary-col ">
                            <thead className="bg-foreground-col">
                                <tr className="">
                                    <th className="p-6 w-1/6 text-center">Event Name</th>
                                    <th className="p-6 w-1/3 text-center">Event Description</th>
                                    <th className="p-6 w-1/6 text-center">Event Date</th>                                
                                    <th className="p-6 w-1/6 text-center">Event Thumbnail</th>
                                    <th className="p-6 w-1/6 text-center">Options</th>
                                </tr>
                            </thead>              
                            <tbody>

                                <tr>
                                    <td className="align-top"><p className="m-3 line-clamp-4">Hot Air Balloon Adventure</p></td>
                                    <td className="align-top"><p className="m-3 line-clamp-4">Experience the world from a new perspective as you embark on a breathtaking hot air balloon ride with our "Soar Above" adventure. Prepare to be enchanted as you drift serenely through the skies, witnessing stunning landscapes unfold beneath you in a truly unforgettable journey.</p></td>
                                    <td className="align-top"><p className="m-3 line-clamp-4">24/06/2024 &#91;9:00 - 17:00&#93;</p></td>
                                    <td><img className="my-3 mx-auto h-28 w-28 object-cover" src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Colorado_Springs_Hot_Air_Balloon_Competition.jpg" alt="image" /></td>
                                    <td className="text-center m-3 space-x-2">
                                        <a href="#" className="underline">Edit</a>
                                        <span>|</span>
                                        <a href="#" className="underline">Delete</a>
                                    </td>
                                </tr>
                                
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