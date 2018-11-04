const Contentful = require('contentful')

const Client = Contentful.createClient({
  space: 'ta3xbuz6588u',
  accessToken: '1738eec16e0969be6f2a023ef8c77e03b861dd1bd100afaa5c22752cd312b949',
})

export async function getHomePage() {
  const homePage = await Client.getEntry('2DUaIuYAbik2kKkeCmYAm2')

  return homePage
}

export async function getSiteData() {
  const siteData = await Client.getEntry('56MZcb1CWIOw2u8UGyOS60')

  return siteData
}
