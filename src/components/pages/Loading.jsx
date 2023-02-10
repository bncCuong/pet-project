import loader from '../../assets/loader.svg';
const Loader = ({ title }) => (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-gradient-to-bl from-green-300 to-orange-500">
        <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
        <h1 className="font-bold text-2xl text-white mt-2 ">{title || 'Loading... data'}</h1>
    </div>
);

export default Loader;
