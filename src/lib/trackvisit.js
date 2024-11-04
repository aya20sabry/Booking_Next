const trackVisitScript = `
  (function() {
    // Create and load UA Parser script
    var uaScript = document.createElement('script');
    uaScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/UAParser.js/0.7.28/ua-parser.min.js';
    uaScript.async = true;
    
    uaScript.onload = function() {
      // Only run tracking after UA Parser is loaded
      function trackVisit() {
        const parser = new UAParser();
        const result = parser.getResult();
        console.log("result", result);
        const deviceType = result.os.name;
        console.log("deviceType", deviceType);

        fetch("http://localhost:3000/visitor/analytics", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            device: deviceType === "Windows" ? "desktop" : "mobile",
            path: window.location.pathname,
          }),
        })
        .then(() => console.log("Visit tracked"))
        .catch((error) => console.error("Error tracking visit:", error));
      }
      trackVisit();
    };

    document.head.appendChild(uaScript);
  })();
`;

export default trackVisitScript;
