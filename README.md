# Ash Documentation Optimizer

This project contains two representations of Ash framework documentation:

1. Original HTML documentation in the `ash_docs` folder
2. Optimized Markdown documentation in the `optimized_ash_docs` folder

Customize this list to your liking along with the ash_docs_script.py and run the script to scrape the docs.
If you want to optimize the docs for LLM useyou can run the optimize_docs.py script.
Not tested yet but you can run the ash_docs_script.py and update the docs.
I realize this is an incomplete list, I will add more as I learn more about the Ash ecosystem, or you can submit a PR.
Active Github projects and a couple of Hex.pm packages:

1. ash
2. ash_admin
3. ash_appsignal
4. ash_archival
5. ash_authentication
6. ash_authentication_phoenix
7. ash_cloak
8.  ash_csv
9.  ash_double_entry
10. ash_graphql
11. ash_json_api
12. ash_money
13. ash_oban
14. ash_paper_trail
15. ash_phoenix
16. ash_policy_access -- only on Hex.pm
17. ash_policy_authorizer -- only on Hex.pm
18. ash_postgres
19. ash_slug
20. ash_sql
21. ash_sqlite
22. ash_state_machine
23. igniter
24. igniter_new -- only on Hex.pm
25. iterex
26. reactor
27. spark

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