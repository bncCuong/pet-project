import { faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItem from './MenuItem';

const MENU_LIST = [
    { id: 'it1', title: 'Today', icon: <FontAwesomeIcon icon={faSun} />, to: '/today' },
    { id: 'it2', title: 'Important', icon: <FontAwesomeIcon icon={faSun} />, to: '/important' },
    { id: 'it3', title: 'Completed', icon: <FontAwesomeIcon icon={faSun} />, to: '/completed' },
    { id: 'it4', title: 'Task', icon: <FontAwesomeIcon icon={faSun} />, to: '/task' },
];
const MenuList = (props) => {
    const menuList = MENU_LIST.map((item) => (
        <MenuItem key={item.id} title={item.title} icon={item.icon} to={item.to} />
    ));
    return (
        <div id="listmenu" className="border-b-2 border-t-2 border-gray-900 ">
            {menuList}
        </div>
    );
};

export default MenuList;
