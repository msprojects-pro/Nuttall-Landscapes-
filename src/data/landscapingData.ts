import { Benefit, GalleryProject, ServiceItem } from '../types';

// Import images directly so Vite processes, hashes, and includes them in the production bundle (Cloudflare Pages, Vercel, etc.)
import heroImg from '../assets/images/hero_garden_transformation_1794260296371.jpg';
import resinDrivewayImg from '../assets/images/service_resin_driveway_1794260298091.jpg';
import porcelainPatioImg from '../assets/images/service_porcelain_patio_1794260297716.jpg';
import artificialGrassImg from '../assets/images/service_artificial_grass_1794260298287.jpg';
import aboutGardenImg from '../assets/images/about_landscaped_garden_1794260299116.jpg';
import realTurfingImg from '../assets/images/service_real_turfing_1794260314667.jpg';
import fencingWallsImg from '../assets/images/service_fencing_walls_1794260315014.jpg';
import gardenMakeoverImg from '../assets/images/service_garden_makeover_1794260315296.jpg';

export const BUSINESS_INFO = {
  name: 'Nuttall Landscapes',
  tagline: 'Luxury Garden Transformations & Resin Driveway Specialists',
  location: 'Heywood, Greater Manchester, United Kingdom',
  areaServed: 'Heywood and surrounding areas across Greater Manchester',
  phone: '+44 7523 305486',
  phoneDisplay: '07523 305486',
  phoneTel: '+447523305486',
  email: 'info@nuttalllandscapes.co.uk',
  whatsappUrl: 'https://wa.me/447523305486?text=Hi%20Nuttall%20Landscapes,%20I%20would%20like%20to%20enquire%20about%20a%20project.',
  colors: {
    primaryGreen: '#24CB33',
    deepBlack: '#101211',
    charcoal: '#242725',
    graphiteGrey: '#4D4D4D',
    offWhite: '#F5F7F4',
    mutedGreen: '#A5D6A7',
  },
};

export const IMAGES = {
  hero: heroImg,
  resinDriveway: resinDrivewayImg,
  porcelainPatio: porcelainPatioImg,
  artificialGrass: artificialGrassImg,
  aboutGarden: aboutGardenImg,
  realTurfing: realTurfingImg,
  fencingWalls: fencingWallsImg,
  gardenMakeover: gardenMakeoverImg,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'garden-transformations',
    title: 'Garden Transformations',
    shortDesc: 'Complete garden makeovers designed to turn ordinary outdoor spaces into beautiful, functional gardens.',
    longDesc: 'From tired lawns and disjointed layouts to unified outdoor sanctuaries. We manage every phase of full garden renovations—including excavation, ground preparation, split-level retaining walls, contemporary porcelain tiling, and bespoke architectural planting beds.',
    image: IMAGES.gardenMakeover,
    slug: 'garden-transformations',
    features: ['Full 360° makeovers', 'Split-level living spaces', 'Integrated seating & steps', 'Architectural lighting prep'],
  },
  {
    id: 'resin-driveways',
    title: 'Resin Driveways',
    shortDesc: 'Modern, attractive and durable resin driveway solutions that enhance your property\'s exterior.',
    longDesc: 'Transform your home\'s kerb appeal with seamless, UV-stable resin bound surfacing. Highly permeable (SUDS compliant) to eliminate standing water, crack-resistant, and installed with laser-straight block stone borders.',
    image: IMAGES.resinDriveway,
    slug: 'resin-driveways',
    features: ['Permeable & SUDS compliant', 'UV-stable aggregate blends', 'Contrasting granite edging', 'Weed & oil resistant'],
  },
  {
    id: 'patios-paving',
    title: 'Patios & Paving',
    shortDesc: 'Beautifully finished patios and paving to create the perfect outdoor space for relaxing and entertaining.',
    longDesc: 'Precision-laid exterior porcelain, Indian sandstone, and natural stone paving. Laid on full mortar beds with slurry primer bonding for permanent stability, impeccable drainage slopes, and flush indoor-outdoor thresholds.',
    image: IMAGES.porcelainPatio,
    slug: 'patios-paving',
    features: ['Large-format porcelain slabs', 'Full mortar bed installation', 'Flush door threshold transitions', 'Weatherproof jointing'],
  },
  {
    id: 'artificial-grass',
    title: 'Artificial Grass',
    shortDesc: 'Low-maintenance artificial grass for a clean, green garden throughout the year.',
    longDesc: 'Enjoy an immaculate, pet-friendly, mud-free lawn 365 days a year. We construct deep crushed granite aggregate sub-bases with heavy-duty weed membranes and child-safe high-density 38mm-40mm realistic pile turf.',
    image: IMAGES.artificialGrass,
    slug: 'artificial-grass',
    features: ['Child & pet friendly', 'Multi-layer aggregate sub-base', 'Zero mud, zero mowing', 'Superior UV colour retention'],
  },
  {
    id: 'real-turfing',
    title: 'Real Turfing',
    shortDesc: 'Transform your outdoor space with professionally installed natural turf.',
    longDesc: 'Nothing matches the aroma and tactile luxury of pristine real turf. We excavate weed-infested soil, rotary till, enrich with organic root-zone loam, laser-level the ground, and lay freshly harvested stadium-grade turf.',
    image: IMAGES.realTurfing,
    slug: 'real-turfing',
    features: ['Cultivated premium grade turf', 'Soil enrichment & rotary levelling', 'Clean precision lawn edging', 'Fast establishment care guide'],
  },
  {
    id: 'fencing-garden-walls',
    title: 'Fencing & Garden Walls',
    shortDesc: 'Quality fencing and garden wall installations to improve privacy, structure and appearance.',
    longDesc: 'Define boundaries and create architectural depth with horizontal slatted cedar/composite acoustic fencing, heavy-duty pressure-treated feather edge, smooth rendered retaining walls, and raised stone planter beds.',
    image: IMAGES.fencingWalls,
    slug: 'fencing-garden-walls',
    features: ['Contemporary slatted panels', 'Concrete posts & gravel boards', 'Smooth rendered retaining walls', 'Built for British weather'],
  },
];

export const BENEFITS: Benefit[] = [
  {
    number: '01',
    title: 'Quality Workmanship',
    description: 'Careful attention to detail and quality finishes across every project.',
    iconName: 'ShieldCheck',
  },
  {
    number: '02',
    title: 'Tailored Transformations',
    description: 'Outdoor spaces designed around your property and requirements.',
    iconName: 'Compass',
  },
  {
    number: '03',
    title: 'Professional Approach',
    description: 'A straightforward approach from initial enquiry to completed project.',
    iconName: 'CheckCircle2',
  },
  {
    number: '04',
    title: 'Attention to Detail',
    description: 'We believe the little details make the biggest difference.',
    iconName: 'Sparkles',
  },
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'proj-1',
    title: 'Luxury Porcelain Terrace & Sunken Lounge',
    category: 'patios',
    categoryLabel: 'Patios & Paving',
    image: IMAGES.porcelainPatio,
    location: 'Heywood',
    description: 'Large-format Italian porcelain paving with rendered raised planter walls, outdoor dining suite and seamless lawn edge transition.',
    features: ['Grey porcelain slabs', 'Integrated planter lighting', 'Flush lawn threshold'],
  },
  {
    id: 'proj-2',
    title: 'Executive Amber Quartz Resin Driveway',
    category: 'driveways',
    categoryLabel: 'Resin Driveways',
    image: IMAGES.resinDriveway,
    location: 'Greater Manchester',
    description: 'Permeable resin bound driveway in golden quartz aggregate with precision charcoal granite block edging and curved turning island.',
    features: ['Permeable SUDS compliant', 'Granite kerb stone border', 'Seamless finish'],
  },
  {
    id: 'proj-3',
    title: 'Architectural Garden Makeover with Kitchen',
    category: 'transformations',
    categoryLabel: 'Garden Transformations',
    image: IMAGES.gardenMakeover,
    location: 'Greater Manchester',
    description: 'Complete multi-tier outdoor transformation with bespoke pergola, built-in BBQ kitchen, floating bench seating, and step lights.',
    features: ['Full split-level layout', 'Outdoor kitchen island', 'Warm step illumination'],
  },
  {
    id: 'proj-4',
    title: 'Pristine Low-Maintenance Artificial Lawn',
    category: 'lawns',
    categoryLabel: 'Artificial Grass',
    image: IMAGES.artificialGrass,
    location: 'Heywood',
    description: 'Curved stone-edged luxury artificial lawn surrounded by Scottish river cobbles and drought-tolerant perennial borders.',
    features: ['38mm density pile', 'Granite sub-base', 'Child & dog friendly'],
  },
  {
    id: 'proj-5',
    title: 'Tiered Garden with Natural Turf & Stone Wall',
    category: 'transformations',
    categoryLabel: 'Garden Transformations',
    image: IMAGES.aboutGarden,
    location: 'Greater Manchester',
    description: 'Split-level family garden with dry-stone retaining walls, freshly laid natural turf, raised slate fire pit patio, and horizontal slatted boundary fence.',
    features: ['Natural dry-stone wall', 'Real turf lawn', 'Slatted cedar privacy fence'],
  },
  {
    id: 'proj-6',
    title: 'Stadium-Grade Natural Turf & Herbaceous Borders',
    category: 'lawns',
    categoryLabel: 'Real Turfing',
    image: IMAGES.realTurfing,
    location: 'Heywood & Surrounding Areas',
    description: 'Roller-striped premium cultivated natural turf laid over enriched rootzone topsoil with contoured timber borders.',
    features: ['Laser-levelled base', 'Deep roller stripes', 'Dark mulch perennial borders'],
  },
  {
    id: 'proj-7',
    title: 'Slatted Privacy Fencing & Rendered Planters',
    category: 'fencing',
    categoryLabel: 'Fencing & Walls',
    image: IMAGES.fencingWalls,
    location: 'Greater Manchester',
    description: 'Modern horizontal slatted timber fencing paired with smooth off-white rendered retaining planter walls and up-down architectural lighting.',
    features: ['Horizontal slatted timber', 'Smooth rendered finish', 'Exterior spot fixtures'],
  },
  {
    id: 'proj-8',
    title: 'Complete Modern Garden & Patio Transformation',
    category: 'transformations',
    categoryLabel: 'Garden Transformations',
    image: IMAGES.hero,
    location: 'Heywood',
    description: 'Dusk view of complete garden makeover featuring dark privacy fencing, flush porcelain patio, curved lawn and discreet LED perimeter glow.',
    features: ['Total garden overhaul', 'Integrated LED lighting', 'Porcelain patio & fresh turf'],
  },
];
