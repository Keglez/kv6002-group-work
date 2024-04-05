import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function VerifyPhone(props,{ status }) {
    const userdata=props.users;
    const { data, setData, post, processing, errors } = useForm({
    user:userdata,  
    verification: '', 
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Verify phone number" />

            <h1 className="pt-2 pb-4 text-center text-font-col text-xl">Enter verification code</h1>

            <div className="mb-4 text-sm text-font-col">
                You will need to enter your phone number so a code can be send to it. You will be entering this code on the next page. 
            </div>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <TextInput
                    id="verification"
                    type="verification"
                    name="verification"
                    value={data.verification}
                    placeholder="Enter verification code"
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData('verification', e.target.value)}
                />

                <InputError message={errors.phone} className="mt-2" />

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Verify
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
