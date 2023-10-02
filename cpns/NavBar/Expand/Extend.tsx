import styles from "./Extend.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

interface ExtendProps {
  name: string
  array: Array<string>
}

function Extend({ name, array }: ExtendProps) {
  const [expand, setExpand] = useState<boolean>(false)
  const handleMouseOver = () => {
    setExpand(true)
  }
  const handleMouseOut = () => {
    setExpand(false)
  }

  return (
    <li
      className={styles.wrapper}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className={styles.name}>
        <span>{name}</span>
        <FontAwesomeIcon icon={faChevronDown} fontSize={10} />
      </div>

      <div className={styles.extend} style={expand ? { scale: 1 } : {}}>
        <ul>
          {array.map((e, index) => {
            return (
              <li key={index}>
                <span>{e}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </li>
  )
}

export default Extend
