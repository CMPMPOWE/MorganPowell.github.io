const Footer: React.FC = () => {
    return (
        <footer className="bg-white  shadow dark:bg-gray-800">
            <div className="w-full p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/src/assets/profilePicture/Varroz_MorganLogo.png" className="h-8" alt="Morgan logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> Morgan Portfolio</span>                     

                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline pr-2 me-4 md:me-6">About</a>
                        </li>
                   
                        <li>
                            <a href="#" className="hover:underline pl-2">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    @2024 <a href="https://localhost:5173/" className="hover:underline">Morgan Portfolio</a>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};


export default Footer;
