/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly NOTION_API_SECRET: string
    readonly BASE_PATH: string
    readonly REQUEST_TIMEOUT_MS: string
    readonly ENABLE_LIGHTBOX: string
    readonly PUBLIC_GA_TRACKING_ID: string
    readonly DATABASE_ID: string
    readonly PAGE_ID1: string
    readonly COMPONENT_ID1: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}