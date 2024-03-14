import React from 'react';
import NavBarGuest from "@/Components/NavBarGuest";
import NavBarAuthed from "@/Components/NavBarAuthed";

export default function NavBar() {
    const getAuth = true;

    if (getAuth) {
        return <NavBarAuthed />;
    } else {
        return <NavBarGuest />;
    }
}