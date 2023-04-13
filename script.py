import os
from pathlib import Path

folder_path = 'books'
html_file = 'file_links.html'

# Get a list of all files in the folder
files = os.listdir(folder_path)

# Create an empty list to store the HTML links
links = []

# Loop through the files and create links for HTML files
for file in files:
    if file.endswith('.html'):
        file_path = Path(folder_path) / file
        link_name = file_path.stem
        link = f'<a href="{file}">{link_name}</a><br>'
        links.append(link)

# Create the HTML file with the links
with open(html_file, 'w') as f:
    f.write('<html>\n<body>\n')
    f.write('\n'.join(links))
    f.write('</body>\n</html>')
