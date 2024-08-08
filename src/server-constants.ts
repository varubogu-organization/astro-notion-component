export const NOTION_API_SECRET = process.env.NOTION_API_SECRET || ''

export const BASE_PATH = process.env.BASE_PATH || '' // <- Set sub directory path if you want. e.g. /docs/

export const NUMBER_OF_POSTS_PER_PAGE = 10
export const REQUEST_TIMEOUT_MS = parseInt(
    import.meta.env.REQUEST_TIMEOUT_MS || '10000',
    10
)
export const ENABLE_LIGHTBOX = import.meta.env.ENABLE_LIGHTBOX
