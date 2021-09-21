import './style.css';
import ProfileIcon from '../../assets/profile-icon.svg';
import CloseIcon from '../../assets/close-icon.svg';
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function ProfileBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const history = useHistory();

  function handleOpenProfilePage() {
    if (location.pathname === '/profile') {
      history.push('/');
      return;
    }

    history.push('/profile');
  }

  useEffect(() => {
    if (location.pathname === '/profile') {
      setOpen(true);
    }
  }, [location])

  return (
    <div>
      <img 
        src={open ? CloseIcon : ProfileIcon} 
        alt="Icon" 
        className="icon"
        onClick={() => handleOpenProfilePage()} 
        />
    </div>
  )
}

export default ProfileBar;