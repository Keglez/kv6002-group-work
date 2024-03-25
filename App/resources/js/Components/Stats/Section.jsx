import React, { useState } from "react";

const Section = ({ title, catePerm, contents, userPermission }) => {
    // Initialize selected event ID with a default value
    const defaultSelectedEvent =
        contents &&
            contents.length > 0 &&
            contents[0].events &&
            contents[0].events.length > 0
            ? contents[0].events[0].id
            : "";
    const [selectedEvent, setSelectedEvent] = useState(defaultSelectedEvent);

    const handleEventChange = (event) => {
        setSelectedEvent(event.target.value);
    };

    return (
        <div className="max-w-xl mx-auto mb-8">
            {catePerm <= userPermission && (
                <div>
                    <h2>{title}</h2>
                    {contents &&
                        contents.map((content, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-start mb-2"
                            >
                                <div className="flex-grow">
                                    <div className="flex items-center">
                                        <div className="ml-4">
                                            <p>{content.content}</p>
                                        </div>
                                        {/* Add dropdown for selecting event */}
                                        {content.nick === "UserList" && (
                                            <div className="ml-4">
                                                <select
                                                    className="text-black bg-white px-2 py-1 rounded"
                                                    style={{
                                                        maxWidth: "200px",
                                                    }}
                                                    onChange={handleEventChange}
                                                    value={selectedEvent}
                                                >
                                                    {content.events &&
                                                        content.events.map(
                                                            (
                                                                event,
                                                                eventIndex
                                                            ) => (
                                                                <option
                                                                    key={
                                                                        eventIndex
                                                                    }
                                                                    value={
                                                                        event.id
                                                                    }
                                                                >
                                                                    {event.name}
                                                                </option>
                                                            )
                                                        )}
                                                </select>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex">
                                    {content.buttons.map(
                                        (button, buttonIndex) => (
                                            <a
                                                key={buttonIndex}
                                                href={route(content.nick, {
                                                    id: content.param,
                                                    eventId: selectedEvent,
                                                })}
                                                className="px-4 py-2 bg-red-200 rounded border border-gray-500 hover:bg-red-500 focus:outline-none focus:border-gray-600 focus:ring focus:ring-gray-500 focus:ring-opacity-50"
                                            >
                                                {button.label}
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default Section;
