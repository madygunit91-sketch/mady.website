import urllib.request
import re

url = "https://scfo.de/"
try:
    response = urllib.request.urlopen(url)
    html = response.read().decode('utf-8')
    print("Length of HTML:", len(html))
    
    # Find all script tags
    scripts = re.findall(r'<script.*?</script>', html, re.DOTALL)
    print("Found", len(scripts), "scripts.")
    for script in scripts:
        if 'three' in script.lower() or 'glb' in script.lower() or 'gsap' in script.lower():
            print("Found interesting script:", script[:200])
except Exception as e:
    print("Error:", e)
