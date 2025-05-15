'use client'
import React, {useState} from 'react'
import Link from 'next/link';
import styles from './Navbar.module.scss';


export default function Navbar() {


const navItems = ["Home", "About", "Projects", "Contact", "Services"];
const navLinks = ["/", "about", "projects", "contact", "services"];
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () =>{
setMenuOpen(prev => !prev);
};
  return (
    <>
    <nav className={`${styles.navbar} ${menuOpen ? styles.active : ''}`}>
      
      <a href='/'><div className={styles.logo}></div></a>
      <div className={styles.brandName}><p>M Creative Compound</p></div>
      <ul className={styles.navList}>
  {/*<ul className={styles.navList} id='navList'>*/}
    
    
    {navItems.map((item, index) => (
      
        <li key={index} className={styles.navItem}>
            <Link href={navLinks[index]}>{item}</Link>
        </li>
        
    ))}
    
    <li className={styles.whatsApp}>
        <a href='#'> WhatsApp Us </a>
        </li>
        
        
  </ul>


</nav>
  <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}></button>        
    
 </>
  );
}
