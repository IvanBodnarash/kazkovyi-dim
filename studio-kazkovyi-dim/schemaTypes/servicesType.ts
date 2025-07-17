import { defineField, defineType } from 'sanity'

export const servicesType = defineType({
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            type: 'image',
        }),
        defineField({
            name: 'duration',
            type: 'string',
        }),
        defineField({
            name: 'price',
            type: 'string',
        }),
        defineField({
            name: 'servicesList',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'servicesItems' }] }],
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
    ],
})