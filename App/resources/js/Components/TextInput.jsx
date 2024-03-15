import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}            
            className={
                'w-full bg-background-col text-sm text-font-col my-2 py-3 border-background-col outline-none focus:border-primary-col focus:ring-border-primary-col rounded-md shadow-sm' +
                className
            }
            ref={input}
        />
    );
});
