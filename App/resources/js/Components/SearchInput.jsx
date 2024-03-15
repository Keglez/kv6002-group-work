import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className='flex flex-row w-full rounded-lg'>
            <input
                {...props}
                type={type}            
                className={
                    'w-full border-background-col focus:ring-primary-col bg-background-col text-sm text-font-col my-2 py-3 rounded-l' +
                    className
                }
                ref={input}
            />
            <button type="button" className='focus:ring-red border-primary-col bg-secondary-col hover:bg-primary-col my-2 px-8 py-3 rounded-r-md'>
                Search
            </button>
        </div>
    );
});
