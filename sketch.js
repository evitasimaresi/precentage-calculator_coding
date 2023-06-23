let img;
let patternCounts = {
  red: 0,
  green: 0,
  blue: 0
};

function preload() {
  // Load the image
  img = loadImage('images/imV.png');
  console.log("image loaded");
}

function setup() {
  // Create a canvas that matches the image dimensions
  createCanvas(img.width, img.height);

  // Display the image on the canvas
  image(img, 0, 0);

  // Loop through every pixel in the image
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      // Get the color of the current pixel
      let pixelColor = get(x, y);

      // Check if the color matches any of the patterns
      if (colorMatchesPattern(pixelColor, color(255, 0, 0))) {
        patternCounts.red++;
      } else if (colorMatchesPattern(pixelColor, color(0, 255, 0))) {
        patternCounts.green++;
      } else if (colorMatchesPattern(pixelColor, color(0, 0, 255))) {
        patternCounts.blue++;
      }
    }
  }

  // Calculate the percentages
  let totalRGB = patternCounts.red + patternCounts.green + patternCounts.blue ;
  let redPercentage = (patternCounts.red / totalRGB) * 100;
  let greenPercentage = (patternCounts.green / totalRGB) * 100;
  let bluePercentage = (patternCounts.blue / totalRGB) * 100;

  // Print the percentages
  console.log('Red percentage:', redPercentage);
  console.log('Green percentage:', greenPercentage);
  console.log('Blue percentage:', bluePercentage);
}

function colorMatchesPattern(color1, color2) {
  // Compare the RGB values of two colors for an exact match
  return (red(color1) === red(color2) &&
          green(color1) === green(color2) &&
          blue(color1) === blue(color2));
}