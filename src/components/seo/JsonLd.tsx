/**
 * Renders a JSON-LD structured-data block. Use one component per schema object
 * so search and answer engines can parse each graph node independently.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
