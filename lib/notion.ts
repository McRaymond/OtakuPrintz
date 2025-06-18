// lib/notion.ts
import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_TOKEN })

export async function fetchProducts() {
  const databaseId = process.env.NOTION_DB_ID!

  const response = await notion.databases.query({
    database_id: databaseId,
  })

  return response.results.map((page: any) => {
    const p = page.properties

    return {
      id: page.id,
      name: p.Name?.title?.[0]?.text?.content || "Untitled",
      price: p.Price?.number ?? 0,
      rating: p.Rating?.number ?? 0,
      reviews: p.Review?.number ?? 0,

      // ✅ Multi-select badge list
      badges: p.Badge?.multi_select?.map((b: any) => b.name.toLowerCase()) ?? [],

      category: p.Category?.rich_text?.[0]?.plain_text || "",

      // ✅ Support for both URL or Files
      media:
        p.Media?.url
          ? [
              {
                type: p.Media.url.endsWith(".mp4") ? "video" : "image",
                src: p.Media.url,
              },
            ]
          : p.Media?.files?.map((f: any) => {
              const url = f.file?.url || f.external?.url
              return {
                type: url?.endsWith(".mp4") ? "video" : "image",
                src: url,
              }
            }) ?? [],
    }
  })
}
