import LoginFromValidate from './LoginFromValidate';
const Login = () => {
    return (
        <div className="mt-[30px] flex flex-col items-center px-10 w-[1200px]">
            <p className="text-2xl font-semibold mb-5 relative"> Welcome to my PROJECT</p>
            <div className="flex items-center max-w-[930px] h-[80px] flex-col mb-5">
                <p>
                    Thank you for visiting my application. This is my first attempt at the Extended Todo App and still
                    under development so feel free to look around and give me feedback to make this app even better.
                </p>
                <p className="mt-2 text-xl font-semibold"> So let's get started</p>
            </div>

            <LoginFromValidate />
        </div>
    );
};
export default Login;
