import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const LandingNav = () => {
  const { isAuthenticated } = useAuth();
  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-6 ">
        <a
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Swift Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            PureTalk
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:flex md:w-auto gap-3"
          id="navbar-default"
        >
          <Link
            to={isAuthenticated ? "/chathome" : "/login"}
            className="block py-1 px-2 text-white hover:text-[#1B57E9]  text-lg font-medium  hover:border-[#1B57E9]"
          >
            {isAuthenticated ? "Home" : "Login"}
          </Link>
          <Link
            href="#"
            className="block py-1 px-2 text-white hover:text-[#1B57E9]  text-lg font-medium  hover:border-[#1B57E9]"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LandingNav;
































// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../context/authContext";
// import { useDispatch, useSelector } from "react-redux";
// import { setSidebar } from "../Store/Action/Sidebar/SidebarAciton";

// import SwitchTheme from "./SwitchTheme";
// import useDarkMode from "../hooks/useDarkMode";

// const LandingNavBar = () => {
//   const { isAuthenticated } = useAuth();
//   const dispatch = useDispatch();
//   const root = window.document.documentElement;

//   const reduxSidebar = useSelector((state) => state.SidebarReducer);
//   const [colorTheme, setTheme] = useDarkMode(); // Use the hook

//   console.log(colorTheme);

//   const [darkTheme, setDarkTheme] = useState(colorTheme === "dark");

//   console.log(darkTheme);

//   // const toggleTheme = () => {
//   //   setDarkTheme(!darkTheme);
//   //   setTheme(darkTheme ? "light" : "dark");
//   // };

//   const handleSidebar = (value) => {
//     dispatch(setSidebar(value));
//   };

//   return (
//     <div>
//       <div className={reduxSidebar?.doc}>
//         <div
//           id="root"
//           // className={`min-h-100vh flex grow
//           // ${darkTheme ? "dark" : "light" }
//           // relative
//           // overflow-hidden`}

//           // className={`${darkTheme ? "dark" : "light" } `}
//         >
//           <div
//             className={`sidebar sidebar-panel print:hidden ${
//               darkTheme ? "dark" : "light"
//             } `}
//           >
//             {/* Sidebar  */}
//             <div
//               className={`flex h-full grow flex-col 
//               ${
//                 darkTheme ? "dark" : "light"
//               }`}
              
//             >
//               <div
//                 className={`flex justify-between pt-4 pb-2   border-white-200 ${
//                   darkTheme ? "dark" : "light"
//                 }
                
//                 `}
//               >
//                 {/* <span className="self-center text-xl font-semibold whitespace-nowrap">
//                   Pure Talk
//                 </span> */}

                 

//                   <img
//                     src="https://flowbite.com/docs/images/logo.svg"
//                     className="h-10"
//                     alt="Pure Talk Logo"
//                     />
                 

//                 <button
//                   className="sidebar-toggle ml-0.5 flex h-7 w-30 flex-col justify-center space-y-1.5 text-primary  dark:text-accent-light/80"
//                   onClick={() =>
//                     handleSidebar(
//                       reduxSidebar.doc === "is-sidebar-open"
//                         ? ""
//                         : "is-sidebar-open"
//                     )
//                   }
//                 >
//                   <span></span>
//                   <span></span>
//                   <span></span>
//                 </button>

//                 <span className="self-center text-xl font-semibold whitespace-nowrap ml-80">
//                   Pure Talk
//                 </span>
//               </div>

//               <div
//                 className="nav-wrapper my-5 h-[calc(100%-4.5rem)] overflow-x-hidden pb-6"
//                 data-simplebar="init"
//               >
//                 <div
//                   className="simplebar-wrapper"
//                   style={{ margin: "0px 0px -24px" }}
//                 >
//                   <div className="simplebar-height-auto-observer-wrapper">
//                     <div className="simplebar-height-auto-observer"></div>
//                   </div>
//                   <div className="simplebar-mask">
//                     <div
//                       className="simplebar-offset"
//                       style={{ right: "0px", bottom: "0px" }}
//                     >
//                       <div
//                         className="simplebar-content-wrapper flex flex-col"
//                         tabIndex="0"
//                         role="region"
//                         aria-label="scrollable content"
//                         style={{ height: "100%", overflow: "hidden" }}
//                       >
//                         <div
//                           className="simplebar-content"
//                           style={{ padding: "0px 0px 24px" }}
//                         >
//                           <div className="-mr-1.5 flex items-center space-x-2">
//                             <SwitchTheme />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div
//                     className="simplebar-placeholder"
//                     style={{ width: "259px", height: "618px" }}
//                   ></div>
//                 </div>
//                 <div
//                   className="simplebar-track simplebar-horizontal"
//                   style={{ visibility: "hidden" }}
//                 >
//                   <div
//                     className="simplebar-scrollbar"
//                     style={{ width: "0px", display: "none" }}
//                   ></div>
//                 </div>
//                 <div
//                   className="simplebar-track simplebar-vertical"
//                   style={{ visibility: "hidden" }}
//                 >
//                   <div
//                     className="simplebar-scrollbar"
//                     style={{ height: "0px", display: "none" }}
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <nav
//             className=" header  print:hidden relative flex flex-col"
//             style={{ zIndex: 1000 }}
//           >
//             <div
//               className={`header-container relative flex w-full ${
//                 darkTheme ? "dark" : "light"
//               }css colorsprint:hidden`}
//             >
//               <div className="flex w-full items-center justify-between h-16">
//                 <div className="h-7 w-7">
//                   {reduxSidebar?.doc === "" ? (
//                     <button
//                       className="sidebar-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80"
//                       onClick={() =>
//                         handleSidebar(
//                           reduxSidebar?.doc === "is-sidebar-open"
//                             ? ""
//                             : "is-sidebar-open"
//                         )
//                       }
//                     >
//                       <span></span>
//                       <span></span>
//                       <span></span>
//                     </button>
//                   ) : null}
//                 </div>
//               </div>

//               <div className="flex flex-row" id="navbar-default">
//                 <Link
//                   to={isAuthenticated ? "/chathome" : "/login"}
//                   className={`block py-1 px-2 text-${
//                     darkTheme ? "dark" : "light"
//                   } hover:text-[#1B57E9]  text-lg font-medium  hover:border-[#1B57E9]`}
//                 >
//                   {isAuthenticated ? "Home" : "Login"}
//                 </Link>
//                 <Link
//                   to="#"
//                   className={`block py-1 px-2 text-${
//                     darkTheme ? "dark" : "light"
//                   } hover:text-[#1B57E9]  text-lg font-medium  hover:border-[#1B57E9]`}
//                 >
//                   Contact
//                 </Link>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );

//   // return (
//   //   <nav>
//   //     <div className="max-w-screen-xl flex  items-center justify-between mx-auto py-6">
//   //       <a className="flex items-center space-x-3 rtl:space-x-reverse">
//   //         <img
//   //           src="https://flowbite.com/docs/images/logo.svg"
//   //           className="h-8"
//   //           alt="Pure Talk Logo"
//   //         />
//   //         <span className="self-center text-2xl font-semibold whitespace-nowrap">
//   //           Pure Talk
//   //         </span>
//   //       </a>

//   //       <div
//   //         className="flex justify-between px-3 pt-4 pb-2"
//   //         style={{ borderBottom: "1px solid lightgrey" }}
//   //       >

//   //         <span className="self-center text-2xl font-semibold whitespace-nowrap">
//   //           Pure Talk
//   //         </span>

//   //         <button
//   //           className="sidebar-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80"
//   //           onClick={() =>
//   //             handleSidebar(
//   //               reduxSidebar.doc === "is-sidebar-open" ? "" : "is-sidebar-open"
//   //             )
//   //           }
//   //         >
//   //           <span></span>
//   //           <span></span>
//   //           <span></span>
//   //         </button>
//   //       </div>

//   //       <div className=" flex items-center space-x-2">
//   //         <SwitchTheme />
//   //       </div>

//   //       <button
//   //         type="button"
//   //         onClick={toggleTheme}
//   //         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-black-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//   //         aria-expanded="false"
//   //       >
//   //         <span className="sr-only">Toggle dark mode</span>
//   //         {darkTheme ? (
//   //           <svg
//   //             className="w-5 h-5 text-white"
//   //             fill="none"
//   //             stroke="currentColor"
//   //             viewBox="0 0 24 24"
//   //             xmlns="http://www.w3.org/2000/svg"
//   //           >
//   //             <path
//   //               strokeLinecap="round"
//   //               strokeLinejoin="round"
//   //               strokeWidth="2"
//   //               d="M12 5a1 1 0 100-2 1 1 0 000 2zM12 2v1m0 18v1m-2.121-2.121a10 10 0 114.242-4.242 1 1 0 00-1.414-1.414A10 10 0 0112 19.071zm-2.828-2.829a6 6 0 108.485-8.485 1 1 0 00-1.414 1.414 4 4 0 01-5.657 5.657 1 1 0 00-1.414-1.414z"
//   //             />
//   //           </svg>
//   //         ) : (
//   //           <svg
//   //             className="w-5 h-5 text-black"
//   //             fill="none"
//   //             stroke="currentColor"
//   //             viewBox="0 0 24 24"
//   //             xmlns="http://www.w3.org/2000/svg"
//   //           >
//   //             <path
//   //               strokeLinecap="round"
//   //               strokeLinejoin="round"
//   //               strokeWidth="2"
//   //               d="M12 5a1 1 0 100-2 1 1 0 000 2zM12 2v1m0 18v1m-3.535-3.536a1 1 0 101.414 1.414 1 1 0 00-1.414-1.414zM4.929 4.93a1 1 0 101.414 1.414 1 1 0 00-1.414-1.414zM2 12h1m18-1h1m-3.536 3.535a1 1 0 101.414 1.414 1 1 0 00-1.414-1.414zM4.929 19.07a1 1 0 101.414 1.414 1 1 0 00-1.414-1.414zM12 22v-1m0-18v-1"
//   //             />
//   //           </svg>
//   //         )}
//   //       </button>

//   //       <div
//   //         className="hidden w-full md:flex md:w-auto gap-3"
//   //         id="navbar-default"
//   //       >
//   //         <Link
//   //           to={isAuthenticated ? "/chathome" : "/login"}
//   //           className={`block py-1 px-2 text-${
//   //             darkTheme ? "white" : "black"
//   //           } hover:text-[#1B57E9]  text-lg font-medium  hover:border-[#1B57E9]`}
//   //         >
//   //           {isAuthenticated ? "Home" : "Login"}
//   //         </Link>
//   //         <Link
//   //           to="#"
//   //           className={`block py-1 px-2 text-${
//   //             darkTheme ? "white" : "black"
//   //           } hover:text-[#1B57E9]  text-lg font-medium  hover:border-[#1B57E9]`}
//   //         >
//   //           Contact
//   //         </Link>
//   //       </div>
//   //     </div>
//   //   </nav>
//   // );
// };

// export default LandingNavBar;
