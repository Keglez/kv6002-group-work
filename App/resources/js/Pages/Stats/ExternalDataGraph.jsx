import React from "react";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import BarChart from "@/Components/Stats/BarChart";
import LineChart from "@/Components/Stats/LineChart";
import PieChart from "@/Components/Stats/PieChart";

const App = ({auth,emailsSent,textSent,eventShares,amountOfEvents,amountOfUsers,sharesByEvent,popularLocations,eventsByCategory}) => {
return (
    <div className="flex flex-col min-h-screen bg-black text-white">
        <NavBar  prop={auth}/>
        <div className="grid grid-cols-3 flex-1 mt-8 px-4">
        <div className="bg-foreground-col rounded-md shadow-md max-w-md max-h-72 m-4 p-4">
                    <h1><br /> External Emails Sent : {emailsSent}</h1>
                    <h1><br /> External Text Sent : {textSent}</h1>
                    <h1><br /> Amount of events shared : {eventShares}</h1>
                    <h1><br /> Amount of events : {amountOfEvents}</h1>
                    <h1><br /> Amount of users : {amountOfUsers}</h1>
                </div>
            <PieChart chartName="Shares By Event" chartData={sharesByEvent}/>
            <PieChart chartName="Locatinos used by events" chartData={popularLocations}/>
            <BarChart chartName="Popular Categories" chartData={eventsByCategory}/>
            <LineChart chartName="Finances" chartData=""/>
        </div>
        <Footer />
    </div>
);
};

export default App;
