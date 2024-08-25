export const pathJoin = (path: string, subPath: string) => {
  return (
    '/' +
    path
      .split('/')
      .concat(subPath.split('/'))
      .filter((p) => p)
      .join('/')
  )
}

export type Dictionary<TKey extends string | number | symbol, TValue> = {
  [key in TKey]: TValue
}

export const notionUrlToPageId = (url: string | URL) => {
  if (url instanceof URL) {
    url = url.toString()
  }
  const match = url.match(/https:\/\/(www\.)?notion\.so\/[^/]*([0-9a-f]{32})/);
  if (!match) {
    throw new Error('Invalid Notion URL');
  }
  return match[2];
}