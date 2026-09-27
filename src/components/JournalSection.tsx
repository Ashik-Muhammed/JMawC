import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  tag: string;
  readTime: string;
  date: string;
  excerpt: string;
  fullContent: string[];
}

export const JournalSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 'dinacharya',
      title: 'Dinacharya: The Sacred Vedic Morning Protocol That Resets Cortisol',
      tag: 'Circadian Biology',
      readTime: '5 min read',
      date: 'Autumn Equinox',
      excerpt: 'Before the sun crests the horizon, ethereal Vata prana dominates the atmosphere. Awakening during the Brahma Muhurta aligns your neurochemistry with natural daylight cycles.',
      fullContent: [
        'In the classical Charaka Samhita, Dinacharya (daily biological rhythm) is revered as the first line of defense against disease. When we align our waking hours with cosmic rhythms, cellular repair synchronizes automatically.',
        '1. Brahma Muhurta: Arising 45 to 90 minutes before dawn, when the environment is tranquil and rich in nascent oxygen.',
        '2. Jivha Nirlekhana (Tongue Scraping): Using pure copper or silver scrapers to remove overnight endotoxins (Ama) from the tongue surface and stimulate internal peristalsis.',
        '3. Kavala & Gandusha (Oil Pulling): Swishing warm cold-pressed sesame oil to strengthen gum collagen, tone facial muscles, and draw out lipid toxins.',
        '4. Ushapan (Warm Water Hydration): Drinking pure warm copper-infused water to gently awaken the colon and prepare Agni (metabolic fire) for daytime tasks.'
      ]
    },
    {
      id: 'agni-digestive-fire',
      title: 'Decoding Your Agni: The Four Types of Digestive Fire in Ayurveda',
      tag: 'Metabolic Science',
      readTime: '6 min read',
      date: 'Vedic Wellness',
      excerpt: 'Ayurveda states that an individual is not merely what they eat, but what their cellular Agni can digest, assimilate, and peacefully eliminate.',
      fullContent: [
        'In classical Ayurveda, Agni is the sacred fire within the human temple. Every physical and psychological imbalance begins with compromised digestive fire, leading to the formation of Ama (toxic, sticky metabolic sludge).',
        '• Vishama Agni (Erratic): Associated with Vata. Digestion fluctuates wildly—one day voracious, the next bloated and dry. Healed with warm unctuous foods and cumin-coriander decoctions.',
        '• Tikshna Agni (Hyperactive): Associated with Pitta. Burns food too rapidly, causing acid reflux, burning sensations, and intense irritability. Calmed with coriander seeds, fennel, and ghee.',
        '• Manda Agni (Sluggish): Associated with Kapha. Digestion is heavy, slow, and leaves one lethargic for hours. Awakened with dry ginger, black pepper, and fasting.',
        '• Sama Agni (Balanced): The ideal state of equilibrium where digestion is joyful, painless, and energizing.'
      ]
    },
    {
      id: 'taila-alchemy',
      title: 'The Sacred Alchemy of Medicated Tailam: How Warm Oils Heal the Nervous System',
      tag: 'Botanical Wisdom',
      readTime: '4 min read',
      date: 'Herbal Lineage',
      excerpt: 'Sesame oil possesses unique lipophilic properties capable of penetrating all seven cellular tissue layers (Dhatus) to soothe an overstimulated nervous system.',
      fullContent: [
        'The Sanskrit word for oil, "Sneha," is also the exact word for love, warmth, and tenderness. Applying warm medicated oil to the skin is the most profound sensory affirmation of safety we can offer our nervous system.',
        'Unlike commercial mineral lotions that coat the skin surface, unrefined stone-pressed sesame oil penetrates the stratum corneum and enters micro-capillaries. When simmered for 72 hours with adaptogenic botanicals like Bala, Ashwagandha, and Dashamoola, the oil molecules act as micro-transporters.',
        'As warm oil glides along the Marma channels during Abhyanga or drips rhythmically across the third eye during Shirodhara, mechanoreceptors in the skin send instant calming signals via the vagus nerve, shutting off the body’s fight-or-flight cortisol cascade.'
      ]
    }
  ];

  return (
    <section id="journal" className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-16">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#6F6F6F] font-medium mb-2 sm:mb-3">
          Vedic Journal
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-black font-normal tracking-tight">
          Ayurvedic Wisdom &amp; Rituals
        </h2>
        <p className="text-sm sm:text-base text-[#6F6F6F] mt-3 sm:mt-4 leading-relaxed">
          Essays on classical longevity, circadian biology, and herbal alchemy written by our Vaidyas to enrich your daily home sanctuary.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {articles.map((art) => (
          <article
            key={art.id}
            className="group flex flex-col justify-between p-5 sm:p-8 rounded-3xl bg-stone-50/70 border border-black/8 hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <div>
              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-[#6F6F6F] mb-3 sm:mb-4">
                <span className="uppercase tracking-wider font-medium text-[#0B823D]">
                  {art.tag}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {art.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl sm:text-2xl text-black font-normal leading-snug group-hover:text-[#0B823D] transition-colors">
                {art.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-[#6F6F6F] mt-3 sm:mt-4 leading-relaxed line-clamp-3">
                {art.excerpt}
              </p>
            </div>

            {/* Read Button */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-black/5">
              <button
                onClick={() => setSelectedArticle(art)}
                className="text-xs uppercase tracking-wider text-black font-semibold flex items-center gap-1.5 hover:gap-2.5 transition-all cursor-pointer py-1"
              >
                <span>Read Editorial</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-rise"
        >
          <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl p-5 sm:p-8 md:p-10 border border-black/10 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full hover:bg-stone-100 text-stone-600 transition-colors"
              aria-label="Close article"
            >
              <X size={20} />
            </button>

            <div className="mb-6 pr-8">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#0B823D] font-medium mb-2">
                <BookOpen size={14} />
                <span>{selectedArticle.tag} • {selectedArticle.readTime}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-black font-normal leading-tight">
                {selectedArticle.title}
              </h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#444444] leading-relaxed pt-4 border-t border-black/5">
              {selectedArticle.fullContent.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-black/10 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="w-full sm:w-auto rounded-full px-6 py-2.5 bg-black text-white text-xs uppercase tracking-wider font-medium hover:bg-stone-800 transition-colors"
              >
                Close Editorial
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default JournalSection;
