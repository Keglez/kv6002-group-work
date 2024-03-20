export default function SendButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-3 bg-secondary-col border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary-col focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-col focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && 'opacity-75'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
            <span className="font-bold"></span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-6 w-6 ml-2 transform rotate-90"
                                >
                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                </svg>
        </button>
    );
}
