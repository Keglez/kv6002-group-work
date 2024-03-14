export default function NavBarGuest() {
    return (
        <nav className="bg-foreground-col">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                        {/* Mobile menu button*/}
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">                    
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open Main Menu</span>

                            {/* Icon when menu is closed. Menu open: "hidden", Menu closed: "block"*/}
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>

                            {/* Icon when menu is open. Menu open: "block", Menu closed: "hidden" */}
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">                        
                        
                        {/* Logo */}
                        <div className="flex flex-shrink-0 items-center">                        
                            <a href="/" className="hover:text-primary-col text-font-col font-bold">Malaysia Events</a>
                            {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="EMC (Event Management Company)" /> */}
                        </div>

                    </div>

                    <div className="relative ml-3"></div>

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                <a href="login" className="text-gray-300 hover:bg-secondary-col hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                    Login
                                </a>
                                <a href="register" className="text-gray-300 hover:bg-secondary-col hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                    Sign Up
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div> 

            {/* Mobile menu, show/hide based on menu state. */}
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a href="login" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">
                        Login
                    </a>
                    <a href="register" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                        Sign Up
                    </a>                
                </div>
            </div>

        </nav>
    );
}