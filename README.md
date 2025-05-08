# PlantPal - Plant Care Guidance App

## Project Description
This project is part of the Frontend Development (FFU1200) course. It aims to give hands-on experience with React fundamentals by building a fully functional and user-friendly Plant Care Guidance App.

The app allows users to explore, search, and manage a list of plants, providing detailed care information for each. It is developed with React (Vite) using a functional component architecture, making extensive use of React Hooks, React Router, and form validation. Data persistence is achieved through integration with Firebase. 

## Installation
git clone https://github.com/DavidJad88/group-assignment-2.git
cd plant-care-app
npm install
npm run dev

## Usage
The app is designed to give users a clear overview of their plants and how to care for them.

- Upon launching the app, users are presented with a grid of plant cards, each showing a plant's name and image.
- Clicking on a card opens a detailed view, either in a modal or on a dedicated page, showing care instructions   such as watering frequency, light requirements, temperature range, and more.
- Users can click "Add Plant" to register a new plant using a form with validation and feedback.
- Plants can be sorted or filtered based on characteristics like watering schedule or light preference.
- A search bar is also available for quickly finding plants by name, especially useful for larger collections.

All information is synced with a cloud database to ensure persistence across sessions.

## Features 
- Plant List: Displays a responsive grid of plant cards with names and images.
- Search Functionality: Users can search plants by name, dynamically filtering the list.
- Plant Detail View: Click on a card to view plant details in a modal.
- Add New Plant: A form to submit new plants, including validation and feedback messages.
- Sorting and Filtering: Users can sort or filter plants based on care attributes.
- Database Integration: All plant data is stored and retrieved from Firestore. 
- Responsive Layout: Mobile-friendly UI with clear structure and accessibility considerations.
- Git Version Control: Project managed via Git and hosted on GitHub.

## Deployment
Live Demo: plantpal1.netlify.app
Deployed using: Netlify 

## License
MIT License