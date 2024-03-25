import React from 'react';
import NavBarGuest from "@/Components/NavBarGuest";
import NavBarAuthed from "@/Components/NavBarAuthed";

export default function NavBar({prop}) {
    if (prop.user!=null) {
        return <NavBarAuthed />;
    } else {
        return <NavBarGuest />;
    }
}