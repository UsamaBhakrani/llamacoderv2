"use client";
import { FiSearch } from "react-icons/fi";
import { IoIosChatbubbles, IoIosMore } from "react-icons/io";
import { AiOutlinePlus, AiOutlineDelete, AiOutlineEdit, AiOutlineFolderOpen } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/gptLogoWhite.jpg";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const chats = [
        { title: "Today's Chat", messages: ["Dark themed calculator", "Responsive Navbar"] },
        { title: "Previous 7 days", messages: ["Dashboard", "Need help?"] },
        { title: "Previous 14 days", messages: ["Footer Design", "Icons Color"] },
    ];

    const handleMenuClick = (message: string) => {
        setDropdownOpen((prev) => (prev === message ? null : message));
    };
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(event.target as Node)) {
                setDropdownOpen(null);
            }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed ${isOpen ? "top-6" : "mt-12"} left-4 z-20 text-gray-700 text-3xl cursor-pointer transition-all duration-300`}
                title="Toggle Sidebar"
            >
                <img
                    src={isOpen ? "/closeSidebar.png" : "/openSidebar.png"}
                    alt={isOpen ? "Close Sidebar" : "Open Sidebar"}
                    className="rounded-md h-[24px] transition-transform duration-300 transform"
                />
            </button>

            <div
                className={`fixed top-0 bottom-0 left-0 z-10 transform duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"} w-[277px] overflow-y-auto text-left bg-white border h-screen border-r-2 border-grey-200`}
                 
            > 
                <div className="p-4 bg-white"
                // style={{
                //     borderImage: "linear-gradient(90deg, rgba(7,11,134,1) 31%, rgba(67,105,224,1) 59%) 1",
                //     boxShadow: "0 0 2px rgba(67, 105, 224, 0.7), 0 0 2px rgba(67, 105, 224, 0.7), 0 0 2px rgba(7, 11, 134, 0.6)",
                //   }}
                >
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <Image
                                src={logo}
                                alt="Logo"
                                quality={100}
                                className="mx-auto h-9 object-contain"
                                priority
                            />
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-500 text-2xl focus:outline-none hover:text-gray-700 transition-all"
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                </div>

                {/* Header Section */}
                <div className="px-2 py-[10px]">
                    <div className="flex items-center bg-white  rounded-md px-3 py-2 border border-blue-200 transition-all duration-200">
                        <h1 className="text-lg text-grey-800 font-bold">Chats</h1>
                        <button className="ml-auto border border-grey-900 hover:border-black text-grey-800 text-xs flex items-center space-x-1 p-2 rounded-md">
                            <AiOutlinePlus />
                            <span>New Chat</span>
                        </button>
                    </div>

                </div>

                {/* Search Bar */}
                <div className="px-2 py-[7px]">
                    <div className="flex items-center bg-white rounded-md px-3 py-2 border border-blue-200 hover:bg-gray-100 transition-all duration-200">
                        <FiSearch className="text-gray-500" />
                        <input
                            className="ml-3 w-full bg-transparent focus:outline-none text-gray-700"
                            placeholder="Search Chats"
                        />
                    </div>
                </div>

                {/* Chats */}
                <div className="px-2 py-[7px]">
                    {chats.map((chat, index) => (
                        <div
                            key={index}
                            className="p-3 mb-3 rounded-lg bg-white hover:bg-gray-100 border border-blue-200 shadow-sm"
                        >
                            <h2 className="text-gray-800 text-xs font-semibold border-b-2 border-gray-200 pb-1">{chat.title}</h2>
                            <ul className="mt-2 text-gray-800 text-sm">
                                {chat.messages.map((msg, idx) => (
                                    <li key={idx} className="py-2 flex justify-between items-center group relative">
                                        <div className="flex items-center space-x-2">
                                            <IoIosChatbubbles className="text-gray-500" />
                                            <span>{msg}</span>
                                        </div>
                                        <IoIosMore
                                            className="text-gray-500 cursor-pointer hidden group-hover:block"
                                            onClick={() => handleMenuClick(msg)}
                                        />
                                        {dropdownOpen === msg && (
                                            <div
                                                ref={dropdownRef}
                                                className="fixed right-0 mt-2 bg-white border rounded-md shadow-lg w-32"
                                            >
                                                <ul>
                                                    <li className="py-1 px-2 text-gray-700 cursor-pointer hover:bg-gray-100 flex items-center space-x-2" onClick={() => alert("Delete clicked")}> <AiOutlineDelete />
                                                    <span>Delete</span></li>
                                                    <li className="py-1 px-2 text-gray-700 cursor-pointer hover:bg-gray-100 flex items-center space-x-2" onClick={() => alert("Rename clicked")}> <AiOutlineEdit />
                                                    <span>Rename</span></li>
                                                    <li className="py-1 px-2 text-gray-700 cursor-pointer hover:bg-gray-100 flex items-center space-x-2" onClick={() => alert("Open clicked")}> <AiOutlineFolderOpen />
                                                    <span>Open</span></li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
