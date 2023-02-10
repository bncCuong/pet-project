const TippyStyles = ({ children }) => {
    return (
        <div className=" cursor-pointer  w-fit h-fit px-2 py-1 rounded-md text-white border-[1px] border-gray-300 bg-[#55495f]/30 flex items-center justify-center animate-slideright">
            {children}
        </div>
    );
};

export default TippyStyles;
