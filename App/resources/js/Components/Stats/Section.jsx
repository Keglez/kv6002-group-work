import React, { useState } from "react";

const Section = ({ title, catePerm, contents, userPermission }) => {
    const [selectedEvent, setSelectedEvent] = useState(""); // State to hold the selected event ID

    const handleEventChange = (event) => {
        setSelectedEvent(event.target.value); // Update selected event ID when dropdown changes
    };

    return (
        <div className="max-w-xl mx-auto mb-8">
            {catePerm <= userPermission && (
                <div>
                    <h2>{title}</h2>
                    {contents.map((content, index) => (
                        <div key={index} className="flex justify-between items-start mb-2">
                            <div className="flex-grow">
                                <div className="flex items-center">
                                    <div className="ml-4">
                                        <p>{content.content}</p>
                                    </div>
                                    {/* Add dropdown for selecting event */}
                                    {content.nick === "UserList" && (
                                        <div className="ml-4"> {/* Container for dropdown */}
                                            <select
                                                className="text-black bg-white px-2 py-1 rounded"
                                                style={{ maxWidth: '200px' }}
                                                onChange={handleEventChange} // Handle dropdown change
                                                value={selectedEvent} // Set dropdown value
                                            >
                                                {content.events.map((event, eventIndex) => (
                                                    <option key={eventIndex} value={event.id}>{event.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex">
                                {content.buttons.map((button, buttonIndex) => (
                                    <a
                                        key={buttonIndex}
                                        href={route(content.nick,  { id: content.nick, eventId: selectedEvent })} // Pass selected event ID to route function
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

export default Section;
