import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'file', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
        className="relative my-2 block w-full min-w-0 flex-auto cursor-pointer rounded bg-background-col bg-clip-padding px-3 py-3 text-base font-normal text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white file:dark:text-white"
        type={type}
        ref={input}        
        id="formFile" />

    );
});