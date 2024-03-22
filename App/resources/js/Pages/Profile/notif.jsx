import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import ProfileNav from './Partials/ProfileNav';
import { Head } from '@inertiajs/react';

export default function notif({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}

        >
            <Head title="Profile" />

            <div className="py-12">
            
                <div className="flex max-w-full text-font-col">
                <ProfileNav></ProfileNav>
                <div className="w-full px-6">
                    
                </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
