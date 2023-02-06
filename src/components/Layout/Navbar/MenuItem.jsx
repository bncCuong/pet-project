import { Link } from 'react-router-dom';
const MenuItem = (props) => {
    return (
        <Link to={props.to}>
            <div
                className={`relative flex gap-2 items-center mb-2 text-xl  py-2 pl-4 cursor-pointer hover:bg-gradient-to-r from-yellow-400 to-orange-400
                mt-2 after:absolute  after:content-[''] after:left-1  after:w-1 after:h-4 after:rounded-lg hover:after:bg-white after:animate-bounce`}
            >
                {props.icon}
                <p className="font-semibold text-lime-600">{props.title}</p>
                <div className="absolute left-2 top-[-5px] text-sm text-violet-600 font-bold">3</div>
            </div>
        </Link>
    );
};
export default MenuItem;
