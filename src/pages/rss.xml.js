import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function  GET(contex) {
    return rss({
        title: "My Astro Blog",
        description: "Learning to use Astro",
        site: contex.site,
        items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
        customData:`<language>en-us<language>`,
    });
}