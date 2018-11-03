import React, { Fragment } from 'react'
import { withSiteData } from 'react-static'

//
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import LogoText from '../components/LogoText'
import CTA from '../components/CTA'
import Guarantee from '../components/Guarantee'
import Footer from '../components/Footer'
import { primaryColor } from '../components/theme'

const servicesData = {
  headline: 'We can do it all',
  copy: 'No matter the job, we offer professional results you deserve.',
  commercialTitle: 'Commercial',
  commercialCopy:
    'Aenean ut ligula dapibus, semper lorem vitae, sagittis leo. Ut tincidunt ultrices leo vel faucibus.',
  commercialServiceList: [
    'spiders',
    'earwigs',
    'mice',
    'rats',
    'beetles',
    'ants',
    'yellow jakets',
    'wasps',
    'bed bugs',
    'cockroaches',
  ],
  resedentialTitle: 'Residential',
  resedentialCopy:
    'Aenean ut ligula dapibus, semper lorem vitae, sagittis leo. Ut tincidunt ultrices leo vel faucibus. ',
  resedentialServiceList: [
    'spiders',
    'earwigs',
    'mice',
    'rats',
    'beetles',
    'ants',
    'yellow jakets',
    'wasps',
    'bed bugs',
    'cockroaches',
  ],
}

const heroData = {
  heroTitle: 'Some Catchy Heading',
  heroBody:
    'Subheading that will be even better and will make it super hard to resist signing up to all of the awesome services. Just adding a few more lines for filler text.',
  heroButtonLabel: 'Book Now',
  phoneNumber: '801-823-2463',
  heroIllustration: '',
  heroIllustrationAlt: 'Hero Illustration',
}

const testimonialsData = {
  headline: 'You’re in good company',
  copy:
    'We have served many businesses and families in Utah. Here are just a few things they’ve had to say:',
  testimonialList: [
    {
      copy:
        '“Quick, thorough, and friendly service at an excellent price. Taft inquired of what pest problems were most common at our home so he could tailor the treatment for our home. We’ll definitely be using their service again.”',
      author: 'Steve Hurd',
    },
    {
      copy:
        '“We are so happy with the job Taft did. Taft arrived on time and prepared. He took his time answering our questions about his method of eliminating our problem as well as preventing it from reoccurring. We were so happy he only charged us for the service he was providing that day. A lot of other pest control companies try to sell you a contract you may not even need. And his rates are very affordable.” ',
      author: 'Jenn W.',
    },
    {
      copy:
        '“Taft was friendly and answered all my questions. Had lowest quote and no contract, and 60 day guarantee. Will come back if needed for the same price. Extremely satisfied.”  ',
      author: 'Cathy V',
    },
  ],
}

const whyUs = {
  headline: 'You’ll feel cofident in our team ',
  copy:
    'NoxAenean ut ligula dapibus, semper lorem vitae, sagittis leo. Ut tincidunt ultrices leo vel faucibus.',
  bodyCopy:
    'NoxAenean ut ligula dapibus, semper lorem vitae, sagittis leo. Ut tincidunt ultrices leo vel faucibus. In rhoncus tellus dolor, eu gravida sapien mattis a. Phasellus vitae urna est.rmalNoxAenean ut ligula dapibus, semper lorem vitae, sagittis leo. Ut tincidunt ultrices leo vel faucibus. In rhoncus tellus dolor, eu gravida sapien mattis a. Phasellus vitae urna est.rmal',
}

const cta = {
  headline: '$65 Intro Offer',
  copy: 'Up to $3,000 square feet. No contract required for this intro offer.',
  buttonLabel: 'Book Now',
  phoneNumber: '801-823-2463',
}

const gurantee = {
  headline: "We'll take care of you",
  copy:
    'NormaNoxAenean ut ligula dapibus, semper lorem vitae, sagittis leo. Ut tincidunt ultrices leo vel faucibus. In rhoncus tellus dolor, eu gravida sapien mattis a. Phasellus vitae urna est.rmall',
  imageSource: 'https://www.aaatreeserviceny.com/wp-content/uploads/2015/08/guarantee.png',
}

const footerData = {
  phoneNumber: '801-823-2463',
  email: 'taft@beegonepestcontrol.com',
  contactCopy: 'Need Help?',
  SocialCopy: 'Follow us on social media',
  facebookLink: 'https://www.facebook.com/BeeGonePest/',
  twitterLink: 'https://www.facebook.com/BeeGonePest/',
  linkedinLink: 'https://www.facebook.com/BeeGonePest/',
  instagramLink: 'https://www.facebook.com/BeeGonePest/',
}

export default withSiteData(() => (
  <Fragment>
    <main>
      <section css={{ paddingTop: '7rem' }}>
        <Hero {...heroData} />
      </section>
      <section id="services">
        <Services {...servicesData} />
      </section>
      <section id="testimonials" css={{ background: '#f4f4f4' }}>
        <Testimonials {...testimonialsData} />
      </section>
      <section id="whyus">
        <LogoText {...whyUs} />
      </section>
      <section id="guarantee">
        <Guarantee {...gurantee} h />
      </section>
      <section id="cta" css={{ background: `${primaryColor}` }}>
        <CTA {...cta} />
      </section>
    </main>

    <Footer navList={['Services', 'Testimonials', 'Why Us']} {...footerData} />
  </Fragment>
))
