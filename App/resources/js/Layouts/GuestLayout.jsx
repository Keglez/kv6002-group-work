import NavBar from '@/Components/NavBarGuest';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <>
            <div className="flex flex-col h-screen min-h-screen justify-between bg-background-col">
                <NavBar />
                <div className="h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-background-col">            
                    <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-tertiary-col shadow-md overflow-hidden sm:rounded-lg">
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
