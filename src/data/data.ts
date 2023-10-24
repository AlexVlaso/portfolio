import { type Project } from '../libs/types/types';
import watch from '../assets/img/projects/watch.png';
import picture from '../assets/img/projects/picture.png';
import window from '../assets/img/projects/window.png';
import forkify from '../assets/img/projects/forkify.png';
import uber from '../assets/img/projects/uber.png';
import bringitup from '../assets/img/projects//bringidup.png';

const data: Project[] = [
  {
    id: 1,
    title: 'Forkify',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere reiciendis nisi, maxime aut corporis deserunt
    deleniti doloribus exercitationem accusantium possimus sint distinctio laborum minima officiis commodi iusto
    nulla, nostrum`,
    img: forkify,
    github: 'https://github.com/AlexVlaso/forkify-app',
    site: 'https://forkify-vlas.netlify.app',
  },
  {
    id: 2,
    title: 'Picture.art',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere reiciendis nisi, maxime aut corporis deserunt
    deleniti doloribus exercitationem accusantium possimus sint distinctio laborum minima officiis commodi iusto
    nulla, nostrum`,
    img: picture,
    github: 'https://github.com/AlexVlaso/paintings-shop-website',
    site: 'https://picture-vlas.netlify.app',
  },
  {
    id: 3,
    title: 'BringItUp',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere reiciendis nisi, maxime aut corporis deserunt
    deleniti doloribus exercitationem accusantium possimus sint distinctio laborum minima officiis commodi iusto
    nulla, nostrum`,
    img: bringitup,
    github: 'https://github.com/AlexVlaso/bringitup-website',
    site: 'https://bringitup-vlas.netlify.app',
  },
  {
    id: 4,
    title: 'RunStart',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere reiciendis nisi, maxime aut corporis deserunt
    deleniti doloribus exercitationem accusantium possimus sint distinctio laborum minima officiis commodi iusto
    nulla, nostrum`,
    img: watch,
    github: 'https://github.com/AlexVlaso/smart-watch-website',
    site: 'https://watch-vlas.netlify.app',
  },
  {
    id: 5,
    title: 'IRVAS',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere reiciendis nisi, maxime aut corporis deserunt
    deleniti doloribus exercitationem accusantium possimus sint distinctio laborum minima officiis commodi iusto
    nulla, nostrum`,
    img: window,
    github: 'https://github.com/AlexVlaso/windows-shop-website',
    site: 'https://window-vlas.netlify.app',
  },
  {
    id: 6,
    title: 'UberX',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere reiciendis nisi, maxime aut corporis deserunt
    deleniti doloribus exercitationem accusantium possimus sint distinctio laborum minima officiis commodi iusto
    nulla, nostrum`,
    img: uber,
    github: 'https://github.com/AlexVlaso/uberX',
    site: 'https://uber-vlas.netlify.app/',
  },
];

export { data };
