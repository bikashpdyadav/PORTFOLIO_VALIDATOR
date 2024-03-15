module.exports = {
  validateHTML: (html) => {
    return new Promise((resolve, reject) => {
      let errors = [];

      // Validate HTML
      if (!html?.includes('<nav id="navbar">')) {
        errors.push("Missing Navbar with id 'navbar'");
      }
      if (!html?.includes('<section id="welcome-section">')) {
        errors.push("Missing Welcome Section with id 'welcome-section'");
      }
      if (!html?.includes('<section id="projects">')) {
        errors.push("Missing Projects Section with id 'projects'");
      }
      if (!html?.includes('href="https://github.com/yourusername"')) {
        errors.push(
          "Missing Profile Link with id 'profile-link' to your GitHub profile"
        );
      }

      resolve(errors);
    });
  },
  validateCSS: (css) => {
    return new Promise((resolve, reject) => {
      let errors = [];
      // Validate CSS
      if (!css?.includes("#navbar")) {
        errors.push("Missing CSS styling for Navbar with id 'navbar'");
      }
      if (!css?.includes("#welcome-section")) {
        errors.push(
          "Missing CSS styling for Welcome Section with id 'welcome-section'"
        );
      }
      if (!css?.includes("#projects")) {
        errors.push(
          "Missing CSS styling for Projects Section with id 'projects'"
        );
      }

      resolve(errors);
    });
  },
};
