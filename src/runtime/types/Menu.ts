export type Menu = {
    id: number,
    title: {
        rendered: string
    },
    status: string,
    url: string,
    attr_title: string,
    description: string,
    type: string,
    type_label: string,
    object: string,
    object_id: number,
    parent: number,
    menu_order: number,
    target: string,
    classes: string[],
    xfn: string[],
    invalid: boolean,
    meta: any[],
    menus: number,
    acf: any[],
    _links: {
        self: { href: string }[],
        collection: { href: string }[],
        about: { href: string }[],
        "wp:term": {
            taxonomy: string,
            embeddable: boolean,
            href: string
        }[],
        "wp:menu-item-object": {
            post_type: string,
            embeddable: boolean,
            href: string
        }[],
        curies: {
            name: string,
            href: string,
            templated: boolean
        }[]
    }
}