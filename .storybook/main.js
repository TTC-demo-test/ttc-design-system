const config = {
    stories: ['../src/**/*.stories.js', '../src/**/*.mdx'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-a11y',
        '@storybook/addon-vitest'
    ],
    framework: '@storybook/web-components-vite'
}

export default config