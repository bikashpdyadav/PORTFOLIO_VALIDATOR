# PORTFOLIO_VALIDATOR

This project is a backend API for validating a portfolio webpage based on provided user stories.

## Features

- Validates the structure of a portfolio webpage.
- Provides clear feedback on any missing elements or incorrect structure.

## Project Structure

### src/

- Directory containing the source code for the application.

  #### validator/

  - Subdirectory for validation-related code.

    - validator.controller.js: Controller logic for validation.
    - validator.service.js: Service for validation functions.

### Files

- app.js: Main application file.
- validateRoute.js: Route file for validation endpoints.
- package-lock.json: Auto-generated file for package locking.
- package.json: File containing project metadata and dependencies.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
   bash
   git clone https://github.com/bikashpdyadav/PORTFOLIO_VALIDATOR.git

2. Navigate to the project directory:
   bash
   cd portfolio-validator

3. Install dependencies:
   bash
   npm install
4. Start the server:
   bash
   npm start

5. Send a POST request to http://localhost:3000/validate with the following JSON body:

## Example

Here's an example of a valid JSON request body:

```json
{
  "html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <link rel=\"stylesheet\" href=\"styles.css\">\n  <title>My Portfolio</title>\n</head>\n<body>\n  <!-- Navbar -->\n  <nav id=\"navbar\">\n    <ul>\n      <li><a href=\"#welcome-section\">Home</a></li>\n      <li><a href=\"#projects\">Projects</a></li>\n      <li><a href=\"https://github.com/yourusername\" target=\"_blank\" id=\"profile-link\">GitHub</a></li>\n    </ul>\n  </nav>\n\n  <!-- Welcome Section -->\n  <section id=\"welcome-section\">\n    <div class=\"welcome-container\">\n      <h1>Welcome to My Portfolio</h1>\n    </div>\n  </section>\n\n  <!-- Projects Section -->\n  <section id=\"projects\">\n    <div class=\"project-tile\">\n      <h2>Project Title</h2>\n      <p>Description of the project.</p>\n      <a href=\"#\">View Project</a>\n    </div>\n  </section>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>",

  "css": "body, h1, h2, p, ul, li {margin: 0; padding: 0;} body { font-family: Arial, sans-serif background-color: #f7f7f7;} #navbar { background-color: #333; position: fixed; width: 100%; top: 0;z-index: 1000;} #navbar ul { list-style-type: none; margin: 0; padding: 0; overflow: hidden;} #navbar li { float: left;} #navbar li a { display: block; color: white; text-align: center;padding: 14px 20px;text-decoration: none;} #navbar li a:hover { background-color: #555;} #welcome-section { height: 100vh;display: flex; justify-content: center; align-items: center; background-color: #007bff; color: white;}.welcome-container {text-align: center;}#projects {padding: 20px;}.project-tile { background-color: white; border-radius: 5px; padding: 20px; margin-bottom: 20px;} .project-tile h2 {margin-bottom: 10px;}.project-tile a {color: #007bff;text-decoration: none;}.project-tile a:hover {text-decoration: underline;}@media (max-width: 768px) {.project-tile {padding: 10px;}"
}
```
