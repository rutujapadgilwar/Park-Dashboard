import Hiking from "../images/Hiking.jpg";
import Arts from "../images/Arts.jpg";
import Astronomy from "../images/Astronomy.jpg";
import Auto from "../images/Auto.jpg";
import Biking from "../images/Biking.jpeg";
import Boating from "../images/Boating.jpg";
import Camping from "../images/Camping.jpg";
import Climbing from "../images/Climbing.jpg";
import Fishing from "../images/Fishing.jpg";
import Food from "../images/Food.jpg";
import Guidedtours from "../images/Guidedtours.jpg";
import horse from "../images/horse.jpg";
import Paddling from "../images/Paddling.jpg";
import Skiing from "../images/Skiing.jpg";
import Wildlife from "../images/Wildlife.jpg";
import Other from "../images/Other.jpg";
const getActivityImage = (activityName) => {
  switch (activityName) {
    case "Hiking":
      return Hiking;
    case "Arts and Culture":
      return Arts;
    case "Astronomy":
      return Astronomy;
    case "Auto and ATV":
      return Auto;
    case "Biking":
      return Biking;
    case "Boating":
      return Boating;
    case "Camping":
      return Camping;
    case "Climbing":
      return Climbing;
    case "Fishing":
      return Fishing;
    case "Food":
      return Food;
    case "Guided Tours":
      return Guidedtours;
    case "Horse Trekking":
      return horse;
    case "Paddling":
      return Paddling;
    case "Skiing":
      return Skiing;
    case "Snowshoeing":
      return Skiing;
    case "Wildlife Watching":
      return Wildlife;
    default:
      return Other;
  }
};

export default getActivityImage;
