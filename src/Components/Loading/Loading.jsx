import Logo from '../../assets/logo.jpg'

const Loading = ({showLoading}) => {
    return (
        <div className={`h-[100vh] w-full absolute bg-black top-0 left-0 flex items-center justify-center ${showLoading ?'block' : 'hidden'}`}>
            <img src={Logo} className='w-64 h-auto' alt="" />
        </div>
    );
};

export default Loading;