import { PrismicLink, PrismicText } from '@prismicio/react'

export function Navigation({ navigation }) {
  return (
    <nav>
      <ul>
        {/* Renders top-level links. */}
        {navigation.data.slices.map((slice) => {
          return (
            <li key={slice.id}>
              <PrismicLink field={slice.primary.link}>
                <PrismicText field={slice.primary.label} />
              </PrismicLink>

              {/* Renders child links, if present. */}
              {slice.items.length > 0 && (
                <ul>
                  {slice.items.map((item) => {
                    return (
                      <li key={JSON.stringify(item)}>
                        <PrismicLink field={item.child_link}>
                          <PrismicText field={item.child_name} />
                        </PrismicLink>
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
  )
}