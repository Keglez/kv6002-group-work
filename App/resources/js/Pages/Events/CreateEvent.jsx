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
import { Head  } from '@inertiajs/react';



const errors = "";

export default function CreateEvent({ organiser })
{    
    const[values, setValues] = useState({
        event_orgi: "",
        event_name: "",
        event_desc: "",
        event_date: "",
        event_start_time: "",
        event_end_time: "",
        event_thumb: "",
        event_slug: "",
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    values.event_orgi = organiser;

    const submit = (e) => {    

        var slug = (values.event_orgi.replaceAll(" ", "-") + "/" + values.event_name.replaceAll(" ", "-")).toLowerCase();

        const event = {
            event_orgi: values.event_orgi,
            event_name: values.event_name,
            event_desc: values.event_desc,
            event_date: (values.event_date).replaceAll("-", "/") + " [" + values.event_start_time + " - " + values.event_end_time + "]",
            event_thumb: values.event_thumb,
            event_slug: slug,
        }
        
        //alert("Submitted... (not really)");
        route('store', event);
    }

    return (    
        <div className="flex flex-col min-h-screen justify-between bg-background-col">
            
            <Head title="Create Event" />

            {/* Display Navbar */}
            <Navbar auth={true} />
       
            
            {/* Body Container */}
            <div className="min-h-screen flex w-full h-full text-font-col mx-auto max-w-7xl px-2 sm:p-5 lg:px-8">
                                
                <div className="w-full">

                    <h1 className="flex justify-between text-xl py-6 bg-foreground-col text-center rounded-lg mb-6">
                        <div className="w-2/3 mx-6 flex items-center text-left">
                            Create Event
                        </div>                        
                        <div className="w-1/3 mx-6 rounded-lg text-right bg-foreground-col">
                            <a href={route('event')}><PrimaryButton><FontAwesomeIcon icon={faLeftLong} /></PrimaryButton></a>
                        </div>
                    </h1>

                    <div className="overflow-x-auto shadow-md rounded-lg">
                        <form onSubmit={submit} className="bg-tertiary-col p-6">                            
                            <div>
                                <InputLabel htmlFor="event_orgi" value="Event Organiser" />
                                <TextInput
                                    id="event_orgi"
                                    type="text"
                                    name="event_orgi"
                                    value={values.event_orgi}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    disabled
                                    onChange={handleChange}
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="event_name" value="Event Name" />

                                <TextInput
                                    id="event_name"
                                    type="text"
                                    name="event_name"
                                    value={values.event_name}
                                    placeholder="Enter Event Name"
                                    className="mt-1 block w-full"                                    
                                    isFocused={true}
                                    onChange={handleChange}
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="event_desc" value="Event Description" />

                                <TextInput
                                    id="event_desc"
                                    type="text"
                                    name="event_desc"
                                    value={values.event_desc}
                                    placeholder="Enter Event Description"
                                    className="mt-1 block w-full"                                    
                                    isFocused={true}
                                    onChange={handleChange}
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="event_date" value="Event Date" />

                                <TextInput
                                    id="event_date"
                                    type="date"
                                    name="event_date"
                                    value={values.event_date}
                                    className="mt-1 block w-full"                                    
                                    isFocused={true}
                                    onChange={handleChange}
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="event_start_time" value="Event Start Time" />

                                <TextInput
                                    id="event_start_time"
                                    type="time"
                                    name="event_start_time"
                                    value={values.event_start_time}                                    
                                    className="mt-1 block w-full"                                    
                                    isFocused={true}
                                    onChange={handleChange}
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="event_end_time" value="Event End Time" />

                                <TextInput
                                    id="event_end_time"
                                    type="time"
                                    name="event_end_time"
                                    value={values.event_end_time}                                    
                                    className="mt-1 block w-full"                                    
                                    isFocused={true}
                                    onChange={handleChange}
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="event_thumb" value="Event Image" />

                                <TextInput
                                    id="event_thumb"
                                    type="text"
                                    name="event_thumb"
                                    placeholder="Enter Image URL"
                                    value={values.event_thumb}                                    
                                    className="mt-1 block w-full"                                    
                                    isFocused={true}
                                    onChange={handleChange}
                                />
                                {/*https://www.hdwallpapers.in/thumbs/2020/himalaya_mountains_under_blue_sky_during_daytime_4k_hd_nature-t2.jpg*/}
                                {/*<FileInput
                                    id="event_image"
                                    type="file"
                                    name="event_image"
                                    value={values.event_image}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={handleChange}
                                />*/}

                                <InputError message={errors.email} className="mt-2" />
                            </div>


                            <div className="flex justify-center mt-6">
                                <PrimaryButton className="justify-center w-1/3 lg:w-1/6">
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