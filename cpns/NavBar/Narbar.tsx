import Image from "next/image"
import styles from "./Header.module.scss"
import Logo from "./Logo.png"
import Logo2 from "./Logo2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faCartShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import Extend from "./Expand/Extend"
import RightMenu from "./RightMenu/RightMenu"

interface ExtendProps {
  name: string
  array: Array<string>
}

const arr1: Array<ExtendProps> = [
  {
    name: "Home",
    array: ["Home1", "Home2", "Home3 Longer", "Home4 Longerrrrr"],
  },
  { name: "Tours", array: ["Tour1", "Tour2", "Tour3", "Tour4"] },
  { name: "Booking", array: ["Booking1", "Booking2", "Booking3", "Booking4"] },
  {
    name: "Destinations",
    array: ["Destination1", "Destination2", "Destination3", "Destination4"],
  },
  { name: "Pages", array: ["Pages1", "Pages2", "Pages3", "Pages4"] },
  { name: "Blog", array: ["Blog1", "Blog2", "Blog3", "Blog4"] },
  {
    name: "Shortcodes",
    array: ["Shortcodes1", "Shortcodes2", "Shortcodes3", "Shortcodes4"],
  },
  { name: "Shop", array: ["Shop1", "Shop2", "Shop3", "Shop4"] },
]

function NavBar() {
  const [show, setShow] = useState<boolean>(true)
  const [windowScroll, setWindowScroll] = useState<number>(0)
  const [showRightMenu, setShowRightMenu] = useState<boolean>(false)

  const controlNavbar = () => {
    if (!window) return
    if (window.scrollY < windowScroll) {
      setShow(true)
    } else {
      setShow(false)
    }
    setWindowScroll(window.scrollY)
  }
  const handleShowMenu = () => {
    setShowRightMenu(true)
  }
  const handleHideMenu = () => {
    setShowRightMenu(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar)
    return () => {
      window.removeEventListener("scroll", controlNavbar)
    }
  }, [windowScroll])

  return (
    <>
      <div
        className={styles.header}
        style={Object.assign(
          show ? {} : { top: "-75px" },
          windowScroll < 800 ? {} : { backgroundColor: "white", color: "black" }
        )}
      >
        <div className={styles.wrapper}>
          <div className={styles.logoWrapper}>
            <Image
              src={windowScroll < 800 ? Logo2 : Logo}
              alt="logo"
              height={22}
            />
          </div>
          <div className={styles.menuWrapper}>
            <div className={styles.nav}>
              <ul>
                {arr1.map((e, index) => {
                  return <Extend name={e.name} array={e.array} key={index} />
                })}
              </ul>
            </div>
            <div className={styles.action}>
              <span onClick={handleShowMenu}>
                <FontAwesomeIcon icon={faBars} fontSize={14} />
              </span>
              <span>
                <FontAwesomeIcon icon={faCartShopping} fontSize={14} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={styles.wrapperRightMenu}
        style={showRightMenu ? { zIndex: 6 } : { zIndex: -1 }}
      >
        <div
          className={styles.outside}
          onClick={handleHideMenu}
          style={showRightMenu ? { display: "block" } : {}}
        ></div>
        <div
          className={styles.rightMenu}
          style={showRightMenu ? { right: "0px" } : {}}
        >
          <div className={styles.closeWrapper}>
            <FontAwesomeIcon
              onClick={handleHideMenu}
              icon={faXmark}
              fontSize={34}
              className={styles.closeBtn}
            />
          </div>
          <RightMenu />
        </div>
      </div>
    </>
  )
}

export default NavBar
