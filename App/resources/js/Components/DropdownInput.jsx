import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'select', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <select
            {...props}
            type={type}            
            className={
                'w-2/12 bg-background-col text-sm text-font-col my-2 py-3 border-background-col outline-none focus:border-primary-col focus:ring-border-primary-col rounded-md shadow-sm' +
                className
            }
            ref={input}
        >
            <option value="" disabled defaultValue>No Filter</option> {/* This is a placeholder option */}
        </select>
    );
});
