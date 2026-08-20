# CSS & SCSS Explainer

The **CSS Explainer** (`CSSExplainer`) in DevDiff Study Buddy parses stylesheets, SCSS, and CSS modules to explain layout mechanics, specificity conflicts, and styling behavior in plain English.

---

## 🎨 Why a Dedicated CSS Explainer?

CSS rules can be deceptive. A single rule like `display: flex` or `z-index: 10` can radically change how child and sibling elements render. Study Buddy deconstructs stylesheets into four essential facets:

1. **Layout Strategy & Flow**
2. **Selector Specificity & Cascade Weight**
3. **Box Model & Spacing Dynamics**
4. **Stacking Contexts & Z-Index**

---

## 🔍 Core Analysis Features

### 1. Layout Strategy Detection
Study Buddy analyzes container display modes:
- **Flexbox (`display: flex`)**: Explains main-axis vs. cross-axis alignment (`justify-content`, `align-items`), wrapping behavior, and flex-grow/shrink distributions.
- **CSS Grid (`display: grid`)**: Explains column/row track definitions (`grid-template-columns: repeat(auto-fit, minmax(...))`), gap spacing, and grid area placements.
- **Positioning**: Explains `relative`, `absolute`, `fixed`, and `sticky` positioning and their containing blocks.

### 2. Specificity Breakdown
Calculates the exact CSS specificity score:
- `(IDs, Classes/Attributes/Pseudos, Elements)`
- Warns when styles might fail to apply due to higher-specificity rules elsewhere in the project.

### 3. Box Model & Dimensions
Breaks down how `padding`, `border`, `margin`, and `box-sizing: border-box` affect the total rendered dimensions of an element.

---

## 💡 Example Breakdown

### Input CSS:
```css
.profile-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  margin: 1rem auto;
  border-radius: 12px;
  background-color: #1e293b;
  z-index: 10;
}
```

### Study Buddy Explanation (Beginner Level):
> **🌱 Beginner Explanation:**  
> • **The Job of this Code:** Styles a profile card container so its inner elements line up neatly in a horizontal row with nice spacing and rounded corners.  
> • **`display: flex`:** Turns on Flexbox mode. All items inside `.profile-card` will sit side-by-side instead of stacking vertically.  
> • **`justify-content: space-between`:** Pushes the first item to the far left and the last item to the far right, spreading extra space evenly in the middle.  
> • **`padding: 1.5rem`:** Adds an internal cushion of space inside the card so text doesn't touch the borders.  
> • **`margin: 1rem auto`:** Centers the entire card horizontally on the page.

---

## 🛠️ CLI Usage

```bash
# Explain a CSS or SCSS file
devdiff study explain styles/main.css --level beginner

# Ask a specific question about a CSS layout
devdiff study ask "Why is the hero container overflowing horizontally?"
```
