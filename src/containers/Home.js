import React, { Fragment } from 'react'
import { SiteData, RouteData, Head } from 'react-static'

//
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import LogoText from '../components/LogoText'
import CTA from '../components/CTA'
import Guarantee from '../components/Guarantee'
import Footer from '../components/Footer'
import { primaryColor, mq } from '../components/theme'

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

export default () => (
  <SiteData
    render={({ siteData: { siteTitle, phoneNumber } }) => (
      <RouteData
        render={({ homePage: { fields: data } }) => (
          <Fragment>
            <Head>
              <title>{siteTitle}</title>
            </Head>
            <main>
              <section css={{ paddingTop: '4rem', [mq[1]]: { paddingTop: '7rem' } }}>
                <Hero
                  heroHeading={data.heroHeading}
                  heroCopy={data.heroCopy}
                  heroButtonLabel={data.heroCta.fields.buttonLabel}
                  link={data.heroCta.fields.link}
                  phoneNumber={data.phoneNumber}
                />
              </section>
              <section id="services">
                <Services
                  headline={data.servicesHeadline}
                  copy={data.servicesCopy}
                  commercialTitle={data.commercialTitle}
                  commercialCopy={data.commercialCopy}
                  commercialServiceList={data.commercialServiceList}
                  residentialTitle={data.residentialTitle}
                  residentialCopy={data.residentialCopy}
                  residentialServiceList={data.residentialServiceList}
                />
              </section>
              <section id="testimonials" css={{ background: '#f4f4f4' }}>
                <Testimonials
                  headline={data.testimonialsHeadline}
                  copy={data.testimonialsCopy}
                  testimonialList={data.testimonials}
                />
              </section>
              <section id="whyus">
                <LogoText
                  headline={data.whyUsHeadline}
                  copy={data.whyUsSubHeadline}
                  bodyCopy={data.whyUsCopy}
                />
              </section>
              <section id="guarantee">
                <Guarantee
                  headline={data.guaranteeHeadline}
                  copy={data.guaranteeCopy}
                  imageSource={data.guaranteeImage.fields.file.url}
                />
              </section>
              <section id="cta" css={{ background: `${primaryColor}` }}>
                <CTA
                  headline={data.ctaHeadline}
                  copy={data.ctaSubHeadline}
                  buttonLabel={data.cta.fields.buttonLabel}
                  phoneNumber={phoneNumber}
                />
              </section>
            </main>

            <Footer navList={['Services', 'Testimonials', 'Why Us']} {...footerData} />
          </Fragment>
          )}
      />
    )}
  />
)
