import styles from "./RightMenu.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import Link from "next/link"

interface RightMenuProps {
  name: string
  array: Array<string>
}

const arr1: Array<string> = [
  "Home",
  "Tours",
  "Booking",
  "Destinations",
  "Pages",
  "Blog",
  "Shortcodes",
  "Shop",
]

function RightMenu() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          {arr1.map((e, index) => (
            <Link key={index} href={e.toLowerCase()} className={styles.link}>
              <span>{e}</span>
            </Link>
          ))}
        </div>
        <div className={styles.suggests}></div>
        <div className={styles.social}></div>
      </div>
    </>
  )
}

export default RightMenu
