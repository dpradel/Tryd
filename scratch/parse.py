import re

with open("c:\\Users\\dpradel\\OneDrive - Nelogica\\Documentos\\Tryd\\css\\styles.css", "r", encoding="utf-8") as f:
    css = f.read()

lines = css.splitlines()
for i, line in enumerate(lines):
    if "overflow" in line.lower():
        print(f"Line {i+1}: {line.strip()}")
