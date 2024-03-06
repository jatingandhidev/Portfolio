import { createClient } from 'contentful'

const useContentful = () => {
  const client = createClient({
    space: '2c1bhu1gzv2u',
    accessToken: 'UnGOVo_lY4-KqdUdoD3KCvu07mZj225oUucxawmoJ08',
    host: 'preview.contentful.com',
  })

  const getData = async () => {
    try {
      const homeEntries = await client.getEntries({
        content_type: 'portfolioHome',
        select: 'fields',
      })

      const sanitizedHomeEntries = homeEntries.items.map((item) => {
        return { ...item.fields }
      })

      const aboutEntries = await client.getEntries({
        content_type: 'portfolioAbout',
        select: 'fields',
      })

      const sanitizedAboutEntries = aboutEntries.items.map((item) => {
        return { ...item.fields }
      })

      const contactEntries = await client.getEntries({
        content_type: 'portfolioContact',
        select: 'fields',
      })

      const sanitizedContactEntries = contactEntries.items.map((item) => {
        return { ...item.fields }
      })

      const projectEntries = await client.getEntries({
        content_type: 'portfolioProject',
        select: 'fields',
      })

      const sanitizedProjectEntries = projectEntries.items.map((item) => {
        return { ...item.fields }
      })

      return {
        sanitizedHomeEntries,
        sanitizedAboutEntries,
        sanitizedProjectEntries,
        sanitizedContactEntries,
      }
    } catch (error) {
      console.log(error)
    }
  }
  return { getData }
}
export default useContentful
