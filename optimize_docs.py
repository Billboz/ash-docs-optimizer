import os
import re
from bs4 import BeautifulSoup
import markdown2
import html2text

def extract_metadata(soup):
    metadata = {}
    metadata['title'] = soup.title.string if soup.title else ''
    meta_tags = soup.find_all('meta')
    for tag in meta_tags:
        if 'name' in tag.attrs and 'content' in tag.attrs:
            metadata[tag['name']] = tag['content']
    return metadata

def clean_html(soup):
    # Remove scripts, styles, and navigation elements
    for element in soup(["script", "style", "nav", "header", "footer"]):
        element.decompose()
    return soup

def html_to_markdown(html_content):
    h = html2text.HTML2Text()
    h.body_width = 0  # Disable line wrapping
    return h.handle(html_content)

def optimize_code_blocks(markdown_content):
    def code_replacer(match):
        code = match.group(1)
        # Remove leading/trailing whitespace and empty lines
        code = "\n".join(line for line in code.split("\n") if line.strip())
        return f"```\n{code}\n```"
    
    return re.sub(r'```[\s\S]*?```', code_replacer, markdown_content)

def optimize_links(markdown_content, base_url):
    def link_replacer(match):
        text, url = match.groups()
        if url.startswith(base_url):
            return f"[{text}]({os.path.relpath(url, base_url)})"
        return f"[{text}](external_link)"
    
    return re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', link_replacer, markdown_content)

def generate_toc(markdown_content):
    lines = markdown_content.split('\n')
    toc = []
    for line in lines:
        if line.startswith('#'):
            level = line.count('#')
            title = line.strip('#').strip()
            toc.append(f"{'  ' * (level - 1)}- {title}")
    return "## Table of Contents\n\n" + "\n".join(toc) + "\n\n"

def process_documentation(input_dir, output_dir, base_url):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    index = []

    for root, dirs, files in os.walk(input_dir):
        for file in files:
            if file.endswith('.html'):
                input_path = os.path.join(root, file)
                relative_path = os.path.relpath(input_path, input_dir)
                output_path = os.path.join(output_dir, relative_path.replace('.html', '.md'))

                with open(input_path, 'r', encoding='utf-8') as f:
                    html_content = f.read()

                soup = BeautifulSoup(html_content, 'html.parser')
                metadata = extract_metadata(soup)
                cleaned_soup = clean_html(soup)
                markdown_content = html_to_markdown(str(cleaned_soup))
                markdown_content = optimize_code_blocks(markdown_content)
                markdown_content = optimize_links(markdown_content, base_url)
                
                toc = generate_toc(markdown_content)
                
                final_content = f"# {metadata['title']}\n\n"
                final_content += f"Project: {metadata.get('project', '')}\n\n"
                final_content += toc
                final_content += markdown_content

                os.makedirs(os.path.dirname(output_path), exist_ok=True)
                with open(output_path, 'w', encoding='utf-8') as f:
                    f.write(final_content)

                index.append(f"- [{metadata['title']}]({relative_path.replace('.html', '.md')})")

    # Create index file
    with open(os.path.join(output_dir, 'index.md'), 'w', encoding='utf-8') as f:
        f.write("# Ash Documentation Index\n\n")
        f.write("\n".join(index))

if __name__ == "__main__":
    input_dir = "ash_docs"
    output_dir = "optimized_ash_docs"
    base_url = "https://hexdocs.pm/ash/"  # Adjust this to match your documentation base URL
    process_documentation(input_dir, output_dir, base_url)