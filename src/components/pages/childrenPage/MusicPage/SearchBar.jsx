import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = () => {
    return (
        <div className="h-14 text-white items-center flex justify-center">
            <form>
                <div className=" absolute  w-10 h-[36px] rounded-l-2xl hover:bg-neutral-600 cursor-pointer bg-transparent">
                    <FontAwesomeIcon icon={faSearch} className="ml-3 mt-[10px]" />
                </div>
                <input
                    placeholder="Search song, sing, lyrics..."
                    className="w-[400px] outline-none border-2 border-transparent py-1 px-4 rounded-3xl bg-[#55495f] font-base placeholder:text-white placeholder:text-xs pl-10 "
                />
            </form>
        </div>
    );
};
export default SearchBar;
