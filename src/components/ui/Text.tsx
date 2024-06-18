type Props = {
    children: React.ReactNode;
    className?: string;
};

export const Text: React.FC<Props> = ({ children, className = '' }) => {
    return (
        <p className={`w-full font-medium leading-[1.6em] text-[15px] sm:text-[16px] text-[#6c7289] ${className}`}>
            {children}
        </p>
    );
};
