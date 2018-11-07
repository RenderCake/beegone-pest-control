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
  contactCopy: 'Need Help?',
  SocialCopy: 'Follow us on social media',
}

const pestsData = {
  pestsTitle: 'Pests we take care of',
  pestsImages: [
    { title: 'spider', url: '' },
    { title: 'mice', url: '' },
    { title: 'beetles', url: '' },
    { title: 'yellow jackets', url: '' },
    { title: 'bedbugs', url: '' },
    { title: 'earwigs', url: '' },
    { title: 'rats', url: '' },
    { title: 'ants', url: '' },
    { title: 'wasps', url: '' },
    { title: 'cockroaches', url: '' },
  ],
}
export default () => (
  <SiteData
    render={({
      siteData: {
        siteTitle,
        phoneNumber,
        email,
        facebookLink,
        twitterLink,
        linkedInLink,
        instagramLink,
      },
    }) => (
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
                  heroIllustration={data.heroImage.fields.file.url}
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
                  {...pestsData}
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
                  link={data.cta.fields.link}
                  phoneNumber={phoneNumber}
                />
              </section>
            </main>

            <Footer
              email={email}
              phoneNumber={phoneNumber}
              ctaLink={data.cta.fields.link}
              facebookLink={facebookLink}
              twitterLink={twitterLink}
              linkedinLink={linkedInLink}
              instagramLink={instagramLink}
              navList={['Services', 'Testimonials', 'Why Us']}
              {...footerData}
            />
          </Fragment>
        )}
      />
    )}
  />
)
