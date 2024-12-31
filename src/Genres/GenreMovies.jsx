import { FaHome, FaTv, FaStar  } from "react-icons/fa";
import { RiMovie2Line } from "react-icons/ri";
import { MdFavorite } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";

const genreMovies = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

const genreTV = [
  {
    id: 10759,
    name: "Action & Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 10762,
    name: "Kids",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10763,
    name: "News",
  },
  {
    id: 10764,
    name: "Reality",
  },
  {
    id: 10765,
    name: "Sci-Fi & Fantasy",
  },
  {
    id: 10766,
    name: "Soap",
  },
  {
    id: 10767,
    name: "Talk",
  },
  {
    id: 10768,
    name: "War & Politics",
  },
  {
    id: 37,
    name: "Western",
  },
];

const menuLists = [
    {
      id: 1,
      name: "Home",
      icon: FaHome,
      url: '/'
    },
    {
      id: 2,
      name: "TV Shows",
      icon: FaTv,
      url: '/series',
    },
    {
      id: 3,
      name: "Movies",
      icon: RiMovie2Line,
      url: '/movies',
    },
    {
      id: 4,
      name: "New & Popular",
      icon: FaStar,
      url: '/popular-movies'
    },
    {
      id: 5,
      name: "My List",
      icon: MdFavorite,
      url: '/'
    },
    {
      id: 6,
      name: "Browse by Languages",
      icon: IoLanguage,
      url: '/'
    },
  ];

export default{genreMovies, genreTV, menuLists}