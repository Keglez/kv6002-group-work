import React from "react";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import BarChart from "@/Components/Stats/BarChart";
import LineChart from "@/Components/Stats/LineChart";
import PieChart from "@/Components/Stats/PieChart";
import { Pie } from "react-chartjs-2";

const App = ({auth,gender,age,role,userLocation,userLanguage,userEthnicity}) => {

return (
    <div className="flex flex-col min-h-screen bg-black text-white">
        <NavBar  prop={auth}/>
        <div className="grid grid-cols-3 flex-1 mt-8 px-4">
            <PieChart chartName="Gender" chartData={gender}/>
            <PieChart chartName="Age" chartData={age}/>
            <PieChart chartName="Role" chartData={role}/>
            <PieChart chartName="User Location" chartData={userLocation}/>
            <PieChart chartName="User Language" chartData={userLanguage}/>
            <PieChart chartName="User Ethnicity" chartData={userEthnicity}/>
        </div>
        <Footer />
    </div>
);
};

export default App;
