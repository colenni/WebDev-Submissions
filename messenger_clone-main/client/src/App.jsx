import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Main() {

    const [now] = useState(new Date());
    const [msgs, setMsgs] = useState([])
    const [typedMsg, setTypedMsg] = useState('')
    const [archived, setArchived] = useState(false)

    const nav = useNavigate()
    function signOut() {
        localStorage.removeItem('token');
        if (confirm("Are you sure you wish to sign out?")) nav('/login');
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (typedMsg.trim()) {
            setMsgs([...msgs, typedMsg])
            setTypedMsg('')
        }
    }

    function handleArchive() {
        if (confirm("Are you sure you wish to archive this conversation?")) setArchived(true)
    }

    return (
        <div
            className="h-screen w-full flex antialiased text-gray-200 bg-gray-900 overflow-hidden"
        >
            <div className="flex-1 flex flex-col">
                <main className="flex-grow flex flex-row min-h-0">
                    <section
                        className="flex flex-col overflow-auto w-24 lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out"
                    >
                        <div
                            className="header p-4 flex flex-row justify-between items-center flex-none"
                        >
                            <div className="w-12 h-12 relative flex flex-shrink-0">
                                <img
                                    className="rounded-full w-full h-full object-cover cursor-pointer"
                                    alt="Nicole Joligon"
                                    src="/profile.jpg"
                                    onClick={signOut}
                                />
                            </div>
                            <p className="text-xl font-bold hidden md:block">
                                Chats
                            </p>
                            <a
                                href="#"
                                className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2"
                            >
                                <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                                    <path
                                        d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div className="search-box p-4 flex-none">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="relative">
                                    <label>
                                        <input
                                            className="rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                                            type="text"
                                            placeholder="Search in Messenger"
                                        />
                                        <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                                            <svg viewBox="0 0 24 24" className="w-6 h-6">
                                                <path
                                                    fill="#bbb"
                                                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                                                />
                                            </svg>
                                        </span>
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div
                            className="active-users flex flex-row p-2 overflow-auto w-0 min-w-full"
                        >
                            <div className="text-sm text-center mr-4">
                                <button
                                    className="flex flex-shrink-0 focus:outline-none block bg-gray-800 text-gray-600 rounded-full w-20 h-20"
                                    type="button"
                                >
                                    <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                                        <path
                                            d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"
                                        />
                                    </svg>
                                </button>
                                <p>Your Story</p>
                            </div>
                            <div className="text-sm text-center mr-4">
                                <div className="p-1 border-4 border-blue-600 rounded-full">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                        <img
                                            className="shadow-md rounded-full w-full h-full object-cover"
                                            src="/brett.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <p>Brett</p>
                            </div>
                            <div className="text-sm text-center mr-4">
                                <div className="p-1 border-4 border-transparent rounded-full">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                        <img
                                            className="shadow-md rounded-full w-full h-full object-cover"
                                            src="/mama.jpg"
                                            alt=""
                                        />
                                        <div
                                            className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0"
                                        >
                                            <div className="bg-green-500 rounded-full w-3 h-3"></div>
                                        </div>
                                    </div>
                                </div>
                                <p>Maribel</p>
                            </div>
                            <div className="text-sm text-center mr-4">
                                <div className="p-1 border-4 border-blue-600 rounded-full">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                        <img
                                            className="shadow-md rounded-full w-full h-full object-cover"
                                            src="/neal.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <p>Neal</p>
                            </div>
                            <div className="text-sm text-center mr-4">
                                <div className="p-1 border-4 border-transparent rounded-full">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                        <img
                                            className="shadow-md rounded-full w-full h-full object-cover"
                                            src="https://randomuser.me/api/portraits/women/87.jpg"
                                            alt=""
                                        />
                                        <div
                                            className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0"
                                        >
                                            <div className="bg-green-500 rounded-full w-3 h-3"></div>
                                        </div>
                                    </div>
                                </div>
                                <p>Madona</p>
                            </div>
                            <div className="text-sm text-center mr-4">
                                <div className="p-1 border-4 border-transparent rounded-full">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                        <img
                                            className="shadow-md rounded-full w-full h-full object-cover"
                                            src="https://randomuser.me/api/portraits/women/23.jpg"
                                            alt=""
                                        />
                                        <div
                                            className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0"
                                        >
                                            <div className="bg-green-500 rounded-full w-3 h-3"></div>
                                        </div>
                                    </div>
                                </div>
                                <p>Emma</p>
                            </div>
                            <div className="text-sm text-center mr-4">
                                <div className="p-1 border-4 border-blue-600 rounded-full">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                        <img
                                            className="shadow-md rounded-full w-full h-full object-cover"
                                            src="https://randomuser.me/api/portraits/men/65.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <p>Mark</p>
                            </div>
                            <div className="text-sm text-center mr-4">
                                <div className="p-1 border-4 border-blue-600 rounded-full">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                        <img
                                            className="shadow-md rounded-full w-full h-full object-cover"
                                            src="https://randomuser.me/api/portraits/women/65.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <p>Eva</p>
                            </div>
                            <div className="text-sm text-center mr-4">
                                <div className="p-1 border-4 border-transparent rounded-full">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                        <img
                                            className="shadow-md rounded-full w-full h-full object-cover"
                                            src="https://randomuser.me/api/portraits/men/31.jpg"
                                            alt=""
                                        />
                                        <div
                                            className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0"
                                        >
                                            <div className="bg-green-500 rounded-full w-3 h-3"></div>
                                        </div>
                                    </div>
                                </div>
                                <p>Max</p>
                            </div>
                            <div className="text-sm text-center mr-4">
                                <div className="p-1 border-4 border-blue-600 rounded-full">
                                    <div className="w-16 h-16 relative flex flex-shrink-0">
                                        <img
                                            className="shadow-md rounded-full w-full h-full object-cover"
                                            src="https://randomuser.me/api/portraits/men/81.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <p>Adam</p>
                            </div>
                        </div>
                        <div className="contacts p-2 flex-1 overflow-y-scroll">
                            <div
                                className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative"
                            >
                                <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img
                                        className="shadow-md rounded-full w-full h-full object-cover"
                                        src="/carol.jpg"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="flex-auto min-w-0 ml-4 mr-6 hidden md:block"
                                >
                                    <p>cutiepie</p>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <div className="min-w-0">
                                            <p className="truncate">send pics carol hihihi</p>
                                        </div>
                                        <p className="ml-2 whitespace-no-wrap">Just now</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative"
                            >
                                <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img
                                        className="shadow-md rounded-full w-full h-full object-cover"
                                        src="/brett.jpg"
                                        alt=""
                                    />
                                    <div
                                        className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0"
                                    >
                                        <div className="bg-green-500 rounded-full w-3 h-3"></div>
                                    </div>
                                </div>
                                <div
                                    className="flex-auto min-w-0 ml-4 mr-6 hidden md:block"
                                >
                                    <p className="font-bold">Brett Kyle</p>
                                    <div className="flex items-center text-sm font-bold">
                                        <div className="min-w-0">
                                            <p className="truncate">Awa nicole HAHAAHAH</p>
                                        </div>
                                        <p className="ml-2 whitespace-no-wrap">10min</p>
                                    </div>
                                </div>
                                <div
                                    className="bg-blue-700 w-3 h-3 rounded-full flex flex-shrink-0 hidden md:block"
                                ></div>
                            </div>
                            {
                                archived ?
                                    null
                                    :
                                    <div
                                        className="flex justify-between items-center p-3 bg-gray-800 rounded-lg relative"
                                    >
                                        <div className="w-16 h-16 relative flex flex-shrink-0">
                                            <img
                                                className="shadow-md rounded-full w-full h-full object-cover"
                                                src="/neah.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div
                                            className="flex-auto min-w-0 ml-4 mr-6 hidden md:block"
                                        >
                                            <p>My Angel</p>
                                            <div className="flex items-center text-sm text-gray-600">
                                                <div className="min-w-0">
                                                    <p className="truncate">You sent a photo.</p>
                                                </div>
                                                <p className="ml-2 whitespace-no-wrap">1h</p>
                                            </div>
                                        </div>
                                    </div>
                            }

                            <div
                                className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative"
                            >
                                <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img
                                        className="shadow-md rounded-full w-full h-full object-cover"
                                        src="/neal.jpg"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="flex-auto min-w-0 ml-4 mr-6 hidden md:block"
                                >
                                    <p>Neal Andrew</p>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <div className="min-w-0">
                                            <p className="truncate">pahelp ko plss.</p>
                                        </div>
                                        <p className="ml-2 whitespace-no-wrap">4h</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative"
                            >
                                <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img
                                        className="shadow-md rounded-full w-full h-full object-cover"
                                        src="/joanna.jpg"
                                        alt="User2"
                                    />
                                </div>
                                <div
                                    className="flex-auto min-w-0 ml-4 mr-6 hidden md:block"
                                >
                                    <p>ja ja jam</p>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <div className="min-w-0">
                                            <p className="truncate">You sent a video.</p>
                                        </div>
                                        <p className="ml-2 whitespace-no-wrap">11 Feb</p>
                                    </div>
                                </div>
                                <div
                                    className="w-4 h-4 flex flex-shrink-0 hidden md:block"
                                >
                                    <img
                                        className="rounded-full w-full h-full object-cover"
                                        alt="user2"
                                        src="/joanna.jpg"
                                    />
                                </div>
                            </div>
                            <div
                                className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative"
                            >
                                <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img
                                        className="shadow-md rounded-full w-full h-full object-cover"
                                        src="/jojo.jpg"
                                        alt="User2"
                                    />
                                    <div
                                        className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0"
                                    >
                                        <div className="bg-green-500 rounded-full w-3 h-3"></div>
                                    </div>
                                </div>
                                <div
                                    className="flex-auto min-w-0 ml-4 mr-6 hidden md:block"
                                >
                                    <p className="font-bold">JoJo Siwa</p>
                                    <div className="flex items-center text-sm font-bold">
                                        <div className="min-w-0">
                                            <p className="truncate">Dream guest on my podcast?</p>
                                        </div>
                                        <p className="ml-2 whitespace-no-wrap">1 Feb</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative"
                            >
                                <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img
                                        className="shadow-md rounded-full w-full h-full object-cover"
                                        src="/tc.jpg"
                                        alt="User2"
                                    />
                                </div>
                                <div
                                    className="flex-auto min-w-0 ml-4 mr-6 hidden md:block"
                                >
                                    <p>TC PHOTOJOURNALISTS</p>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <div className="min-w-0">
                                            <p className="truncate">
                                                I will assign @Nicole Grace Joligon
                                            </p>
                                        </div>
                                        <p className="ml-2 whitespace-no-wrap">23 Jan</p>
                                    </div>
                                </div>
                                <div
                                    className="w-4 h-4 flex flex-shrink-0 hidden md:block"
                                >
                                    <img
                                        className="rounded-full w-full h-full object-cover"
                                        alt="user2"
                                        src="/profile.jpg"
                                    />
                                </div>
                            </div>
                            <div
                                className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative"
                            >
                                <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img
                                        className="shadow-md rounded-full w-10 h-10 object-cover absolute ml-6"
                                        src="/papa.jpg"
                                        alt="User2"
                                    />
                                    <img
                                        className="shadow-md rounded-full w-10 h-10 object-cover absolute mt-6"
                                        src="/mama.jpg"
                                        alt="User2"
                                    />
                                    <div
                                        className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0"
                                    >
                                        <div className="bg-green-500 rounded-full w-3 h-3"></div>
                                    </div>
                                </div>
                                <div
                                    className="flex-auto min-w-0 ml-4 mr-6 hidden md:block"
                                >
                                    <p>Mga Tukling</p>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <div className="min-w-0">
                                            <p className="truncate">Nicole: Pa paload ko plss</p>
                                        </div>
                                        <p className="ml-2 whitespace-no-wrap">23 Jan</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative"
                            >
                                <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img
                                        className="shadow-md rounded-full w-full h-full object-cover"
                                        src="/zyle.jpg"
                                        alt="User2"
                                    />
                                </div>
                                <div
                                    className="flex-auto min-w-0 ml-4 mr-6 hidden md:block"
                                >
                                    <p>Zyle</p>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <div className="min-w-0">
                                            <p className="truncate">awa zy mura ikaw</p>
                                        </div>
                                        <p className="ml-2 whitespace-no-wrap">13 Dec</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative"
                            >
                                <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img
                                        className="shadow-md rounded-full w-full h-full object-cover"
                                        src="/queen.jpg"
                                        alt="User2"
                                    />
                                </div>
                                <div
                                    className="flex-auto min-w-0 ml-4 mr-6 hidden md:block"
                                >
                                    <p>ate bgurl</p>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <div className="min-w-0">
                                            <p className="truncate">ate naa paka ticket?</p>
                                        </div>
                                        <p className="ml-2 whitespace-no-wrap">31 Dec</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative"
                            >
                                <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img
                                        className="shadow-md rounded-full w-full h-full object-cover"
                                        src="/jan.jpg"
                                        alt="User2"
                                    />
                                    <div
                                        className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0"
                                    >
                                        <div className="bg-green-500 rounded-full w-3 h-3"></div>
                                    </div>
                                </div>
                                <div
                                    className="flex-auto min-w-0 ml-4 mr-6 hidden md:block"
                                >
                                    <p>kuya xtian</p>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <div className="min-w-0">
                                            <p className="truncate">kuya wer r u na</p>
                                        </div>
                                        <p className="ml-2 whitespace-no-wrap">31 Dec</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative"
                            >
                                <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img
                                        className="shadow-md rounded-full w-full h-full object-cover"
                                        src="/charles.jpg"
                                        alt="User2"
                                    />
                                </div>
                                <div
                                    className="flex-auto min-w-0 ml-4 mr-6 hidden md:block"
                                >
                                    <p>Charles Bardoquillo</p>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <div className="min-w-0">
                                            <p className="truncate">kuya kinsa imo kuyog latur</p>
                                        </div>
                                        <p className="ml-2 whitespace-no-wrap">12 Nov</p>
                                    </div>
                                </div>
                                <div
                                    className="w-4 h-4 flex flex-shrink-0 hidden md:block"
                                >
                                    <img
                                        className="rounded-full w-full h-full object-cover"
                                        alt="user2"
                                        src="/charles.jpg"
                                    />
                                </div>
                            </div>
                            <div
                                className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative"
                            >
                                <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img
                                        className="shadow-md rounded-full w-full h-full object-cover"
                                        src="/sherly.jpg"
                                        alt="User2"
                                    />
                                </div>
                                <div
                                    className="flex-auto min-w-0 ml-4 mr-6 hidden md:block"
                                >
                                    <p>Sherly Jumawan</p>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <div className="min-w-0">
                                            <p className="truncate">HAHAHAHAHHAHAHAHAHAHHAHA</p>
                                        </div>
                                        <p className="ml-2 whitespace-no-wrap">4 Nov</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative"
                            >
                                <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img
                                        className="shadow-md rounded-full w-full h-full object-cover"
                                        src="/eduardo.jpg"
                                        alt="User2"
                                    />
                                    <div
                                        className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0"
                                    >
                                        <div className="bg-green-500 rounded-full w-3 h-3"></div>
                                    </div>
                                </div>
                                <div
                                    className="flex-auto min-w-0 ml-4 mr-6 hidden md:block"
                                >
                                    <p>Eduardo Patalinjug</p>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <div className="min-w-0">
                                            <p className="truncate">Eduard mag summer job ta</p>
                                        </div>
                                        <p className="ml-2 whitespace-no-wrap">26 Oct</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative"
                            >
                                <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img
                                        className="shadow-md rounded-full w-full h-full object-cover"
                                        src="/profile.jpg"
                                        alt="User2"
                                    />
                                </div>
                                <div
                                    className="flex-auto min-w-0 ml-4 mr-6 hidden md:block"
                                >
                                    <p>Nicole Grace Joligon</p>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <div className="min-w-0">
                                            <p className="truncate">You sent an attachment.</p>
                                        </div>
                                        <p className="ml-2 whitespace-no-wrap">2 Oct</p>
                                    </div>
                                </div>
                                <div
                                    className="w-4 h-4 flex flex-shrink-0 hidden md:block"
                                >
                                    <img
                                        className="rounded-full w-full h-full object-cover"
                                        alt="user2"
                                        src="https://randomuser.me/api/portraits/men/32.jpg"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    {
                        archived ?
                            null
                            :
                            <section className="flex flex-col flex-auto border-l border-gray-800">
                                <div
                                    className="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow"
                                >
                                    <div className="flex">
                                        <div className="w-12 h-12 mr-4 relative flex flex-shrink-0">
                                            <img
                                                className="shadow-md rounded-full w-full h-full object-cover"
                                                src="/neah.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="text-sm">
                                            <p className="font-bold">My Angel</p>
                                            <p>Active 1h ago</p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <a
                                            href="#"
                                            className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2"
                                        >
                                            <svg
                                                viewBox="0 0 20 20"
                                                className="w-full h-full fill-current text-blue-500"
                                            >
                                                <path
                                                    d="M11.1735916,16.8264084 C7.57463481,15.3079672 4.69203285,12.4253652 3.17359164,8.82640836 L5.29408795,6.70591205 C5.68612671,6.31387329 6,5.55641359 6,5.00922203 L6,0.990777969 C6,0.45097518 5.55237094,3.33066907e-16 5.00019251,3.33066907e-16 L1.65110039,3.33066907e-16 L1.00214643,8.96910337e-16 C0.448676237,1.13735153e-15 -1.05725384e-09,0.445916468 -7.33736e-10,1.00108627 C-7.33736e-10,1.00108627 -3.44283713e-14,1.97634814 -3.44283713e-14,3 C-3.44283713e-14,12.3888407 7.61115925,20 17,20 C18.0236519,20 18.9989137,20 18.9989137,20 C19.5517984,20 20,19.5565264 20,18.9978536 L20,18.3488996 L20,14.9998075 C20,14.4476291 19.5490248,14 19.009222,14 L14.990778,14 C14.4435864,14 13.6861267,14.3138733 13.2940879,14.7059121 L11.1735916,16.8264084 Z"
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            href="#"
                                            className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 ml-4"
                                        >
                                            <svg
                                                viewBox="0 0 20 20"
                                                className="w-full h-full fill-current text-blue-500"
                                            >
                                                <path
                                                    d="M0,3.99406028 C0,2.8927712 0.894513756,2 1.99406028,2 L14.0059397,2 C15.1072288,2 16,2.89451376 16,3.99406028 L16,16.0059397 C16,17.1072288 15.1054862,18 14.0059397,18 L1.99406028,18 C0.892771196,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M8,14 C10.209139,14 12,12.209139 12,10 C12,7.790861 10.209139,6 8,6 C5.790861,6 4,7.790861 4,10 C4,12.209139 5.790861,14 8,14 Z M8,12 C9.1045695,12 10,11.1045695 10,10 C10,8.8954305 9.1045695,8 8,8 C6.8954305,8 6,8.8954305 6,10 C6,11.1045695 6.8954305,12 8,12 Z M16,7 L20,3 L20,17 L16,13 L16,7 Z"
                                                />
                                            </svg>
                                        </a>
                                        <button
                                            onClick={handleArchive}
                                            className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 ml-4"
                                        >
                                            <svg width="24" height="24" fill="none" stroke="#2563eb" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 4H5a2 2 0 1 0 0 4h14a2 2 0 1 0 0-4Z"></path>
                                                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8"></path>
                                                <path d="M10 12h4"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="chat-body p-4 flex-1 overflow-y-scroll">
                                    <div className="flex flex-row justify-start">
                                        <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
                                            <img
                                                className="shadow-md rounded-full w-full h-full object-cover"
                                                src="/neah.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div
                                            className="messages text-sm text-gray-700 grid grid-flow-row gap-2"
                                        >
                                            <div className="flex items-center">
                                                <p
                                                    className="px-6 py-3 rounded-t-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200"
                                                >
                                                    Nikollll
                                                </p>
                                                <button
                                                    type="button"
                                                    className="hidden flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                                                >
                                                    <svg
                                                        viewBox="0 0 20 20"
                                                        className="w-full h-full fill-current"
                                                    >
                                                        <path
                                                            d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                                                        />
                                                    </svg>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="hidden flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                                                >
                                                    <svg
                                                        viewBox="0 0 20 20"
                                                        className="w-full h-full fill-current"
                                                    >
                                                        <path
                                                            d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"
                                                        />
                                                    </svg>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="hidden flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        className="w-full h-full fill-current"
                                                    >
                                                        <path
                                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex items-center">
                                                <p
                                                    className="px-6 py-3 rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200"
                                                >
                                                    What time ta muadto? Dungan ta ha
                                                </p>
                                                <button
                                                    type="button"
                                                    className="hidden flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                                                >
                                                    <svg
                                                        viewBox="0 0 20 20"
                                                        className="w-full h-full fill-current"
                                                    >
                                                        <path
                                                            d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                                                        />
                                                    </svg>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="hidden flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                                                >
                                                    <svg
                                                        viewBox="0 0 20 20"
                                                        className="w-full h-full fill-current"
                                                    >
                                                        <path
                                                            d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"
                                                        />
                                                    </svg>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="hidden flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        className="w-full h-full fill-current"
                                                    >
                                                        <path
                                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex items-center">
                                                <p
                                                    className="px-6 py-3 rounded-b-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200"
                                                >
                                                    I dont know how to commute rab gikan sa amoa padung sa
                                                    colon. Unsay diay sakyan? Naa ray masakyan gikan amoa?
                                                </p>
                                                <button
                                                    type="button"
                                                    className="hidden flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                                                >
                                                    <svg
                                                        viewBox="0 0 20 20"
                                                        className="w-full h-full fill-current"
                                                    >
                                                        <path
                                                            d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                                                        />
                                                    </svg>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="hidden flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                                                >
                                                    <svg
                                                        viewBox="0 0 20 20"
                                                        className="w-full h-full fill-current"
                                                    >
                                                        <path
                                                            d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"
                                                        />
                                                    </svg>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="hidden flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        className="w-full h-full fill-current"
                                                    >
                                                        <path
                                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="p-4 text-center text-sm text-gray-500">FRI 10:04 PM</p>
                                    <div className="flex flex-row justify-end">
                                        <div
                                            className="messages text-sm text-white grid grid-flow-row gap-2"
                                        >
                                            <div className="flex items-center flex-row-reverse">
                                                <p
                                                    className="px-6 py-3 rounded-t-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md"
                                                >
                                                    Lagi dungan lagi ta
                                                </p>

                                            </div>
                                            <div className="flex items-center flex-row-reverse">
                                                <p
                                                    className="px-6 py-3 rounded-l-full bg-blue-700 max-w-xs lg:max-w-md"
                                                >
                                                    After lunch g ra? or ikaw agad rako nimo
                                                </p>
                                            </div>
                                            <div className="flex items-center flex-row-reverse">
                                                <p
                                                    className="px-6 py-3 rounded-b-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md"
                                                >
                                                    I dont know sd unsay sakyan pero in google maps we trust.
                                                    Naa ramn mga list there what to sakay
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    <p className="p-4 text-center text-sm text-gray-500">SAT 10:10 AM</p>
                                    <div className="flex flex-row justify-start">
                                        <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
                                            <img
                                                className="shadow-md rounded-full w-full h-full object-cover"
                                                src="/neah.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div
                                            className="messages text-sm text-gray-700 grid grid-flow-row gap-2"
                                        >
                                            <div className="flex items-center">
                                                <p
                                                    className="px-6 py-3 rounded-t-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200"
                                                >
                                                    Morning jwu
                                                </p>
                                                <button
                                                    type="button"
                                                    className="hidden flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                                                >
                                                    <svg
                                                        viewBox="0 0 20 20"
                                                        className="w-full h-full fill-current"
                                                    >
                                                        <path
                                                            d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                                                        />
                                                    </svg>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="hidden flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                                                >
                                                    <svg
                                                        viewBox="0 0 20 20"
                                                        className="w-full h-full fill-current"
                                                    >
                                                        <path
                                                            d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"
                                                        />
                                                    </svg>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="hidden flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        className="w-full h-full fill-current"
                                                    >
                                                        <path
                                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex items-center">
                                                <p
                                                    className="px-6 py-3 rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200"
                                                >
                                                    Nakagikan naka?
                                                </p>
                                                <button
                                                    type="button"
                                                    className="hidden flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                                                >
                                                    <svg
                                                        viewBox="0 0 20 20"
                                                        className="w-full h-full fill-current"
                                                    >
                                                        <path
                                                            d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                                                        />
                                                    </svg>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="hidden flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                                                >
                                                    <svg
                                                        viewBox="0 0 20 20"
                                                        className="w-full h-full fill-current"
                                                    >
                                                        <path
                                                            d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"
                                                        />
                                                    </svg>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="hidden flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        className="w-full h-full fill-current"
                                                    >
                                                        <path
                                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex items-center">
                                                <p
                                                    className="px-6 py-3 rounded-b-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200"
                                                >
                                                    I will prep na. Magdali ko, ready namn sd ako clothes
                                                    maligo nlng ko teehee
                                                </p>
                                                <button
                                                    type="button"
                                                    className="hidden flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                                                >
                                                    <svg
                                                        viewBox="0 0 20 20"
                                                        className="w-full h-full fill-current"
                                                    >
                                                        <path
                                                            d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
                                                        />
                                                    </svg>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="hidden flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                                                >
                                                    <svg
                                                        viewBox="0 0 20 20"
                                                        className="w-full h-full fill-current"
                                                    >
                                                        <path
                                                            d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"
                                                        />
                                                    </svg>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="hidden flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        className="w-full h-full fill-current"
                                                    >
                                                        <path
                                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="p-4 text-center text-sm text-gray-500">12:40 PM</p>
                                    <div className="flex flex-row justify-end">
                                        <div
                                            className="messages text-sm text-white grid grid-flow-row gap-2"
                                        >
                                            <div className="flex items-center flex-row-reverse">
                                                <p
                                                    className="px-6 py-3 rounded-t-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md"
                                                >
                                                    Yaur nakagikan nako
                                                </p>
                                            </div>
                                            <div className="flex items-center flex-row-reverse">
                                                <p
                                                    className="px-6 py-3 rounded-l-full bg-blue-700 max-w-xs lg:max-w-md"
                                                >
                                                    nanako dapit here
                                                </p>

                                            </div>
                                            <div className="flex items-center flex-row-reverse">
                                                <a
                                                    className="block w-64 h-64 relative flex flex-shrink-0 max-w-xs lg:max-w-md"
                                                    href="#"
                                                >
                                                    <img
                                                        className="absolute shadow-md w-full h-full rounded-l-lg object-cover"
                                                        src="/convo.jpg"
                                                        alt="hiking"
                                                    />
                                                </a>

                                            </div>
                                            <div className="flex items-center flex-row-reverse">
                                                <p
                                                    className="px-6 py-3 rounded-b-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md"
                                                >
                                                    Kita lng ta IT park niya dungan lng ta mu go adto sa colon
                                                    para dungan ta kasaag HAHAHAHAHHAHA
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    {
                                        msgs.length > 0 ?
                                            (
                                                <>
                                                    <p className="p-4 text-center text-sm text-gray-500">{now.toLocaleTimeString('en-US', { timeZone: 'Asia/Manila', hour12: true, hour: 'numeric', minute: '2-digit' })}</p>
                                                    <div className="flex flex-row justify-end">
                                                        <div
                                                            className="messages text-sm text-white grid grid-flow-row gap-2"
                                                        >
                                                            {
                                                                msgs.map((msg) => (

                                                                    <div className="flex items-center flex-row-reverse">
                                                                        <p
                                                                            className="px-6 py-3 rounded-t-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md"
                                                                        >
                                                                            {msg}
                                                                        </p>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                            :
                                            null
                                    }


                                </div>
                                <div className="chat-footer flex-none">
                                    <div className="flex flex-row items-center p-4">
                                        <button
                                            type="button"
                                            className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
                                        >
                                            <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                                <path
                                                    d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4s3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4S14.639,1.6,10,1.6z M15,11h-4v4H9  v-4H5V9h4V5h2v4h4V11z"
                                                />
                                            </svg>
                                        </button>
                                        <button
                                            type="button"
                                            className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
                                        >
                                            <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                                <path
                                                    d="M11,13 L8,10 L2,16 L11,16 L18,16 L13,11 L11,13 Z M0,3.99406028 C0,2.8927712 0.898212381,2 1.99079514,2 L18.0092049,2 C19.1086907,2 20,2.89451376 20,3.99406028 L20,16.0059397 C20,17.1072288 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M15,9 C16.1045695,9 17,8.1045695 17,7 C17,5.8954305 16.1045695,5 15,5 C13.8954305,5 13,5.8954305 13,7 C13,8.1045695 13.8954305,9 15,9 Z"
                                                />
                                            </svg>
                                        </button>
                                        <button
                                            type="button"
                                            className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
                                        >
                                            <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                                <path
                                                    d="M0,6.00585866 C0,4.89805351 0.893899798,4 2.0048815,4 L5,4 L7,2 L13,2 L15,4 L17.9951185,4 C19.102384,4 20,4.89706013 20,6.00585866 L20,15.9941413 C20,17.1019465 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1029399 0,15.9941413 L0,6.00585866 Z M10,16 C12.7614237,16 15,13.7614237 15,11 C15,8.23857625 12.7614237,6 10,6 C7.23857625,6 5,8.23857625 5,11 C5,13.7614237 7.23857625,16 10,16 Z M10,14 C11.6568542,14 13,12.6568542 13,11 C13,9.34314575 11.6568542,8 10,8 C8.34314575,8 7,9.34314575 7,11 C7,12.6568542 8.34314575,14 10,14 Z"
                                                />
                                            </svg>
                                        </button>
                                        <button
                                            type="button"
                                            className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
                                        >
                                            <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                                <path
                                                    d="M9,18 L9,16.9379599 C5.05368842,16.4447356 2,13.0713165 2,9 L4,9 L4,9.00181488 C4,12.3172241 6.6862915,15 10,15 C13.3069658,15 16,12.314521 16,9.00181488 L16,9 L18,9 C18,13.0790094 14.9395595,16.4450043 11,16.9378859 L11,18 L14,18 L14,20 L6,20 L6,18 L9,18 L9,18 Z M6,4.00650452 C6,1.79377317 7.79535615,0 10,0 C12.209139,0 14,1.79394555 14,4.00650452 L14,8.99349548 C14,11.2062268 12.2046438,13 10,13 C7.790861,13 6,11.2060545 6,8.99349548 L6,4.00650452 L6,4.00650452 Z"
                                                />
                                            </svg>
                                        </button>
                                        <div className="relative flex-grow">
                                            <label>
                                                <form onSubmit={(e) => handleSubmit(e)} id='msgForm'>
                                                    <input
                                                        className="rounded-full py-2 pl-3 pr-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                                                        type="text"
                                                        placeholder="Aa"
                                                        value={typedMsg}
                                                        onChange={(e) => setTypedMsg(e.target.value)}
                                                    />
                                                </form>
                                                <button
                                                    type="button"
                                                    className="absolute top-0 right-0 mt-2 mr-3 flex flex-shrink-0 focus:outline-none block text-blue-600 hover:text-blue-700 w-6 h-6"
                                                >
                                                    <svg
                                                        viewBox="0 0 20 20"
                                                        className="w-full h-full fill-current"
                                                    >
                                                        <path
                                                            d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 3a6 6 0 0 1-11.32 0h11.32z"
                                                        />
                                                    </svg>
                                                </button>
                                            </label>
                                        </div>
                                        <button
                                            type="button"
                                            className="flex flex-shrink-0 focus:outline-none mx-2 -mt-1 block text-blue-600 hover:text-blue-700 w-6 h-6"
                                        >
                                            <svg width="24" height="24" fill="none" stroke="#2563eb" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3Zm0 0a4 4 0 0 0 4-4V6a2 2 0 1 1 4 0v5h3a2 2 0 0 1 2 2l-1 5c-.144.613-.417 1.14-.777 1.501-.361.36-.79.536-1.223.499h-7a3 3 0 0 1-3-3"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </section>
                    }
                </main>
            </div>
        </div>
    )
}

export default function App() {

    const [status, setStatus] = useState(500)
    const nav = useNavigate()

    useEffect(() => {
        async function fetchProtectedData() {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:3000/', {
                    headers: { 'Authorization': token }
                });
                const data = await response.json();
                if (response.ok) {
                    setStatus(200)
                } else {
                    setStatus(500)
                    nav('/login')
                }
            } catch (error) {
                console.error('Error fetching protected data:', error);
            }
        }

        fetchProtectedData();
    }, [])

    if(status == 200) return <Main />
}