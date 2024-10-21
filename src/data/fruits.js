// src/fruits.js
import AppleIMG from "../assets/ShopIMG/1.jpg";
import BananaIMG from "../assets/ShopIMG/2.jpg";
import OrangeIMG from "../assets/ShopIMG/3.jpg";
import MangoIMG from "../assets/ShopIMG/4.jpeg";
import StrawberryIMG from "../assets/ShopIMG/5.jpg";
import GrapesIMG from "../assets/ShopIMG/6.jpeg";
import PineappleIMG from "../assets/ShopIMG/7.jpg";
import WatermelonIMG from "../assets/ShopIMG/8.jpg";
import PeachIMG from "../assets/ShopIMG/9.jpg";

// Add more images if available, or use placeholders for the rest
import CherryIMG from "../assets/ShopIMG/10.jpg";
import PapayaIMG from "../assets/ShopIMG/11.jpg";
import KiwiIMG from "../assets/ShopIMG/12.jpg";
import PomegranateIMG from "../assets/ShopIMG/13.jpg"; // Updated to .jpeg
import BlueberryIMG from "../assets/ShopIMG/14.jpg"; // Updated to .jpeg
import LemonIMG from "../assets/ShopIMG/15.jpg"; // Updated to .jpeg
import RaspberryIMG from "../assets/ShopIMG/16.jpeg"; // Updated to .jpeg
import BlackberryIMG from "../assets/ShopIMG/17.jpg"; // Updated to .jpeg
import PearIMG from "../assets/ShopIMG/18.jpg"; // Updated to .jpeg
import PlumIMG from "../assets/ShopIMG/19.jpg"; // Updated to .jpeg
import ApricotIMG from "../assets/ShopIMG/20.jpg"; // Updated to .jpeg
import NectarineIMG from "../assets/ShopIMG/21.jpeg"; // Updated to .jpeg
import GuavaIMG from "../assets/ShopIMG/22.jpeg"; // Updated to .jpeg
import LycheeIMG from "../assets/ShopIMG/23.jpg"; // Updated to .jpeg
import FigIMG from "../assets/ShopIMG/24.jpg"; // Updated to .jpeg
import CoconutIMG from "../assets/ShopIMG/25.jpg"; // Updated to .jpeg
import MelonIMG from "../assets/ShopIMG/26.jpg"; // Updated to .jpeg
import DragonIMG from "../assets/ShopIMG/27.jpg"; // Updated to .jpeg
import JackfruitIMG from "../assets/ShopIMG/28.jpg";
import PassionFruitIMG from "../assets/ShopIMG/29.jpg";
import CustardAppleIMG from "../assets/ShopIMG/30.jpg";
import CranberryIMG from "../assets/ShopIMG/31.jpg";
import TamarindIMG from "../assets/ShopIMG/32.jpg";
import StarfruitIMG from "../assets/ShopIMG/33.jpg";
import PomeloIMG from "../assets/ShopIMG/34.jpg";
import JujubeIMG from "../assets/ShopIMG/35.jpg";
import LonganIMG from "../assets/ShopIMG/36.jpg";

import RambutanIMG from "../assets/ShopIMG/37.jpg";
import MulberryIMG from "../assets/ShopIMG/38.jpg";
import TangerineIMG from "../assets/ShopIMG/39.jpg";
import CantaloupeIMG from "../assets/ShopIMG/40.jpg";
import DurianIMG from "../assets/ShopIMG/41.jpg";
import PersimmonIMG from "../assets/ShopIMG/42.jpg";
import GooseberryIMG from "../assets/ShopIMG/43.jpg";
import ClementineIMG from "../assets/ShopIMG/44.jpg";
import QuinceIMG from "../assets/ShopIMG/45.jpg";
import LoquatIMG from "../assets/ShopIMG/46.jpg";
import SoursopIMG from "../assets/ShopIMG/47.jpg";
import SapodillaIMG from "../assets/ShopIMG/48.jpg";
import KumquatIMG from "../assets/ShopIMG/49.jpg";
import FeijoaIMG from "../assets/ShopIMG/50.jpg";

const fruits = [
  {
    id: 1,
    name: "Apple",
    description: "Fresh and juicy apples.",
    price: "50.00",
    quantity: 1,
    imageUrl: AppleIMG,
  },
  {
    id: 2,
    name: "Banana",
    description: "Sweet and ripe bananas.",
    price: "30.00",
    quantity: 1,
    imageUrl: BananaIMG,
  },
  {
    id: 3,
    name: "Orange",
    description: "Citrusy and tangy oranges.",
    price: "40.00",
    quantity: 1,
    imageUrl: OrangeIMG,
  },
  {
    id: 4,
    name: "Mango",
    description: "Delicious and sweet mangoes.",
    price: "60.00",
    quantity: 1,
    imageUrl: MangoIMG,
  },
  {
    id: 5,
    name: "Strawberry",
    description: "Fresh and juicy strawberries.",
    price: "100.00",
    quantity: 1,
    imageUrl: StrawberryIMG,
  },
  {
    id: 6,
    name: "Grapes",
    description: "Fresh and tasty grapes.",
    price: "70.00",
    quantity: 1,
    imageUrl: GrapesIMG,
  },
  {
    id: 7,
    name: "Pineapple",
    description: "Sweet and tangy pineapples.",
    price: "80.00",
    quantity: 1,
    imageUrl: PineappleIMG,
  },
  {
    id: 8,
    name: "Watermelon",
    description: "Refreshing and hydrating watermelons.",
    price: "90.00",
    quantity: 1,
    imageUrl: WatermelonIMG,
  },
  {
    id: 9,
    name: "Peach",
    description: "Sweet and juicy peaches.",
    price: "85.00",
    quantity: 1,
    imageUrl: PeachIMG,
  },
  {
    id: 10,
    name: "Cherry",
    description: "Fresh and delicious cherries.",
    price: "150.00",
    quantity: 1,
    imageUrl: CherryIMG,
  },
  {
    id: 11,
    name: "Papaya",
    description: "Tropical and sweet papayas.",
    price: "45.00",
    quantity: 1,
    imageUrl: PapayaIMG,
  },
  {
    id: 12,
    name: "Kiwi",
    description: "Tangy and sweet kiwis.",
    price: "120.00",
    quantity: 1,
    imageUrl: KiwiIMG,
  },
  {
    id: 13,
    name: "Pomegranate",
    description: "Rich and juicy pomegranates.",
    price: "110.00",
    quantity: 1,
    imageUrl: PomegranateIMG,
  },
  {
    id: 14,
    name: "Blueberry",
    description: "Fresh and delicious blueberries.",
    price: "200.00",
    quantity: 1,
    imageUrl: BlueberryIMG,
  },
  {
    id: 15,
    name: "Lemon",
    description: "Sour and tangy lemons.",
    price: "25.00",
    quantity: 1,
    imageUrl: LemonIMG,
  },
  {
    id: 16,
    name: "Raspberry",
    description: "Sweet and tart raspberries.",
    price: "180.00",
    quantity: 1,
    imageUrl: RaspberryIMG,
  },
  {
    id: 17,
    name: "Blackberry",
    description: "Juicy and rich blackberries.",
    price: "190.00",
    quantity: 1,
    imageUrl: BlackberryIMG,
  },
  {
    id: 18,
    name: "Pear",
    description: "Sweet and soft pears.",
    price: "60.00",
    quantity: 1,
    imageUrl: PearIMG,
  },
  {
    id: 19,
    name: "Plum",
    description: "Juicy and sweet plums.",
    price: "70.00",
    quantity: 1,
    imageUrl: PlumIMG,
  },
  {
    id: 20,
    name: "Apricot",
    description: "Delicious and tangy apricots.",
    price: "80.00",
    quantity: 1,
    imageUrl: ApricotIMG,
  },
  {
    id: 21,
    name: "Nectarine",
    description: "Sweet and juicy nectarines.",
    price: "90.00",
    quantity: 1,
    imageUrl: NectarineIMG,
  },
  {
    id: 22,
    name: "Guava",
    description: "Tropical and sweet guavas.",
    price: "55.00",
    quantity: 1,
    imageUrl: GuavaIMG,
  },
  {
    id: 23,
    name: "Lychee",
    description: "Exotic and sweet lychees.",
    price: "130.00",
    quantity: 1,
    imageUrl: LycheeIMG,
  },
  {
    id: 24,
    name: "Fig",
    description: "Sweet and delicious figs.",
    price: "140.00",
    quantity: 1,
    imageUrl: FigIMG,
  },
  {
    id: 25,
    name: "Coconut",
    description: "Nutty and refreshing coconuts.",
    price: "75.00",
    quantity: 1,
    imageUrl: CoconutIMG,
  },
  {
    id: 26,
    name: "Melon",
    description: "Sweet and refreshing melons.",
    price: "65.00",
    quantity: 1,
    imageUrl: MelonIMG,
  },

  {
    id: 27,
    name: "Dragon Fruit",
    description: "Exotic and sweet dragon fruits.",
    price: "150.00",
    quantity: 1,
    imageUrl: DragonIMG,
  },

  {
    id: 28,
    name: "Jackfruit",
    description: "Tropical and sweet jackfruits.",
    price: "95.00",
    quantity: 1,
    imageUrl: JackfruitIMG,
  },
  {
    id: 29,
    name: "Passion Fruit",
    description: "Tart and sweet passion fruits.",
    price: "100.00",
    quantity: 1,
    imageUrl: PassionFruitIMG,
  },
  {
    id: 30,
    name: "Custard Apple",
    description: "Sweet and creamy custard apples.",
    price: "85.00",
    quantity: 1,
    imageUrl: CustardAppleIMG,
  },
  {
    id: 31,
    name: "Cranberry",
    description: "Tangy and refreshing cranberries.",
    price: "175.00",
    quantity: 1,
    imageUrl: CranberryIMG,
  },
  {
    id: 32,
    name: "Tamarind",
    description: "Tangy and flavorful tamarinds.",
    price: "35.00",
    quantity: 1,
    imageUrl: TamarindIMG,
  },
  {
    id: 33,
    name: "Starfruit",
    description: "Exotic and sweet starfruits.",
    price: "105.00",
    quantity: 1,
    imageUrl: StarfruitIMG,
  },
  {
    id: 34,
    name: "Pomelo",
    description: "Citrusy and sweet pomelos.",
    price: "115.00",
    quantity: 1,
    imageUrl: PomeloIMG,
  },
  {
    id: 35,
    name: "Jujube",
    description: "Sweet and chewy jujubes.",
    price: "95.00",
    quantity: 1,
    imageUrl: JujubeIMG,
  },
  {
    id: 36,
    name: "Longan",
    description: "Sweet and juicy longans.",
    price: "125.00",
    quantity: 1,
    imageUrl: LonganIMG,
  },

  {
    id: 37,
    name: "Rambutan",
    description: "Exotic and sweet rambutans.",
    price: "135.00",
    quantity: 1,
    imageUrl: RambutanIMG,
  },
  {
    id: 38,
    name: "Mulberry",
    description: "Sweet and tart mulberries.",
    price: "160.00",
    quantity: 1,
    imageUrl: MulberryIMG,
  },
  {
    id: 39,
    name: "Tangerine",
    description: "Sweet and citrusy tangerines.",
    price: "45.00",
    quantity: 1,
    imageUrl: TangerineIMG,
  },
  {
    id: 40,
    name: "Cantaloupe",
    description: "Sweet and juicy cantaloupes.",
    price: "70.00",
    quantity: 1,
    imageUrl: CantaloupeIMG,
  },
  {
    id: 41,
    name: "Durian",
    description: "Strong-flavored and creamy durians.",
    price: "200.00",
    quantity: 1,
    imageUrl: DurianIMG,
  },
  {
    id: 42,
    name: "Persimmon",
    description: "Sweet and smooth persimmons.",
    price: "90.00",
    quantity: 1,
    imageUrl: PersimmonIMG,
  },
  {
    id: 43,
    name: "Gooseberry",
    description: "Tangy and flavorful gooseberries.",
    price: "50.00",
    quantity: 1,
    imageUrl: GooseberryIMG,
  },
  {
    id: 44,
    name: "Clementine",
    description: "Sweet and juicy clementines.",
    price: "55.00",
    quantity: 1,
    imageUrl: ClementineIMG,
  },
  {
    id: 45,
    name: "Quince",
    description: "Sweet and fragrant quinces.",
    price: "140.00",
    quantity: 1,
    imageUrl: QuinceIMG,
  },
  {
    id: 46,
    name: "Loquat",
    description: "Sweet and juicy loquats.",
    price: "120.00",
    quantity: 1,
    imageUrl: LoquatIMG,
  },
  {
    id: 47,
    name: "Soursop",
    description: "Tangy and creamy soursops.",
    price: "145.00",
    quantity: 1,
    imageUrl: SoursopIMG,
  },
  {
    id: 48,
    name: "Sapodilla",
    description: "Sweet and brown sapodillas.",
    price: "85.00",
    quantity: 1,
    imageUrl: SapodillaIMG,
  },
  {
    id: 49,
    name: "Kumquat",
    description: "Sweet and sour kumquats.",
    price: "150.00",
    quantity: 1,
    imageUrl: KumquatIMG,
  },
  {
    id: 50,
    name: "Feijoa",
    description: "Sweet and aromatic feijoas.",
    price: "130.00",
    quantity: 1,
    imageUrl: FeijoaIMG,
  },
];

export default fruits;
