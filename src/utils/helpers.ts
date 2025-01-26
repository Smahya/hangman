export function capitalize(category: string) {
  // Handle hyphenated categories by capitalizing each word
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
