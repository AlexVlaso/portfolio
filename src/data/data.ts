import watch from '../assets/img/projects/watch.png';
import picture from '../assets/img/projects/picture.png';
import window from '../assets/img/projects/window.png';
import forkify from '../assets/img/projects/forkify.png';
import uber from '../assets/img/projects/uber.png';
import bringitup from '../assets/img/projects//bringidup.png';
import shop1 from '../assets/img/projects/shop_1.png';
import shop2 from '../assets/img/projects/shop_2.png';
import shop3 from '../assets/img/projects/shop_3.png';
import shop4 from '../assets/img/projects/shop_4.png';
import marvel1 from '../assets/img/projects/marvel_1.png';
import marvel2 from '../assets/img/projects/marvel_2.png';
import marvel3 from '../assets/img/projects/marvel_3.png';
import marvel4 from '../assets/img/projects/marvel_4.png';
import { IconPathMap } from '../libs/maps/icon-path.map';

const data = {
  small: [
    {
      id: 1,
      title: 'Forkify',
      desc: `Forkify app to search recipes by name or ingredients. On the recipe page you can find cooking times and cooking videos, and you can also calculate the amount of ingredients by number of servings. You can save your favorite recipes.`,
      img: [forkify],
      github: 'https://github.com/AlexVlaso/forkify-app',
      site: 'https://forkify-vlas.netlify.app',
    },
    {
      id: 2,
      title: 'Picture.art',
      desc: `Picture.art is a business card site for a picture store. On the site you can choose the type of picture, upload your photo for the picture, portfolio with examples of works, choose the size of the picture and read reviews of customers`,
      img: [picture],
      github: 'https://github.com/AlexVlaso/paintings-shop-website',
      site: 'https://picture-vlas.netlify.app',
    },
    {
      id: 3,
      title: 'BringItUp',
      desc: `BringItUp is an educational platform made in the form of a multi-line website thanks to the structure of the website with tabs. On the site you can find information about the training and modules, feedback from students, benefits.`,
      img: [bringitup],
      github: 'https://github.com/AlexVlaso/bringitup-website',
      site: 'https://bringitup-vlas.netlify.app',
    },
    {
      id: 4,
      title: 'RunStart',
      desc: `RunStart store sports watches and fitness trackers. Official representative of Garmin, Polar, Suunto brands. On the site you can find a section with benefits, a form for quick ordering, a catalog with trackers, customer reviews and a map`,
      img: [watch],
      github: 'https://github.com/AlexVlaso/smart-watch-website',
      site: 'https://watch-vlas.netlify.app',
    },
    {
      id: 5,
      title: 'IRVAS',
      desc: `Site business card IRVAS. Window store where you can choose types of window and balcony finishing, calculate the cost of materials and work, portfolio with examples of work, limited time promotions, map with addresses.`,
      img: [window],
      github: 'https://github.com/AlexVlaso/windows-shop-website',
      site: 'https://window-vlas.netlify.app',
    },
    {
      id: 6,
      title: 'UberX',
      desc: `Uber's business card site with information for riders who want to join the company. The site lists the benefits of working with the company, information about the mobile app, and requirements for co-drivers with their own vehicles.`,
      img: [uber],
      github: 'https://github.com/AlexVlaso/uberX',
      site: 'https://uber-vlas.netlify.app/',
    },
  ],
  middle: [
    {
      id: 1,
      title: 'EShop App',
      desc: `This project was made with Angular on the frontend and Spring on the backend. This application has options to search by product name and sort by category. Each chef has its own details page where you can read the description of availability and other details. You can add items to corsina or izpran and make a purchase with Stripe payment system. Registered users can view the history of their purchases. Registration is implemented using OktaAuth.`,
      img: [shop1, shop2, shop3, shop4],
      techStack: [
        { path: IconPathMap.angular, desc: 'Angular' },
        { path: IconPathMap.html, desc: 'Html' },
        { path: IconPathMap.sass, desc: 'Sass' },
        { path: IconPathMap.java, desc: 'Java' },
        { path: IconPathMap.spring, desc: 'Spring' },
        { path: IconPathMap.postgresql, desc: 'PostgreSQL' },
      ],
      github: 'https://github.com/AlexVlaso/shop-app-frontend',
    },
    {
      id: 2,
      title: 'Marvel Info Portal',
      desc: `This project was made on React and using Marvel API. The main idea is to collect all the information about all the heroes of the Marvel universe and the comics where these heroes appeared. On this site the user can familiarize himself with information about random heroes or choose a specific one from a list. It is also possible to familiarize with the list of comics, read the description, the number of lines and the current price of the comic book.`,
      img: [marvel1, marvel2, marvel3, marvel4],
      techStack: [
        { path: IconPathMap.react, desc: 'React' },
        { path: IconPathMap.js, desc: 'Javascript' },
        { path: IconPathMap.html, desc: 'Html' },
        { path: IconPathMap.sass, desc: 'Sass' },
      ],
      github: 'https://github.com/AlexVlaso/marvel-app',
      site: 'https://marvel-vlas.netlify.app/',
    },
  ],
};

export { data };
