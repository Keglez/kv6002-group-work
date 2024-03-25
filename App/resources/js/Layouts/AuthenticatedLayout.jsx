import { useState } from 'react';
import Navbar from '@/Components/NavBar';
import Footer from '@/Components/Footer';


export default function Authenticated({user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <>
            <Navbar prop={user} />
            
            <div className="min-h-screen bg-background-col py-6">
                {header && (
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                    </header>
                )}

                <main>{children}</main>
                
            </div>

            <Footer />
        </>
    );
}
