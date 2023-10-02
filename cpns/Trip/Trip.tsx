import Image, { StaticImageData } from "next/image"
import styles from "./Trip.module.scss"

interface TripProps {
  name: string
  type: string
  pic: StaticImageData
  price: number
  oldPrice?: number
}
function Trip({ name, type, price, oldPrice, pic }: TripProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        {oldPrice && <div className={styles.sale}>Sale</div>}
        <div className={styles.picWrapper}>
          <Image src={pic} alt="trip" className={styles.pic} />
          <div className={styles.price}>
            {oldPrice && <h2>${oldPrice}</h2>}
            <h1>${price}</h1>
          </div>
        </div>
        <h1 style={{ marginLeft: "6px" }}>{name}</h1>
        <p style={{ marginLeft: "6px" }}>{type}</p>
      </div>
    </div>
  )
}

export default Trip
