import { useRef } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function SocialLinks({ className = "" }) {
    return (
        <>
            <link rel="stylesheet" />
            <section className={className}>
                <header>
                    <h2 className="text-lg font-medium text-font-col">
                        Social Links
                    </h2>

                    <p className="mt-1 text-sm text-font-col">
                        Choose which social media to link to this account
                    </p>
                </header>
                <a href="https://www.example.com">
                    <img src="image.jpg" />
                </a>
            </section>
        </>
    );
}
