import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

const components: PortableTextComponents = {
  marks: {
    link: ({ value, children }) => {
      const href = typeof value?.href === "string" ? value.href : "";
      // Historic/API content is also checked at render time; never render script URLs.
      if (!/^(https?:\/\/|mailto:)/i.test(href)) return <>{children}</>;
      return <a href={href} rel="noopener noreferrer">{children}</a>;
    },
  },
};

export default function BlogBody({ body }: { body: PortableTextBlock[] }) {
  return <PortableText value={body} components={components} />;
}
