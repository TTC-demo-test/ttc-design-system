import '../src/styles/app.css'
import { definePreview } from '@storybook/web-components-vite'
import addOnDocs from '@storybook/addon-docs'

export default definePreview({
    addons: [addOnDocs()],
    tags: ['autodocs']
})

export const parameters = {
    layout: 'centered'
}