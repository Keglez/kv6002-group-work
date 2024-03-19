import React from "react";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import Section from "@/Components/Stats/Section"




const App = ({events, userPermissions }) => {
    const mappedEvents = events.map(event => ({ id: event._id, name: event.event_name }));
    const categories = [
        {
            title: "User Data",
            permission: 1,
            contents: [
                {
                    content: "User Profile",
                    nick: "userdata",
                    param: "n",
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
                    param: "Event",
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
                    param: "n",
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
                    param: null,
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
                            label: "Open Graphs",
                        },
                    ],
                },
            ],
        },
    ];
    

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <NavBar authenticated />
            <div className="flex-1 mt-8 px-4">
                {categories.map((category, index) => (
                    <Section
                        key={index}
                        title={category.title}
                        catePerm={category.permission}
                        contents={category.contents}
                        userPermission={3} // Requires User setup to retrieve permissions for above 3 is max perms
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default App;
