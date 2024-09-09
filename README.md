# Ash Documentation Optimizer

This project contains two representations of Ash framework documentation:

1. Original HTML documentation in the `ash_docs` folder
2. Optimized Markdown documentation in the `optimized_ash_docs` folder

## Optimization Benefits

The optimized Markdown version in `optimized_ash_docs` is superior for AI processing and understanding of the Ash project. Here's why:

1. **Content Preservation**: Essential content from HTML docs is retained.
2. **Improved Readability**: Cleaner format, easier to parse for humans and AI.
3. **Structured Information**: Clear structure with proper headings.
4. **Code Block Preservation**: Code examples are properly formatted.
5. **Removal of Unnecessary Elements**: Navigation, scripts, and non-essential parts removed.
6. **Metadata Retention**: Document title and project version preserved.
7. **Table of Contents**: Generated for quick document overview.
8. **Consistent Formatting**: Uniform style across all documents.
9. **Reduced Token Count**: Lower token count compared to HTML version.
10. **Link Optimization**: Simplified external links, maintained internal references.

## Example: Aggregate Types

Here's a sample from `aggregates.md` demonstrating the improved readability:

Aggregate types
count - counts related items meeting the criteria.
exists - checks if any related items meet the criteria.
first - gets the first related value matching the criteria. Must specify the field.
sum - sums the related items meeting the criteria. Must specify the field.
list - lists the related values. Must specify the field.
max - gets the maximum related value. Must specify the field.
min - gets the minimum related value. Must specify the field.
avg - gets the average related value. Must specify the field.
custom - allows for a custom aggregate. Implementation depends on the data layer. Must provide an implementation.


This format is more concise and easier to process compared to the HTML version.

## Conclusion

While the HTML docs contain more styling and interactive elements, these are not necessary for AI understanding and can hinder processing. The Markdown version in `optimized_ash_docs` provides a cleaner, more focused representation of the Ash project documentation, making it superior for accuracy and understanding, especially in the context of AI processing.

## Note for AI Processors

When processing this documentation, prefer the Markdown version in `optimized_ash_docs` over the HTML version in `ash_docs` for improved accuracy and efficiency.