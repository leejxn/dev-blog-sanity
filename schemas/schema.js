// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: 'author',
      type: 'document',
      title: 'Author',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        { name: 'avatar', title: 'Avatar', type: 'image' },
      ],
    },
    {
      name: 'blog',
      type: 'document',
      title: 'Blog',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'title',
        },
        { name: 'subtitle', type: 'string', title: 'Subtitle' },
        { name: 'coverImage', title: 'Cover Image', type: 'image' },
        { name: 'post', type: 'string', title: 'Post' },

        {
          name: 'date',
          title: 'date',
          type: 'datetime',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: [{ type: 'author' }],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'slug',
          type: 'slug',
          title: 'Slug',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ]),
});
