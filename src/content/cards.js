export const cards = [
  {
    slug: 'generate-3d-views',
    title: 'Generate 3D Views',
    description: 'Create detailed 3D visualizations from your reference photos',
    icon: 'gallery',
    intro:
      'Upload a single reference or entire floor-plan set and let the studio convert it into production-ready 3D imagery.',
    dropInstruction: 'Drag and drop a reference photo',
    settings: [
      { label: 'Style', options: ['Modern', 'Minimal', 'Art Deco'], defaultValue: 'Modern' },
      { label: 'Lighting', options: ['Warm', 'Neutral', 'Cool'], defaultValue: 'Warm' },
      { label: 'Resolution', options: ['Medium', 'High', 'Ultra'], defaultValue: 'Medium' },
    ],
  },
  {
    slug: 'plan-from-text-prompts',
    title: 'Plan from Text Prompts',
    description: 'Convert your words into\naccurate 2D floor plans',
    icon: 'plan',
    intro:
      'Describe the desired layout with natural language and receive scaled plans, circulation summaries, and furnishing cues.',
    dropInstruction: 'Paste or type your prompt to start planning',
    settings: [
      { label: 'Use Case', options: ['Residential', 'Workspace', 'Retail'], defaultValue: 'Residential' },
      { label: 'Footprint', options: ['Compact', 'Standard', 'Expansive'], defaultValue: 'Standard' },
      { label: 'Detail Level', options: ['Outline', 'Furnishings', 'Construction'], defaultValue: 'Furnishings' },
    ],
  },
  {
    slug: 'visualize-2d-plans',
    title: 'Visualize 2D Plans',
    description: 'Transform your floor plans into immersive 3D models',
    icon: 'cube',
    intro:
      'Stage lighting, materials, and camera paths are generated from any annotated plan to preview the full built experience.',
    dropInstruction: 'Upload a PDF or DWG plan to visualize in 3D',
    settings: [
      { label: 'Material Pack', options: ['Neutral', 'Premium', 'Custom'], defaultValue: 'Neutral' },
      { label: 'Camera Mode', options: ['Orbit', 'Dolly', 'Walkthrough'], defaultValue: 'Orbit' },
      { label: 'Output Ratio', options: ['1:1', '4:5', '16:9'], defaultValue: '4:5' },
    ],
  },
  {
    slug: 'interior-exterior-design',
    title: 'Interior & Exterior Design',
    description: 'Design beautiful spaces for\nboth inside and out',
    icon: 'home',
    intro:
      'Coordinate palettes, lighting, and landscaping to deliver cohesive interior and exterior schemes in one pass.',
    dropInstruction: 'Share elevations or mood boards to begin',
    settings: [
      { label: 'Mood', options: ['Warm', 'Neutral', 'Bold'], defaultValue: 'Warm' },
      { label: 'Environment', options: ['Urban', 'Coastal', 'Mountain'], defaultValue: 'Urban' },
      { label: 'Delivery', options: ['Still Frames', 'Animation', 'AR Kit'], defaultValue: 'Still Frames' },
    ],
  },
]

export const getCardBySlug = (slug) => cards.find((card) => card.slug === slug)
