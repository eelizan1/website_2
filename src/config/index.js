module.exports = {
  siteTitle: 'Enrico Elizan | Software Engineer',
  siteDescription:
    'Enrico Elizan is a software engineer based in Boston, MA who specializes in developing (and occasionally designing) exceptional, high-quality websites and applications.',
  siteKeywords:
    'Enrico Elizan, Enrico, Elizan, software engineer, front-end engineer, web developer, javascript, northeastern',
  siteUrl: 'https://eelizanjr.com',
  siteLanguage: 'en_US',
  name: 'Enrico Elizan',
  location: 'Atlanta, GA',
  email: 'eelizanjr@outlook.com',
  github: 'https://github.com/eelizan1',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/eelizan1',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/enrico-elizan/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/e.elizanjr',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
