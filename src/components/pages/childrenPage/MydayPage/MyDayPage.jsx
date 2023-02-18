import backgroundImg from '../../../../assets/bgimage.jpg';

import Input from './Input';
import ListJobs from './ListJobs';

function MyDayPage() {
    return (
        <div className="p-10 h-[100%] relative">
            <div className="absolute  inset-0 z-0">
                <img src={backgroundImg} alt="userAvatar" className="" />
            </div>
            <div className="absolute border-[1px] px-5 py-1 rounded-md shadow-2xl  ">
                <p className="text-3xl font-semibold text-[#3721b4] ">My Day </p>
                <p className="text-[15px] font-semibold">
                    Focus on your day: Get things done whit My day, a list that refreshes every day!!!
                </p>
            </div>

            <ListJobs />
            <Input />
        </div>
    );
}

export default MyDayPage;
