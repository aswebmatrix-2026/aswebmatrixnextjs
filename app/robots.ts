// app/robots.txt/route.ts
import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /private/
Disallow: /*.json$
Disallow: /*.xml$

Sitemap: https://www.aswebmatrix.com/sitemap.xml
Host: https://www.aswebmatrix.com
`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}