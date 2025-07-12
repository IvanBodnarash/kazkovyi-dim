import { defineField, defineType } from 'sanity'

export const aboutUs = defineType({
    name: 'aboutUs',
    title: 'AboutUs',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            type: 'image',
        }),
        defineField({
            name: 'description',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
    ],
})