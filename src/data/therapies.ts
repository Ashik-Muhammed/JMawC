export interface Treatment {
  id: string;
  name: string;
  sanskritName: string;
  tagline: string;
  category: 'Detox' | 'Mind & Sleep' | 'Pain Relief' | 'Diagnostics' | 'Longevity';
  duration: string;
  dosha: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  protocolSteps: string[];
  herbalKeynotes: string[];
  recommendedFor: string[];
}

export const TREATMENTS: Treatment[] = [
  {
    id: 'shirodhara',
    name: 'Shirodhara',
    sanskritName: 'शिरोधारा (Stream of Stillness)',
    tagline: 'Continuous meditative stream of warm medicated oil across the forehead',
    category: 'Mind & Sleep',
    duration: '60 - 75 Mins',
    dosha: 'Pacifies Vata & Pitta',
    image: '/images/ayurveda_shirodhara_therapy_1790273156341.jpg',
    shortDesc: 'A continuous rhythm of warm herb-infused oil poured gently over the third eye, melting chronic mental fatigue and opening avenues of serene meditation.',
    fullDesc: 'Shirodhara is celebrated worldwide as the hallmark therapy of classical Kerala Ayurveda. A specially blended, temperature-regulated stream of organic herbal oil, medicated buttermilk (Takradhara), or milk decoction (Ksheeradhara) flows steadily onto the forehead at the Ajna chakra. This gentle vibration stimulates the pineal and pituitary glands, inducing profound theta brainwave states comparable to hours of deep samadhi meditation.',
    benefits: [
      'Alleviates chronic anxiety, insomnia, and stress burnout',
      'Relieves tension headaches, migraines, and cognitive brain fog',
      'Normalizes sympathetic and parasympathetic nervous rhythms',
      'Enhances mental concentration, intuition, and memory recall'
    ],
    protocolSteps: [
      'Shiro Abhyanga: Gentle head, scalp, and shoulder marmam preparation',
      'Therapeutic Oil Formulation: Selected according to pulse diagnosis',
      'Rhythmic Stream: 45 minutes of continuous meditative pouring',
      'Warm Herbal Compress: Gentle transition back to waking balance'
    ],
    herbalKeynotes: ['Brahmi (Bacopa monnieri)', 'Ashwagandha', 'Shankhpushpi', 'Ksheerabala Tailam (101 times processed)'],
    recommendedFor: ['Sleep deprivation & insomnia', 'High-stress professionals', 'Cognitive exhaustion', 'Hypertension & restlessness']
  },
  {
    id: 'panchakarma',
    name: 'Classical Panchakarma',
    sanskritName: 'पञ्चकर्म (Fivefold Cellular Purification)',
    tagline: 'The complete root-cause cellular reset and systemic detoxification',
    category: 'Detox',
    duration: '7, 14, or 21 Day Programs',
    dosha: 'Tri-doshic Reset (Vata, Pitta, Kapha)',
    image: '/images/ayurveda_herbs_preparation_1790273180890.jpg',
    shortDesc: 'Ancient five-action physiological cleanse designed to extract deeply lodged metabolic toxins (Ama) and restore pure cellular radiance.',
    fullDesc: 'Panchakarma is the pinnacle of Ayurvedic healing science. Rather than suppressing symptoms, it systematically mobilizes lipid-soluble endotoxins from tissues into the gastrointestinal tract for elimination. Structured through three meticulous phases—Purva Karma (preparation & oleation), Pradhana Karma (the five classical purification actions), and Paschat Karma (rebuilding digestive fire and vitality).',
    benefits: [
      'Eliminates systemic metabolic toxins (Ama) from deep tissues',
      'Reboots digestive fire (Agni) and balances gut microbiome',
      'Enhances natural immunity (Ojas) and cellular vitality',
      'Slows cellular aging and revitalizes endocrine balance'
    ],
    protocolSteps: [
      'Purva Karma: Internal oleation with medicated ghee (Snehana) & Swedana herbal steam',
      'Nadi Monitoring: Daily pulse and constitutional progress reviews',
      'Pradhana Karma: Customized elimination protocols (Vamana, Virechana, Basti, Nasya)',
      'Samsarjana Krama: Graduated dietetics to ignite permanent digestive balance'
    ],
    herbalKeynotes: ['Triphala', 'Guggulu', 'Dashamoola', 'Varunadi Kwath', 'Castor nectar'],
    recommendedFor: ['Chronic metabolic sluggishness', 'Autoimmune & inflammatory tendencies', 'Post-illness recovery', 'Annual deep reset']
  },
  {
    id: 'abhyanga',
    name: 'Abhyanga & Swedana',
    sanskritName: 'अभ्यङ्ग (Synchronized Herbal Anointment)',
    tagline: 'Full-body rhythmic marma massage with customized warm botanical oils',
    category: 'Longevity',
    duration: '60 - 90 Mins',
    dosha: 'Deeply balances Vata & rejuvenates Dhatus',
    image: '/images/ayurveda_hero_sanctuary_1790273136594.jpg',
    shortDesc: 'Harmonious long-stroke massage using medicated oils cooked with up to 40 wild botanicals, followed by an aromatic herbal steam canopy.',
    fullDesc: 'Abhyanga is the daily practice of self-love and deep therapeutic nourishment codified in the Charaka Samhita. At Jayamahesh, two synchronized therapists work with warm, hand-pressed sesame, coconut, or castor base oils enriched with medicinal forest herbs. The rhythm follows blood and lymph circulation, releasing micro-toxins and calming the nervous system before entering an aromatic wooden herbal steam box (Swedana).',
    benefits: [
      'Lubricates synovial joint fluids and eases stiffness',
      'Stimulates lymphatic flow and cellular waste clearance',
      'Imparts softness, glow, and tone to the skin barrier',
      'Grounds excess airy Vata energy, promoting peaceful calm'
    ],
    protocolSteps: [
      'Pulse & Dosha review to select custom Tailam formulation',
      'Synchronous 7-position full-body massage over key vital Marma points',
      'Swedana: Enclosed wooden herbal steam with eucalyptus and neem leaves',
      'Ayurvedic herbal bath (Snana) using green gram & sandalwood powder'
    ],
    herbalKeynotes: ['Mahanarayana Tailam', 'Bala (Sida cordifolia)', 'Dhanwantharam Tailam', 'Vetiver roots'],
    recommendedFor: ['Dryness & joint crepitation', 'Chronic physical fatigue', 'Circulatory congestion', 'General longevity']
  },
  {
    id: 'kizhi',
    name: 'Elakizhi & Podikizhi',
    sanskritName: 'किऴि (Warm Botanical Leaf Poultice)',
    tagline: 'Heated medicinal bundles applied rhythmically for deep musculo-skeletal release',
    category: 'Pain Relief',
    duration: '60 - 75 Mins',
    dosha: 'Pacifies aggravated Vata & stagnant Kapha',
    image: '/images/ayurveda_kizhi_pain_therapy_1790273225926.jpg',
    shortDesc: 'Pounded fresh medicinal leaves and powdered roots tied in unbleached cotton boluses, heated in herbal oil to dissolve back and joint inflammation.',
    fullDesc: 'Kizhi is among Kerala’s most renowned therapeutic interventions for chronic spinal pain, arthritis, and muscular spasm. Fresh medicinal leaves including Nirgundi, Eranda, and Arka are sautéed with medicated oils, rock salt, and spices, tied into bundles (potlis), continuously heated on an earthen pan, and applied over affected muscle groups and joints with rhythmic percussion.',
    benefits: [
      'Remarkable relief for lumbar spondylosis, slip disc, and sciatica',
      'Reduces synovial swelling and inflammation in arthritic joints',
      'Dissolves deep muscle knots and sports strain',
      'Improves local blood circulation and restores mobility'
    ],
    protocolSteps: [
      'Local oleation with anti-inflammatory herbal oils (Murivenna, Karpooradi)',
      'Temperature monitoring of herbal poultices over brass hot plates',
      'Rhythmic tapping, compression, and sliding movements across pain corridors',
      'Herbal decoction wash to seal joints with enduring warmth'
    ],
    herbalKeynotes: ['Nirgundi (Vitex negundo)', 'Castor leaves (Eranda)', 'Rock salt (Saindhava)', 'Kottamchukkadi Choornam'],
    recommendedFor: ['Lower back pain & sciatica', 'Cervical & shoulder stiffness', 'Knee osteoarthritis', 'Athletic stiffness']
  },
  {
    id: 'nadi-pariksha',
    name: 'Nadi Pariksha & Pulse Reading',
    sanskritName: 'नाडी परीक्षा (Root Pulse Diagnosis)',
    tagline: 'Ancient non-invasive diagnostic science revealing deep physiological balance',
    category: 'Diagnostics',
    duration: '45 Mins',
    dosha: 'Detailed assessment of all 3 Doshas and Sub-doshas',
    image: '/images/ayurveda_doctor_pulse_reading_1790273200339.jpg',
    shortDesc: 'Three fingers placed upon the radial artery unveil subtle metabolic indicators, organ health, and constitutional tendencies before illness manifests.',
    fullDesc: 'Nadi Pariksha is the crowning jewel of classical Ayurvedic diagnostic precision. By placing index, middle, and ring fingers gently upon the radial pulse, our Senior Vaidyas read 7 distinct levels of frequency, rhythm, and volume corresponding to Vata (swan movement), Pitta (frog leap), and Kapha (serpent glide). It provides clear visibility into current imbalances (Vikriti) versus birth blueprint (Prakriti).',
    benefits: [
      'Detects subclinical health imbalances months before symptoms emerge',
      'Provides definitive diagnosis of personal Prakriti (constitution)',
      'Identifies dietary incompatibilities and gut toxins',
      'Provides a crystal-clear, personalized daily lifestyle prescription'
    ],
    protocolSteps: [
      'Resting stabilization (10 minutes in tranquil silence)',
      'Radial pulse palpation on right (men) and left (women) wrists',
      'Deep exploration of 7 pulse strata: organ health, mind state, and doshic drift',
      'Delivery of personalized Ayurvedic prescription and nutrition plan'
    ],
    herbalKeynotes: ['Holistic diagnostic art', 'Tridosha analysis', 'Agni assessment', 'Bespoke medicinal formulation'],
    recommendedFor: ['Anyone starting their Ayurvedic journey', 'Unresolved chronic health symptoms', 'Preventative health optimization']
  },
  {
    id: 'rasayana',
    name: 'Rasayana & Ojas Rejuvenation',
    sanskritName: 'रसायन (The Science of Longevity)',
    tagline: 'Cellular anti-aging, mitochondrial vitality, and mental serenity',
    category: 'Longevity',
    duration: 'Comprehensive Therapy Cycle',
    dosha: 'Enhances Ojas & balances Tri-doshas',
    image: '/images/ayurveda_senior_vaidya_1790273269796.jpg',
    shortDesc: 'Post-cleansing longevity therapies using sacred golden herbs, clarified butter, and adaptogens to nourish all seven bodily tissues (Dhatus).',
    fullDesc: 'Rasayana stems from "Rasa" (nutrient fluid) and "Ayana" (the pathway). Once the channels of the body are cleansed of Ama, Rasayana formulations rebuild tissue strength from plasma (Rasa) down to bone marrow (Majja) and reproductive essence (Shukra). At Jayamahesh, our authentic heritage pharmacy compounds small-batch Rasayanas prepared according to strict lunar and solar cycles.',
    benefits: [
      'Sharpens cognitive recall, sensory acuity, and voice timbre',
      'Promotes cellular repair and bolsters immune resilience (Vyadhikshamatva)',
      'Restores youthful radiance, hair luster, and skin vitality',
      'Cultivates serene emotional steadiness and mental peace'
    ],
    protocolSteps: [
      'Cellular readiness assessment via digestive Agni evaluation',
      'Prescription of bespoke classical Rasayana lehyams and medicated ghees',
      'Integrated Pranayama and gentle restorative yoga postures',
      'Periodic pulse tracking to measure tissue replenishment'
    ],
    herbalKeynotes: ['Chyawanprash (classical Amla base)', 'Shilajit (Himalayan exudate)', 'Shatavari', 'Brahma Rasayana'],
    recommendedFor: ['Rejuvenation after 35+', 'Recovery from long illness or surgery', 'Burnout and chronic fatigue', 'Longevity seekers']
  }
];
