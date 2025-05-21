import { type SchemaTypeDefinition } from 'sanity'
import siteSettings from './siteSettings'
import comment from './comment'
import message from './message'
import post from './post'
import author from './author'
import category from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, comment, message, post, author, category],
}
