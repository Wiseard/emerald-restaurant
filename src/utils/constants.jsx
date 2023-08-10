import { nanoid } from 'nanoid'
import staffBartender from '../assets/staff-bartender.jpg'
import staffSauteChef from '../assets/staff-chef-1.jpg'
import staffSousChef from '../assets/staff-chef-2.jpg'
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoTripAdvisor } from 'react-icons/bi'

// MENU LINKS
export const menuLinks = [
  {
    id: nanoid(),
    name: 'reservation',
    url: 'home',
  },
  {
    id: nanoid(),
    name: 'menu',
    url: 'menu',
  },
  {
    id: nanoid(),
    name: 'staff',
    url: 'staff',
  },
  {
    id: nanoid(),
    name: 'visit us',
    url: 'contact',
  },
]

// SOCIAL LINKS
export const socialLinks = [
  {
    id: nanoid(),
    name: 'facebook',
    icon: <AiOutlineFacebook />,
  },
  {
    id: nanoid(),
    name: 'instagram',
    icon: <AiOutlineInstagram />,
  },
  {
    id: nanoid(),
    name: 'trip advisor',
    icon: <BiLogoTripAdvisor />,
  },
]

// HOURS
export const hours = [
  {
    id: nanoid(),
    name: '11:00 am',
    value: [11, 0],
  },
  {
    id: nanoid(),
    name: '11:30 am',
    value: [11, 30],
  },
  {
    id: nanoid(),
    name: '12:00 pm',
    value: [12, 0],
  },
  {
    id: nanoid(),
    name: '12:30 pm',
    value: [12, 30],
  },
  {
    id: nanoid(),
    name: '01:00 pm',
    value: [13, 0],
  },
  {
    id: nanoid(),
    name: '01:30 pm',
    value: [13, 30],
  },
  {
    id: nanoid(),
    name: '07:00 pm',
    value: [19, 0],
  },
  {
    id: nanoid(),
    name: '07:30 pm',
    value: [19, 30],
  },
  {
    id: nanoid(),
    name: '08:00 pm',
    value: [19, 0],
  },
  {
    id: nanoid(),
    name: '08:30 pm',
    value: [20, 30],
  },
  {
    id: nanoid(),
    name: '09:00 pm',
    value: [21, 0],
  },
  {
    id: nanoid(),
    name: '09:30 pm',
    value: [21, 30],
  },
  {
    id: nanoid(),
    name: '10:00 pm',
    value: [22, 0],
  },
  {
    id: nanoid(),
    name: '10:30 pm',
    value: [22, 30],
  },
]

// PEOPLE
export const guests = [
  {
    id: nanoid(),
    value: 1,
  },
  {
    id: nanoid(),
    value: 2,
  },
  {
    id: nanoid(),
    value: 3,
  },
  {
    id: nanoid(),
    value: 4,
  },
  {
    id: nanoid(),
    value: 5,
  },
]

// MENU
export const menu = [
  // starters
  {
    id: nanoid(),
    name: 'Purple Corn Tostada',
    ingredients: 'Ricotta, goat cheese, beetroot and datterini.',
    price: 19,
    category: 'starters',
  },
  {
    id: nanoid(),
    name: "Bruno's Scribble",
    ingredients: 'Culatello, Spalla Cotta, Mortadella, Culacciona.',
    price: 22,
    category: 'starters',
  },
  {
    id: nanoid(),
    name: 'Fresh Oysters Dozen',
    ingredients: 'Our selection of fresh oysters, limes.',
    price: 25,
    category: 'starters',
  },
  {
    id: nanoid(),
    name: 'Wild Mushroom Arancini',
    ingredients: 'Porcini purée, parmesan, basil.',
    price: 18,
    category: 'starters',
  },
  {
    id: nanoid(),
    name: 'Crab Cakes',
    ingredients:
      'Onions, Fresh flat-leaf parsley, Mashed potatoes, Pepper, Eggs, Tartare sauce',
    price: 18.5,
    category: 'starters',
  },
  {
    id: nanoid(),
    name: 'Whitebait & dill mayo',
    ingredients: 'Fish, Lemon, Mayo, Fennel seeds.',
    price: 12,
    category: 'starters',
  },
  {
    id: nanoid(),
    name: 'Watermelon & feta salad',
    ingredients: 'Watermelon, Red onion, Feta cheese, Fresh mint, Olive oil.',
    price: 11.5,
    category: 'starters',
  },
  {
    id: nanoid(),
    name: 'Halloumi with griddled vegetables',
    ingredients:
      'Beans, Halloumi cheese, Asparagus, Courgettes, Cherry tomatoes.',
    price: 9,
    category: 'starters',
  },
  {
    id: nanoid(),
    name: 'Asparagus & halloumi salad',
    ingredients: 'Smoked streaky bacon, Frozen peas, Fresh chervil.',
    price: 9,
    category: 'starters',
  },
  // main courses
  {
    id: nanoid(),
    name: 'Ebony Fillet Steak',
    ingredients: 'Truffle mash, charred baby cos, pico de gallo, pepper sauce.',
    price: 58,
    category: 'main courses',
  },
  {
    id: nanoid(),
    name: 'Flank Steak',
    ingredients: 'Served medium rare, chips, house salad, mushroom sauce.',
    price: 35,
    category: 'main courses',
  },
  {
    id: nanoid(),
    name: 'Crispy Skin Chicken',
    ingredients: 'Ricotta, radicchio, peach & prosciutto salad, cabernet jus.',
    price: 33,
    category: 'main courses',
  },
  {
    id: nanoid(),
    name: 'Pan Fried Barramundi',
    ingredients: 'Barley, quinoa, grilled zucchini, corn & tomato salsa.',
    price: 36,
    category: 'main courses',
  },
  {
    id: nanoid(),
    name: 'Beer Battered Fish & Chips',
    ingredients: 'Atlantic cod fillet, chips, salad, tartare, lemon.',
    price: 33,
    category: 'main courses',
  },
  {
    id: nanoid(),
    name: 'Blue Eyed Cod',
    ingredients: 'Mussels, lobster bisque, heirloom tomato & summer herbs.',
    price: 33,
    category: 'main courses',
  },
  {
    id: nanoid(),
    name: 'Spaghetti alla carbonara',
    ingredients: 'Spaghetti alla carbonara in its authentic form.',
    price: 32,
    category: 'main courses',
  },
  {
    id: nanoid(),
    name: 'Baked teriyaki chicken',
    ingredients: 'Chicken, Lemon, Mayo, Fennel seeds',
    price: 35.4,
    category: 'main courses',
  },
  {
    id: nanoid(),
    name: 'Meatball nirvana',
    ingredients: 'Smoked streaky bacon, Frozen peas, Fresh chervil.',
    price: 30.9,
    category: 'main courses',
  },

  // beverages
  {
    id: nanoid(),
    name: 'Prickly Pear Tonic',
    ingredients: 'Prickly Pear, Chancaca, Key Lime, and Tonic.',
    price: 12,
    category: 'beverages',
  },
  {
    id: nanoid(),
    name: 'Chicha Morada',
    ingredients: 'Purple Corn, Pineapple, Apple, Cinnamon, and Clove.',
    price: 12,
    category: 'beverages',
  },
  {
    id: nanoid(),
    name: 'Better Boy',
    ingredients: 'Tomato, Salt, Black Pepper, Lemon, Worcestershire.',
    price: 10,
    category: 'beverages',
  },
  {
    id: nanoid(),
    name: "Tommy's Margarita",
    ingredients: 'Tequila, fresh lime juice, and orange liqueur.',
    price: 13,
    category: 'beverages',
  },
  {
    id: nanoid(),
    name: 'Rye manhattan',
    ingredients: 'Tomato, Salt, Black Pepper, Lemon, Worcestershire.',
    price: 13.4,
    category: 'beverages',
  },
  {
    id: nanoid(),
    name: 'Caramel frappuccino',
    ingredients: 'Purple Corn, Caramel, Cinnamon, and Clove.',
    price: 14.9,
    category: 'beverages',
  },
  {
    id: nanoid(),
    name: 'Lemonade',
    ingredients: 'Water, Black Pepper, Lemon, Worcestershire.',
    price: 16.4,
    category: 'beverages',
  },
  {
    id: nanoid(),
    name: 'Strawberry oatmeal breakfest smoothie',
    ingredients: 'Tequila, fresh lime juice, and orange liqueur.',
    price: 11.9,
    category: 'beverages',
  },
  {
    id: nanoid(),
    name: 'Margaritas',
    ingredients: 'Prickly Pear, Chancaca, Key Lime, and Tonic.',
    price: 18.4,
    category: 'beverages',
  },
]

// MENU CATEGORIES
export const menuCategories = [...new Set(menu.map((item) => item.category))]

// TESTIMONIALS
export const reviews = [
  {
    id: nanoid(),
    author: 'betsy ward',
    job: 'critic',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Maecenas nec odio et ante tincidunt tempus.',
  },
  {
    id: nanoid(),
    author: 'alice wayne',
    job: 'blogger',
    text: 'Food is the foundation of true happiness. Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo.',
  },
  {
    id: nanoid(),
    author: 'olivia martin',
    job: 'guest review',
    text: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Quisque rutrum aenean leo ligula. Nulla consequat massa quis enim.',
  },
]

// STAFF
export const staff = [
  {
    id: nanoid(),
    img: staffSauteChef,
    name: 'Lorenzo Morelli',
    job: 'sauté chef',
    text: 'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur mus.',
  },
  {
    id: nanoid(),
    img: staffSousChef,
    name: 'Lyon Blanchet',
    job: 'sous chef',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa pretium quis, sem quis.',
  },
  {
    id: nanoid(),
    img: staffBartender,
    name: 'Jason Morton',
    job: 'bartender',
    text: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
  },
]
