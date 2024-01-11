const Modal = ({ buys, showModal, toggleModal }) => {
    const { name } = buys;
  
    return (
      <div>
        {/* The button to open modal */}
        
  
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className={`modal ${showModal ? 'open' : ''}`} role="dialog">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello, {name}!</h3>
            <p className="py-4">This modal works with a hidden checkbox!</p>
            <div className="modal-action">
              <label htmlFor="my_modal_6" className="btn" onClick={toggleModal}>
               Confirm
              </label>
              <label htmlFor="my_modal_6" className="btn" onClick={toggleModal}>
                Cencel
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;