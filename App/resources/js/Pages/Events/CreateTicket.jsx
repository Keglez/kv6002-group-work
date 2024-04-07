import Navbar from '@/Components/NavBar';
import Footer from '@/Components/Footer';

import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import FileInput from '@/Components/FileInput';
import PrimaryButton from '@/Components/PrimaryButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import { Head, useForm  } from '@inertiajs/react';


export default function CreateTicket({ auth, organiser })
{
    const {data, setData, post, processing, errors, reset} = useForm({
        tickets_title: '',
        tickets_desc: '',
        tickets_date: '',
        tickets_num: '',
    });
    

    const submit = (e) => {            

        e.preventDefault();
        post(route('ticket.store'));
    }

    return (    
        <div className="flex flex-col min-h-screen justify-between bg-background-col">
            
            <Head title="Create Ticket" />

            {/* Display Navbar */}
            <Navbar prop={auth} />
       
            
            {/* Body Container */}
            <div className="min-h-screen flex w-full h-full text-font-col mx-auto max-w-7xl px-2 sm:p-5 lg:px-8">
                                
                <div className="w-full">

                    <h1 className="flex justify-between text-xl py-6 bg-foreground-col text-center rounded-lg mb-6">
                        <div className="w-2/3 mx-6 flex items-center text-left">
                            Create Ticket
                        </div>                        
                        <div className="w-1/3 mx-6 rounded-lg text-right bg-foreground-col">
                            <a href={route('event')}><PrimaryButton><FontAwesomeIcon icon={faLeftLong} /></PrimaryButton></a>
                        </div>
                    </h1>

                    <div className="overflow-x-auto shadow-md rounded-lg">
                        <form method="post" onSubmit={submit} className="bg-tertiary-col p-6">                            
                            <div>
                                <InputLabel htmlFor="event_orgi" value="Site Organiser Label" />
                                <TextInput
                                    id="event_orgi"
                                    type="text"
                                    name="event_orgi"
                                    value={data.event_orgi}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    disabled
                                    onChange={(e) => setData('event_orgi', e.target.value)}
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="event_name" value="Ticket Name" />

                                <TextInput
                                    id="event_name"
                                    type="text"
                                    name="event_name"
                                    value={data.event_name}
                                    placeholder="Enter Event Name"
                                    className="mt-1 block w-full"                                    
                                    isFocused={true}
                                    onChange={(e) => setData('event_name', e.target.value)}
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="event_desc" value="Ticket Description" />

                                <TextInput
                                    id="event_desc"
                                    type="text"
                                    name="event_desc"
                                    value={data.event_desc}
                                    placeholder="Enter Event Description"
                                    className="mt-1 block w-full"                                    
                                    isFocused={true}
                                    onChange={(e) => setData('event_desc', e.target.value)}
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="event_date" value="Ticket Date" />

                                <TextInput
                                    id="event_date"
                                    type="date"
                                    name="event_date"
                                    value={data.event_date}
                                    className="mt-1 block w-full"                                    
                                    isFocused={true}
                                    onChange={(e) => setData('event_date', e.target.value)}
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>



                            <div className="flex justify-center mt-6">
                                <PrimaryButton className="justify-center w-1/3 lg:w-1/6" disabled={processing}>
                                    Submit
                                </PrimaryButton>
                            </div>

                        </form>
                    </div>

                </div>
                

            </div>
            {/* Display Footer */}
            <Footer />
        </div>
    );
}
