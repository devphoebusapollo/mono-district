export type PortfolioCategory =
  | 'Food & Beverage'
  | 'Beauty & Wellness'
  | 'Real Estate'
  | 'Business & Retail';

export interface PortfolioItem {
  id: string;
  index: string;
  title: string;
  category: PortfolioCategory;
  discipline: string;
  imageUrl: string;
}

export const PORTFOLIO_CATEGORIES: readonly ('All' | PortfolioCategory)[] = [
  'All',
  'Food & Beverage',
  'Beauty & Wellness',
  'Real Estate',
  'Business & Retail',
] as const;

export const PORTFOLIO_ITEMS: readonly PortfolioItem[] = [
  {
    id: 'stevi-bs-thirsty-thursday',
    index: '01',
    title: "Thirsty Thursday at Stevi B's",
    category: 'Food & Beverage',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131191/Thirsty_Thursday_at_SteviB_s_Pizza_Buffet.png',
  },
  {
    id: 'sunnutrient-sleep-cream',
    index: '02',
    title: 'SunNutrient Radiant Sleep',
    category: 'Beauty & Wellness',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131191/SunNutrient_Radiant_Sleep_Night_Cream.png',
  },
  {
    id: 'self-funding-property-portfolio',
    index: '03',
    title: 'Self-Funding Property Portfolio',
    category: 'Real Estate',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131190/Self-Funding_Property_Portfolio_Benefits.png',
  },
  {
    id: 'jordan-21-sneaker-poster',
    index: '04',
    title: 'Limited Edition Jordan 21',
    category: 'Business & Retail',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131189/Limited_Edition_Jordan_21_Sneaker_Poster.png',
  },
  {
    id: 'luxury-microchanneling-offer',
    index: '05',
    title: 'Luxury Microchanneling Offer',
    category: 'Beauty & Wellness',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131189/Luxury_Microchanneling_Special_Offer.png',
  },
  {
    id: 'goggles-pizza-sip',
    index: '06',
    title: 'Goggles Pizza & Refreshing Sip',
    category: 'Food & Beverage',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131189/Goggles_Pizza_and_a_Refreshing_Sip.png',
  },
  {
    id: 'what-is-a-totaled-car',
    index: '07',
    title: 'What Is a Totaled Car?',
    category: 'Business & Retail',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131191/What_Is_a_Totaled_Car_.png',
  },
  {
    id: 'property-appraisal-graphic',
    index: '08',
    title: 'Property Appraisal Graphic',
    category: 'Real Estate',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131190/Property_Appraisal_House_Model_Graphic.png',
  },
  {
    id: 'new-year-weight-loss-journey',
    index: '09',
    title: 'New Year Weight Loss Journey',
    category: 'Beauty & Wellness',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131191/New_Year_New_Weight_Loss_Journey.png',
  },
  {
    id: 'monopoly-mastermind-membership',
    index: '10',
    title: 'Monopoly Mastermind Membership',
    category: 'Business & Retail',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131190/Monopoly_Mastermind_Trading_Membership_Poster.png',
  },
  {
    id: 'national-anti-boredom-month',
    index: '11',
    title: 'National Anti-Boredom Month',
    category: 'Business & Retail',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131190/National_Anti-Boredom_Month_at_Destin_Chamber.png',
  },
  {
    id: 'marketing-monday-illustration',
    index: '12',
    title: 'Marketing Monday Feature',
    category: 'Business & Retail',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131190/Marketing_Monday_Team_Illustration.png',
  },
  {
    id: 'grow-with-us-academy',
    index: '13',
    title: 'Grow With Us Academy',
    category: 'Business & Retail',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131189/Grow_With_Us_Academy_Poster.png',
  },
  {
    id: 'laser-genesis-skincare',
    index: '14',
    title: 'Laser Genesis Skincare',
    category: 'Beauty & Wellness',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131189/Laser_Genesis_Skincare_Promotion.png',
  },
  {
    id: 'generational-rental-living',
    index: '15',
    title: 'Generational Rental Living Guide',
    category: 'Real Estate',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131189/Generational_Rental_Living_Guide.png',
  },
  {
    id: 'childhood-hobbies',
    index: '16',
    title: 'Explore Childhood Hobbies',
    category: 'Beauty & Wellness',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131188/Five_Reasons_to_Explore_Childhood_Hobbies.png',
  },
  {
    id: 'deck-fence-washing',
    index: '17',
    title: 'Deck & Fence Washing Services',
    category: 'Real Estate',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131188/Deck_Fence_Washing_Services.png',
  },
  {
    id: 'bogo-wraps',
    index: '18',
    title: 'Buy One Get One Free Wraps',
    category: 'Food & Beverage',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131188/Buy_One_Get_One_Free_Wraps.png',
  },
  {
    id: 'high-intensity-fitness',
    index: '19',
    title: 'High-Intensity Fitness Poster',
    category: 'Beauty & Wellness',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131188/High-Intensity_Fitness_Workout_Poster.png',
  },
  {
    id: 'apple-crumble-pancake-latte',
    index: '20',
    title: 'Apple Crumble Pancake Latte',
    category: 'Food & Beverage',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131188/Cozy_Apple_Crumble_Pancake_Latte_Offer.png',
  },
  {
    id: 'higdon-group-training',
    index: '21',
    title: 'Higdon Group Training Ad',
    category: 'Business & Retail',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131188/Higdon_Group_Free_Training_Ad.png',
  },
  {
    id: 'white-heron-rental-listing',
    index: '22',
    title: '79 White Heron Drive Listing',
    category: 'Real Estate',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131187/79_White_Heron_Drive_Rental_Listing.png',
  },
  {
    id: 'hair-confidence-special-offer',
    index: '23',
    title: 'Hair Confidence Special Offer',
    category: 'Beauty & Wellness',
    discipline: 'Social Media Post',
    imageUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131187/Hair_Confidence_Special_Offer.png',
  },
] as const;
