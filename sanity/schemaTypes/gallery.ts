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
          { title: 'Dining Experience', value: 'dining' },
          { title: 'Events & Functions', value: 'events' },
          { title: 'Scenic Views', value: 'scenic' },
          { title: 'Dishes Showcase', value: 'dishes' }
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
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Important for SEO and accessibility'
        })
      ],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.max(200)
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (optional)'
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
        dining: 'Dining Experience',
        events: 'Events & Functions',
        scenic: 'Scenic Views',
        dishes: 'Dishes Showcase'
      }
      return {
        title: title,
        subtitle: categoryTitles[category] || category,
        media: media
      }
    }
  }
})