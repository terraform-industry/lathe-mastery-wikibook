# Contributing Guidelines

Thank you for your interest in improving The Lathe Mastery Wiki Book!
Contributions are welcomed that enhance clarity, accuracy, or completeness.

## How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b improve-threading-chapter`)
3. Make your changes following our style guide
4. Run quality checks (see below)
5. Submit a pull request with clear description

## Style Guide

### Markdown Standards

- **Line length**: Maximum 80 characters per line
- **Sentences**: One sentence per line for complex paragraphs
- **Headings**: Use ATX-style (#) only, never skip levels
- **Lists**: Use `-` for unordered, `1.` for ordered
- **Code blocks**: Triple backticks with language identifier
- **Links**: Prefer reference-style `[text][ref]` with definitions at end
- **Tables**: Pad pipes with spaces, use alignment syntax
- **Whitespace**: One blank line before/after major elements

## Images and Diagrams

Visual content is highly valuable for machining topics.
Graphics help clarify complex concepts, tool geometry, and setup procedures.
We encourage contributors to add high-quality images and diagrams.

### Image Organization

- Store images in `/docs/images/` directory
- Use subdirectories by chapter:
  - `/docs/images/01-foundations/`
  - `/docs/images/02-tool-language/`
  - `/docs/images/03-basic-operations/`
  - Continue pattern for all chapters
- Name files descriptively:
  - `tool-geometry-rake-angle.png`
  - `lathe-compound-rest.jpg`
  - `threading-setup-step-3.png`
- Prefer lowercase with hyphens for filenames
- No spaces or special characters in filenames

### Supported Formats

- **PNG**: Best for screenshots, diagrams with text, technical drawings
- **JPG/JPEG**: Best for photographs of machines, setups, finished parts
- **SVG**: Ideal for technical diagrams, scalable without quality loss
- **GIF**: For animated demonstrations (use sparingly due to file size)

### Adding Images to Content

**Basic syntax:**

```markdown
![Lathe compound rest](../images/01-foundations/compound-rest.jpg)
```

**With caption:**

```markdown
<!-- markdownlint-disable-next-line MD013 -->
![Tool geometry diagram](../images/02-tool-language/rake-angle.png "Rake angle affects cutting performance")
```

**Size control using attr_list:**

```markdown
![Setup photo](../images/03-basic-operations/setup.jpg){: width="600" }
```

**Alignment:**

```markdown
![Diagram](../images/chapter/diagram.png){: align="center" }
```

**Combined attributes:**

```markdown
![Image](../images/chapter/file.png){: width="500" align="center" }
```

### Creating Effective Visual Content

**Technical diagrams should show:**

- Tool geometry with clear angle labels (rake, clearance, relief)
- Cutting force vectors and directions
- Workpiece coordinate systems
- Safety zones and danger areas

**Setup photographs should include:**

- Clear view of tool positioning
- Workpiece clamping arrangement
- Machine control settings (when relevant)
- Proper lighting to show detail

**Process documentation:**

- Step-by-step operation sequences
- Before/after comparisons
- Common mistakes vs. correct technique
- Measurement and inspection procedures

### Image Quality Guidelines

**Resolution standards:**

- Detail diagrams: 1200px width minimum
- Inline images: 800px width typical
- Screenshots: Native resolution, cropped appropriately
- Print-quality: 300 DPI for complex technical drawings

**File optimization:**

- Target under 500KB per image when possible
- Use appropriate compression for content type
- PNG for line art, JPG for photographs
- Remove metadata and embedded profiles

**Visual consistency:**

- Use similar color schemes within chapters
- Maintain consistent arrow styles and labels
- Standard font sizes for diagram text
- Uniform background colors (white/transparent preferred)

### Accessibility Requirements

**Alt text guidelines:**

- Describe what's shown, not just the caption
- Include key technical details visible in image
- For complex diagrams, describe spatial relationships
- Example: "Lathe tool showing 15-degree rake angle with chip curl"

**Complex content support:**

- Provide text description below intricate diagrams
- List key measurements or settings shown
- Explain any color coding or symbol meanings

### Tools and Resources

**Free diagram creation:**

- **draw.io**: Web-based, excellent for technical diagrams
- **Inkscape**: Vector graphics, perfect for scalable diagrams
- **LibreOffice Draw**: Good for annotated technical drawings

**Photo editing:**

- **GIMP**: Full-featured image editor
- **Krita**: Excellent for annotations and markup
- **ImageOptim**: Lossless file size optimization

**Screenshot capture:**

- **Flameshot** (Linux): Annotation tools built-in
- **Greenshot** (Windows): Free with editing features
- **Skitch** (macOS): Simple annotation tool

**Optimization tools:**

- **TinyPNG**: Web-based PNG/JPG compression
- **ImageOptim**: Batch optimization for multiple formats
- **SVGO**: SVG optimization and cleanup

### Examples

**Simple inline image:**

```markdown
The compound rest angle affects the threading operation significantly.
Set the compound to 29.5 degrees for 60-degree threads:

![Compound rest at 29.5 degrees](../images/04-threading/compound-angle.jpg)

This positioning reduces tool pressure during the cutting operation.
```

**Detailed technical diagram:**

```markdown
## Tool Geometry Fundamentals

Understanding rake angles is critical for effective cutting:

<!-- markdownlint-disable-next-line MD013 -->
![Tool rake angle diagram](../images/02-tool-language/rake-angles.svg "Positive rake (left) vs negative rake (right)"){: width="700" align="center" }

The diagram shows how positive rake angles (typically 5-15 degrees)
reduce cutting forces but may weaken the tool edge.
Negative rake angles provide stronger cutting edges for interrupted cuts.
```

**Step-by-step process with multiple images:**

```markdown
### Setting Up for Parting Operations

1. **Mount the parting tool** perpendicular to the work:

   ![Parting tool setup](../images/05-parting/tool-mount.jpg){: width="500" }

2. **Adjust tool height** to centerline:

<!-- markdownlint-disable-next-line MD013 -->

![Tool height adjustment](../images/05-parting/height-check.jpg){: width="500" }

3. **Support long workpieces** with steady rest:

   ![Steady rest support](../images/05-parting/steady-rest.jpg){: width="500" }
```

### Content Standards

- **Voice**: Professional yet approachable, encouraging tone
- **Safety**: Always include relevant safety warnings
- **Prerequisites**: Clearly state required prior knowledge
- **Examples**: Provide practical, tested examples
- **Cross-references**: Link to related topics
- **Word limit**: Keep sections under 1500 words

### Frontmatter Requirements

Every content file must include:

```yaml
---
title: "Descriptive Title"
author: Author Name
date: YYYY-MM-DD
version: X.Y.Z
tags: [relevant, keywords]
prerequisites: [chapter/section] or none
---
```

## Quality Checks

Before submitting:

1. **Markdown lint**: `markdownlint **/*.md` (must pass with zero errors)
2. **Spell check**: Review for technical accuracy
3. **Links**: Verify all cross-references work
4. **Code**: Test any code examples
5. **Prerequisites**: Confirm listed dependencies
6. **Image links**: Verify all image paths are correct
7. **Alt text**: Check all images have descriptive alt text
8. **File sizes**: Review image file sizes (target <500KB each)

## Types of Contributions

### Content Improvements

- Clarifying existing explanations
- Adding missing safety warnings
- Improving technical accuracy
- Adding helpful diagrams/illustrations

### New Sections

- Fill gaps in existing chapters
- Add advanced techniques
- Create troubleshooting guides
- Develop practice exercises

### Corrections

- Fix technical errors
- Update outdated information
- Correct typos or grammar
- Improve clarity

## Commit Messages

Use clear, descriptive commit messages:

- `fix: Correct feed rate calculation in Chapter 9`
- `feat: Add section on thread pitch measurement`
- `docs: Improve safety warnings for parting operations`
- `style: Format tables in measurement chapter`

## Code of Conduct

- Be respectful and constructive
- Focus on improving the content
- Welcome newcomers to machining
- Share knowledge generously

## Questions?

Open an issue with the `question` label if you need clarification.
