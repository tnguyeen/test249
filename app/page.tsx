"use client"
import Navbar from "@/cpns/NavBar/Narbar"
import styles from "./page.module.scss"
import {
  filterArr,
  destinationArr,
  tripArr,
  reasonArr,
  tipArr,
} from "@/data/data"
import Filter from "@/cpns/Filter/Filter"
import Destination from "@/cpns/Destination/Destination"
import Trip from "@/cpns/Trip/Trip"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Reason from "@/cpns/Reason/Reason"
import Tip from "@/cpns/Tip/Tip"
import Footer from "@/cpns/Footer/Footer"

export default function Home() {
  const [isAdvanced, setIsAdvanced] = useState<boolean>(false)
  const handleAdvanced = () => {
    isAdvanced ? setIsAdvanced(false) : setIsAdvanced(true)
  }
  return (
    <div className={styles.body}>
      <Navbar />
      <div className={styles.bgImg}>
        <div className={styles.searchSec}>
          <div className={styles.slogan}>
            <h1>Where do you want to go?</h1>
            <span>Trips, experiences, and places. All in one service.</span>
          </div>
          <div
            className={!isAdvanced ? styles.kobiet : styles.search}
            // className={styles.search + (!isAdvanced ? styles.kobiet : "")}
            // style={!isAdvanced ? { grid: "60px/repeat(4, 1fr)" } : {}}
          >
            {filterArr.map((e, index) => {
              return (
                <div
                  className={styles[e.class]}
                  key={index}
                  // style={e.advanced ? { display: "none" } : { display: "block" }}
                >
                  <Filter
                    type={e.type}
                    icon={e.icon}
                    array={e.array}
                    placehoder={e.placehoder}
                    advanced={isAdvanced ? true : e.advanced}
                  />
                </div>
              )
            })}
            <div className={styles.searchBtn}>
              <button>Search</button>
            </div>
            <div className={styles.advance} onClick={handleAdvanced}>
              <FontAwesomeIcon
                icon={faChevronDown}
                fontSize={16}
                rotation={isAdvanced ? 180 : 0}
              />
              <span>Advanced Search</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.destinations}>
        <div className={styles.slogan}>
          <h1>Popular Destinations</h1>
          <span>World's best tourist destinations</span>
        </div>
        <div className={styles.main}>
          {destinationArr.map((e, index) => {
            return <Destination name={e.name} pic={e.pic} key={index} />
          })}
        </div>
      </div>
      <div className={styles.trips}>
        <div className={styles.slogan}>
          <h1>Best Value Trips</h1>
          <span>Best offers trips from us</span>
        </div>
        <div className={styles.main}>
          {tripArr.map((e, index) => {
            return (
              <Trip
                name={e.name}
                type={e.type}
                pic={e.pic}
                price={e.price}
                oldPrice={e.oldPrice}
                key={index}
              />
            )
          })}
        </div>
      </div>
      <div className={styles.reasons}>
        <div className={styles.slogan}>
          <h1>Why Choose Us</h1>
          <span>Here are reasons you should plan trip with us</span>
        </div>
        <div className={styles.main}>
          {reasonArr.map((e, index) => {
            return <Reason reason={e.reason} pic={e.pic} key={index} />
          })}
        </div>
      </div>
      <div className={styles.bgVideo}>
        <div className={styles.wrapper}>
          {/* <div className={styles.altPic}></div> */}
          <iframe
            className={styles.mainVid}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="Spectacular Norway - from the air"
            width={1740}
            height={1360}
            src="https://www.youtube.com/embed/JPe2mwq96cw?autoplay=1&disablekb=1&loop=1&modestbranding=1&playsinline=1&controls=0&mute=1"
          ></iframe>
        </div>
      </div>
      <div className={styles.tips}>
        <div className={styles.slogan}>
          <h1>Articles & Tips</h1>
          <span>Explore some of the best tips from around the world</span>
        </div>
        <div className={styles.main}>
          {tipArr.map((e, index) => {
            return <Tip name={e.name} pic={e.pic} key={index} />
          })}
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
        <div className={styles.idk}>
          <div className={styles.idk1}>
            © Copyright Grand Tour Theme Demo - Theme by ThemeGoods
          </div>
          <div className={styles.idk2}>
            <ul>
              <li>Home</li>
              <li>Tours</li>
              <li>Blog</li>
              <li>Purchase Theme</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
