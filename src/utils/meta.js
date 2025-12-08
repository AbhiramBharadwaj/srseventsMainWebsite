export function setMeta({ title, description, keywords = [] }) {
  if (title) {
    document.title = title;
  }

  const ensureTag = (name, content) => {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", name);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  };

  if (description) {
    ensureTag("description", description);
  }

  if (keywords.length) {
    ensureTag("keywords", keywords.join(", "));
  }
}
