import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import LogoEdit from './ImgsSidebar/edit.svg'
import FolderIcon from './ImgsSidebar/folder.svg'
import Setting from './ImgsSidebar/settings.svg'
import MenuIcon from './ImgsSidebar/menu.svg' 
import SideNote from '../SideNotes/SideNote'

const Sidebar = () => {

  const [checkWidth, setCheckWidth] = useState(window.innerWidth);
  const [toggleNav, setToggleNav] = useState(false);

  const checkWidthFunc = () => {
    setCheckWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', checkWidthFunc);

    return () => {
      window.removeEventListener('resize', checkWidthFunc);
    }
  }, [])

  const toggleNavFunc = () => {
    setToggleNav(!toggleNav)
  }

  return (
    <>
    {
      checkWidth < 900 && (
        <button 
          onClick={toggleNavFunc}
          className='toggle-nav-btn'
        >
          <img src={MenuIcon} alt='menu icon' />
        </button>
      )
    }
      
      <nav 
        className={toggleNav ? 'container-sidebar visible-nav' : 'container-sidebar'}
      >
        <div className='sidebar'>
          <div className='three-dots'>
            <div className='dot-nav d-red'></div>
            <div className='dot-nav d-yellow'></div>
            <div className='dot-nav d-green'></div>
          </div>
          <ul>
            <Link to='/'>
              <li>
                <img src={FolderIcon} alt='Icon folder' />
              </li>
            </Link>
            <Link to='/edit'>
              <li>
                <img src={LogoEdit} alt='Icon Edit' />
              </li>
            </Link>
            <Link to='/'>
              <li>
                <img src={Setting} alt='Icon Tools' />
              </li>
            </Link>
          </ul>
        </div>
        <SideNote />
      </nav>
    </>
  )
}

export default Sidebar