import React from 'react';
import NavBarGuest from "@/Components/NavBarGuest";
import NavBarAuthed from "@/Components/NavBarAuthed";

export default function NavBar(prop) {
    const getAuth = prop.auth;

    if (getAuth) {
        return <NavBarAuthed />;
    } else {
        return <NavBarGuest />;
    }
}