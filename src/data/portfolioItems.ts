export interface PortfolioItem {
  id: string;
  title: string;
  alt: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
  posterUrl?: string;
}

const videoPoster = (mp4Url: string) => mp4Url.replace(/\.mp4$/i, '.jpg');

export const GRAPHIC_ITEMS: readonly PortfolioItem[] = [
  {
    id: 'stevi-bs-thirsty-thursday',
    title: "Thirsty Thursday at Stevi B's",
    alt: "Thirsty Thursday drink promotion graphic for Stevi B's Pizza Buffet",
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131191/Thirsty_Thursday_at_SteviB_s_Pizza_Buffet.png',
  },
  {
    id: 'sunnutrient-sleep-cream',
    title: 'SunNutrient Radiant Sleep',
    alt: 'Product spotlight graphic for SunNutrient Radiant Sleep Night Cream',
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131191/SunNutrient_Radiant_Sleep_Night_Cream.png',
  },
  {
    id: 'self-funding-property-portfolio',
    title: 'Self-Funding Property Portfolio',
    alt: 'Real estate infographic explaining self-funding property portfolio benefits',
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131190/Self-Funding_Property_Portfolio_Benefits.png',
  },
  {
    id: 'jordan-21-sneaker-poster',
    title: 'Limited Edition Jordan 21',
    alt: 'Promotional poster design for limited edition Jordan 21 sneakers',
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131189/Limited_Edition_Jordan_21_Sneaker_Poster.png',
  },
  {
    id: 'luxury-microchanneling-offer',
    title: 'Luxury Microchanneling Offer',
    alt: 'Medspa special offer social graphic for luxury microchanneling treatment',
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131189/Luxury_Microchanneling_Special_Offer.png',
  },
  {
    id: 'goggles-pizza-sip',
    title: 'Goggles Pizza & Refreshing Sip',
    alt: 'Food and beverage social media promo graphic for Goggles Pizza',
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131189/Goggles_Pizza_and_a_Refreshing_Sip.png',
  },
  {
    id: 'what-is-a-totaled-car',
    title: 'What Is a Totaled Car?',
    alt: 'Educational auto insurance social graphic explaining what counts as a totaled car',
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131191/What_Is_a_Totaled_Car_.png',
  },
  {
    id: 'property-appraisal-graphic',
    title: 'Property Appraisal Graphic',
    alt: 'Real estate house model social graphic for property appraisal services',
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131190/Property_Appraisal_House_Model_Graphic.png',
  },
  {
    id: 'new-year-weight-loss-journey',
    title: 'New Year Weight Loss Journey',
    alt: 'Fitness and wellness campaign graphic for a New Year weight loss program',
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131191/New_Year_New_Weight_Loss_Journey.png',
  },
  {
    id: 'monopoly-mastermind-membership',
    title: 'Monopoly Mastermind Membership',
    alt: 'Membership promotional poster for Monopoly Mastermind trading community',
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131190/Monopoly_Mastermind_Trading_Membership_Poster.png',
  },
  {
    id: 'national-anti-boredom-month',
    title: 'National Anti-Boredom Month',
    alt: 'Community event social graphic for National Anti-Boredom Month at Destin Chamber',
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131190/National_Anti-Boredom_Month_at_Destin_Chamber.png',
  },
  {
    id: 'marketing-monday-illustration',
    title: 'Marketing Monday Feature',
    alt: 'Illustrated Marketing Monday team spotlight social media graphic',
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131190/Marketing_Monday_Team_Illustration.png',
  },
  {
    id: 'grow-with-us-academy',
    title: 'Grow With Us Academy',
    alt: 'Educational enrollment poster design for Grow With Us Academy',
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131189/Grow_With_Us_Academy_Poster.png',
  },
  {
    id: 'laser-genesis-skincare',
    title: 'Laser Genesis Skincare',
    alt: 'Skincare clinic promotional graphic for Laser Genesis facial treatment',
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131189/Laser_Genesis_Skincare_Promotion.png',
  },
  {
    id: 'generational-rental-living',
    title: 'Generational Rental Living Guide',
    alt: 'Informational real estate graphic highlighting generational rental living',
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131189/Generational_Rental_Living_Guide.png',
  },
  {
    id: 'childhood-hobbies',
    title: 'Explore Childhood Hobbies',
    alt: 'Lifestyle graphic listing five reasons to explore childhood hobbies',
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131188/Five_Reasons_to_Explore_Childhood_Hobbies.png',
  },
  {
    id: 'deck-fence-washing',
    title: 'Deck & Fence Washing Services',
    alt: 'Home exterior service promo graphic for deck and fence pressure washing',
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131188/Deck_Fence_Washing_Services.png',
  },
  {
    id: 'bogo-wraps',
    title: 'Buy One Get One Free Wraps',
    alt: 'Restaurant buy-one-get-one-free wraps promotional social graphic',
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131188/Buy_One_Get_One_Free_Wraps.png',
  },
  {
    id: 'high-intensity-fitness',
    title: 'High-Intensity Fitness Poster',
    alt: 'Bold typography workout poster for high-intensity fitness training',
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131188/High-Intensity_Fitness_Workout_Poster.png',
  },
  {
    id: 'apple-crumble-pancake-latte',
    title: 'Apple Crumble Pancake Latte',
    alt: 'Seasonal cafe menu social graphic for apple crumble pancake latte special',
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131188/Cozy_Apple_Crumble_Pancake_Latte_Offer.png',
  },
  {
    id: 'higdon-group-training',
    title: 'Higdon Group Training Ad',
    alt: 'Lead-generation social ad graphic for Higdon Group free training event',
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131188/Higdon_Group_Free_Training_Ad.png',
  },
  {
    id: 'white-heron-rental-listing',
    title: '79 White Heron Drive Listing',
    alt: 'Real estate property listing graphic for 79 White Heron Drive rental',
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131187/79_White_Heron_Drive_Rental_Listing.png',
  },
  {
    id: 'hair-confidence-special-offer',
    title: 'Hair Confidence Special Offer',
    alt: 'Hair salon promotional social graphic for Hair Confidence special offer',
    mediaType: 'image',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/image/upload/v1795131187/Hair_Confidence_Special_Offer.png',
  },
] as const;

export const VIDEO_ITEMS: readonly PortfolioItem[] = [
  {
    id: 'beently-20s-video-ad',
    title: 'Beently 20s Video Ad',
    alt: '20-second vertical product video ad edited for Beently',
    mediaType: 'video',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795470835/20secs_-_Beently_Reel_-_V2.mp4',
    posterUrl: videoPoster(
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795470835/20secs_-_Beently_Reel_-_V2.mp4'
    ),
  },
  {
    id: 'sapora-bts-reel',
    title: 'Sapora Shoot Behind the Scenes',
    alt: 'Behind-the-scenes brand shoot Instagram Reel edited for Sapora',
    mediaType: 'video',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795470801/Behind_the_scenes_of_a_project_we_worked_on_with_sapora_Everything_about_the_shoot_was_just_per.mp4',
    posterUrl: videoPoster(
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795470801/Behind_the_scenes_of_a_project_we_worked_on_with_sapora_Everything_about_the_shoot_was_just_per.mp4'
    ),
  },
  {
    id: 'dubai-morning-coffee-reel',
    title: 'Dubai Morning Coffee Reel',
    alt: 'Lifestyle morning coffee Instagram Reel edited for a Dubai content creator',
    mediaType: 'video',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795470675/Start_your_day_with_your_fave_Coffee_coffeelover_dubai_contentcreator.mp4',
    posterUrl: videoPoster(
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795470675/Start_your_day_with_your_fave_Coffee_coffeelover_dubai_contentcreator.mp4'
    ),
  },
  {
    id: 'peaceful-scripture-reel',
    title: 'Peaceful Scripture Reflections',
    alt: 'Minimalist typography daily inspiration short-form vertical Reel',
    mediaType: 'video',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795471758/From_Klickpin.com-_Peaceful_scripture_reflections_and_clever_inspiration_for_daily_inspiration_with_grace_and_hope-pin-id-548524429634986849.mp4',
    posterUrl: videoPoster(
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795471758/From_Klickpin.com-_Peaceful_scripture_reflections_and_clever_inspiration_for_daily_inspiration_with_grace_and_hope-pin-id-548524429634986849.mp4'
    ),
  },
  {
    id: 'modern-morning-routine-reel',
    title: 'Intentional Morning Routine',
    alt: 'Aesthetic morning routine lifestyle vertical video Reel',
    mediaType: 'video',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795471551/From_Klickpin.com-_Modern_productive_morning_routine_ideas_that_make_everyday_moments_look_more_intentional_memorable_and_beautifully_styled_for_w.mp4',
    posterUrl: videoPoster(
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795471551/From_Klickpin.com-_Modern_productive_morning_routine_ideas_that_make_everyday_moments_look_more_intentional_memorable_and_beautifully_styled_for_w.mp4'
    ),
  },
  {
    id: 'unique-travel-packing-reel',
    title: '24 Travel Packing Tips',
    alt: 'Fast-paced 24 travel packing tips vertical video edit',
    mediaType: 'video',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795471385/From_Klickpin.com-_Explore_these_24_Unique_travel_packing_tips_that_are_trending_right_now_and_still_timeless_enough_to_save_for_later_for_beginne.mp4',
    posterUrl: videoPoster(
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795471385/From_Klickpin.com-_Explore_these_24_Unique_travel_packing_tips_that_are_trending_right_now_and_still_timeless_enough_to_save_for_later_for_beginne.mp4'
    ),
  },
  {
    id: 'luxury-travel-packing-reel',
    title: 'Luxury Travel Packing Guide',
    alt: 'Polished luxury travel packing guide short-form Reel',
    mediaType: 'video',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795471225/From_Klickpin.com-_23_Luxury_travel_packing_tips_that_help_you_create_a_polished_look_with_very_simple_and_affordable_details_for_anyone_who_wants.mp4',
    posterUrl: videoPoster(
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795471225/From_Klickpin.com-_23_Luxury_travel_packing_tips_that_help_you_create_a_polished_look_with_very_simple_and_affordable_details_for_anyone_who_wants.mp4'
    ),
  },
  {
    id: 'fresh-manicure-ideas-reel',
    title: 'Fresh Manicure Ideas',
    alt: 'Beauty and nail care inspiration vertical video Reel',
    mediaType: 'video',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795471136/From_Klickpin.com-_Pin_this_guide_to_beautiful_fresh_manicure_ideas_that_help_you_get_the_look_without_the_stress_with_smart_steps_cute_details_an.mp4',
    posterUrl: videoPoster(
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795471136/From_Klickpin.com-_Pin_this_guide_to_beautiful_fresh_manicure_ideas_that_help_you_get_the_look_without_the_stress_with_smart_steps_cute_details_an.mp4'
    ),
  },
  {
    id: 'clean-girl-makeup-reel',
    title: 'Clean Girl Makeup Edit',
    alt: 'Step-by-step clean makeup tutorial vertical video Reel',
    mediaType: 'video',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795471059/From_Klickpin.com-_Clean_girl_makeup_ideas_that_instantly_upgrade_your_space_style_or_celebration_without_much_effort_for_beginners_who_want_impre.mp4',
    posterUrl: videoPoster(
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795471059/From_Klickpin.com-_Clean_girl_makeup_ideas_that_instantly_upgrade_your_space_style_or_celebration_without_much_effort_for_beginners_who_want_impre.mp4'
    ),
  },
  {
    id: 'salty-shell-style-1-reel',
    title: 'Salty Shell-Toned Style I',
    alt: 'Coastal fashion lookbook Reel in shell-toned aesthetic',
    mediaType: 'video',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795470927/From_Klickpin.com-_Salty_shell-toned_style_ideas_made_for_cozy_stylish_inspiration_with_timeless_style_to_brighten_you-pin-id-1086986060079822211.mp4',
    posterUrl: videoPoster(
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795470927/From_Klickpin.com-_Salty_shell-toned_style_ideas_made_for_cozy_stylish_inspiration_with_timeless_style_to_brighten_you-pin-id-1086986060079822211.mp4'
    ),
  },
  {
    id: 'salty-shell-style-2-reel',
    title: 'Salty Shell-Toned Style II',
    alt: 'Warm neutral styling inspiration short-form vertical Reel',
    mediaType: 'video',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795470673/From_Klickpin.com-_Salty_shell-toned_style_ideas_made_for_cozy_stylish_inspiration_with_timeless_style_to_brighten_you-pin-id-686869380717716614.mp4',
    posterUrl: videoPoster(
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795470673/From_Klickpin.com-_Salty_shell-toned_style_ideas_made_for_cozy_stylish_inspiration_with_timeless_style_to_brighten_you-pin-id-686869380717716614.mp4'
    ),
  },
  {
    id: 'salty-shell-style-3-reel',
    title: 'Salty Shell-Toned Style III',
    alt: 'Cozy editorial outfit ideas vertical video Reel',
    mediaType: 'video',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795470668/From_Klickpin.com-_Salty_shell-toned_style_ideas_made_for_cozy_stylish_inspiration_with_timeless_style_to_brighten_you-pin-id-692569248990846727.mp4',
    posterUrl: videoPoster(
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795470668/From_Klickpin.com-_Salty_shell-toned_style_ideas_made_for_cozy_stylish_inspiration_with_timeless_style_to_brighten_you-pin-id-692569248990846727.mp4'
    ),
  },
  {
    id: 'journaling-prompts-reel',
    title: '34 Journaling Prompts',
    alt: 'Text-overlay 34 journaling prompts vertical social Reel',
    mediaType: 'video',
    mediaUrl:
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795470663/From_Klickpin.com-_34_Journaling_Prompts_That_Actually_Work-pin-id-877920521130797010.mp4',
    posterUrl: videoPoster(
      'https://res.cloudinary.com/a8efvgn2/video/upload/v1795470663/From_Klickpin.com-_34_Journaling_Prompts_That_Actually_Work-pin-id-877920521130797010.mp4'
    ),
  },
] as const;

export const PORTFOLIO_ITEMS: readonly PortfolioItem[] = [
  ...GRAPHIC_ITEMS,
  ...VIDEO_ITEMS,
] as const;
