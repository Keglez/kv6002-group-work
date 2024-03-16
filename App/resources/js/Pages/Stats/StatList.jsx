import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";

// // Functionality for downloading Excel file
// const handleDownloadExcel = (content) => {
//     // Implement functionality to generate and download Excel file
//     post(route('Excel'))

// };

// // Functionality for opening a new page
// const handleOpenPage = (content) => {
//     // Implement functionality to open a new page
//     if(content = 1)
//     {
//     route('eventPercentages')
//     }
//     if(content = 11)
//     {
//         post(route('userDemographics'))
//     }
//     if(content = 111)
//     {
//         post(route('externalData'))
//     }
// };

const Section = ({ title, catePerm, contents, userPermission }) => {
    return (
        <div className="max-w-xl mx-auto mb-8">
            {/* Centered container with maximum width */}
            {catePerm <= userPermission && (
                <div>
                    <h2>{title}</h2>
                    {contents.map((content, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-start mb-2"
                        >
                            {/* Flex container for content and buttons */}
                            <div className="flex-grow ml-4">
                                {/* Flex container for content with left margin */}
                                <p>{content.content}</p>
                            </div>
                            <div className="flex">
                                {/* Flex container for buttons */}
                                {content.buttons.map((button, buttonIndex) => (
                                    <a
                                        href={route(content.nick)}
                                        className="px-4 py-2 bg-red-200 rounded border border-gray-500 hover:bg-red-500 focus:outline-none focus:border-gray-600 focus:ring focus:ring-gray-500 focus:ring-opacity-50"
                                    >
                                        {button.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const categories = [
    {
        title: "User Data",
        permission: 1,
        contents: [
            {
                content: "User Profile",
                nick: "Excel",
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
                nick: "Excel",
                buttons: [
                    {
                        label: "Download Excel",
                    },
                ],
            },
            {
                content: "Event Percentages",
                nick: "eventPercentGraph",
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
                buttons: [
                    {
                        label: "Open Graphs",
                    },
                ],
            },
            // Other content...
        ],
    },
    // Other categories...
];

const App = ({ userPermissions }) => {
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
                        userPermission={3} // Requires User setup to retrieve permissions for above
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default App;
