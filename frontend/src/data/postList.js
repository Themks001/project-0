import image1 from "./postImage/bird.jpeg";
import image2 from "./postImage/book.jpeg";
import image3 from "./postImage/bread.jpeg";
import image4 from "./postImage/hills.jpeg";
import image5 from "./postImage/movie.jpeg";
import image6 from "./postImage/stars.jpeg";
import image7 from "./postImage/yoga.jpeg";
const postData = [
  {
    name: "Mountain Hike with a View",
    description:
      "Conquered this mountain peak today! The view was worth every step. #hikingadventures #mountainlover",
    likeCount: 521,
    image: image4,
    liked: true
  },
  {
    name: "Stargazing Night",
    description:
      "Spent the night gazing at the Milky Way. So many stars, so little time! #astrophotography #spaceexploration",
    likeCount: 279,
    liked: false,
    image: image6
  },
  {
    name: "Freshly Baked Bread",
    description:
      "The smell of freshly baked bread is the best! #breadmaking #homecooking",
    liked: false,
    likeCount: 412,
    image: image3
  },
  {
    name: "DIY Bird Feeder",
    description:
      "Made this cute bird feeder out of recycled materials. Now the birds can enjoy a tasty snack! #diycrafts #birdwatching",
    likeCount: 358,
    image: image1,
    liked: true
  },
  {
    name: "Reading by the Beach",
    description:
      "Relaxing with a good book on a beautiful beach day. #beachlife #bookworm",
    liked: true,
    likeCount: 184,
    image: image2
  },
  {
    name: "Yoga Flow in the Park",
    description:
      "Started my day with a peaceful yoga flow in the park. #yoga #wellness",
    likeCount: 291,
    liked: true,
    image: image7
  },
  {
    name: "Rainy Day Movie Marathon",
    liked: false,
    description:
      "The perfect weather for a movie marathon with popcorn! #rainydayvibes #movies",
    likeCount: 407,
    image: image5
  }
];
export default postData;
