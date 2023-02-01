import { Link } from 'react-router-dom';

const MenuItem = (props) => {
    return (
        <Link to={props.to}>
            <div className="relative flex gap-2 items-center mb-2 text-xl hover:bg-orange-300 py-2 pl-4 cursor-pointer mt-2 ">
                {props.icon}
                <p className="font-semibold text-lime-600">{props.title}</p>
            </div>
        </Link>
    );
};
export default MenuItem;
