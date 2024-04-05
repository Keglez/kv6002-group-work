import { useRef } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function ProfileNav({ className = "" }) {
    return (
        <>
            <link rel="stylesheet" />
            <div className="min-h-screen flex flex-row">
                <div className="flex flex-col w-56 bg-secondary-col rounded-r-lg overflow-hidden">
                    <div className="flex items-center justify-center h-20 shadow-md">
                        <h1 className="text-xl uppercase text-font-col">
                            Account
                        </h1>
                    </div>
                    <ul className="flex flex-col py-4">
                        <li>
                            <a
                                href={route("profile.Edit")}
                                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-font-col hover:text-gray-800"
                            >
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-font-col">
                                    <i className="bx bx-home" />
                                </span>
                                <span className="text-sm font-medium">
                                    Personal Details
                                </span>
                            </a>
                        </li>

                        <li>
                            <a
                                href={route("profile.notif")}
                                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-font-col hover:text-tertiary-col"
                            >
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-font-col">
                                    <i className="bx bx-music" />
                                </span>
                                <span className="text-sm font-medium">
                                    Notifications
                                </span>
                                <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-blue-600">
                                    5
                                </span>
                            </a>
                        </li>

                        <li>
                            <a
                                href={route("tickets")}
                                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-font-col hover:text-tertiary-col"
                            >
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-font-col">
                                    <i className="bx bx-music" />
                                </span>
                                <span className="text-sm font-medium">
                                    Tickets
                                </span>
                                <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-blue-600">
                                    0
                                </span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-font-col hover:text-tertiary-col"
                            >
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-font-col">
                                    <i className="bx bx-log-out" />
                                </span>
                                <span className="text-sm font-medium">
                                    Security
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href={route('event.dashboard')}
                                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-font-col hover:text-tertiary-col"
                            >
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-font-col">
                                    <i className="bx bx-drink" />
                                </span>
                                <span className="text-sm font-medium">
                                    My Events
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-font-col hover:text-tertiary-col"
                            >
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-font-col">
                                    <i className="bx bx-shopping-bag" />
                                </span>
                                <span className="text-sm font-medium">
                                    My Team
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-font-col hover:text-tertiary-col"
                            >
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-font-col">
                                    <i className="bx bx-chat" />
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
