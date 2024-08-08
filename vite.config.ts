import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@components': resolve(__dirname, 'src/components'),
            '@images': resolve(__dirname, 'src/images'),
            '@integrations': resolve(__dirname, 'src/integrations'),
            '@layouts': resolve(__dirname, 'src/layouts'),
            '@lib': resolve(__dirname, 'src/lib'),
            '@pages': resolve(__dirname, 'src/pages'),
            '@styles': resolve(__dirname, 'src/styles'),
            '@templates': resolve(__dirname, 'src/templates'),
            '@server-constants.ts': resolve(
                __dirname,
                'src/server-constants.ts'
            ),
        },
    },
})
