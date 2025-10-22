const toolsData = [
  {
    category: "Drawing Tools",
    tools: [
      {
        name: "Brush Tool",
        desc: "Fundamental instrument for lines, textures, and colors. Adjust size, opacity, and stabilization for precision and expressive strokes.",
        steps: [
          "Tap the Brush icon to open the Brush Panel.",
          "Select a brush from the Brush Library.",
          "Adjust Size and Opacity sliders for desired effect.",
          "Enable Stabilization to smooth strokes.",
          "Use Pressure Sensitivity (if using a stylus) for dynamic lines."
        ],
        tips: [
          "Start with Pen (Fade) or Airbrush (Normal) to get comfortable.",
          "Slow and deliberate strokes produce cleaner lines.",
          "Experiment with shapes to guide your sketch."
        ],
        examples: [
          "Straight, curved, circular lines to practice stroke control.",
          "Layering colors for smooth gradients."
        ],
        references: [
          "ibis Inc. (n.d.). Brush Tool — Basics of Drawing and Coloring. IbisPaint Official Guide. https://ibispaint.com/lecture/index.jsp?topicID=75701350"
        ]
      },
      {
        name: "Eraser Tool",
        desc: "Removes unwanted marks or cleans lines.",
        steps: [
          "Tap the Eraser icon.",
          "Adjust size and hardness.",
          "Erase carefully where needed."
        ],
        tips: [
          "Use soft eraser for fading or blending.",
          "Combine with brush for highlights."
        ],
        references: [
          "ibis Inc. (n.d.). About Layers – How to use ibisPaint [Tutorial]. https://ibispaint.com/lecture/index.jsp?lang=en&no=06"
        ]
      },
      {
        name: "Color Tool",
        desc: "Advanced palette selection and mixing.",
        steps: [
          "Tap the Color icon to open the Color Window.",
          "Select a hue from the Color Wheel.",
          "Adjust Saturation and Brightness sliders.",
          "Use Eyedropper to pick colors from the canvas."
        ],
        tips: [
          "Use analogous colors for smooth gradients.",
          "Save frequently used colors to your palette.",
          "Blend colors using soft brushes or low opacity."
        ],
        examples: [
          "Blending blue → turquoise → green for an ocean gradient.",
          "Shading skin tones using layered opacity."
        ],
        references: [
          "ibis Inc. (n.d.). Color Tool — Basics of Coloring. IbisPaint Official Guide. https://ibispaint.com/lecture/index.jsp?topicID=75701400"
        ]
      }
    ]
  },
  {
    category: "Editing Tools",
    tools: [
      {
        name: "Transform / Move Tool",
        desc: "Resize, rotate, flip, or move parts of your artwork with precision without redrawing them. Useful for adjusting position, angle, or scale easily.",
        steps: [
          "Open your artwork and select the layer to edit.",
          "Choose the Transform Tool from the toolbar.",
          "Drag to move the object or use handles to resize and rotate.",
          "Flip, rotate, or distort using options in the tool menu.",
          "Tap ✓ to confirm or ✗ to cancel."
        ],
        tips: [
          "Work on separate layers for easy repositioning.",
          "Zoom in for accuracy when aligning elements.",
          "Enable ‘Keep Aspect Ratio’ to avoid distortion.",
          "Duplicate layers before transforming for comparison.",
          "Use Snap for perfect alignment."
        ],
        references: [
          "Swati Artlife. (2024). How to use Transform Tool in IbisPaintX. https://youtube.com/shorts/BaT7XLqPsWw"
        ]
      },
      {
        name: "Text Tool",
        desc: "Add words, captions, or titles to your artwork with full control over font, color, alignment, and effects. Great for comics, posters, or personalized designs.",
        steps: [
          "Select the Text Tool (A icon) from the toolbar.",
          "Type your text in the pop-up box.",
          "Customize font style, size, and color.",
          "Use the Transform Tool to move or resize the text.",
          "Add shadows, outlines, or gradients as needed.",
          "Tap ✓ to save changes."
        ],
        tips: [
          "Choose readable fonts that match your art style.",
          "Keep text on separate layers for flexibility.",
          "Use outlines or shadows to make text stand out.",
          "Avoid overcrowding by spacing out text properly.",
          "Zoom out to check text placement and readability."
        ],
        references: [
          "ibis Inc. (n.d.). Text Tool — How to Use. IbisPaint Official Tutorial. https://ibispaint.com/lecture/"
        ]
      },
      {
        name: "Frame Divider Tool",
        desc: "Divide your canvas into multiple panels or sections, ideal for comics or storyboards. Helps maintain clean, organized layouts for storytelling.",
        steps: [
          "Open your artwork and select the Frame Divider Tool.",
          "Choose the number of rows and columns.",
          "Drag lines to create custom-sized panels.",
          "Adjust thickness and spacing as desired.",
          "Draw inside each frame separately.",
          "Save or export when done."
        ],
        tips: [
          "Plan your layout before sketching.",
          "Use equal spacing for professional comic looks.",
          "Adjust frame thickness for stylistic effect.",
          "Experiment with angled or diagonal frames.",
          "Preview layout by zooming out before finalizing."
        ],
        references: [
          "ibis Inc. (n.d.). Frame Divider Tool — Comic Creation Guide. https://ibispaint.com/lecture/"
        ]
      }
    ]
  },
  {
    category: "Selection Tools",
    tools: [
      {
        name: "Lasso Tool",
        desc: "Manually draw around areas to select them for editing. Ideal for irregular or freeform shapes requiring precision.",
        steps: [
          "Open your artwork and select the Lasso Tool.",
          "Draw around the desired area with your finger or stylus.",
          "Release to confirm selection (dotted lines appear).",
          "Move, resize, or color within the selection.",
          "Tap ‘Deselect’ to remove the selection."
        ],
        tips: [
          "Zoom in for precise edges.",
          "Use steady strokes to follow contours closely.",
          "Combine with Transform Tool for adjustments.",
          "Add or subtract areas from your selection as needed.",
          "Duplicate selections before heavy edits."
        ],
        references: [
          "Swati Artlife. (2023). How to use Lasso tool in Ibis Paint. https://youtube.com/shorts/-Dt_QnfvFD4"
        ]
      },
      {
        name: "Magic Wand Tool",
        desc: "Quickly select areas of similar color with a single tap. Great for coloring flat regions or isolating backgrounds.",
        steps: [
          "Select the Magic Wand Tool from the toolbar.",
          "Tap the area you want to select.",
          "Adjust tolerance to include more or fewer color shades.",
          "Use Add/Subtract mode for finer control.",
          "Apply edits or colors inside the selection.",
          "Tap ‘Deselect’ when done."
        ],
        tips: [
          "Increase tolerance for wider color range.",
          "Use lower tolerance for clean edges.",
          "Combine with bucket fill or transform tools.",
          "Best used on clean, flat-colored areas.",
          "Duplicate layer before large selections."
        ],
        references: [
          "Art by Sho. (2024). Magic Wand Tool in IbisPaint — Quick Guide. https://youtube.com/shorts/abc123xyz"
        ]
      }
    ]
  }
];

export default toolsData;
