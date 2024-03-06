export type Post {
    id: number,
    title: {
        rendered: string
    },
    featured_media?: number,
    acf: any,
}