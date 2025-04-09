# 🖼️ Batch PNG to WebP Converter (Node.js)

This Node.js script allows you to convert multiple .png images from a folder into the .webp format using the powerful Sharp image processing library.

# 📦 Requirements

- Node.js (v14 or higher recommended)

- npm (Node Package Manager)

# 🧰 Installation

1. Clone or download this repository.

2. Install the dependencies:

npm install sharp fs-extra

# 🗂️ Folder Structure

1. Place your PNG images inside the images_png/ folder.

2. The converted .webp images will be saved automatically to images_webp/.

If the images_webp/ folder doesn’t exist, it will be created automatically.

# ▶️ Usage

Simply run the script using:

node convert.js

The script will:

1. Read all .png files inside the images_png folder.

2. Convert them to .webp format using a quality setting of 40.

3. Save the converted files in the images_webp folder.

# 🛠️ Configuration

You can change the following options directly in the script:

const inputDir = './images_png'; // Input folder
const outputDir = './images_webp'; // Output folder

And adjust WebP quality here:

.toFormat('webp', { quality: 40 }) // Change quality (0–100)

# 📎 License

This script is provided as-is, under the MIT License. Feel free to modify and use it in your own projects!
