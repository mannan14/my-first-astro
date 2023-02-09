import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get(){
    return rss(
        {
            title: 'Mannan Dassani | Blog',
            description: 'My journey in Development',
            site: 'https://mannandassani.netlify.app',
            items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
            customData:`<language>en-us</language>`,
            stylesheet:'', 
        }
    )
}