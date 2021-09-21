import './style.css';
import '../../styles/modal.css';
import CloseIcon from '../../assets/close-icon.svg';
import SmileIcon from '../../assets/smile-icon.svg';

function ModalMatch({ open = true, setOpen }) {
    return (
        <>
            {open && 
                <div className="modal">
                    <div className="modal-content">
                        <img 
                            src={CloseIcon}
                            className="modal-close-icon" 
                            alt="botão fechar" 
                            onClick={() => setOpen(false)} 
                        />
                        <div>
                            <h1>Modal</h1>
                            <h3>Google gostou de você!</h3>
                        </div>
                        <img src={SmileIcon} alt="Smile Icon" className="smile-icon" />
                    </div>
                </div>
            }
        </>
    )
}

export default ModalMatch;