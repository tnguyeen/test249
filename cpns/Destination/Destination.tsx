import Image, { StaticImageData } from "next/image"
import styles from "./Destination.module.scss"

interface DestinationProps {
  name: string
  pic: StaticImageData
}
function Destination({ name, pic }: DestinationProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Image
          src={pic}
          alt="destination"
          className={styles.pic}
          height={300}
          width={300}
        />
        <h1>{name}</h1>
      </div>
    </div>
  )
}

export default Destination
