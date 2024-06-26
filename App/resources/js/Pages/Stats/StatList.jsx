import React from "react";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import Section from "@/Components/Stats/Section"




const App = ({events, userPermissions,auth }) => {
    const mappedEvents = events.map(event => ({ id: event._id, name: event.event_name }));
    const userID = auth.user._id;
    const categories = [
        {
            title: "User Data",
            permission: 1,
            contents: [
                {
                    content: "User Profile",
                    nick: "userdata",
                    param: userID,
                    buttons: [
                        {
                            label: "Download Excel",
                        },
                    ],
                },
                // Other content...
            ],
        },
        {
            title: "Event Data",
            permission: 2,
            contents: [
                {
                    content: "Register Users On Event",
                    nick: "UserList",
                    param: userID,
                    events: mappedEvents,   
                    buttons: [
                        {
                            label: "Download Excel",
                        },
                    ],
                },
                {
                    content: "Event Percentages",
                    nick: "eventPercentGraph",
                    param: userID,
                    buttons: [
                        {
                            label: "Open Graphs",
                        },
                    ],
                },
                // Other content...
            ],
        },
        {
            title: "Website Data",
            permission: 3,
            contents: [
                {
                    content: "User demographics",
                    nick: "userDemoGraph",
                    param: userID,
                    buttons: [
                        {
                            label: "Open Graphs",
                        },
                    ],
                },
                {
                    content: "External Data",
                    nick: "externalDataGraph",
                    param: userID,
                    buttons: [
                        {
                            label: "Open Graphs",
                        },
                    ],
                },
                {
                    content: "Event List",
                    nick: "EventList",
                    param: "n",
                    buttons: [
                        {
                            label: "Download Excel",
                        },
                    ],
                },
                {
                    content: "User List",
                    nick: "AllUsers",
                    param: userID,
                    buttons: [
                        {
                            label: "Download Excel",
                        },
                    ],
                },
            ],
        },
    ];
    

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <NavBar prop={auth} />
            <div className="flex-1 mt-8 px-4">
                {categories.map((category, index) => (
                    <Section
                        key={index}
                        title={category.title}
                        catePerm={category.permission}
                        contents={category.contents}
                        userPermission={userPermissions} // Requires User setup to retrieve permissions for above 3 is max perms
                    />
                ))}

            </div>
            <div className="min-h-32"> </div>
            <Footer />
        </div>
    );
};

export default App;
