const validatorService = require("./validator.service");

module.exports = {
  validatePortfolio: async (req, res) => {
    const { html, css } = req.body;

    // If both HTML and CSS are empty
    if (html === "" && css === "") {
      let combinedErrors = [];

      // Validate HTML
      const htmlValidationErrors = await validatorService.validateHTML(html);
      if (htmlValidationErrors.length === 0) {
        combinedErrors.push("HTML Code has no errors.");
      } else {
        combinedErrors.push("HTML Validation Errors:", ...htmlValidationErrors);
      }

      // Validate CSS if HTML has no errors
      const cssValidationErrors = await validatorService.validateCSS(css);
      if (cssValidationErrors.length === 0) {
        combinedErrors.push("CSS code has no errors.");
      } else {
        combinedErrors.push("CSS Validation Errors:", ...cssValidationErrors);
      }

      res.status(200).json({ success: false, message: combinedErrors });

      // If only HTML is provided or only CSS is provided
    } else if ((html && !css && css != "") || (html === "" && !css)) {
      const htmlValidationErrors = await validatorService.validateHTML(html);
      htmlValidationErrors.unshift("Missing CSS field.");

      if (htmlValidationErrors.length === 1) {
        htmlValidationErrors.push("HTML Code meets criteria");
      }

      res.status(200).json({
        success: false,
        message: htmlValidationErrors,
      });

      // If only CSS is provided or only HTML is provided
    } else if ((!html && css && html != "") || (css === "" && !html)) {
      const cssValidationErrors = await validatorService.validateCSS(css);
      cssValidationErrors.unshift("Missing HTML field.");

      if (cssValidationErrors.length === 1) {
        cssValidationErrors.push("CSS Code meets criteria");
      }

      res.status(200).json({
        success: false,
        message: cssValidationErrors,
      });

      // If both HTML and CSS are missing
    } else if (!html && !css && html !== "" && css !== "") {
      res
        .status(400)
        .json({ success: false, message: "Missing fields for HTML and CSS" });

      // If both HTML and CSS are provided
    } else {
      let combinedErrors = [];

      // Validate HTML
      const htmlValidationErrors = await validatorService.validateHTML(html);
      if (htmlValidationErrors.length === 0) {
        combinedErrors.unshift("HTML Code meets criteria");
      } else {
        combinedErrors.push("HTML Validation Errors:", ...htmlValidationErrors);
      }

      // Validate CSS if HTML has no errors
      const cssValidationErrors = await validatorService.validateCSS(css);
      if (cssValidationErrors.length === 0) {
        combinedErrors.unshift("CSS Code meets criteria.");
      } else {
        combinedErrors.push("CSS Validation Errors:", ...cssValidationErrors);
      }

      if (combinedErrors.length === 2) {
        res
          .status(200)
          .json({ success: true, message: "Code meets the criteria." });
      } else {
        res.status(200).json({ success: false, message: combinedErrors });
      }
    }
  },
};
