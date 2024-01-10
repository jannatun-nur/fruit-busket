import logo from '../../public/assets/image/logos.png'

const Navbar = () => {
    const links =<>
    <li className='rounded-lg text-white hover:bg-white hover:text-rose-500 text-lg'><button>Home</button></li>
    <li className=' rounded-lg text-white hover:bg-white hover:text-rose-500 text-lg'><button>About</button></li>
    <li className='  rounded-lg text-white hover:bg-white hover:text-rose-500 text-xl'><button>Orders</button></li>
    
    </>
    return (
        <div>
          <div className="navbar bg-rose-500 text-white rounded-xl">
  <div className="navbar-start">
  <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-rose-500 rounded-box w-52">
        {links}
      </ul>
    </div>
    <p className=' text-sm lg:textxl font-semibold lg:pr-2 pr-1'>Fruit Basket</p>
    <img className='h-8 w-8 lg:h-10 lg:w-10' src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
<button className='px-2 py-0 text-sm lg:px-4 lg:py-1 rounded-lg text-white hover:bg-white hover:text-rose-500 lg:text-xl'>Sign In</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;