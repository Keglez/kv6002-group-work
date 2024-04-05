export default function sociallinks(){
    
    return (    
        <div className="flex flex-col min-h-screen justify-between bg-background-col">
            
            <Head title="Create Event" />

            {/* Display Navbar */}
            <Navbar prop={auth} />
        </div>
    );
}