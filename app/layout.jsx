import { Inter, Space_Grotesk } from 'next/font/google'
import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const space_grotesk = Space_Grotesk({
  weight: ['600'],
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";

/**
 * @param {{ children: React.ReactNode }}
 */
export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${space_grotesk.variable}`}>
      <body className="overflow-x-hidden antialiased">
        {/* @ts-expect-error Async Server Component */}
        <Navigation/>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}

async function Navigation() {
  const client = createClient();
  const navigation = await client.getSingle("navigation"); // UPDATE THE UID TO MATCH YOURS

  return (
    <nav>
      <ul>
        {/* Renders top-level links. */}
        {navigation.data.slices.map((slice) => {
          return (
            <li key={slice.id}>
              <PrismicNextLink field={slice.primary.link}>
                <PrismicText field={slice.primary.link_label} />
              </PrismicNextLink>

              {/* Renders child links, if present. */}
              {slice.items.length > 0 && (
                <ul>
                  {slice.items.map((item) => {
                    return (
                      <li key={JSON.stringify(item)}>
                        <PrismicNextLink field={item.child_link}>
                          <PrismicText field={item.child_name} />
                        </PrismicNextLink>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  );
}