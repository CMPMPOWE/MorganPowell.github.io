//import React, { useState, useEffect } from 'react';



//<style>
//    .header {
//        position: fixed;
//    top: 0;
//    left: 0;
//    right: 0;
//    z-index: 1000; /* Ensure it stays above other elements */
//    background-color: var(--your-background-color);
//}</style>


//const Header: React.FC = () => {
//    const [isDropdownOpen, setDropdownOpen] = useState(false);
//    const [darkMode, setDarkMode] = useState(false);

//    // Function to toggle dropdown visibility
//    const toggleDropdown = () => {
//        setDropdownOpen(!isDropdownOpen);
//    };

//    // Function to toggle dark mode
//    const toggleDarkMode = () => {
//        setDarkMode(!darkMode);
//    };

//    // Effect to apply or remove the dark class from the body
//    useEffect(() => {
//        if (darkMode) {
//            document.body.classList.add('dark');
//        } else {
//            document.body.classList.remove('dark');
//        }
//    }, [darkMode]);

//    return (
//        <nav className="bg-white border-gray-200 dark:bg-gray-800">
//            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
//                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//                    <img
//                        src="/src/assets/profilePicture/Varroz_MorganLogo.png"
//                        className="h-10"
//                        alt="Morgan Portfolio Logo"
//                    />
//                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//                        Morgan Portfolio
//                    </span>
//                </a>

//                <div className="flex items-center space-x-4 md:order-2 relative">
//                    {/* Dark Mode Toggle Button */}
//                    <button
//                        type="button"
//                        onClick={toggleDarkMode}
//                        className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
//                    >
//                        {darkMode ? 'Light Mode' : 'Dark Mode'}
//                    </button>

//                    {/* Language Toggle Button */}
//                    <button
//                        type="button"
//                        onClick={toggleDropdown}
//                        className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
//                    >
//                        <svg
//                            className="w-5 h-5 rounded-full me-3"
//                            aria-hidden="true"
//                            xmlns="http://www.w3.org/2000/svg"
//                            xmlnsXlink="http://www.w3.org/1999/xlink"
//                            viewBox="0 0 3900 3900"
//                        >
//                            <path fill="#b22234" d="M0 0h7410v3900H0z" />
//                            <path
//                                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
//                                stroke="#fff"
//                                strokeWidth="300"
//                            />
//                            <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
//                            {/* Stars */}
//                        </svg>
//                        English (US)
//                    </button>

//                    {/* Dropdown Menu */}
//                    <div 
//                        className={`${isDropdownOpen ? '' : 'hidden'
//                            } absolute  left-8 z-50  mt-2 w-48 py-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700`}
//                        style={{ top: '32px' }} 
//                        id="language-dropdown-menu"
//                    >
//                        <ul className="py-2 font-medium" role="none">
//                            <li>
//                                <a
//                                    href="#"
//                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
//                                    role="menuitem"
//                                >
//                                    English (US)
//                                </a>
//                            </li>
//                            <li>
//                                <a
//                                    href="#"
//                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
//                                    role="menuitem"
//                                >
//                                    Deutsch
//                                </a>
//                            </li>
//                            <li>
//                                <a
//                                    href="#"
//                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
//                                    role="menuitem"
//                                >
//                                    Italiano
//                                </a>
//                            </li>
//                            <li>
//                                <a
//                                    href="#"
//                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
//                                    role="menuitem"
//                                >
//                                    中文 (繁體)
//                                </a>
//                            </li>
//                        </ul>
//                    </div>
//                </div>

//                {/* Navbar Links */}
//                <div
//                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//                    id="navbar-language"
//                >
//                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
//                        <li>
//                            <a
//                                href="#"
//                                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
//                                aria-current="page"
//                            >
//                                Home
//                            </a>
//                        </li>
//                        <li>
//                            <a
//                                href="#"
//                                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                            >
//                                About
//                            </a>
//                        </li>
//                        <li>
//                            <a
//                                href="#"
//                                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                            >
//                                Skills
//                            </a>
//                        </li>
                   
//                        <li>
//                            <a
//                                href="#"
//                                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                            >
//                                Contact
//                            </a>
//                        </li>
//                    </ul>
//                </div>
//            </div>
//        </nav>
//    );
//};

//export default Header;
import React, { useState, useEffect } from 'react';
 // You can create this CSS file for any additional styling
import './header.css';
const Header: React.FC = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Effect to apply or remove the dark class from the body
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-800 header">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img
                        src="/src/assets/profilePicture/Varroz_MorganLogo.png"
                        className="h-10"
                        alt="Morgan Portfolio Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Morgan Portfolio
                    </span>
                </a>

                <div className="flex items-center space-x-4 md:order-2 relative">
                    {/* Dark Mode Toggle Button */}
                    <button
                        type="button"
                        onClick={toggleDarkMode}
                        className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>

                    {/* Language Toggle Button */}
                    <button
                        type="button"
                        onClick={toggleDropdown}
                        className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <svg
                            className="w-5 h-5 rounded-full me-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 3900 3900"
                        >
                            <path fill="#b22234" d="M0 0h7410v3900H0z" />
                            <path
                                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                                stroke="#fff"
                                strokeWidth="300"
                            />
                            <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                        </svg>
                        English (US)
                    </button>

                    {/* Dropdown Menu */}
                    <div
                        className={`${isDropdownOpen ? '' : 'hidden'
                            } absolute left-8 z-50 mt-2 w-48 py-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700`}
                        style={{ top: '50px' }} // Adjusted to display underneath the button
                        id="language-dropdown-menu"
                    >
                        <ul className="py-2 font-medium" role="none">
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                    role="menuitem"
                                >
                                    English (US)
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                    role="menuitem"
                                >
                                    Deutsch
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                    role="menuitem"
                                >
                                    Italiano
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                    role="menuitem"
                                >
                                    中文 (繁體)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Navbar Links */}
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-language"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
