import React from "react";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import Section from "@/Components/Stats/Section"

const App = ({}) => {
return (
    <div className="flex flex-col min-h-screen bg-black text-white">
        <NavBar/>
        <div className="flex-1 mt-8 px-4">
            
        </div>
        <Footer />
    </div>
);
};

export default App;
