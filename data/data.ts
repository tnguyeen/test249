import { IconProp } from "@fortawesome/fontawesome-svg-core"
import {
  faMagnifyingGlass,
  faCalendar,
  faSort,
  faChevronDown,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons"
import London from "./london.jpg"
import Paris from "./paris.jpg"
import Seoul from "./seoul.jpg"
import Tokyo from "./tokyo.jpg"
import Trip1 from "./trip1.jpeg"
import Trip2 from "./trip2.jpeg"
import Trip3 from "./trip3.jpeg"
import Reason1 from "./reason1.png"
import Reason2 from "./reason2.png"
import Reason3 from "./reason3.png"
import Tip1 from "./tip1.jpg"
import Tip2 from "./tip2.jpeg"
import Tip3 from "./tip3.jpg"
import F31 from "./F31.jpg"
import F32 from "./F32.jpg"
import F33 from "./F33.jpg"
import F34 from "./F34.jpg"
import F35 from "./F35.jpg"
import F36 from "./F36.jpg"
import { StaticImageData } from "next/image"

// Filter
export enum FilterType {
  input,
  select,
}
interface FilterProps {
  class: string
  type: FilterType
  placehoder?: string
  icon: IconProp
  array?: Array<string>
  advanced: boolean
}

const monthsValue: Array<string> = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
const sortValue: Array<string> = [
  "Sort by Date",
  "Price Low To High",
  "Price High To Low",
  "Sort by Name",
  "Sort by Popularity",
  "Sort by Review Score",
]
const cateValue: Array<string> = [
  "All Categories",
  "Mountain",
  "Rural",
  "Snow And Ice",
  "Wildlife",
]

const capitalValue: Array<string> = [
  "Any Destinations",
  "Tokyo",
  "Seoul",
  "Paris",
  "London",
  "Venice",
  "Miami",
  "Rome",
  "Prague",
  "California",
  "Kyoto",
  "Hong Kong",
  "Santorini",
]

export const filterArr: Array<FilterProps> = [
  {
    class: "input1",
    type: FilterType.input,
    icon: faMagnifyingGlass,
    placehoder: "Destination, city",
    advanced: true,
  },
  {
    class: "input2",
    type: FilterType.select,
    icon: faCalendar,
    array: monthsValue,
    advanced: true,
  },
  {
    class: "input3",
    type: FilterType.select,
    icon: faSort,
    array: sortValue,
    advanced: true,
  },
  {
    class: "input4",
    type: FilterType.select,
    icon: faChevronDown,
    array: cateValue,
    advanced: false,
  },
  {
    class: "input5",
    type: FilterType.select,
    icon: faChevronDown,
    array: capitalValue,
    advanced: false,
  },
  {
    class: "input6",
    type: FilterType.input,
    icon: faDollarSign,
    placehoder: "Max budget",
    advanced: false,
  },
]

// Desti
interface DestinationProps {
  name: string
  pic: StaticImageData
}
export const destinationArr: Array<DestinationProps> = [
  { name: "Tokyo", pic: Tokyo },
  { name: "Seoul", pic: Seoul },
  { name: "Paris", pic: Paris },
  { name: "London", pic: London },
]

// Trip
interface TripProps {
  name: string
  type: string
  pic: StaticImageData
  price: number
  oldPrice?: number
}

export const tripArr: Array<TripProps> = [
  { name: "French Autumn", type: "City Tours, Urban", price: 5000, pic: Trip1 },
  {
    name: "Grand Switzerland",
    type: "Shopping, Mountain, Snow & Ice",
    price: 6000,
    pic: Trip2,
  },
  {
    name: "DiscoverJapan",
    type: "City Tours, Iconic",
    price: 2500,
    oldPrice: 3000,
    pic: Trip3,
  },
]

// Reason
interface ReasonProps {
  reason: string
  pic: StaticImageData
}

export const reasonArr: Array<ReasonProps> = [
  { reason: "Handpicked Hotels", pic: Reason1 },
  { reason: "World Class Service", pic: Reason2 },
  { reason: "Best Price Guarantee", pic: Reason3 },
]

// Tip
interface TipProps {
  name: string
  pic: StaticImageData
}

export const tipArr: Array<TipProps> = [
  { name: "Memorial Day to Someone Told Me to Travel", pic: Tip1 },
  { name: "7 Tips For Nomads On A Budget Trips", pic: Tip2 },
  { name: "Taking A Travel Blog Victory Lap", pic: Tip3 },
]
// Footer
export const footer3Arr: Array<StaticImageData> = [F31, F32, F33, F34, F35, F36]
