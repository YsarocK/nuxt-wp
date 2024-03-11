export type Post = {
    id: number,
    date: string,
    date_gmt: string,
    guid: {
        rendered: string
    },
    modified: string,
    modified_gmt: string,
    slug: string,
    status: string,
    type: string,
    link: string,
    title: {
        rendered: string
    },
    content: {
        rendered: string,
        protected: boolean
    },
    featured_media: number,
    template: string,
    realisations_types: any[],
    _links: {
        self: { href: string }[],
        collection: { href: string }[],
        about: { href: string }[],
        "wp:attachment": { href: string }[],
        "wp:term": {
            taxonomy: string,
            embeddable: boolean,
            href: string
        }[],
        curies: {
            name: string,
            href: string,
            templated: boolean
        }[]
    },
    acf: any
}