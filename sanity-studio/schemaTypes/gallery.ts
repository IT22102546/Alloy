import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Image Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(60)
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Food & Beverage', value: 'food' },
          { title: 'Customer Snapshots', value: 'customer' }
        ],
        layout: 'dropdown'
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Important for SEO and accessibility'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.max(200)
    })
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'image'
    },
    prepare(selection) {
      const { title, category, media } = selection
      const categoryTitles: { [key: string]: string } = {
        food: 'Food & Beverage',
        customer: 'Customer Snapshots'
      }
      return {
        title: title,
        subtitle: categoryTitles[category] || category,
        media: media
      }
    }
  }
})