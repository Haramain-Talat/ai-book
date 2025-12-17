# Quickstart: Setting up the Docusaurus Project

**Source Plan**: [plan.md](./plan.md)

This guide provides the essential steps to initialize a Docusaurus project for the Physical AI Book.

## Prerequisites

- **Node.js**: Version 18.0 or higher. You can check your version with `node -v`.
- **Yarn** (recommended) or **npm**: A JavaScript package manager. This guide will use `yarn`.

## Step 1: Initialize Docusaurus Site

1.  Navigate to the root of your project directory.
2.  Run the Docusaurus initialization command. This will create a new Docusaurus site in a directory named `website` (or similar). We will move the contents into the root later.

    ```bash
    npx create-docusaurus@latest website classic
    ```

3.  Move the contents of the `website` directory into the project root.

    ```bash
    # (On Windows using PowerShell)
    Move-Item -Path website\* -Destination .
    Remove-Item -Recurse -Force website
    ```

## Step 2: Configure Docusaurus

1.  **Main Configuration (`docusaurus.config.js`)**:
    - Set the `title`, `tagline`, and `url` for the book.
    - Configure the `organizationName` and `projectName` if deploying to GitHub Pages.
    - Update the `presets` to reflect the desired theme and docs settings.

2.  **Sidebar Configuration (`sidebars.js`)**:
    - Create this file in the root of the project if it doesn't exist.
    - Define the sidebar structure manually to control the order of chapters and lessons. This ensures the "beginner-to-advanced" flow.

    ```javascript
    // Example sidebars.js
    /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
    const sidebars = {
      // By default, Docusaurus generates a sidebar from the docs folder structure
      // To manually control the order, define it here:
      tutorialSidebar: [
        {
          type: 'category',
          label: 'Chapter 1: The Basics',
          items: ['chapter1/lesson1', 'chapter1/lesson2', 'chapter1/lesson3'],
        },
        // Add future chapters here
      ],
    };
    module.exports = sidebars;
    ```

## Step 3: Create Initial Content Structure

1.  **Delete Example Content**: Remove the default content in the `docs/` and `blog/` directories.
2.  **Create Chapter 1**:
    - Create a directory: `docs/chapter1`.
    - Inside `docs/chapter1`, create a file named `_category_.json` with the following content:
      ```json
      {
        "label": "Chapter 1: The Basics",
        "position": 1,
        "link": {
          "type": "generated-index",
          "description": "An introduction to the fundamental concepts."
        }
      }
      ```
    - Create three lesson files: `lesson1.md`, `lesson2.md`, and `lesson3.md`.

## Step 4: Run the Development Server

1.  Install dependencies:
    ```bash
    yarn install
    ```
2.  Start the local development server:
    ```bash
    yarn start
    ```
3.  Open your browser to `http://localhost:3000` to see the site. The sidebar should show "Chapter 1" with its three lessons.
