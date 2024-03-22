import React from "react";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import BarChart from "@/Components/Stats/BarChart";

const App = ({}) => {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <NavBar />
            <div className="flex-1 mt-8 px-4">
                <div class="grid justify-center grid-cols-2 auto-cols-max">
                    <BarChart />
                    <BarChart />
                    <BarChart />
                    <BarChart />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
