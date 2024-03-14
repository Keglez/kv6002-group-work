export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded bg-background-color border-background-color text-primary-col shadow-sm focus:ring-primary-col ' +
                className
            }
        />
    );
}
