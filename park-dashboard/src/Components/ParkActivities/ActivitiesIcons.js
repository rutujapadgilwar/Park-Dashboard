import ArtsAndCultureIcon from "@mui/icons-material/Brush";
import CulturalDemonstrationsIcon from "@mui/icons-material/EmojiPeople";
import AutoAndATVIcon from "@mui/icons-material/DriveEta";
import ScenicDrivingIcon from "@mui/icons-material/Traffic";
import AstronomyIcon from "@mui/icons-material/NightsStay";
import StargazingIcon from "@mui/icons-material/Stars";
import BikingIcon from "@mui/icons-material/DirectionsBike";
import BoatingIcon from "@mui/icons-material/DirectionsBoat";
import BackcountryCampingIcon from "@mui/icons-material/Terrain";
import CarCampingIcon from "@mui/icons-material/LocalParking";
import ScubaDivingIcon from "@mui/icons-material/ScubaDiving";
import CompassAndGPSIcon from "@mui/icons-material/Navigation";
import KayakingIcon from "@mui/icons-material/Kayaking";
import BikeScooterIcon from "@mui/icons-material/BikeScooter";
import {
  GiMountainCave,
  GiGolfFlag,
  GiHuntingHorn,
  GiSnorkel,
  GiSpearfishing,
  GiMountainClimbing,
  GiMaterialsScience,
  GiHorseHead,
  GiSpeedBoat,
  GiFishing,
  GiFishEscape,
  GiBoatFishing,
  GiInnerSelf,
  GiCanoe,
  GiPineTree,
  GiSailboat
} from "react-icons/gi";
import {
  FaMountain,
  FaDog,
  FaSnowman,
  FaSkiing,
  FaBus,
  FaCampground,
} from "react-icons/fa";
import {
  MdSnowmobile,
  MdSurfing,
  MdOutlineSportsKabaddi,
  MdOutlineSportsScore,
  MdSailing,
  MdBedroomBaby,
  MdOutlineKayaking
} from "react-icons/md";
import { TbFileOrientation } from "react-icons/tb";
import { SiGeocaching } from "react-icons/si";
import FoodIcon from "@mui/icons-material/Fastfood";
import FlyingIcon from "@mui/icons-material/AirplanemodeActive";
import GuidedToursIcon from "@mui/icons-material/DirectionsWalk";
import HandsOnIcon from "@mui/icons-material/Construction";
import VolunteerVacationIcon from "@mui/icons-material/EmojiPeople";
import HikingIcon from "@mui/icons-material/Hiking";
import BackcountryHikingIcon from "@mui/icons-material/Directions";
import FrontCountryHikingIcon from "@mui/icons-material/DirectionsRun";
import HorseTrekkingIcon from "@mui/icons-material/BedroomBaby";
import LivingHistoryIcon from "@mui/icons-material/History";
import PaddlingIcon from "@mui/icons-material/Kayaking";
import WhitewaterRaftingIcon from "@mui/icons-material/Waves";
import JuniorRangerProgramIcon from "@mui/icons-material/School";
import WildlifeWatchingIcon from "@mui/icons-material/Visibility";
import ParkFilmIcon from "@mui/icons-material/Movie";
import MuseumExhibitsIcon from "@mui/icons-material/Museum";
import ShoppingIcon from "@mui/icons-material/ShoppingCart";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import RvHookupIcon from "@mui/icons-material/RvHookup";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import SnowshoeingSharpIcon from "@mui/icons-material/SnowshoeingSharp";
import HikingSharpIcon from "@mui/icons-material/HikingSharp";
import IceSkatingSharpIcon from "@mui/icons-material/IceSkatingSharp";
import PoolSharpIcon from "@mui/icons-material/PoolSharp";
import { IoMdBoat } from "react-icons/io";

const getActivityIcon = (activityName) => {
  switch (activityName) {
    case "Arts and Culture":
      return <ArtsAndCultureIcon />;
    case "Cultural Demonstrations":
      return <CulturalDemonstrationsIcon />;
    case "Auto and ATV":
      return <AutoAndATVIcon />;
    case "Scenic Driving":
      return <ScenicDrivingIcon />;
    case "Astronomy":
      return <AstronomyIcon />;
    case "Stargazing":
      return <StargazingIcon />;
    case "Biking":
      return <BikingIcon />;
    case "Boating":
      return <BoatingIcon />;
    case "Camping":
      return <FaCampground />;
    case "Backcountry Camping":
      return <BackcountryCampingIcon />;
    case "Car or Front Country Camping":
      return <CarCampingIcon />;
    case "Horse Camping (see also Horse/Stock Use)":
      return <HorseTrekkingIcon />;
    case "Compass and GPS":
      return <CompassAndGPSIcon />;
    case "Fishing":
      return <GiSpearfishing />;
    case "Food":
      return <FoodIcon />;
    case "Flying":
      return <FlyingIcon />;
    case "Guided Tours":
      return <GuidedToursIcon />;
    case "Hands-On":
      return <HandsOnIcon />;
    case "Volunteer Vacation":
      return <VolunteerVacationIcon />;
    case "Hiking":
      return <HikingIcon />;
    case "Backcountry Hiking":
      return <BackcountryHikingIcon />;
    case "Front-Country Hiking":
      return <FrontCountryHikingIcon />;
    case "Horse Trekking":
      return <HorseTrekkingIcon />;
    case "Living History":
      return <LivingHistoryIcon />;
    case "Paddling":
      return <PaddlingIcon />;
    case "Whitewater Rafting":
      return <WhitewaterRaftingIcon />;
    case "Junior Ranger Program":
      return <JuniorRangerProgramIcon />;
    case "Wildlife Watching":
      return <WildlifeWatchingIcon />;
    case "Birdwatching":
      return <FlutterDashIcon />;
    case "Park Film":
      return <ParkFilmIcon />;
    case "Museum Exhibits":
      return <MuseumExhibitsIcon />;
    case "Shopping":
      return <ShoppingIcon />;
    case "Boat Tour":
      return <GiSailboat />;
    case "Road Biking":
      return <TwoWheelerIcon />;
    case "Group Camping":
      return <HolidayVillageIcon />;
    case "RV Camping":
      return <RvHookupIcon />;
    case "Bookstore and Park Store":
      return <LibraryBooksIcon />;
    case "Gift Shop and Souvenirs":
      return <CardGiftcardIcon />;
    case "Self-Guided Tours - Walking":
      return <DirectionsWalkIcon />;
    case "Picnicking":
      return <BrunchDiningIcon />;
    case "Dining":
      return <DinnerDiningIcon />;
    case "Craft Demonstrations":
      return <ColorLensIcon />;
    case "Skiing":
      return <DownhillSkiingIcon />;
    case "Snowshoeing":
      return <SnowshoeingSharpIcon />;
    case "Climbing":
      return <HikingSharpIcon />;
    case "Ice Skating":
      return <IceSkatingSharpIcon />;
    case "Swimming":
      return <PoolSharpIcon />;
    case "Tubing":
      return <IoMdBoat />;
    case "Canyoneering":
      return <FaMountain />;
    case "Caving":
      return <GiMountainCave />;
    case "Dog Sledding":
      return <FaDog />;
    case "Golfing":
      return <GiGolfFlag />;
    case "Hunting and Gathering":
      return <GiHuntingHorn />;
    case "SCUBA Diving":
      return <ScubaDivingIcon />;
    case "Snorkeling":
      return <GiSnorkel />;
    case "Snow Play":
      return <FaSnowman />;
    case "Snowmobiling":
      return <MdSnowmobile />;
    case "Surfing":
      return <MdSurfing />;
    case "Team Sports":
      return <MdOutlineSportsKabaddi />;
    case "Water Skiing":
      return <FaSkiing />;
    case "Playground":
      return <MdOutlineSportsScore />;
    case "Rock Climbing":
      return <GiMountainClimbing />;
    case "Geocaching":
      return <SiGeocaching />;
    case "Citizen Science":
      return <GiMaterialsScience />;
    case "Horseback Riding":
      return <GiHorseHead />;
    case "Sailing":
      return <MdSailing />;
    case "Motorized Boating":
      return <GiSpeedBoat />;
    case "Mountain Climbing":
      return <GiMountainClimbing />;
    case "Canoe":
      return <KayakingIcon />;
    case  "Kayak Camping":
      return <MdOutlineKayaking />;
    case "Orienteering":
      return <TbFileOrientation />;
    case "Saltwater Fishing":
      return <GiFishing />;
    case "Fly Fishing":
      return <GiFishEscape />;
    case "Horse Camping (see also camping)":
      return <MdBedroomBaby />;
    case "Freshwater Fishing":
      return <GiBoatFishing />;
    case "Bus/Shuttle Guided Tour":
      return <FaBus />;
    case "Self-Guided Tours - Auto":
      return <GiInnerSelf />;
    case "Mountain Biking":
      return <BikeScooterIcon />;
    case "Canoeing":
      return <GiCanoe />;
    default:
      return <GiPineTree />;
  }
};
export default getActivityIcon;
