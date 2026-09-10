export const site = {
  name: 'APEX',
  fullName: 'APEX / PERFORMANCE',
  tagline: 'Pull until the graph peaks.',
  support: 'Dyno runs, ECU maps, and track-prep builds — measured, loud, reserved.',
  email: 'run@apexperformance.demo',
  phone: '+1 213 555 0188',
  address: '440 Raceway Blvd, Los Angeles',
  hours: 'Mon–Sat 08:00–20:00',
  cta: 'Book a run',
};

export const stages = [
  {
    id: 'idle',
    num: '01',
    label: 'Idle',
    title: 'Idle',
    text: 'Straps tight. Sensors live. Baseline logged before the rollers spin.',
    detail: 'Oil temp · tire pressure · safety check',
    image: '/images/stage-idle.png',
    alt: 'Performance car idle in dyno bay',
  },
  {
    id: 'launch',
    num: '02',
    label: 'Launch',
    title: 'Launch',
    text: 'First pull — load climbs, boost settles, the graph starts to talk.',
    detail: 'Ramp rate · AFR watch · traction',
    image: '/images/stage-launch.png',
    alt: 'Performance car launch energy in garage',
  },
  {
    id: 'apex',
    num: '03',
    label: 'Apex',
    title: 'Apex',
    text: 'Peak torque window. We hold, note, and decide what the map still owes.',
    detail: 'Peak WHP · correction · knock margin',
    image: '/images/stage-apex.png',
    alt: 'Car on dyno at peak load',
  },
  {
    id: 'cool',
    num: '04',
    label: 'Cool',
    title: 'Cool-down',
    text: 'Heat out. Logs saved. Next map revision booked while the bay cools.',
    detail: 'Cooldown · printout · next slot',
    image: '/images/stage-cool.png',
    alt: 'Performance car cool-down after dyno',
  },
];

export const metrics = [
  { label: 'Peak WHP logged', value: 612, suffix: '' },
  { label: '0–60 builds tuned', value: 2.9, suffix: 's', decimals: 1 },
  { label: 'Dyno sessions / mo', value: 84, suffix: '' },
  { label: 'Maps shipped', value: 1200, suffix: '+' },
];

export const services = [
  {
    title: 'ECU map',
    text: 'Flash + live tune for street and track fuel windows.',
    image: '/images/service-ecu.png',
    alt: 'ECU laptop connected in workshop',
  },
  {
    title: 'Dyno pull',
    text: 'Corrected runs with printouts you can argue with — or trust.',
    image: '/images/service-dyno.png',
    alt: 'Chassis dyno rollers close-up',
  },
  {
    title: 'Track prep',
    text: 'Pads, fluids, alignment notes before the next session.',
    image: '/images/service-track.png',
    alt: 'Track-prep brake and suspension detail',
  },
];

export const faq = [
  {
    q: 'How long is a Book a run slot?',
    a: 'Usually 2–3 hours including straps, pulls, and cooldown. Full map days block the bay longer.',
  },
  {
    q: 'Do you tune EVs?',
    a: 'No — APEX is ICE / hybrid performance. For EV charge health see a different bay.',
  },
  {
    q: 'Street legal maps only?',
    a: 'We offer both. Track maps stay off public roads — we say it on the handover sheet.',
  },
];
