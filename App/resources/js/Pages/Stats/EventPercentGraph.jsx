import React from "react";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import BarChart from "@/Components/Stats/BarChart";
import PieChart from "@/Components/Stats/PieChart";
import LineChart from "@/Components/Stats/LineChart";

const App = ({
    auth,
    EventList,
    AverageAge,
    GlobalAttendancePercentage,
    AttendeePerEvent,
    EventFeedback,
    PerEventAttendance,
}) => {
    const attendees = AttendeePerEvent;
    const eList = EventList;

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <NavBar prop={auth} />
            <div className="grid grid-cols-3 flex-1 mt-8 px-4  min-h-screen">
                <div className="bg-foreground-col rounded-md shadow-md max-w-md max-h-72 m-4 p-4">
                    <h1 className="text-2xl font-bold">Your Events</h1>
                    {eList.map((item, index) => (
                        <div key={index}>{item} <p>Average Age:{AverageAge[index]}</p> {"\n"} </div>
                    ))}
                    <div></div>
                    <h1><br /> Global Attendance Percentage : {GlobalAttendancePercentage}</h1>
                </div>
                <PieChart
                    chartName={"Attendees Per Event"}
                    chartData={attendees}
                />
                <BarChart chartName={"Event Feedback"} chartData={EventFeedback} />
                <BarChart chartName={"Attendance Percentage"} chartData={PerEventAttendance} />
            </div>
            <Footer />
        </div>
    );
};

export default App;
