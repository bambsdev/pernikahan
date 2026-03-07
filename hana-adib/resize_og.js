const Jimp = require("jimp");

Jimp.read("opengraph.png")
  .then((img) => {
    return img
      .cover(1200, 630)
      .quality(85) // adjust JPEG quality to keep size small
      .writeAsync("opengraph.jpg");
  })
  .then(() => {
    console.log("Successfully resized to 1200x630 and saved as opengraph.jpg");
  })
  .catch((err) => {
    console.error("Error processing image:", err);
  });
