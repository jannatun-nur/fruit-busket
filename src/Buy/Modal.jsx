const Modal = ({ buys, showModal, toggleModal }) => {
    const { name, price } = buys;
  
    return (
      <div>
        {/* The button to open modal */}
        
  
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_6" className="modal-toggle " />
        <div className={`modal ${showModal ? 'open' : ''}`}  role="dialog">
          <div className="modal-box bg-white">
            <h3 className="font-bold lg:text-lg text-rose-600">{name}!</h3>
            <p className="py-4 lg:text-2xl text-rose-600">{price}</p>
            <div className="modal-action  text-rose-600 ">
              <label htmlFor="my_modal_6" className="px-2 py-1 rounded-lg text-white bg-rose-600 mt-2" onClick={toggleModal}>
               Confirm
              </label>
              <label htmlFor="my_modal_6" className="px-2 py-1 rounded-lg text-white bg-rose-600 mt-2" onClick={toggleModal}>
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;