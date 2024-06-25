# Main Dashboard Page

# 3D Model Viewer - Main page

A React application to upload, view, and manipulate 3D models using `@react-three/fiber` and `@react-three/drei`. Users can upload `.glb` files, adjust the model's rotation, zoom, and change the color using a color picker.
<img width="1182" alt="Screenshot 2024-06-24 at 9 55 08 PM" src="https://github.com/irasharma13/Aspect3D/assets/36807339/f9f5f58a-616b-4da9-94a3-02b77efb1e3c">

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/irasharma13/Aspect3D.git
   cd Aspect3D


2. Install dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm start

This command runs the app in development mode. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.

## Features

- Model Upload: Users can upload .glb files through the interface.
- Interactive Controls: Adjust 3D models with intuitive controls for rotation, zoom, and color changes.
- Responsive Design: Ensures the application is accessible and functional on various devices and screen sizes.


## Uploading a Model
To upload a model:

- Click on the 'Upload Model' button.
- Browse and select a .glb file from your computer. The model will automatically load into the viewer where you can manipulate it.
- Manipulating Models
  -       Rotation: Drag the sliders to rotate the model along the X, Y, or Z axes.
      - Zoom: Use the zoom slider to zoom in and out of the model.
      - Color Picker: Select a color from the color picker to change the color of the model.


# HomePage

## Layout and Style
- Utilize a grid or tile layout to display images neatly.
- Use responsive design to ensure it works on various devices.
- Integrate TailwindCSS for quick styling and customization.

## Image Upload
- Implement a prominent '+' button for uploading new images.
- Use a modal or a slide-in form to handle the image upload process.
- Include form validations for file type and size constraints.

## Image Editing
- Provide an 'Edit' button that enables rearranging the order of the images.
- Consider drag-and-drop functionality for intuitive interface interaction.

## Delete Functionality
- Add a 'Delete' button on each image tile for removing images.
- Implement a confirmation dialog to prevent accidental deletions.

## Favorites and Sharing
- On hovering over an image:
  - Show a heart icon to add the image to favorites.
  - Display a share arrow icon for sharing options.
- Use local storage or a database to keep track of favorited items.

## Image Interaction
- Ensure hover effects are responsive and touch-friendly for mobile users.
- Consider fallbacks for devices that do not support hover functionality.

## Backend Integration
- Use NodeJS to handle server-side operations like image storage and retrieval.
- Store images in AWS S3 and manage data through a MySQL database.
- Secure RESTful APIs to handle the upload, deletion, and sharing of images.


![IMG_6602](https://github.com/irasharma13/Aspect3D/assets/36807339/b730ec22-f43c-4ad6-a8b8-8b1ddd9761e7)




#HomePage

## Layout and Style
- Utilize a grid or tile layout to display images neatly.
- Use responsive design to ensure it works on various devices.
- Integrate TailwindCSS for quick styling and customization.

## Image Upload
- Implement a prominent '+' button for uploading new images.
- Use a modal or a slide-in form to handle the image upload process.
- Include form validations for file type and size constraints.

## Image Editing
- Provide an 'Edit' button that enables rearranging the order of the images.
- Consider drag-and-drop functionality for intuitive interface interaction.

## Delete Functionality
- Add a 'Delete' button on each image tile for removing images.
- Implement a confirmation dialog to prevent accidental deletions.

## Favorites and Sharing
- On hovering over an image:
  - Show a heart icon to add the image to favorites.
  - Display a share arrow icon for sharing options.
- Use local storage or a database to keep track of favorited items.

## Image Interaction
- Ensure hover effects are responsive and touch-friendly for mobile users.
- Consider fallbacks for devices that do not support hover functionality.

## Backend Integration
- Use NodeJS to handle server-side operations like image storage and retrieval.
- Store images in AWS S3 and manage data through a MySQL database.
- Secure RESTful APIs to handle the upload, deletion, and sharing of images.


![IMG_6602](https://github.com/irasharma13/Aspect3D/assets/36807339/b730ec22-f43c-4ad6-a8b8-8b1ddd9761e7)

