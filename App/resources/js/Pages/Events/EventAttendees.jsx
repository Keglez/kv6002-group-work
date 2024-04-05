import Navbar from '@/Components/NavBar';
import Footer from '@/Components/Footer';
import PrimaryButton from '@/Components/PrimaryButton';
import Dropdown from '@/Components/Dropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

import { v4 as uuidv4 } from 'uuid';

import { Head  } from '@inertiajs/react';




export default function EventAttendees(props)
{
    /**
     * generate all table rows from data.
     */    
    const event = props.event;
    const users = props.users;
    const rows = []


    for(const attendee of event.event_attendees)
    {
        for(const user of users)
        {
            if (attendee.user_id == user._id) 
            {
                const permission = [];

                if (attendee.user_perm == 0)
                {
                    permission.push(

                        <select key={uuidv4()} name="permission" id="permission" className="rounded bg-background-col w-full h-full">
                            <option selected value="0">Attendee</option>
                            <option value="1">Event Staff</option>
                        </select>
                    );
                }
                else
                {
                    permission.push(

                        <select key={uuidv4()} name="permission" id="permission" className="rounded bg-background-col w-full h-full">
                            <option value="0">Attendee</option>
                            <option selected value="1">Event Staff</option>
                        </select>
                    );
                }


                rows.push(
                    <tr key={uuidv4()}>
                        <td className="align-top"><p className="text-center m-3 line-clamp-4">{user.name}</p></td>
                        <td className="align-top"><p className="text-center m-3 line-clamp-4"><a className="underline" href={'mailto:' + user.email}>{user.email}</a></p></td>
                        
                        <td className="align-middle text-center px-1">
                            {permission}
                        </td>
                        
                        <td className="text-center px-1">
                            <a href={route('attendees.delete', {slug: event.event_slug, id: attendee.user_id} )} className="underline"><PrimaryButton className="w-full justify-center">Remove</PrimaryButton></a>
                        </td>
                    </tr>
                );            
            }
        }        
    }    


    /**
     * Render the page.
     */
    return (    
        <div className="flex flex-col min-h-screen justify-between bg-background-col">
            
            <Head title="Event Dashboard" />

            {/* Display Navbar */}
            <Navbar prop={props.auth} />
       
            
            {/* Body Container */}
            <div className="min-h-screen flex w-full h-full text-font-col mx-auto max-w-7xl px-2 sm:p-5 lg:px-8">
                
                <div className="w-full">

                    <h1 className="flex justify-between text-xl py-6 bg-foreground-col text-center rounded-lg mb-6">

                        <div className="w-2/3 mx-6 flex items-center text-left">
                            Event Attendees - {event.event_name}
                        </div>                        


                        <div className="w-1/3 mx-6 rounded-lg text-right bg-foreground-col">
                            <a href={route('event')}><PrimaryButton><FontAwesomeIcon icon={faLeftLong} /></PrimaryButton></a>
                        </div>
                    </h1>

                    <div className="overflow-x-auto shadow-md rounded-lg">
                        <table className="w-full bg-tertiary-col ">
                            <thead className="bg-foreground-col">
                                <tr className="">
                                    <th className="p-6 w-1/3 text-center">Attendee Name</th>
                                    <th className="p-6 w-1/3 text-center">Attendee Email</th>
                                    <th className="p-6 w-1/6 text-center">Attendee Perm</th>
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