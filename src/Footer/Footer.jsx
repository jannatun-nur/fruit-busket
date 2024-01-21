import logo from '../../public/assets/image/logos.png'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800">
      <section className='flex gap-2'>
        <p className='text-white pt-3 text-sx lg:text-xl'>Fruit Basket</p>
        <img className='h-10 w-10 lg:h-16 lg:w-16' src={logo} alt="" />
      </section>
       
      </footer>
    </div>
  );
};

export default Footer;
