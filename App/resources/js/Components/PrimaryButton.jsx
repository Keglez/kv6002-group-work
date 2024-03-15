export default function PrimaryButton({ className = '', disabled, children, ...props }) {
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
        </button>
    );
}
