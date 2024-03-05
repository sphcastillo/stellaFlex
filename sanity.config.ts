/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works

import {schema} from './sanity/schema'
import StudioNavbar from './components/StudioNavbar'
import Logo from './components/Logo'
import { presentationTool } from 'sanity/presentation';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    presentationTool ({
      previewUrl: {
        draftMode: {
          enable: '/api/draft',
        }
      }
    })
  ],
  icon: Logo,
  logo: Logo,
  title: "StellaFlex Sanity Studio",
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar
    }
  },
})
