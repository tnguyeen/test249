import Image, { StaticImageData } from "next/image"
import styles from "./Reason.module.scss"

interface ReasonProps {
  reason: string
  pic: StaticImageData
}
function Reason({ reason, pic }: ReasonProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Image src={pic} alt="reason" className={styles.pic} />
        <h1>{reason}</h1>
        <p>
          Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo
          ligula eget dolor. Aenean massa
        </p>
      </div>
    </div>
  )
}

export default Reason
