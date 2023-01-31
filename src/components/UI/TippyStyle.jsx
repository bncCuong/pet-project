const TippyStyles = ({ children }) => {
    return (
        <div className=" w-fit h-fit px-2 py-1 rounded-xl bg-white border-[2px] border-emerald-400 hover:bg-emerald-500 ">
            {children}
        </div>
    );
};

export default TippyStyles;
