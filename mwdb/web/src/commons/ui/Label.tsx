import { useCallback } from "react";

type Props = {
    label: string;
    required?: boolean;
    htmlFor?: string;
    className?: string;
};

export function Label(props: Props) {
    const { label, required, htmlFor, className } = props;

    const setClassName = useCallback(() => {
        let result = "";
        if (className) {
            result += className;
        }
        if (required) {
            result += ` required`;
        }
        return result.trim();
    }, [required, className]);

    return (
        <label className={setClassName()} htmlFor={htmlFor}>
            {label}
        </label>
    );
}
