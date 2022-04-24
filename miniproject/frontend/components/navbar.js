//หากเข้าที่ /foo โดยที่ยังไม่ Login จะ Redirect ไปให้ Login ก่อน แต่ถ้า Login แล้ว ก็จะแสดงข้อความคำว่า  Foo 

import Link from 'next/link'

const Navbar = () => (
        <nav className="flex items-center justify-between flex-wrap bg-yellow-600 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
         
          <span className="font-semibold text-xl tracking-tight">SEAFOOD</span>
          <img class="sm:w-1/3 sm:h-1/3 "blur-sm src="https://cdn-icons.flaticon.com/png/512/2276/premium/2276931.png?token=exp=1650825512~hmac=50c7d705a74255e3d97fa31d4875b0dd" />
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
           
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            HOME
            </a>
            <a href="/login" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              SIGIN
            </a>
            <a href="/register" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              SIGUP
            </a>
            <a href="/Menu" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              MENU
            </a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/Order" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              ORDER
            </a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/logout" classNameName="block py-2 pr-4 pl-3 text-gray-700 mt-4
                     hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 
                       md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">LOGOUT</a>
          </div>
          
        </div>
      </nav>
      
)

export default Navbar