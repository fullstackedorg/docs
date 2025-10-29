export function stripMarkdown(markdown: string): string {
  // Comprehensive Markdown stripping using a series of regular expressions.
  // This version handles more edge cases and common Markdown patterns.

  // 1. Remove headings (including ATX and Setext styles)
  markdown = markdown.replace(/^(#+)(.*)$/gm, '$2').trim(); // ATX headings
  markdown = markdown.replace(/^(=|-){3,}\s*$/gm, '').trim(); // Setext headings

  // 2. Remove bold and italic styles (covers *, **, _, __)
  markdown = markdown.replace(/(\*\*|__)(.*?)\1/g, '$2').trim(); // Bold
  markdown = markdown.replace(/(\*|_)(.*?)\1/g, '$2').trim();   // Italic

  // 3. Remove links and images (both inline and reference style)
  markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/g, '$1').trim(); // Inline links/images
  markdown = markdown.replace(/\[(.*?)\]\[(.*?)\]/g, '$1').trim(); // Reference links/images
  markdown = markdown.replace(/\[(.*?)\]:\s*(.*)/g, '').trim(); // Link definitions

  // 4. Remove code blocks (both inline and fenced)
  markdown = markdown.replace(/`(.*?)`/g, '$1').trim(); // Inline code
  markdown = markdown.replace(/```[\w\W]*?```/g, '').trim(); // Fenced code blocks

  // 5. Remove blockquotes
  markdown = markdown.replace(/^>\s?(.*)$/gm, '$1').trim();

  // 6. Remove lists (ordered and unordered)
  markdown = markdown.replace(/^([\*\+\-]\s+)(.*)$/gm, '$2').trim(); // Unordered lists
  markdown = markdown.replace(/^(\d+\.\s+)(.*)$/gm, '$2').trim();   // Ordered lists

  // 7. Remove HTML tags
  markdown = markdown.replace(/<[^>]*>/g, '').trim();

  // 8. Remove horizontal rules
  markdown = markdown.replace(/^[-=\*]{3,}\s*$/gm, '').trim();

   // 9. Remove escaped characters
   markdown = markdown.replace(/\\([`*_-])/g, '$1').trim();

  // 10. Remove tables (simple approach, may need refinement)
  markdown = markdown.replace(/\|.*?\|/g, '').trim();

  // Remove multiple blank lines
  markdown = markdown.replace(/\n{2,}/g, '\n').trim();

  return markdown.trim();
}
