import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import ProfileNav from "./Partials/ProfileNav";
import { Head } from "@inertiajs/react";

export default function notif({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Profile" />
            
            <div className="flex max-w-full text-font-col">
                <ProfileNav></ProfileNav>

                <div className="w-full space-y-6 px-6">

                    <header className="p-4 sm:p-8 bg-tertiary-col shadow sm:rounded-lg text-xl">
                        Notifications
                    </header>
                
                </div>
                
            </div>
        
        </AuthenticatedLayout>
    );
}
