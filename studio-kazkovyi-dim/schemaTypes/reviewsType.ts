import { defineField, defineType } from 'sanity'

export const reviewsType = defineType({
    name: 'reviews',
    title: 'Reviews',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'review',
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