import framedriver from "../assets/tools/framedriver.jpg";
import framedivider from "../assets/tools/framedivider.jpeg";
import texttool from "../assets/tools/texttool.jpg";
import textbeforeafter from "../assets/tools/textbeforeafter.jpeg";
import transform from "../assets/tools/transform.jpg";
import transformbefore from "../assets/tools/transformbefore.jpeg";
import canvas from "../assets/tools/canvas.jpg";
import filtertool from "../assets/tools/filtertool.jpg";
import lasso from "../assets/tools/lasso.jpg";
import brushlibrary from "../assets/tools/brushlibrary.jpg";
import brushtool from "../assets/tools/brushtoollibrary.jpeg";
import brushstabilation from "../assets/tools/brushstabilation.PNG";
import brushsensitivity from "../assets/tools/brushsensitivity.PNG";
import layericon from "../assets/tools/layericon.jpg";
import layerpanel from "../assets/tools/layerpanel.png";
import layermode from "../assets/tools/layermode.jpg";
import layerblending from "../assets/tools/layerblending.jpg";
import layertexture from "../assets/tools/layertexture.jpg";
import layerclipping from "../assets/tools/layerclipping.jpg";
import colorpanel from "../assets/tools/colorpanel.jpg";
import colorwheel from "../assets/tools/colorwheel.jpg";
import colorhue from "../assets/tools/colorhue.jpg";
import colorsaturation from "../assets/tools/colorsaturation.jpg";
import color1 from "../assets/tools/color1.jpg";
import color2 from "../assets/tools/color2.jpg";
import color3 from "../assets/tools/color3.jpg";
import color4 from "../assets/tools/color4.jpg";
import color5 from "../assets/tools/color5.jpg";
import circleselection1 from "../assets/tools/circleselecting1.jpg";
import circleselection2 from "../assets/tools/circleselecting2.jpg";
import brightcon from "../assets/tools/brightcon.jpg";
import huesat from "../assets/tools/huesat.jpg";
import gaussian from "../assets/tools/gaussian.jpg";
import unsharp from "../assets/tools/unsharp.jpg";
import colorbalance from "../assets/tools/colorbalance.jpg";
import glow from "../assets/tools/glow.jpg";
import grayscale from "../assets/tools/grayscale.jpg";
import invert from "../assets/tools/invert.jpg";
import lasso1 from "../assets/tools/lasso1.jpg";
import lasso2 from "../assets/tools/lasso2.jpg";
import magic1 from "../assets/tools/magic1.jpg";
import magic2 from "../assets/tools/magic2.jpg";
import rectangle1 from "../assets/tools/rectangle1.jpg";
import rectangle2 from "../assets/tools/rectangle2.jpg";
import symmetry1 from "../assets/tools/symmetry1.jpg";
import symmetry2 from "../assets/tools/symmetry2.jpg";
import { color } from "framer-motion";

const toolsData = [
  {
    category: "Drawing Tools",
    tools: [
      {
        name: "Brush Tool",
        image: null,
        desc: "Fundamental instrument for lines, textures, and colors. Adjust size, opacity, and stabilization for precision and expressive strokes.",
        steps: [
          { text: "Tap the Brush icon to open the Brush Panel.", image: brushlibrary },
          { text: "Select a brush from the Brush Library.", image: brushtool },
          { text: "Adjust Size and Opacity sliders for desired effect.", image: brushsensitivity },
          { text: "Enable Stabilization to smooth strokes.", image: brushstabilation },
          { text: "Use Pressure Sensitivity (if using a stylus) for dynamic lines." }
        ],
        tips: [
          "1. Fine-Tune Your Brush — Once your brush is selected, it’s time to perfect its flow. On the right side of your screen, tap the Brush Settings Slider to open customization options. Here, you’ll find two key controls: Size Slider — Drag this up or down to adjust your brush’s thickness, from a delicate whisper to a bold stroke. Opacity Slider — This controls your brush’s transparency. Lower the opacity for soft, buildable shading and blending, or increase it for solid, vibrant lines and colors.",
          "Pro Tip — For a solid foundation, begin your practice with a basic, versatile tool like the Pen (Fade) or the Airbrush (Normal). They’re excellent for getting comfortable with the controls and understanding brush behavior.",
          "2. Refine Your Line Quality — Take control of your strokes by adjusting stabilization and pressure settings. Open the main Brush Panel to access detailed Brush Settings. Adjust Stabilization — Use the Stabilization slider to smooth out shaky lines. A higher value refines your hand movement, producing cleaner, more fluid strokes. Enable Pressure Sensitivity (for stylus users) — If you’re drawing with a stylus like an Apple Pencil, turn on Pressure Sensitivity. This lets you vary line thickness and opacity by adjusting how firmly you press.",
          "Pro Tip — For sharp, professional-looking outlines and inks, set your Stabilization value between 10 and 20. This range removes jitter without making your brush feel sluggish or overly corrected.",
          "3. Master Basic Stroke Control — Now it’s time to put your brush to the test! Create a new, blank layer to practice freely. Experiment with different stroke types: Straight Lines — Practice moving your hand steadily in one direction. Curved Lines — Work on smooth, continuous arcs. Circular Lines — Focus on fluid, consistent revolutions. Observe how speed and pressure affect thickness, darkness, and texture. Layer and Blend — Draw overlapping strokes to understand how colors and shading build up naturally.",
          "Pro Tip — For the cleanest, most consistent lines and curves, move your hand or stylus slowly and steadily. You can also use shape guides to practice clean outlines and improve accuracy.",
          "4. Explore the Brush Library — Once you’re comfortable with basic strokes, dive into the Brush Library to experiment with different tools. Each brush offers a unique texture and feel. Try these popular examples: Dip Pen (Hard) — Perfect for crisp, detailed outlines. Airbrush (Normal) — Great for soft gradients and smooth transitions. Watercolor (Wet) — Creates fluid washes and natural blending. Oil Brush — Produces rich, textured, painterly effects. Notice how each brush reacts to changes in size, opacity, and pressure.",
          "Pro Tip — Explore and take notes on which brushes suit your style. Mixing different brush types in one artwork adds depth and visual interest — like combining crisp outlines with soft shading or painterly textures.",
        ],
        examples: [
          "Straight, curved, circular lines to practice stroke control.",
          "Layering colors for smooth gradients."
        ],
        references: [
          "ibis Inc. (n.d.). Brush Tool — Basics of Drawing and Coloring. IbisPaint Official Guide. https://ibispaint.com/lecture/index.jsp?topicID=75701350"
        ],
        technique: [
          "1. Choose the Right Brush Type\nSelect from Pen (for sharp lines), Airbrush (for soft strokes), or Marker (for bold lines). Each has different effects based on your artistic intent.",
          "2. Adjust Size and Opacity\nUse the Size slider to control stroke width and Opacity for transparency. Lower opacity creates softer, more blendable strokes.",
          "3. Enable Stabilization\nTurn on Stabilization to smooth out shaky lines. Adjust the level based on your drawing speed—higher values create smoother lines but with slight lag.",
          "4. Use Pressure Sensitivity\nIf using a stylus, enable Pressure Sensitivity to create dynamic strokes that vary based on how hard you press.",
          "5. Practice Stroke Control\nStart with slow, deliberate strokes to build muscle memory. Gradually increase speed while maintaining control and consistency.",
          "6. Layer for Depth\nUse multiple layers with varying opacity to build up colors and create depth without losing control over individual elements.",
          "7. Experiment with Brush Shapes\nTry different brush shapes to discover unique textures and effects. Each shape creates distinctive visual qualities.",
          "8. Blend Colors Smoothly\nUse lower opacity and overlapping strokes to blend colors seamlessly. This creates smooth gradients and natural transitions."
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
        ],
        technique: [
          "1. Select Eraser Tool\nTap the Eraser icon in the toolbar to activate the tool. Your cursor will change to indicate the eraser is active.",
          "2. Adjust Eraser Size\nUse the Size slider to control how much area the eraser affects. Larger sizes erase broader areas; smaller sizes provide precision.",
          "3. Control Hardness\nAdjust hardness to determine edge quality. Hard erasers create sharp edges; soft erasers create feathered, gradual fading.",
          "4. Work with Opacity\nReduce opacity for gentle fading effects. Multiple light passes give better control than one heavy erasure.",
          "5. Use for Blending\nApply soft erasers at low opacity over color transitions to create smooth blending effects and soft highlights.",
          "6. Erase on Separate Layers\nErase on duplicate or new layers to preserve original artwork. This allows non-destructive editing and experimentation.",
          "7. Create Highlights\nUse low-opacity soft erasers to create subtle highlights and light reflections on shaded areas.",
          "8. Fix Minor Mistakes\nUse precise eraser strokes with small sizes to correct small errors without affecting surrounding artwork."
        ]
      },
      {
        name: "Color Tool",
        desc: "Advanced palette selection and mixing.",
        steps: [
          { text: "Tap the Color icon to open the Color Window.", image: colorpanel },
          { text: "Select a hue from the Color Wheel.", image: colorwheel },
          { image: colorhue },
          { text: "Adjust Saturation and Brightness sliders.", image: colorsaturation },
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
        ],
        technique: [
          "1. Open the Color Window\nTap the Color icon to access the color picker. This displays the Color Wheel, Saturation/Brightness sliders, and recent colors.",
          "2. Select Hue from Color Wheel\nTap anywhere on the outer color wheel ring to choose your base hue. This determines the primary color you'll be working with.",
          "3. Adjust Saturation and Brightness\nUse the inner square to fine-tune saturation (left to right) and brightness (bottom to top). This creates variations of your chosen hue.",
          "4. Use the Eyedropper Tool\nTap the eyedropper icon to pick colors directly from your canvas or references. Useful for color matching and consistency.",
          "5. Create Analogous Color Schemes\nSelect colors adjacent on the color wheel for smooth, harmonious transitions. Perfect for gradients and natural blending.",
          "6. Explore Complementary Colors\nChoose colors opposite on the color wheel for vibrant, high-contrast combinations ideal for making elements pop.",
          "7. Save Custom Palettes\nCreate and save personalized color palettes for specific projects. This ensures consistency across your artwork.",
          "8. Sample from Reference Images\nUse the eyedropper on reference photos to learn real-world color relationships and improve color accuracy in your paintings.",
          { image: color1 },
          { image: color2 },
          { image: color3 },
          { image: color4 },
          { image: color5 }
        ]
      },
      {
        name: "Smudge Tool",
        desc: "Softens or spreads colors and edges to blend transitions.",
        steps: [
          "Tap the Smudge icon to activate the tool.",
          "Adjust brush size and strength as needed.",
          "Drag across the canvas to blend colors."
        ],
        tips: [
          "Use analogous colors for smooth gradients.",
          "Save frequently used colors to your palette.",
          "Blend colors using soft brushes or low opacity."
        ],
        examples: [
          "Smoothing skin tones, soft gradients."
        ],
        references: [
          "ibis Inc. (n.d.). Color Tool — Basics of Coloring. IbisPaint Official Guide. https://ibispaint.com/lecture/index.jsp?topicID=75701400"
        ],
        technique: [
          "1. Open the Color Window\nTap the Color icon to access the color picker. This displays the Color Wheel, Saturation/Brightness sliders, and recent colors.",
          "2. Select Hue from Color Wheel\nTap anywhere on the outer color wheel ring to choose your base hue. This determines the primary color you'll be working with.",
          "3. Adjust Saturation and Brightness\nUse the inner square to fine-tune saturation (left to right) and brightness (bottom to top). This creates variations of your chosen hue.",
          "4. Use the Eyedropper Tool\nTap the eyedropper icon to pick colors directly from your canvas or references. Useful for color matching and consistency.",
          "5. Create Analogous Color Schemes\nSelect colors adjacent on the color wheel for smooth, harmonious transitions. Perfect for gradients and natural blending.",
          "6. Explore Complementary Colors\nChoose colors opposite on the color wheel for vibrant, high-contrast combinations ideal for making elements pop.",
          "7. Save Custom Palettes\nCreate and save personalized color palettes for specific projects. This ensures consistency across your artwork.",
          "8. Sample from Reference Images\nUse the eyedropper on reference photos to learn real-world color relationships and improve color accuracy in your paintings."
        ]
      },
      {
        name: "Blur Tool",
        desc: "Reduces sharpness or detail to simulate depth and focus.",
        steps: [
          "Tap the Blur icon to activate the tool.",
          "Adjust brush size and strength as needed.",
          "Drag across the canvas to blend colors."
        ],
        tips: [
          "Use a low opacity brush for subtle blending.",
          "Experiment with different brush shapes for unique effects.",
          "Combine with other tools for advanced techniques."
        ],
        examples: [
          "Background softening, lighting effects."
        ],
        references: [
          "ibis Inc. (n.d.). Color Tool — Basics of Coloring. IbisPaint Official Guide. https://ibispaint.com/lecture/index.jsp?topicID=75701400"
        ],
        technique: [
          "1. Open the Color Window\nTap the Color icon to access the color picker. This displays the Color Wheel, Saturation/Brightness sliders, and recent colors.",
          "2. Select Hue from Color Wheel\nTap anywhere on the outer color wheel ring to choose your base hue. This determines the primary color you'll be working with.",
          "3. Adjust Saturation and Brightness\nUse the inner square to fine-tune saturation (left to right) and brightness (bottom to top). This creates variations of your chosen hue.",
          "4. Use the Eyedropper Tool\nTap the eyedropper icon to pick colors directly from your canvas or references. Useful for color matching and consistency.",
          "5. Create Analogous Color Schemes\nSelect colors adjacent on the color wheel for smooth, harmonious transitions. Perfect for gradients and natural blending.",
          "6. Explore Complementary Colors\nChoose colors opposite on the color wheel for vibrant, high-contrast combinations ideal for making elements pop.",
          "7. Save Custom Palettes\nCreate and save personalized color palettes for specific projects. This ensures consistency across your artwork.",
          "8. Sample from Reference Images\nUse the eyedropper on reference photos to learn real-world color relationships and improve color accuracy in your paintings."
        ]
      },
      {
        name: "Bucket Tool",
        desc: "Fills closed areas with solid color or gradient.",
        steps: [
          "Select the Bucket Tool from the toolbar.",
          "Choose a color or gradient from the Color Window.",
          "Tap inside the area you want to fill.",
          "Adjust the Tolerance slider for better results.",
          "Use Undo (Ctrl+Z) if you make a mistake."
        ],
        tips: [
          "Adjust Tolerance for better filling results.",
          "Use a solid color for a uniform fill.",
          "Experiment with gradients for depth."
        ],
        examples: [
          "Filling large areas quickly with a base color.",
          "Creating simple backgrounds or patterns."
        ],
        references: [
          "ibis Inc. (n.d.). Color Tool — Basics of Coloring. IbisPaint Official Guide. https://ibispaint.com/lecture/index.jsp?topicID=75701400"
        ],
        technique: [
          "1. Open the Color Window\nTap the Color icon to access the color picker. This displays the Color Wheel, Saturation/Brightness sliders, and recent colors.",
          "2. Select Hue from Color Wheel\nTap anywhere on the outer color wheel ring to choose your base hue. This determines the primary color you'll be working with.",
          "3. Adjust Saturation and Brightness\nUse the inner square to fine-tune saturation (left to right) and brightness (bottom to top). This creates variations of your chosen hue.",
          "4. Use the Eyedropper Tool\nTap the eyedropper icon to pick colors directly from your canvas or references. Useful for color matching and consistency.",
          "5. Create Analogous Color Schemes\nSelect colors adjacent on the color wheel for smooth, harmonious transitions. Perfect for gradients and natural blending.",
          "6. Explore Complementary Colors\nChoose colors opposite on the color wheel for vibrant, high-contrast combinations ideal for making elements pop.",
          "7. Save Custom Palettes\nCreate and save personalized color palettes for specific projects. This ensures consistency across your artwork.",
          "8. Sample from Reference Images\nUse the eyedropper on reference photos to learn real-world color relationships and improve color accuracy in your paintings."
        ]
      },
      {
        name: "Layer Tool",
        desc: "A layer in digital art functions like a transparent sheet of paper. Multiple layers can be stacked, with each containing separate elements of the drawing. This enables the artist to work on one part of the artwork without altering others, thereby improving workflow efficiency and flexibility.",
        steps: [
          { text: "Tap the Layers Icon — Tap the Layers icon (two stacked squares) located in the toolbar to open the Layers Panel.", image: layericon },
          { text: "View the Layers Panel — A panel will appear showing all your active layers in the project.", image: layerpanel },
          "Understand Layer Order — The top layer appears in front of everything else, while the bottom layer appears behind all other layers."
        ],
        tips: [
          "Opening the Layer Panel — Tap the Layer icon (two stacked squares) to access the list of layers.",
          "Adding Layers — Select the “+” button to insert a new layer.",
          "Renaming Layers — Double-tap the layer name to assign a label (e.g., “Lineart,” “Base Color”).",
          "Reordering Layers — Drag layers upward or downward to change their stacking order.",
        ],
        examples: [
          "Example 1: Character Lineart — Keep the lineart on a separate layer for easy adjustments.",
          "Example 2: Background Elements — Use different layers for foreground, midground, and background elements.",
          "Example 3: Color Variations — Create multiple layers for different color variations of the same element."
        ],
        references: [
          "ibis Inc. (n.d.). Color Tool — Basics of Coloring. IbisPaint Official Guide. https://ibispaint.com/lecture/index.jsp?topicID=75701400"
        ],
        technique: [
          { text: "1. Layer Mode Stacking - Understand how different layer modes (e.g., Normal, Multiply, Add) affect the appearance of layers when stacked.", image: layermode },
          { text: "2. Experiment with Blending Modes — Change the blending mode of a layer to see how it interacts with layers below for unique effects.", image: layerblending },
          "3. Utilize Adjustment Layers — Use adjustment layers to apply color corrections or effects without altering the original artwork.",
          { text: "4. Experiment with Textures - Apply texture overlays to layers for added depth and interest.", image: layertexture },
          { text: "5. Use Clipping Masks for Precise Control — Apply a clipping mask to limit the visibility of a layer to the content of the layer below.", image: layerclipping }
        ]
      },
      {
        name: "Layer Options",
        desc: "Manage and customize your layers for optimal workflow.",
        steps: [
          "Sketch Layer (Layer 1) — Using a pencil brush, create a rough outline of the apple on the first layer.",
          "Lineart Layer (Layer 2) — Add a new layer above your sketch. Refine the apple’s outline with a clean pen brush. You may want to lower the opacity of your sketch layer for better visibility.",
          "Base Color Layer (Layer 3) — Create a new layer and drag it beneath your lineart layer. Use the Bucket Tool to fill the apple shape with a solid red color. Keep your lineart layer visible to define the boundaries clearly.",
          "Shading Layer (Layer 4) — Add a new layer above your base color layer. Tap the layer thumbnail and select “Clipping” (the square icon with a downward arrow). Then change its blending mode to “Multiply.” Use a darker red or purple hue to paint shadows and add depth to your apple.",
          "Highlight Layer (Layer 5) — Insert another new layer above the shading layer and set it as a “Clipping” layer as well. Change its blending mode to “Add.” Use a light color, like white or pale yellow, to paint highlights and create a shiny, realistic surface on the apple.",
          "FOR THE SHADING. Start with a simple circle on its own layer.",
          "Create a new layer above your circle layer.",
          "Set the new layer’s blending mode to 'Multiply' and create a clipping mask with the circle layer below.",

        ],
        tips: [
          "Tip 1: Use Layer Folders — Organize your layers into folders for complex projects.",
          "Tip 2: Lock Layers — Lock layers to prevent accidental edits.",
          "Tip 3: Use Color Tags — Color-code your layers for easy identification."
        ],
        examples: [
          "Opacity — Use the slide bar left or right to make a layer more transparent or opaque.",
          "Blending Modes — Change how layers interact with each other (e.g., Multiply for shadows, Add for glow effects).",
          "Clipping — Locks coloring inside the layer below, perfect for shading without affecting other areas.",
          "Alpha Lock — Locks transparent areas so you can only color within existing strokes on the layer.",
        ],
        references: [
          "ibis Inc. (n.d.). Color Tool — Basics of Coloring. IbisPaint Official Guide. https://ibispaint.com/lecture/index.jsp?topicID=75701400"
        ],
        technique: [
          "1. Use Layer Masks for Non-Destructive Editing — Apply layer masks to hide or reveal parts of a layer without permanently erasing content.",
          "2. Experiment with Blending Modes — Change the blending mode of a layer to see how it interacts with layers below for unique effects.",
          "3. Utilize Adjustment Layers — Use adjustment layers to apply color corrections or effects without altering the original artwork.",
          "4. Group Layers for Organization — Keep your workspace tidy by grouping related layers together.",
          "5. Use Clipping Masks for Precise Control — Apply a clipping mask to limit the visibility of a layer to the content of the layer below."
        ]
      },
    ]
  },

  //EDITING TOOLS
  {
    category: "Editing Tools",
    tools: [
      {
        name: "Transform / Move Tool",
        image: transform,
        desc: "Resize, rotate, flip, or move parts of your artwork with precision without redrawing them. Useful for adjusting position, angle, or scale easily.",
        steps: [
          "Open your artwork and select the layer to edit.",
          "Choose the Transform Tool from the toolbar.",
          "Drag to move the object or use handles to resize and rotate.",
          "Flip, rotate, or distort using options in the tool menu.",
          "Tap ✓ to confirm or ✗ to cancel.",
          { text: "Before and After", image: transformbefore }
        ],
        tips: [
          "Work on separate layers for easy repositioning.",
          "Zoom in for accuracy when aligning elements.",
          "Enable ‘Keep Aspect Ratio’ to avoid distortion.",
          "Duplicate layers before transforming for comparison.",
          "Use Snap for perfect alignment."
        ],
        examples: [
          "Use the Transform Tool to adjust the position of a character in your artwork.",
          "Resize a background layer to fit the canvas perfectly.",
          "Rotate an object to match the perspective of your scene.",
          "Flip a layer horizontally to create a mirror effect."
        ],
        references: [
          "Swati Artlife. (2024). How to use Transform Tool in IbisPaintX. https://youtube.com/shorts/BaT7XLqPsWw"
        ],
        technique: [
          "1. Select the Area First — Use the Lasso or Magic Wand tool to select the part of your artwork you want to move or transform before activating the Transform Tool.",
          "2. Drag to Reposition — Tap and drag inside the selected area to move it around the canvas. This helps adjust placement or balance composition.",
          "3. Resize with Corner Handles — Use the corner handles to make your selection larger or smaller while keeping proportions (tap “Keep Aspect Ratio” if needed).",
          "4. Rotate for Angled Adjustments — Drag the rotation handle around the selection box to rotate your object for better alignment or perspective.",
          "5. Flip for Symmetry — Tap Flip Horizontal or Flip Vertical to mirror the image—useful for creating symmetrical designs like faces or objects.",
          "6. Use “Free Transform” for Custom Shaping — Choose Free Transform to stretch, distort, or skew parts of your artwork to fit a specific angle or shape.",
          "7. Combine with Layers — Work on separate layers so you can move and transform parts of your artwork independently without affecting the rest.",
          "8. Confirm or Cancel Carefully — Always check your transformation before pressing ✓ (Confirm) or ✗ (Cancel) to ensure your changes are correct.",
        ]
      },
      {
        name: "Text Tool",
        image: texttool,
        desc: "Add words, captions, or titles to your artwork with full control over font, color, alignment, and effects. Great for comics, posters, or personalized designs.",
        steps: [
          "Select the Text Tool (A icon) from the toolbar.",
          "Type your text in the pop-up box.",
          "Customize font style, size, and color.",
          "Use the Transform Tool to move or resize the text.",
          "Add shadows, outlines, or gradients as needed.",
          "Tap ✓ to save changes.",
          { text: "Before and After", image: textbeforeafter }
        ],
        tips: [
          "Choose readable fonts that match your art style.",
          "Keep text on separate layers for flexibility.",
          "Use outlines or shadows to make text stand out.",
          "Avoid overcrowding by spacing out text properly.",
          "Zoom out to check text placement and readability."
        ],
        examples: [
          "Example 1: A bold title at the top with a subtle drop shadow.",
          "Example 2: A speech bubble with a playful font and bright colors.",
          "Example 3: A caption at the bottom with a clean, sans-serif font."
        ],
        references: [
          "ibis Inc. (n.d.). Text Tool — How to Use. IbisPaint Official Tutorial. https://ibispaint.com/lecture/"
        ],
        technique: [
          "1. Plan Text Placement Early — Before adding text, decide where it fits best in your composition. This helps maintain balance and avoids covering important parts of your artwork.",
          "2. Use the Transform Tool for Adjustment — After typing, use the Transform/Move Tool to easily reposition, resize, or rotate your text for better alignment.",
          "3. Experiment with Fonts — IbisPaint X offers many font styles — try different ones to match the theme or emotion of your artwork (e.g., bold for titles, cursive for elegance).",
          "4. Add Outlines or Shadows — Enhance visibility by adding borders, outlines, or drop shadows — especially useful when text overlaps colorful or detailed backgrounds.",
          "5. Play with Spacing — Adjust letter spacing and line spacing to make your text look neat and well-proportioned.",
          "6. Use Gradient or Color Blends — Apply gradients or multi-tone colors to your text for a more eye-catching design.",
          "7. Keep Text on a Separate Layer — Always create text on a new layer so it can be edited, hidden, or repositioned without affecting other parts of the drawing.",
        ]
      },
      {
        name: "Frame Divider Tool",
        image: framedriver,
        desc: "The Frame Divider Tool in IbisPaint X is used to divide the canvas into multiple panels or sections. It is especially helpful for comic artists and illustrators who need to organize their artwork into frames for storytelling. By using this tool, users can create clean, evenly spaced boxes that separate different scenes or actions. The thickness, spacing, and layout of each frame can be adjusted to suit the artist’s style.",
        steps: [
          "Open Your Canvas — Start by opening a new or existing artwork in IbisPaint X.",
          "Access the Frame Divider Tool — Tap the “Ruler” icon or Tool menu, then select Frame Divider Tool. This tool is mainly used for creating comic or manga-style panels.",
          "Choose Frame Settings — Set the number of rows and columns you want. You can also adjust frame thickness, color, and border style depending on your layout preference.",
          "Draw or Split Frames Manually — Drag lines on the canvas to divide it into panels. You can create custom-sized boxes or automatically generate evenly spaced panels.",
          "Adjust Frame Positions — Tap and drag the divider lines to resize or reposition your frames. This lets you control how each panel looks and how the story flows.",
          "Lock or Separate Layers — Each frame acts like a separate drawing area (layer). You can lock, hide, or edit each one individually for organized work.",
          "Add Drawings Inside Each Frame — Tap inside a frame to select it, then start drawing. This ensures your artwork stays neatly within the panel borders.",
          "Merge or Delete Frames (Optional) — If needed, you can merge two panels into one or delete a frame by selecting it and tapping the delete icon.",
          "Save or Export — Once done, save your project. The frame dividers remain clean and organized, perfect for comics, layouts, or storyboard designs.",
          { text: "Before and After", image: framedivider }
        ],
        tips: [
          "Plan your layout before sketching.",
          "Use equal spacing for professional comic looks.",
          "Adjust frame thickness for stylistic effect.",
          "Experiment with angled or diagonal frames.",
          "Preview layout by zooming out before finalizing."
        ],
        examples: [
          "Example 1: A simple 2x2 panel layout for a comic strip.",
          "Example 2: A dynamic layout with varying panel sizes to emphasize action.",
          "Example 3: A storyboard layout with clear scene transitions."
        ],
        references: [
          "ibis Inc. (n.d.). Frame Divider Tool — Comic Creation Guide. https://ibispaint.com/lecture/"
        ],
        technique: [
          "1. Plan Your Layout First — Before dividing your canvas, sketch a rough layout to decide how many panels or frames you’ll need for your artwork or comic page.",
          "2. Use Equal or Custom Divisions — You can use equal frames for a clean, organized look or custom-sized frames to emphasize certain scenes or details.",
          "3. Adjust Line Thickness for Style — Change the frame border thickness to match your art style — thinner lines for a modern comic look, thicker lines for a bold, classic effect.",
          "4. Work Inside Each Frame Separately — Tap a specific frame before drawing. This helps you stay within the borders and prevents overlapping artwork.",
          "5. Experiment with Angled Dividers — Try diagonal or irregular frame divisions to make dynamic or dramatic comic scenes.",
          "6. Use Different Frame Colors — Change the border color for creative layouts or to separate scenes with different moods.",
          "7. Combine with Layers — Each frame can be drawn on a separate layer, making it easier to manage, edit, and add effects without affecting the other panels.",
          "8. Merge or Split Frames for Pacing — Merge frames for longer scenes or split them into smaller boxes to control the storytelling flow and rhythm.",
          "9. Preview Your Page Layout — Zoom out to view all your frames and check if the composition looks balanced and easy to follow for the viewer.",

        ]
      }
    ]
  },


  //CANVAS TOOLS
  {
    category: "Canvas Tools",
    tools: [
      {
        name: "Hand Tool",
        desc: "The Hand Tool in IbisPaint X allows you to move or pan the canvas without accidentally drawing on it. When this tool is active, you can drag the screen to view different parts of your artwork especially useful when working on large or zoomed-in drawings. It helps artists navigate the workspace smoothly, adjust their viewing position, and focus on small details without changing the artwork itself. The Hand Tool is essential for maintaining control, precision, and comfort while drawing.",
        steps: [
          "Open your artwork — Launch IbisPaint X and open the drawing or project you want to work on.",
          "Select the Hand Tool — Tap the Hand icon, usually located in the top or side toolbar of the workspace.",
          "Move the canvas — Drag your finger on the screen to pan around your canvas. This lets you view different parts of your artwork without accidentally drawing on it.",
          "Combine with Zoom and Rotate — Use two fingers to zoom in/out or rotate the canvas while using the Hand Tool for better control.",
          "Return to your drawing tool — Once you’re done moving the canvas, tap your brush or another tool to continue drawing.",
        ],
        tips: [
          "Use the Hand Tool frequently to navigate your canvas without losing your place.",
          "Combine the Hand Tool with other tools for a more efficient workflow.",
          "Practice using the Hand Tool to improve your overall drawing efficiency."
        ],
        examples: [
          "Use the Hand Tool to navigate a large canvas while working on intricate details.",
          "Combine the Hand Tool with the Brush Tool to easily adjust your view without losing your place."
        ],
        references: [
          "ibis Inc. (n.d.). Brush Tool — Basics of Drawing and Coloring. IbisPaint Official Guide. https://ibispaint.com/lecture/index.jsp?topicID=75701350"
        ],
        technique: [
          "Drag to Pan Smoothly — Use one finger or a stylus to drag the canvas and move around your artwork without affecting any layers or drawings.",
          "Combine with Zoom & Rotate — Switch quickly between the Hand Tool and the Zoom/Rotate function to adjust your view and maintain focus on fine details.",
          "Work on Details Efficiently — Zoom in on a small area, use the Hand Tool to pan around, and continue drawing without losing your place on the canvas.",
          "Shortcut Gesture — If enabled in settings, temporarily use the Hand Tool by holding two fingers on the screen for faster navigation while drawing.",
          "Avoid Accidental Strokes — Activate the Hand Tool when you need to shift your view instead of drawing, preventing unwanted marks on your artwork.",
        ]
      },
      {
        name: "Zoom & Rotate Tool",
        desc: "The Zoom & Rotate Tool in IbisPaint X allows artists to enlarge, shrink, or rotate the canvas view for better control and comfort while drawing. It does not change the actual artwork, only how you view it on the screen. With the Zoom function, you can focus on small details by pinching outward to zoom in or pinch inward to zoom out for a full view of your canvas. The Rotate feature lets you turn the canvas to any angle, making it easier to draw lines and shapes naturally from different perspectives. This tool is especially helpful for digital artists who want to work precisely and comfortably, giving them full flexibility to adjust the viewing angle and size of their workspace during the creative process",
        steps: [
          "Pinch outward to zoom in; pinch inward to zoom out.",
          "Use two fingers to rotate the canvas.",
          "Double-tap to reset the view.",
        ],
        tips: [
          "Use Gestures for Speed — Instead of selecting the tool manually, use two fingers to pinch, spread, or rotate. This saves time and keeps your workflow smooth.",
          "Avoid Over-Zooming — Don’t zoom in too much, as it might cause uneven lines or loss of proportion. Keep checking your artwork at normal view to maintain balance.",
          "Rotate for Comfortable Angles — Rotate the canvas to match your hand’s natural movement when drawing curves or details. This helps reduce hand strain and improves accuracy.",
          "Reset Often — If your canvas becomes too rotated or zoomed, double-tap with two fingers to reset the view quickly.",
          "Zoom Out to Check Composition — Frequently zoom out to see how your drawing looks as a whole. This helps you spot mistakes in size, color, or proportion early.",
          "Use Smooth Gestures — Move your fingers gently when zooming or rotating to avoid jerky movements and maintain control of your view.",
          "Combine with Stabilizer — After adjusting your view, turn on the stabilizer when drawing lines for smoother and more precise strokes.",
        ],
        examples: [
          "Before — It’s hard to work on small details.",
          "After — You zoom in for more precise strokes.",
        ],
        references: [
          "ibis Inc. (n.d.). Brush Tool — Basics of Drawing and Coloring. IbisPaint Official Guide. https://ibispaint.com/lecture/index.jsp?topicID=75701350"
        ],
        technique: [
          "Pinch Gesture for Zooming — Use two fingers to pinch outward to zoom in and inward to zoom out. This helps when focusing on small details or checking the entire artwork.",
          "Two-Finger Rotate — Rotate your fingers in a circular motion to turn the canvas. This makes it easier to draw or color from a more natural angle.",
          "Reset Canvas View — Double-tap with two fingers to instantly reset the zoom and rotation back to the default upright position.",
          "Zoom Before Detailing — Always zoom in before working on fine lines or textures to ensure precision and cleaner strokes.",
          "Combine with Hand Tool — After zooming in, use the Hand Tool to pan smoothly around the artwork without disrupting your view.",
          "Use for Comfort Drawing — Rotate the canvas to align with your wrist’s natural movement. This technique prevents strain and improves line control.",
          "Zoom Out for Composition Check — Occasionally zoom out to view the full artwork. This helps maintain correct proportions and overall balance in your design.",

        ]
      },
      {
        name: "Undo / Redo Tool",
        desc: "The Undo / Redo Tool in IbisPaint X allows artists to easily correct mistakes or revert changes made during the drawing process. This tool is essential for maintaining a smooth workflow, as it enables quick adjustments without the need to manually erase or redo work. With the Undo function, you can step back through your actions, while the Redo function lets you reapply any changes you've undone. This tool is especially helpful for digital artists who want to experiment freely without the fear of making irreversible mistakes.",
        steps: [
          "Open your artwork — Launch IbisPaint X and open the drawing or project you are working on.",
          "Locate the Undo and Redo icons — The Undo icon (⤺) and Redo icon (⤻) are usually found in the bottom or top toolbar of the screen.",
          "Use Undo — Tap the Undo button (⤺) to go one step backward, removing your most recent action, such as a wrong brush stroke, color fill, or text placement.",
          "Use Redo — Tap the Redo button (⤻) to restore the last action you undid. This is helpful if you accidentally undo something you wanted to keep.",
          "Continue working — Repeat using Undo and Redo as needed while drawing or editing your artwork to easily correct mistakes.",
        ],
        tips: [
          "Use Undo for Step-by-Step Corrections — Tap Undo after each mistake instead of erasing. This helps maintain line quality and saves time.",
          "Redo to Restore Previous Edits — If you accidentally undo too far, use Redo to bring back your last action instantly.",
          "Combine Undo/Redo with Layer Editing — When adjusting layers, Undo and Redo help you compare versions of your artwork before finalizing changes.",
          "Experiment Freely Without Fear — Since Undo can reverse any step, try different brushes or effects to explore creative options safely.",
          "Use Gesture Controls (if enabled) — Some devices allow double-tapping with two fingers to Undo and triple-tapping to Redo for a faster, hands-on method while drawing.",
        ],
        examples: [
          "Before — You made an unwanted stroke.",
          "After — You undo it instantly and continue smoothly.",
        ],
        references: [
          "ibis Inc. (n.d.). Brush Tool — Basics of Drawing and Coloring. IbisPaint Official Guide. https://ibispaint.com/lecture/index.jsp?topicID=75701350"
        ],
        technique: [
          "Use Undo Frequently — Don’t hesitate to press Undo whenever you make a mistake. It helps you fix errors quickly without affecting other parts of your work.",
          "Redo After Reviewing Changes — If you accidentally undo too much, simply press Redo to bring back your previous step instantly.",
          "Shortcut Gestures — You can tap two fingers on the screen to Undo and three fingers to Redo for a faster way to correct or restore actions.",
          "Undo Step Limit Awareness — IbisPaint X has a limited number of undo steps (depending on your device memory). Save your work often to avoid losing progress.",
          "Undo Before Saving — Before finalizing or exporting your artwork, use Undo/Redo to review recent edits and ensure everything looks correct.",
          "Use Redo for Experimentation — Try new effects or filters. If you don’t like the result, simply undo and redo to compare both versions easily.",
          "Check Layer Mistakes — If an edit doesn’t look right, verify you’re working on the correct layer before undoing to avoid confusion.",
          "Combine with Auto-Save — Enable auto-save in settings so you can safely undo and redo without worrying about losing data during the process.",

        ]
      },
    ]
  },


  //VECTOR TOOLS
  {
    category: "Vector Tools",
    tools: [
      {
        name: "Vector Pen Tool",
        desc: "The Anchor Point Tool is used to edit and manipulate vector lines by adjusting their anchor points and control handles. Anchor points define the shape of a vector line, and this tool allows you to move, add, or delete these points to refine your artwork precisely. making the lines look neat and professional.",
        steps: [
          "Open your artwork — Launch IbisPaint X and open your drawing or start a new canvas.",
          "Create a vector layer — Tap the Layers icon, then select Add Vector Layer. This is important because the Vector Pen Tool only works on vector layers.",
          "Select the Vector Pen Tool — Tap the Pen icon in the toolbar and choose Vector Pen from the brush options.",
          "Start drawing lines — Use your finger or stylus to draw. The lines will automatically be clean and smooth, and you can adjust them later.",
          "Edit your strokes — Tap the line to show anchor points. You can move, stretch, or bend these points to reshape the line perfectly.",
          "Adjust line thickness and color — Use the brush size and color palette options to customize your line style.",
          "Continue refining your artwork — Combine the Vector Pen with other vector tools like the Anchor Point Tool or Curve Tool for more control.",
        ],
        tips: [
          "Use vectors for outlines or clean sketches.",
          "Combine with the Anchor Point Tool for better control.",
        ],
        examples: [
        ],
        references: [
          "Art by Sho. (2024). Magic Wand Tool in IbisPaint — Quick Guide. https://youtube.com/shorts/abc123xyz"
        ],
        technique: [
          "Use smooth, confident strokes — Draw your lines in one steady motion. This helps create clean, natural-looking strokes that are easy to edit later.",
          "Edit anchor points for precision — After drawing, tap on the line to show anchor points. You can move or adjust these points to fix shapes or improve the flow of your line.",
          "Combine with the Curve Tool — Use the Curve Tool along with the Vector Pen to make perfectly rounded or wavy lines for hair, clothes, or outlines.",
          "Keep line thickness consistent — Adjust brush size to keep outlines uniform. Consistent line weight makes your drawing look balanced and professional.",
          "Zoom in for detailed parts — When working on small details (like eyes or accessories), zoom in to make accurate adjustments without breaking the line.",
          "Use vector layers for flexible editing — Since vector layers allow infinite adjustments, don’t worry about mistakes; you can always reshape your lines later.",
          "Erase with the Vector Eraser — If you make a mistake, use the Vector Eraser to remove specific parts of your line cleanly without affecting other areas",
        ]
      },
      {
        name: "Anchor Point Tool",
        desc: "The Vector Pen Tool in IbisPaint X is used to create smooth and adjustable lines on a vector layer. Unlike regular brush strokes, vector lines can be moved, resized, or reshaped without losing quality. This makes it perfect for drawing clean outlines, anime line art, or any artwork that requires precision. With the Vector Pen Tool, you can also adjust the thickness, curve, and angle of your lines after drawing them. It allows artists to refine their work easily, making the lines look neat and professional.",
        steps: [
          "Open Your Artwork — Launch IbisPaint X and open a project that has a vector layer. Note: The Anchor Point Tool only works on vector layers.",
          "Select the Vector Layer — Tap the Layer Panel icon and choose the vector layer you want to edit.",
          "Activate the Anchor Point Tool — Tap the Selection Tool / Vector Tools (pencil icon on the toolbar) and select Anchor Point Tool from the options.",
          "Select the Line Segment — Tap the vector line you want to edit. Anchor points (small dots) will appear along the line.",
          "Edit Anchor Points — Move a Point: Drag an anchor point to adjust the line’s shape. Adjust Curves: Drag the handles extending from the anchor point to change the curvature. Add a Point: Tap on the line to create a new anchor point. Delete a Point: Tap an existing point and select Delete to remove it.",
          "Refine Your Vector Line — Continue adjusting points and curves until the line looks how you want. Zoom in for precise adjustments.",
          "Finish Editing — Once done, switch to another tool (like the Brush or Eraser) to continue your work. Save your artwork regularly.",
        ],
        tips: [
          "Use fewer anchor points for cleaner curves.",
          "Perfect for adjusting outlines and details.",
        ],
        examples: [
        ],
        references: [
          "Art by Sho. (2024). Magic Wand Tool in IbisPaint — Quick Guide. https://youtube.com/shorts/abc123xyz"
        ],
        technique: [
          "Keep Lines Smooth — Use as few anchor points as possible; too many points can make curves jagged. Adjust handles gently to create smooth, flowing lines.",
          "Zoom In for Precision — Zoom into small sections of your line to place or adjust points accurately. This helps refine curves without distorting other parts of the line.",
          "Use Add/Delete Points Strategically — Add points only where the line needs more control. Delete unnecessary points to simplify the shape and maintain smoothness.",
          "Adjust Handles for Curves — Drag the handles coming out of anchor points to tweak the curvature. Handles control the angle and length of the curve for precise shaping.",
          "Combine with Other Vector Tools — After adjusting anchor points, use the Vector Eraser or Vector Pen Tool to perfect the line. This allows you to modify shapes without redrawing them.",
          "Work in Layers — Keep each major element on a separate vector layer. This makes it easier to edit anchor points without affecting other parts of your artwork.",
          "Practice Incremental Adjustments — Make small changes instead of large movements. This prevents accidental distortion and helps maintain the intended shape.",
        ]
      },
      {
        name: "Curve Tool",
        desc: "The Curve Tool lets you create precise curved lines by setting multiple points. It’s useful for smooth shapes like waves or character outlines.",
        steps: [
          "Open Your Artwork Launch IbisPaint X and open a project with a vector layer. Note: The Curve Tool works only on vector layers.",
          "Select the Vector Layer Tap the Layer Panel icon. Choose the vector layer you want to draw or edit.",
          "Activate the Curve Tool Tap the Pen/Vector Tools icon in the toolbar. Select Curve Tool from the options.",
          "Draw the Curve Tap on the canvas to place the starting point. Tap again to place the next point, and the tool will automatically create a smooth curve connecting them. Continue tapping to add more points and extend the curve.",
          "Adjust the Curve Tap and drag the points to reposition them. Drag the handles extending from points to fine-tune the curve’s shape.",
          "Finish the Curve Complete your curve by connecting it to another point or double-tapping to end it. You can continue editing the curve later with the Anchor Point Tool.",
          "Refine and Save Use a Vector Eraser or Anchor Point Tool to perfect the curve if needed. Save your artwork regularly.",
        ],
        tips: [
          "Use it for hair, clothing folds, or organic shapes.",
          "Combine with Anchor Point Tool for fine-tuning.",
        ],
        examples: [
        ],
        references: [
          "Art by Sho. (2024). Magic Wand Tool in IbisPaint — Quick Guide. https://youtube.com/shorts/abc123xyz"
        ],
        technique: [
          "Use Minimal Points Place only the necessary points to define the curve. Fewer points = smoother curves and easier editing.",
          "Adjust Handles for Smoothness Drag the handles of each point to control the curvature. Fine adjustments make lines flow naturally instead of looking jagged.",
          "Zoom In for Precision Zoom in when placing or adjusting points to get precise control, especially for detailed areas.",
          "Plan Your Curve Visualize the curve before drawing. Decide where key points should go to create the desired shape efficiently.",
          "Combine with the Anchor Point Tool After drawing a curve, use the Anchor Point Tool to tweak points or handles for perfection.",
          "Work in Layers Keep different curves on separate vector layers. This makes editing easier without affecting other parts of your artwork.",
          "Refine Gradually Don’t try to perfect the curve in one step. Make small adjustments incrementally for better control.",
          "Practice Symmetry For shapes that need symmetry (like wings or eyes), draw one curve and duplicate/mirror it to maintain consistency.",
        ]
      },
      {
        name: "Vector Eraser",
        desc: "The Vector Eraser in IbisPaint X is a special erasing tool designed for vector layers. It allows you to remove lines or parts of strokes precisely without damaging the rest of your artwork. Unlike the regular eraser, the Vector Eraser deletes only the specific vector lines or anchor points you select, keeping your artwork clean and easy to adjust.",
        steps: [
          "Open Your Artwork Launch IbisPaint X and open a project with a vector layer. Note: The Curve Tool works only on vector layers.",
          "Select the Vector Layer Tap the Layer Panel icon. Choose the vector layer you want to draw or edit.",
          "Activate the Curve Tool Tap the Pen/Vector Tools icon in the toolbar. Select Curve Tool from the options.",
          "Draw the Curve Tap on the canvas to place the starting point. Tap again to place the next point, and the tool will automatically create a smooth curve connecting them. Continue tapping to add more points and extend the curve.",
          "Adjust the Curve Tap and drag the points to reposition them. Drag the handles extending from points to fine-tune the curve’s shape.",
          "Finish the Curve Complete your curve by connecting it to another point or double-tapping to end it. You can continue editing the curve later with the Anchor Point Tool.",
          "Refine and Save Use a Vector Eraser or Anchor Point Tool to perfect the curve if needed. Save your artwork regularly.",
        ],
        tips: [
          "Use zoom for precise erasing.",
          "Best for fixing overlapping outlines.",
        ],
        examples: [
        ],
        references: [
          "Art by Sho. (2024). Magic Wand Tool in IbisPaint — Quick Guide. https://youtube.com/shorts/abc123xyz"
        ],
        technique: [
          "Choose the Right Eraser Type — Segment Eraser removes whole line segments at once, best for cleaning up unwanted lines quickly. Point Eraser erases parts of a line precisely, ideal for fine adjustments.",
          "Zoom In for Precision — Zoom into the area you want to erase for more accurate control, especially with small details.",
          "Work on One Layer at a Time — Always make sure you are erasing on the correct vector layer to avoid affecting other parts of your artwork.",
          "Combine with Undo/Redo — Use Undo (Ctrl+Z) if you erase too much or make a mistake. Redo can bring back lines if needed.",
          "Refine Shapes Gradually — Don’t erase large sections at once. Work in small increments for better control and cleaner results.",
          "Use Minimal Overlaps — Avoid unnecessary overlapping lines before erasing as they make cleanup harder.",
          "Complement with Other Tools — After erasing, use the Anchor Point Tool or Curve Tool to refine the remaining lines. This ensures smooth, clean edges.",
          "Practice on Duplicates — Duplicate your vector layer before major erasing. This way, you can experiment without risking your original artwork.",
        ]
      },
      {
        name: "Line / Shape Tool",
        desc: "The Line Shape Tool is used to create precise geometric lines and shapes on a vector layer. It allows you to draw straight lines, rectangles, ellipses, polygons, and other predefined shapes with accuracy, without relying on freehand drawing.",
        steps: [
          "Tap the Shape icon.",
          "Choose your desired shape (line, circle, rectangle, etc.).",
          "Drag across the canvas to draw the shape.",
          "Adjust size and angle as needed.",
        ],
        tips: [
          "Hold while dragging to keep proportions (perfect circle/square).",
          "Combine with Vector Pen Tool for structured compositions.",
        ],
        examples: [
        ],
        references: [
          "Art by Sho. (2024). Magic Wand Tool in IbisPaint — Quick Guide. https://youtube.com/shorts/abc123xyz"
        ],
        technique: ["Use Straight Lines for Precision — For clean and accurate edges, always use the Line Shape Tool instead of freehand drawing. Hold your stylus steady for straight lines.",
          "Combine Shapes for Complex Designs — Create rectangles, ellipses, and polygons separately, then combine them to form more complex illustrations.",
          "Adjust After Drawing — Use the handles to move, resize, or rotate shapes after drawing for perfect alignment. Fine-tune shapes with the Anchor Point Tool if needed.",
          "Work in Layers — Keep each shape or group of shapes on separate vector layers. This makes editing and adjustments easier without affecting other parts of the artwork.",
          "Zoom In for Accuracy — Zoom in when placing or adjusting shapes, especially for detailed or small elements.",
          "Use as a Base for Line Art — Draw shapes as a base, then trace over them with the Brush Tool or Vector Pen Tool for more creative freedom.",
          "Combine with Vector Eraser — Erase parts of shapes or lines to refine designs without redrawing from scratch.",
        ]
      },
    ]
  },


  //SELECTION TOOLS
  {
    category: "Selection Tools",
    tools: [
      {
        name: "Lasso Tool",
        image: lasso,
        desc: "Manually draw around areas to select them for editing. Ideal for irregular or freeform shapes requiring precision.",
        steps: [
          "Open your artwork and select the Lasso Tool.",
          { text: "Draw around the desired area with your finger or stylus.", image: lasso1 },
          { text: "Release to confirm selection (dotted lines appear).", image: lasso2 },
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
        examples: [
          "Before — It’s hard to work on small details.",
          "After — You zoom in for more precise strokes.",

        ],
        references: [
          "Swati Artlife. (2023). How to use Lasso tool in Ibis Paint. https://youtube.com/shorts/-Dt_QnfvFD4"
        ],
        technique: [
          "1. Select Lasso Tool\nActivate the Lasso Tool from your toolbar. Your cursor will change to indicate freehand selection mode.",
          "2. Draw Around Your Selection\nUse your finger or stylus to carefully draw around the area you want to select. Take your time for precision.",
          "3. Complete the Loop\nFinish your selection by connecting your line back to the starting point. A dotted line will appear to show your selection.",
          "4. Refine Selection Edges\nZoom in to see your selection boundary clearly. Adjust as needed for precise edge control.",
          "5. Add to Selection\nUse 'Add' mode to include additional areas to your current selection without deselecting.",
          "6. Subtract from Selection\nUse 'Subtract' mode to remove unwanted areas from your selection for fine-tuning.",
          "7. Apply Transforms or Effects\nOnce selected, you can move, color, or apply effects only within the selected area.",
          "8. Deselect When Done\nTap 'Deselect' to remove the selection and apply your changes to the final artwork."
        ]
      },
      {
        name: "Magic Wand Tool",
        desc: "Quickly select areas of similar color with a single tap. Great for coloring flat regions or isolating backgrounds.",
        steps: [
          "Select the Magic Wand Tool from the toolbar.",
          { text: "Tap the area you want to select.", image: magic1 },
          "Adjust tolerance to include more or fewer color shades.",
          "Use Add/Subtract mode for finer control.",
          { text: "Apply edits or colors inside the selection.", image: magic2 },
          "Tap ‘Deselect’ when done."
        ],
        tips: [
          "Increase tolerance for wider color range.",
          "Use lower tolerance for clean edges.",
          "Combine with bucket fill or transform tools.",
          "Best used on clean, flat-colored areas.",
          "Duplicate layer before large selections."
        ],
        examples: [
          "Example 1: Selecting a character from a busy background.",
          "Example 2: Isolating a specific color for adjustment.",
          "Example 3: Quickly selecting a flat-colored object."
        ],
        references: [
          "Art by Sho. (2024). Magic Wand Tool in IbisPaint — Quick Guide. https://youtube.com/shorts/abc123xyz"
        ],
        technique: [
          "1. Select Magic Wand Tool\nActivate the Magic Wand Tool from your toolbar. This tool selects areas of similar color with a single tap.",
          "2. Tap the Area to Select\nTap on the color or area you want to select. The tool automatically selects all connected pixels of similar color.",
          "3. Adjust Tolerance Setting\nIncrease tolerance to select a wider range of color shades. Decrease tolerance for more precise, color-matched selections.",
          "4. Use Add Mode\nWith 'Add' mode active, tap additional areas to expand your selection without losing previously selected areas.",
          "5. Use Subtract Mode\nSwitch to 'Subtract' mode to remove unwanted areas from your selection for fine-tuning.",
          "6. Select Flat-Colored Regions\nMagic Wand works best on solid-colored areas and flat designs. Works less effectively on gradients or textured areas.",
          "7. Combine with Other Tools\nUse your selection with bucket fill to color large areas, or transform tools to move sections.",
          "8. Deselect When Complete\nTap 'Deselect' to remove the selection and finalize your edits."
        ]
      },
      {
        name: "Select Pen Tool",
        desc: "This tool allows you to paint your own selection, similar to using a brush. It’s great for precise or soft-edged areas.",
        steps: [
          "Tap the Selection icon.",
          "Choose Select Pen.",
          "Paint over the area you want to select.",
          "Use the Select Eraser to remove excess selection.",
        ],
        tips: [
          "Use a soft brush for smooth edges.",
          "It’s ideal for editing soft light or texture areas.",
        ],
        examples: [
          "Before — Selecting a shadow area is difficult.",
          "After — Only the shaded part is selected accurately.",
        ],
        references: [
          "Art by Sho. (2024). Magic Wand Tool in IbisPaint — Quick Guide. https://youtube.com/shorts/abc123xyz"
        ],
        technique: [
          "1. Select the Select Pen Tool\nActivate the Select Pen Tool from your toolbar. This tool allows you to paint your selection manually.",
          "2. Choose Brush Size and Hardness\nAdjust the brush size and hardness settings to suit the area you want to select. A softer brush is ideal for smooth edges.",
          "3. Paint Over the Desired Area\nUse your finger or stylus to paint over the area you want to select. Take your time for precision, especially around edges.",
        ]
      },
      {
        name: "Canvas",
        image: canvas,
        desc: "It allows you to set up your digital workspace before starting your drawing. You can adjust the size, orientation, and background color of your canvas.",
        steps: [
          "Tap “+” (New Canvas) on the main screen.",
          "Choose your preferred canvas size or set a custom size.",
          "Select a background color or leave it transparent.",
          "Tap ✓ to begin your artwork.",
        ],
        tips: [
          "Use a larger canvas size for detailed artworks (e.g., 2000×2000 px or higher).",
          "Set your canvas to landscape or portrait orientation depending on your subject — landscape for scenery, portrait for character art.",
        ],
        examples: [
          "Before — Selecting a shadow area is difficult.",
          "After — Only the shaded part is selected accurately.",
        ],
        references: [
          "Art by Sho. (2024). Magic Wand Tool in IbisPaint — Quick Guide. https://youtube.com/shorts/abc123xyz"
        ],
        technique: [
        ]
      },
      {
        name: "Rectangle Selection Tool",
        desc: "Selects rectangular or square areas, perfect for cropping or editing even shapes.",
        steps: [
          "Tap the Selection icon.",
          "Choose Select Pen.",
          {text: "Paint over the area you want to select.", image: rectangle1},
          "Use the Select Eraser to remove excess selection.",
          {text: "Drag to create a rectangular area.", image: rectangle2}
        ],
        tips: [
          "Hold and drag carefully for straight edges.",
          "Use for geometric layouts or simple compositions.",
        ],
        examples: [
          "Before — Selecting a shadow area is difficult.",
          "After — Only the shaded part is selected accurately.",
        ],
        references: [
          "Art by Sho. (2024). Magic Wand Tool in IbisPaint — Quick Guide. https://youtube.com/shorts/abc123xyz"
        ],
        technique: [
        ]
      },
      {
        name: "Circle Selection Tool",
        desc: "Used to create circular or oval selections—great for eyes, faces, or circular designs.",
        steps: [
          "Tap the Selection icon.",
          "Choose Circle Selection.",
          { image: circleselection1 },
          "Drag to create a circular area.",
          { image: circleselection2 }
        ],
        tips: [
          "Hold and drage evenly for a perfect circle.",
          "Combine with Transform for resizing",
        ],
        examples: [
          "Before - Uneven circle for an iris.",
          "After - Perfect round selection achieved.",
        ],
        references: [
          "Art by Sho. (2024). Magic Wand Tool in IbisPaint — Quick Guide. https://youtube.com/shorts/abc123xyz"
        ],
        technique: [
        ]
      },
    ]
  },


  //GUIDES AND PRECISION TOOLS
  {
    category: "Guides & Precision Tools",
    tools: [
      {
        name: "Ruler Tool",
        desc: "This tool provides drawing guides for accuracy and symmetry.",
        steps: [
          "Tap the Ruler Icon.",
          "Choose a ruler type.",
          "Draw along the guide."
        ],
        tips: [
          "Combine with Stabilizer for smooth results.",
          "Use for architectural or mechabical drawings.",
        ],
        examples: [
          "Before — Uneven symmetrical pattern.",
          "After — Perfect Symmetry using Radial Ruler.",
        ],
        references: [
          "Art by Sho. (2024). Ruler Tool in IbisPaint — Quick Guide. https://youtube.com/shorts/abc123xyz"
        ],
        technique: [
        ]
      },
      {
        name: "Symmetry and Radial Shapes",
        desc: "This feature helps create balanced and symmetrical designs by mirroring your strokes across defined axes. It’s perfect for drawing mandalas, faces, or any artwork that requires symmetry.",
        steps: [
          "Use Ellipse or Polygon rulers as a guide.",
          "Lower the opacity of the shape layer to use as a reference.",
          "Draw over it on a new layer to refine or stylize.",
          {text: "Step 1", image: symmetry1},
          {text: "Step 2", image: symmetry2},
        ],
        tips: [
          "Start with Basic Shapes — Use circles, rectangles, and triangles to outline your drawing’s main parts before adding details.",
          "Adjust Opacity Wisely — Keep the guide faint enough to see your sketch clearly without distraction.",
          "Use Layers for Clean Workflow — Keep guides and sketches on separate layers to easily edit or delete the guide later.",
          "Combine Multiple Shapes — Overlap guides to plan accurate proportions for faces, bodies, or objects.",
          "Refine After Sketching — Once the structure looks balanced, hide or delete the guide layer to focus on final detailing.",
        ],
        examples: [
        ],
        references: [
          "Art by Sho. (2024). Ruler Tool in IbisPaint — Quick Guide. https://youtube.com/shorts/abc123xyz"
        ],
        technique: [
        ]
      },
      {
        name: "Stabilizer Tool",
        desc: "This feature smooths out shaky lines, giving you neat and controlled strokes. ",
        steps: [
          "Open Brush Settings.",
          "Find Stabilizer.",
          "Adjust level (0–10).",
        ],
        tips: [
          "Too high settings can make drawing feel slow.",
        ],
        examples: [
          "Before — Shaky lineart.",
          "After — Smooth, professional lines.",
        ],
        references: [
          "Art by Sho. (2024). Ruler Tool in IbisPaint — Quick Guide. https://youtube.com/shorts/abc123xyz"
        ],
        technique: [
        ]
      },
    ]
  },



  // ESSENTIAL DRAWING TOOLA
  {
    category: "Essential Drawing Tools",
    tools: [
      {
        name: "Filter Tool",
        image: filtertool,
        desc: "This tool adds visual effects like blur, brightness, and hue adjustments.",
        steps: [
          "Tap the Filter icon.",
          "Choose an effect (e.g., Blur, Hue/Saturation).",
          "Adjust settings.",
        ],
        tips: [
          "Use blur for soft shadows.",
          "Experiment with color filters for mood adjustments.",
        ],
        examples: [
        ],
        references: [
          "Art by Sho. (2024). Ruler Tool in IbisPaint — Quick Guide. https://youtube.com/shorts/abc123xyz"
        ],
        technique: [
          "Brightness and Contrast — Adjusts how light or dark your artwork appears. Increasing brightness creates a cheerful and lively mood, while lowering it gives a dramatic or moody effect. Adjusting contrast makes colors pop or blend softly.",
          "Tip — Use high brightness for happy scenes and lower brightness for dramatic or emotional artworks.",
          { image: brightcon },
          "Hue and Saturation — Hue changes the color tone, while saturation controls how strong or dull the colors look. Warm hues like red and orange bring energy and excitement, while cool tones like blue and green give a calm or sad feeling.",
          "Tip — Try adjusting hue slightly to match the emotion or theme of your artwork.",
          { image: huesat },
          "Gaussian Blur — Softens edges and blends colors smoothly. Ideal for creating dreamy, nostalgic, or gentle atmospheres, such as backgrounds or glowing lights.",
          "Tip — Apply blur to the background to make the main subject stand out.",
          { image: gaussian },
          "Unsharp Mask — Sharpens edges and enhances details, making your artwork look clearer and more defined. Creates a bold and realistic mood but should be used lightly to avoid harshness.",
          "Tip — Use this filter at low intensity for a clean, natural look.",
          { image: unsharp },
          "Color Balance — Adjust the mix of red, green, and blue tones. Shifting colors can completely change the mood—more blue makes the scene cooler and calmer, more red adds warmth and excitement.",
          "Tip — Adjust color balance to create harmony or highlight certain emotions.",
          { image: colorbalance },
          "Glow (Inner) — Adds light around objects or within shapes, creating a magical, soft, or fantasy-like feeling. Perfect for highlights or dreamy effects.",
          "Tip — Use glow on light sources or shiny elements to enhance realism.",
          { image: glow },
          "Grayscale — Removes colors, leaving only shades of gray. Creates a serious, sad, or classic mood, often used for emotional or dramatic scenes.",
          "Tip — Apply grayscale to test the light and shadow balance in your artwork.",
          { image: grayscale },
          "Invert — Inverts colors, giving your artwork a reversed, surreal look. Often used for eerie, abstract, or experimental effects.",
          "Tip — Use this filter for creative or unusual designs that need a striking look.",
          { image: invert },
          "Tips for Artists — Use filters lightly; subtle changes often look more natural. Combine two or three filters to create your desired emotion or atmosphere. Experiment with different filter settings as each artwork reacts differently depending on color and lighting.",
        ]
      }
    ]
  },

  {
    category: "Community & Sharing",
    tools: [
      {
        name: "Monthly Ranking & Online Gallery",
        desc: "The Monthly Ranking (often called the 'monthly leaderboard') in IbisPaint is a system that ranks user-submitted artworks (illustrations, comics, animations) based on their performance over the course of a month. It falls under the broader Leaderboard system, which also includes daily and yearly rankings.",
        images: [
          {
            src: null,
            alt: "Monthly Ranking Leaderboard",
            caption: "Monthly Ranking showcasing top artworks"
          },
          {
            src: null, // Add your featured artworks screenshot here
            alt: "Featured Artworks",
            caption: "Exploring featured artworks for inspiration"
          },
          {
            src: null, // Add your main page screenshot here
            alt: "IbisPaint X Main Page",
            caption: "Main page of ibisPaint X app with online gallery access"
          },
          {
            src: null, // Add your my page screenshot here
            alt: "My Page Sign In",
            caption: "My Page section where you can sign in with your account"
          }
        ],
        steps: [
          "Go to the main page of ibisPaint X app where you can see online gallery",
          "You can find 'My Page' on the lower right and there you can sign in with your account",
          "Creating an account is quick and easy — you can use your email, Google, Apple, or social media account to get started"
        ],
        tips: [
          "Viewing the monthly rankings can help you gain new ideas, discover current art trends, and learn different ways to express creativity through composition, shading, and character design.",
          "Exploring these featured artworks can serve as a source of motivation to improve your own digital art skills, participate in the community, and develop unique artistic styles inspired by global creators.",
          "By having your own account, your artworks will be saved safely online, and everyone who sees your work will know it's yours.",
          "Once you're signed in, you'll be able to post your drawings, join the monthly rankings, and connect with artists from all over the world.",
          "If you want to upload your artwork to the IbisPaint X Online Gallery and share it with others, you'll need to sign up for an Ibis Account first.",
          "So go ahead — sign up, upload your masterpiece, and start sharing your creativity with the IbisPaint community!"
        ],
        examples: [
          "Browse monthly rankings to discover trending art styles",
          "Create an account to upload and share your artwork",
          "Connect with other artists in the IbisPaint community"
        ],
        references: [],
        technique: []
      }
    ]
  }

];

export default toolsData;