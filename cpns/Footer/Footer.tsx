import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./Footer.module.scss"
import Footer1 from "./footer11.png"
import { footer3Arr } from "../../data/data"
import Image from "next/image"
import {
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.footer1}>
          <h2>Our Awards</h2>
          <br />
          <p>
            London is a megalopolis of people, ideas and frenetic energy.The
            capital and largest city of the United Kingdom.
          </p>
          <br />
          <br />
          <Image src={Footer1} alt="" width={250} />
        </div>
        <div className={styles.footer2}>
          <h2>Contact Info</h2>
          <br />
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faPhone} />
            1-567-124-44227
          </p>
          <br />
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
            184 Main Street East Perl Habour 8007
          </p>
          <br />
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faClock} />
            Mon - Sat 8.00 - 18.00 Sunday CLOSED
          </p>
          <br />
          <br />
          <ul>
            <li className="facebook">
              <FontAwesomeIcon icon={faEnvelope} fontSize={17} />
            </li>
            <li className="twitter">
              <FontAwesomeIcon icon={faEnvelope} fontSize={17} />
            </li>
            <li className="youtube">
              <FontAwesomeIcon icon={faEnvelope} fontSize={17} />
            </li>
            <li className="pinterest">
              <FontAwesomeIcon icon={faEnvelope} fontSize={17} />
            </li>
            <li className="instagram">
              <FontAwesomeIcon icon={faEnvelope} fontSize={17} />
            </li>
          </ul>
        </div>
        <div className={styles.footer3}>
          <h2>Recent Trips</h2>
          <br />
          <div className={styles.ok}>
            {footer3Arr.map((e, index) => {
              return (
                <Image src={e} className={styles.okImg} alt="" key={index} />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
