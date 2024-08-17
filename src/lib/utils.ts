export type Dictionary<TKey extends string | number |symbol, TValue> = {
    [key in TKey]: TValue
}

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
