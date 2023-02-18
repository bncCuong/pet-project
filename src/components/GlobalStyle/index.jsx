const GlobalStyle = (props) => {
    return (
        <div className="flex justify-center max-w-[1146px]  h-screen bg-gray-300 overflow-hidden rounded-xl ">
            {props.children}
        </div>
    );
};

export default GlobalStyle;
