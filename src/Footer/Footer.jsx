import logo from '../../public/assets/image/logos.png'
import { GiRotaryPhone } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 flex justify-between">
      <section className='flex gap-2'>
        <p className='text-white pt-3 text-sx lg:text-xl'>Fruit Basket</p>
        <img className='h-10 w-10 lg:h-16 lg:w-16' src={logo} alt="" />
      </section>
       
       <section>
        <p className='flex gap-2 text-white'>
        <span className='pt-1'><GiRotaryPhone /> </span>+495637965
        </p>
        <p className='flex gap-2 text-white'>
        <span className='pt-1'><IoIosMail /></span>fruitbasket@gmail.com
        </p>
        
       </section>
      </footer>
    </div>
  );
};

export default Footer;
