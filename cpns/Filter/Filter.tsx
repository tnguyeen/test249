import styles from "./Filter.module.scss"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

enum FilterType {
  input,
  select,
}
interface FilterProps {
  type: FilterType
  icon: IconProp
  placehoder?: string
  array?: Array<string>
  advanced: boolean
}
function Filter({ type, icon, array, placehoder, advanced }: FilterProps) {
  const [isAdvanced, setIsAdvanced] = useState<boolean>(advanced)

  if (type === FilterType.input) {
    return (
      <>
        <div
          className={styles.wrapper}
          style={advanced ? {} : { display: "none" }}
        >
          <input placeholder={placehoder} />
          <FontAwesomeIcon icon={icon} fontSize={20} className={styles.icon} />
        </div>
      </>
    )
  }
  return (
    <>
      <div
        className={styles.wrapper}
        style={advanced ? {} : { display: "none" }}
      >
        <select name="cars" id="cars">
          {array &&
            array.map((e, index) => {
              return (
                <option key={index} value={e.toLowerCase()}>
                  {e}
                </option>
              )
            })}
        </select>
        <FontAwesomeIcon icon={icon} fontSize={20} className={styles.icon} />
      </div>
    </>
  )
}

export default Filter
