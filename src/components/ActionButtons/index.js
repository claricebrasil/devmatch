import './style.css';
import LikeButtonIcon from '../../assets/like-button.svg';
import TrashButtonIcon from '../../assets/trash-button.svg';
import ModalMatch from '../ModalMatch';
import { useState } from 'react';

function ActionButtons() {
    const [open, setOpen] = useState(false);

    function handleAddLike() {
        setOpen(true);
    }

    return (
        <div>
            <ModalMatch open={open} setOpen={setOpen} />
            <img 
                className="button-icon" 
                src={LikeButtonIcon} 
                alt="like"
                onClick={() => handleAddLike()} 
            />
            <img className="button-icon"  src={TrashButtonIcon} alt="trash" />
        </div>
    )
}

export default ActionButtons;