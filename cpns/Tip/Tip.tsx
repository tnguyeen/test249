import Image, { StaticImageData } from "next/image"
import styles from "./Tip.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown"

interface TipProps {
  name: string
  pic: StaticImageData
}
function Tip({ name, pic }: TipProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.picWrapper}>
          <Image src={pic} alt="tip" className={styles.pic} />
        </div>
        <div className={styles.desWrapper}>
          <h3>December 10, 2016</h3>
          <h1>{name}</h1>
          <br />
          <p>
            Meh synth Schlitz, tempor duis single-origin coffee ea next level
            ethnic fingerstache...
          </p>
          <br />
          <button>
            Read More
            <FontAwesomeIcon
              icon={faChevronDown}
              fontSize={14}
              rotation={270}
              style={{ marginLeft: "4px" }}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tip
