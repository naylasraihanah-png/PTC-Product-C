import React, { useState } from 'react';
import { ResourceItem } from '../types';

export const ResourcesView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const initialResources: ResourceItem[] = [
    {
      id: 'res-1',
      title: 'Product C Full Prescribing Information & Monograph',
      type: 'PDF',
      category: 'Clinical',
      description: 'Official clinical monograph including complete dosage, contraindications, and clinical trial endpoint summaries.',
      badge: 'OFFICIAL',
      isConfidential: false,
    },
    {
      id: 'res-2',
      title: '2026 P&T Committee Executive Dossier',
      type: 'PDF',
      category: 'Formulary',
      description: 'Comprehensive 42-page dossier formatted according to AMCP standard guidelines for hospital formulary committees.',
      badge: 'CONFIDENTIAL',
      isConfidential: true,
    },
    {
      id: 'res-3',
      title: 'Hospital Budget-Impact Calculation Sheet',
      type: 'TOOL',
      category: 'Budget Impact',
      description: 'Editable financial model template allowing local cost inputs and custom patient cohort size adjustments.',
      badge: 'INTERACTIVE',
    },
    {
      id: 'res-4',
      title: 'Long-Term Safety & Hepatic Monitoring Protocol',
      type: 'PDF',
      category: 'Safety',
      description: 'Clinical laboratory protocol guidelines for monitoring ALT and CK levels during initial maintenance phase.',
    },
    {
      id: 'res-5',
      title: 'PTC Presentation Deck for Formulary Relisting',
      type: 'PPTX',
      category: 'Formulary',
      description: 'Slide template deck for clinical pharmacists presenting Product C relisting rationales to executive committees.',
      badge: 'TEMPLATE',
    },
    {
      id: 'res-6',
      title: 'Complete Institutional Evidence Package (ZIP)',
      type: 'ZIP Bundle',
      category: 'Clinical',
      description: 'Complete zip archive containing all clinical trial reprints, safety monographs, and economic whitepapers.',
    },
  ];

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleDownload = (title: string) => {
    setDownloadNotice(title);
    setTimeout(() => setDownloadNotice(null), 3000);
  };

  const filteredResources = initialResources.filter(res => {
    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          res.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-10 py-6 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-primary">
          PTC Institutional Resource Library
        </h1>
        <p className="text-xs text-on-surface-variant mt-1">
          Download validated clinical monographs, presentation decks, budget sheets, and safety protocols.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm">
        {/* Category Chips */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {['All', 'Clinical', 'Safety', 'Budget Impact', 'Formulary'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                selectedCategory === cat
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative w-full md:w-72">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-base">
            search
          </span>
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-outline-variant rounded-lg text-xs bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
      </div>

      {downloadNotice && (
        <div className="p-3 bg-secondary-container text-on-secondary-container rounded-lg text-xs font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined text-base">download_done</span>
          <span>Downloaded: {downloadNotice}</span>
        </div>
      )}

      {/* Resource Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map(res => {
          const isBookmarked = bookmarkedIds.includes(res.id);
          return (
            <div
              key={res.id}
              className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-ambient transition-shadow"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-surface-container px-2 py-0.5 rounded text-[10px] font-bold text-primary uppercase">
                    {res.type}
                  </span>
                  <div className="flex items-center gap-2">
                    {res.badge && (
                      <span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                        {res.badge}
                      </span>
                    )}
                    <button
                      onClick={() => toggleBookmark(res.id)}
                      className="text-on-surface-variant hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-xl">
                        {isBookmarked ? 'bookmark' : 'bookmark_border'}
                      </span>
                    </button>
                  </div>
                </div>
                <h3 className="font-bold text-base text-primary mb-2">{res.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                  {res.description}
                </p>
              </div>

              <div className="pt-4 border-t border-outline-variant flex justify-between items-center mt-auto">
                <span className="text-[10px] font-bold text-outline uppercase">{res.category}</span>
                <button
                  onClick={() => handleDownload(res.title)}
                  className="flex items-center gap-1.5 text-xs font-bold text-secondary uppercase hover:underline"
                >
                  <span className="material-symbols-outlined text-base">download</span>
                  Download
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
