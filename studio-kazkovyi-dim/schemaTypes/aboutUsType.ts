import { defineField, defineType } from 'sanity'

export const aboutUsType = defineType({
    name: 'aboutUs',
    title: 'AboutUs',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            type: 'image',
        }),
        defineField({
            name: 'descriptionES',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'descriptionEN',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'descriptionUK',
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