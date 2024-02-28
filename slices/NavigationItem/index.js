/**
 * @typedef {import("@prismicio/client").Content.NavigationItemSlice} NavigationItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavigationItemSlice>} NavigationItemProps
 * @param {NavigationItemProps}
 */

import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/react";

const NavigationItem = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextLink field={slice.primary.link}>
      <PrismicRichText field={slice.primary.label} />
            </PrismicNextLink>
    </section>
  );
};

export default NavigationItem;
