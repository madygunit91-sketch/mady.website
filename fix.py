import re
import sys

with open('/Users/syedhassan/Desktop/scfo.de/scfo-react-source/src/App.jsx', 'r') as f:
    content = f.read()

# We need to find all <AnimatedSection> blocks.
# The issue is that the section id="aus-einer-hand" is duplicated,
# and id="vom-briefing-zum-launch" is duplicated.

# Let's just find the exact block from the FIRST `<AnimatedSection><section id="aus-einer-hand"`
# to the end of the duplicate `<AnimatedSection><section id="vom-briefing-zum-launch"`
# and replace it with a clean single copy.

# We will use regex to capture the entire block.
pattern = r'(<AnimatedSection><section id="aus-einer-hand".*?</AnimatedSection>).*?(<AnimatedSection><section id="aus-einer-hand".*?</AnimatedSection>)'
matches = re.findall(pattern, content, flags=re.DOTALL)

if not matches:
    print("Could not find duplicate aus-einer-hand sections.")
else:
    print(f"Found {len(matches)} duplicates of aus-einer-hand.")
    
# Let's be very specific:
# We want only ONE aus-einer-hand and ONE vom-briefing-zum-launch

def extract_section(content, section_id):
    pattern = rf'(<AnimatedSection><section id="{section_id}".*?</AnimatedSection>)'
    matches = re.findall(pattern, content, flags=re.DOTALL)
    return matches

aus_matches = extract_section(content, "aus-einer-hand")
vom_matches = extract_section(content, "vom-briefing-zum-launch")

print(f"aus-einer-hand count: {len(aus_matches)}")
print(f"vom-briefing-zum-launch count: {len(vom_matches)}")

# To fix this, we can just replace ALL occurrences of aus-einer-hand with the LAST one (which has the correct 3D wrappers)
# and replace ALL occurrences of vom-briefing-zum-launch with the LAST one.

# Actually, the last aus-einer-hand has the 3D wrappers.
# Wait, my replace_file_content replaced the FIRST one and then created a duplicate.

if len(aus_matches) >= 2 and len(vom_matches) >= 2:
    # Remove all of them from the content
    for match in aus_matches:
        content = content.replace(match, "")
    for match in vom_matches:
        content = content.replace(match, "")
        
    # Now insert the correct versions exactly where the first one used to be
    # Let's find the section BEFORE them: id="arbeiten"
    arbeiten_pattern = r'(<AnimatedSection><section aria-labelledby="work-heading" .*?</AnimatedSection>)'
    arbeiten_match = re.search(arbeiten_pattern, content, flags=re.DOTALL)
    
    if arbeiten_match:
        # We will insert right after arbeiten
        insert_pos = arbeiten_match.end()
        
        correct_aus = aus_matches[-1] # The last one has my 3D wrapper fix
        correct_vom = vom_matches[-1] # The last one is the original uncorrupted one
        
        new_content = content[:insert_pos] + correct_aus + correct_vom + content[insert_pos:]
        
        with open('/Users/syedhassan/Desktop/scfo.de/scfo-react-source/src/App.jsx', 'w') as f:
            f.write(new_content)
        print("Successfully fixed App.jsx")
    else:
        print("Could not find arbeiten section.")
else:
    print("Did not find expected number of duplicates.")
