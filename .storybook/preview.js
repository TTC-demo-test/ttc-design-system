import '../src/styles/app.css'
import { definePreview } from '@storybook/web-components-vite'
import addOnDocs from '@storybook/addon-docs'

export default definePreview({
    addons: [addOnDocs()],
    tags: ['autodocs']
})

export const parameters = {
    layout: 'centered',
    docs: {
        codePanel: true,
        source: {
            transform: (code) => code.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
        }
    },
    a11y: {
        // 'todo' - show a11y violations in the test UI only
        // 'error' - fail CI on a11y violations
        // 'off' - skip a11y checks entirely
        test: 'todo'
    }
}