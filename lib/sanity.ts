// lib/sanity.ts
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '57dstcm0',
  dataset: 'production', 
  useCdn: true,
  apiVersion: '2023-10-01',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  if (!source) return null
  return builder.image(source)
}