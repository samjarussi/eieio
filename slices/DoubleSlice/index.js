/**
 * @typedef {import("@prismicio/client").Content.DoubleSliceSlice} DoubleSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DoubleSliceSlice>} DoubleSliceProps
 * @param {DoubleSliceProps}
 */

import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const DoubleSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      class="grid grid-cols-2 gap-4"
    >

      <div>
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.description} />
      <PrismicNextLink field={slice.primary.link}><>{slice.primary.text}</></PrismicNextLink>
      </div>
      
      <div>
        <PrismicNextImage field={slice.primary.image} />
      </div>
    </section>
  );
};

export default DoubleSlice;
