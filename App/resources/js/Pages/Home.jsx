import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NavBarGuest from '@/Components/NavBarGuest';
import NavBarAuthed from '@/Components/NavBarAuthed';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Home({ auth }) {
    return (
        <>        
        <div className="flex flex-col h-screen min-h-screen justify-between bg-background-col">
            
            <Head title="Home" />

            <NavBarGuest />
            {/* <NavBarAuthed /> */}

            {/* Body Container */}
            <div className="w-full h-screen text-font-col mx-auto max-w-7xl px-2 sm:p-5 lg:px-8">
                
                <h1 className="bg-tertiary-col p-6 text-center rounded-md">Welcome Everybody!</h1>

                <p className="bg-tertiary-col p-6 text-left rounded-md my-5">
                    <div className="font-bold underline">Keegan &#91;14/03/2024 - 02:12&#93;:</div>
                    <div className="font-light">
                        Once the authentication section has been completed, the profile will be available in the navigation after login.
                    This page will include events. It will display in order of date added, and can be filtered a search
                    box and a dropdown menu. If you wish to see the authenticated navbar for your own development, uncomment
                    it on line 15 of `resources/js/Pages/Home.jsx` in the project folder and comment out line 14. One last thing,
                    you can update the colours in your css components to the colours found in the `tailwind.config.js` file. All
                    colours are formatted similar to `bg-colourname` so you can just use the find tool to go through and change
                    them to what you wish. Any questions can be posted in the discord and I will be happy to answer. Happy egineering!                    
                    </div>

                    {/* <div className="py-3 text-center w-min m-auto">
                        <iframe src="https://giphy.com/embed/unxCGmTuBvwo2djRLA" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/pudgypenguins-data-code-coding-unxCGmTuBvwo2djRLA">via GIPHY</a></p>    
                    </div> */}

                </p>
            </div>
            {/* Display Footer */}
            <Footer />
        </div>
        </>
    );
}