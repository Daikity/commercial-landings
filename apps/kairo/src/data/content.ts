export const site = {
  name: 'KAIRO',
  tagline: 'A quieter place to practice.',
  support:
    'Breath, stillness, and slow movement in a mist-lit studio — designed as a calm digital space.',
  email: 'hello@kairo.demo',
  phone: '+1 (415) 555-0142',
  address: '12 Harbor Lane, San Francisco',
  hours: 'Daily · sessions from 7:00',
};

export const stages = [
  {
    id: 'arrive',
    num: '01',
    title: 'Arrive',
    text: 'Leave the rush at the door. Soft light, linen, and a mat waiting without urgency.',
    image: '/images/arrive.png',
    alt: 'Folded linen towel and wooden block on sage stone',
  },
  {
    id: 'breathe',
    num: '02',
    title: 'Breathe',
    text: 'Lengthen the inhale. Soften the exhale. The practice begins in the ribs, not the mirror.',
    image: '/images/breathe.png',
    alt: 'Hands resting on ribs during a calm breath',
  },
  {
    id: 'hold',
    num: '03',
    title: 'Hold',
    text: 'Stay with the quiet. A seated pause where attention settles and time slows.',
    image: '/images/hold.png',
    alt: 'Figure seated in stillness on a linen mat',
  },
  {
    id: 'release',
    num: '04',
    title: 'Release',
    text: 'Fold, unfold, let tension travel out through soft movement and longer out-breaths.',
    image: '/images/release.png',
    alt: 'Gentle forward fold in soft linen clothing',
  },
  {
    id: 'rest',
    num: '05',
    title: 'Rest',
    text: 'Close with stillness. Cushion, blanket, and a mind that does not need to perform.',
    image: '/images/rest.png',
    alt: 'Meditation cushion and soft blanket in a quiet corner',
  },
];

export const practices = [
  { value: 'breath' as const, label: 'Breathwork' },
  { value: 'flow' as const, label: 'Slow flow' },
  { value: 'stillness' as const, label: 'Stillness' },
  { value: 'restore' as const, label: 'Restore' },
];

export const sessions = [
  { time: '07:00', name: 'Dawn breath', length: '45 min' },
  { time: '12:15', name: 'Midday stillness', length: '30 min' },
  { time: '18:30', name: 'Evening restore', length: '60 min' },
];

export const faqs = [
  {
    q: 'Do I need yoga experience?',
    a: 'No. Sessions are paced for beginners and returning practitioners. We emphasize breath and comfort over advanced shapes.',
  },
  {
    q: 'What should I bring?',
    a: 'Wear soft layers you can move in. Mats, blocks, and blankets are provided. Water is available in the studio.',
  },
  {
    q: 'How early should I arrive?',
    a: 'Ten minutes is enough. Arrive, settle on a mat, and leave the day at the door before we begin.',
  },
  {
    q: 'Can I cancel or reschedule?',
    a: 'Yes — change up to 12 hours before your session by email. Same-day changes depend on studio capacity.',
  },
  {
    q: 'Is this a demo brand?',
    a: 'Yes. KAIRO is a fictional studio created for portfolio demonstration. Form submissions are mocked and not sent to a server.',
  },
];
