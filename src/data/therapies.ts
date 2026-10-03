export interface Treatment {
  id: string;
  name: string;
  sanskritName: string;
  tagline: string;
  category: 'Mind & Sleep' | 'Pain Relief' | 'Longevity';
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
    id: 'pizhichil',
    name: 'Pizhichil',
    sanskritName: 'पिऴिच्चिल् (The Royal Medicated Oil Stream)',
    tagline: 'Continuous warm streams of herb-infused oil rhythmically squeezed across the entire body',
    category: 'Longevity',
    duration: '60 - 90 Mins',
    dosha: 'Deeply Pacifies Aggravated Vata & Nourishes Dhatus',
    image: '/images/ayurveda_pizhichil_therapy.webp',
    shortDesc: 'Revered as the "King of Ayurvedic Therapies," warm medicated herbal oil is rhythmically squeezed from linen cloths over the entire body, restoring neuromuscular vigor and deep vitality.',
    fullDesc: 'Pizhichil is an aristocratic therapy of classical Kerala Ayurveda, historically reserved for royal dynasties. Two to four trained therapists pour steady, warm streams of herb-infused oils over the entire body using specialized linen cloths while maintaining soft, rhythmic synchronous strokes. The sustained therapeutic warmth and lipid-soluble botanical principles permeate deep cellular strata, dissolving metabolic toxins, rejuvenating depleted neuromuscular fibers, and restoring supple joint lubrication.',
    benefits: [
      'Exceptional relief for chronic arthritis, sciatica, spondylosis, and muscular dystrophy',
      'Deeply nourishes the nervous system, aiding hemiplegia, paralysis, and neuropathy',
      'Slows physiological aging and prevents degenerative tissue loss (Dhatu Kshaya)',
      'Imparts extraordinary luster, elasticity, and tone to the skin barrier'
    ],
    protocolSteps: [
      'Marma assessment & customized warm medicated Tailam formulation',
      'Synchronous full-body pouring using unbleached cotton cloths dipped in warm herbal oil',
      'Gentle coordinated massage following venous return and lymph channels',
      'Medicated warm herbal bath (Snana) using vetiver and green gram wash'
    ],
    herbalKeynotes: ['Dhanwantharam Tailam', 'Mahanarayana Tailam', 'Sahacharadi Tailam', 'Bala (Sida cordifolia)'],
    recommendedFor: ['Arthritis & joint stiffness', 'Neurological disorders & hemiplegia', 'Chronic fatigue & muscle atrophy', 'Deep longevity & restorative rejuvenation']
  },
  {
    id: 'dhara',
    name: 'Dhara',
    sanskritName: 'धारा (Continuous Healing Stream)',
    tagline: 'Continuous rhythmic flow of medicated herbal decoctions, buttermilk, or herbal milk',
    category: 'Mind & Sleep',
    duration: '45 - 60 Mins',
    dosha: 'Cools Aggravated Pitta & Harmonizes Vata',
    image: '/images/ayurveda_dhara_therapy.webp',
    shortDesc: 'A continuous therapeutic stream of customized herbal decoctions, medicated buttermilk (Takradhara), or herbal milk (Ksheeradhara) to cool internal heat and dissolve chronic tension.',
    fullDesc: 'Dhara is a foundational pillar of Kerala’s classical healing arts. Tailored precisely to the patient’s constitutional and thermal state, therapeutic liquids, such as Takra (fermented buttermilk boiled with Musta and Amalaki), Ksheera (herbal milk), or Kashaya (anti-inflammatory herbal decoctions), are poured in a continuous, measured rhythm over the forehead or affected body parts from a suspended bronze Dhara vessel. It soothes inflamed nerves, relieves stubborn dermatological imbalances like psoriasis and eczema, and dispels chronic mental agitation.',
    benefits: [
      'Calms internal systemic heat, inflammation, and hyperacidity',
      'Highly effective for psoriasis, eczema, and heat-induced dermatological conditions',
      'Relieves chronic insomnia, psychosomatic tension, and burning sensations',
      'Stabilizes blood pressure and pacifies an overactive sympathetic nervous system'
    ],
    protocolSteps: [
      'Constitutional assessment to formulate custom Takra, Kashaya, or Ksheera blend',
      'Preparatory gentle head, scalp, or localized marma massage',
      'Measured rhythmic pour from a traditional bronze Dhara pathra vessel',
      'Soothing herbal compress & application of Rasnadi Choornam to seal cranial energy'
    ],
    herbalKeynotes: ['Musta (Cyperus rotundus)', 'Amalaki (Emblica officinalis)', 'Chandana (Sandalwood)', 'Yashtimadhu (Licorice)'],
    recommendedFor: ['Psoriasis, eczema & skin inflammation', 'Chronic stress & hypertension', 'Insomnia & mental burnout', 'Pitta disorders & burning sensations']
  },
  {
    id: 'shirovasthi',
    name: 'Shirovasthi',
    sanskritName: 'शिरोबस्ति (Cranial Medicated Oil Reservoir)',
    tagline: 'Retaining warm medicated herbal oil upon the crown within a traditional leather sleeve',
    category: 'Mind & Sleep',
    duration: '45 - 60 Mins',
    dosha: 'Supreme Therapy for Severe Cranial & Neurological Vata',
    image: '/images/ayurveda_shirovasthi_therapy.webp',
    shortDesc: 'A specialized classical Kerala therapy where warm medicated oil is held over the scalp within an open-topped leather cylinder, exerting profound healing on the brain, nerves, and sensory faculties.',
    fullDesc: 'Shirovasthi stands as one of the most potent neuro-regenerative therapies in classical Kerala Ayurveda. A cylindrical leather hat is secured closely around the guest’s head and hermetically sealed using a dough made from black gram (Masha) flour. Warm, specifically medicated herbal oils are gently poured inside and retained for a prescribed duration until physiological relaxation and subtle perspiration appear. The therapeutic hydrostatic pressure and medicinal absorption revitalize cranial nerves, nourish brain cells, and restore sensory clarity.',
    benefits: [
      'Profound therapeutic efficacy for facial palsy, Bell’s palsy, and trigeminal neuralgia',
      'Alleviates chronic hemicrania, severe migraines, and tension headaches',
      'Restores optic nerve vitality, dry eye syndrome, and sensory faculties',
      'Eradicates severe insomnia, involuntary tremors, and chronic cervical tension'
    ],
    protocolSteps: [
      'Fitting and securing of the cylindrical leather Shirovasthi cap',
      'Hermetic sealing at the hairline using natural black gram dough',
      'Gradual filling with temperature-monitored medicated herbal oil',
      'Monitored retention followed by oil release and invigorating head massage'
    ],
    herbalKeynotes: ['Ksheerabala Tailam (101 Avartana)', 'Balathailam', 'Chandanadi Tailam', 'Brahmi Ghrita'],
    recommendedFor: ['Facial paralysis & Bell’s palsy', 'Severe migraines & chronic headaches', 'Trigeminal neuralgia & cranial neuropathy', 'Severe sleep disturbances & hair loss']
  },
  {
    id: 'abhyangam',
    name: 'Abhyangam',
    sanskritName: 'अभ्यङ्गम् (Synchronized Classical Herbal Anointment)',
    tagline: 'Full-body synchronized rhythmic massage with warm classical botanical oils',
    category: 'Longevity',
    duration: '60 - 90 Mins',
    dosha: 'Grounds Excess Vata & Revitalizes All 7 Dhatus',
    image: '/images/ayurveda_abhyangam_therapy.webp',
    shortDesc: 'A full-body rhythmic massage using warmed herbal oils infused with up to 40 wild botanicals, executed in seven traditional postures to clear lymphatic channels and nourish deeper tissues.',
    fullDesc: 'Codified in the ancient Sushruta and Charaka Samhitas, Abhyangam is far more than a conventional massage; it is a sacred therapeutic immersion that lubricates the body’s internal channels (Srotas). Two synchronized Ayurvedic therapists administer warm, herb-infused oils formulated specifically to the recipient’s constitution. Through synchronized long strokes, circular friction around joints, and gentle pressure on vital Marma points, Abhyangam melts systemic rigidity, stimulates lymphatic drainage, and establishes profound grounding stillness.',
    benefits: [
      'Lubricates synovial joint capsules and alleviates stiffness and muscular fatigue',
      'Enhances blood circulation and accelerates cellular metabolic waste clearance',
      'Deeply nourishes the nervous system, dissolving anxiety and inducing restful sleep',
      'Imparts firmness, elasticity, and youthful radiance to the entire body'
    ],
    protocolSteps: [
      'Pulse and constitution check to calibrate custom Tailam formulation',
      'Synchronous 7-posture full-body anointment over vital Marma gateways',
      'Gentle cervical and spinal decompression strokes',
      'Application of medicated herbal wash and gentle post-therapy thermal wrap'
    ],
    herbalKeynotes: ['Mahanarayana Tailam', 'Dhanwantharam Tailam', 'Bala (Sida cordifolia)', 'Ashwagandha'],
    recommendedFor: ['General fatigue & physical exhaustion', 'Dry skin & joint crepitation', 'Circulatory sluggishness', 'Everyday wellness & longevity']
  },
  {
    id: 'kizhi',
    name: 'Kizhi',
    sanskritName: 'किऴि (Warm Botanical Bolus Poultice Therapy)',
    tagline: 'Heated herbal leaf and choornam boluses rhythmically applied to relieve pain and spasm',
    category: 'Pain Relief',
    duration: '60 - 75 Mins',
    dosha: 'Pacifies Aggravated Vata & Disperses Stagnant Kapha',
    image: '/images/ayurveda_kizhi_pain_therapy_1790273225926.webp',
    shortDesc: 'Fresh healing leaves (Elakizhi) and medicinal root powders (Podikizhi) bundled into unbleached cotton boluses, heated in herbal oil, and applied with rhythmic compression to melt joint pain.',
    fullDesc: 'Kizhi is Kerala’s classical thermal intervention for chronic musculoskeletal disorders and neuro-muscular inflammation. Freshly cut medicinal leaves (including Nirgundi, Eranda, and Arka) or finely pulverized herbal powders are bundled into unbleached linen pouches (potlis). Continuously immersed in warm anti-inflammatory herbal oils, the poultices are rhythmically patted, rolled, and pressed along tension corridors and pain epicenters. The deep penetrating heat opens micro-channels, flushes metabolic debris (Ama), and restores joint flexibility.',
    benefits: [
      'Immediate relief for cervical spondylosis, lumbar pain, slip disc, and sciatica',
      'Alleviates inflammation, stiffness, and synovial swelling in arthritic joints',
      'Resolves chronic muscular knots, myofascial spasms, and sports strains',
      'Enhances arterial circulation and restores natural range of motion'
    ],
    protocolSteps: [
      'Preparatory local application of anti-inflammatory Tailams (Murivenna, Karpooradi)',
      'Continuous heating of herbal boluses on therapeutic hot plates',
      'Dynamic rhythmic tapping, sliding, and compression along spine and joints',
      'Medicated warm herbal decoction rinse to seal therapeutic warmth into tissues'
    ],
    herbalKeynotes: ['Nirgundi (Vitex negundo)', 'Eranda (Castor leaves)', 'Kottamchukkadi Choornam', 'Murivenna Tailam'],
    recommendedFor: ['Lower back pain & sciatica', 'Cervical spondylosis & frozen shoulder', 'Osteoarthritis & rheumatic joints', 'Sports injuries & muscular sprains']
  },
  {
    id: 'kadivasthi',
    name: 'Kadivasthi',
    sanskritName: 'कटिबस्ति (Sacred Lumbar Medicated Oil Pool)',
    tagline: 'Retaining warm medicated herbal oil over the lumbosacral spine within a dough reservoir',
    category: 'Pain Relief',
    duration: '45 - 60 Mins',
    dosha: 'Directly Pacifies Localized Apana Vata & Lumbar Strain',
    image: '/images/ayurveda_kadivasthi_therapy.webp',
    shortDesc: 'A specialized spinal therapy where warm medicinal oil is retained in a dough dam placed over the lower back, providing profound relief for lumbar disc issues and sciatica.',
    fullDesc: 'Kadivasthi (also known as Kati Basti) is an iconic Ayurvedic treatment formulated specifically to treat afflictions of the lower spine and pelvic girdle. A leak-proof circular dam made of specially kneaded black gram (Masha) dough is constructed and secured over the lumbosacral spine (L1–S1 region). Continuously replenished, warm medicinal oils enriched with potent anti-inflammatory herbs are poured into the reservoir and retained at a steady, soothing temperature. The prolonged oil bath deeply penetrates vertebrae, rehydrates intervertebral discs, eases nerve compression, and relieves severe lumbar spasm.',
    benefits: [
      'Exceptional relief for chronic lower back pain, lumbago, and sciatica',
      'Supports healing of lumbar disc herniation, disc bulge, and degenerative disc disease',
      'Strengthens lumbar spinal musculature and relieves sacral numbness and stiffness',
      'Alleviates postural fatigue caused by prolonged sitting or strenuous physical strain'
    ],
    protocolSteps: [
      'Kneading and crafting of the classical black gram dough ring over the lower back',
      'Gentle sealing and inspection of the reservoir over the lumbosacral junction',
      'Gradual filling with warm, customized medicated oils (Sahacharadi / Murivenna)',
      'Continuous thermal regulation for 35–45 minutes followed by gentle lumbar massage'
    ],
    herbalKeynotes: ['Sahacharadi Tailam', 'Murivenna', 'Mahanarayana Tailam', 'Dashamoola'],
    recommendedFor: ['Lumbar disc bulge & slip disc', 'Sciatica & radiating nerve pain', 'Chronic lower back pain & stiffness', 'Postural spinal strain from desk work']
  },
  {
    id: 'shirodhara',
    name: 'Shirodhara',
    sanskritName: 'शिरोधारा (Stream of Meditative Stillness)',
    tagline: 'Continuous meditative stream of warm medicated oil across the forehead',
    category: 'Mind & Sleep',
    duration: '60 - 75 Mins',
    dosha: 'Deeply Pacifies Vata & Pitta, Restores Theta State',
    image: '/images/ayurveda_shirodhara_therapy_1790273156341.webp',
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
  }
];
