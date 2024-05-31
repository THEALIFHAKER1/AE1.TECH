export const getTextColor = (background?: string): string => {
  // Use a default background color if none is provided
  background = background ?? '#ffffff'; // White in hex

  // Validate the provided background color using a regular expression
  if (!/#[0-9a-fA-F]{6}/.test(background)) {
    console.warn(`Invalid background color format: ${background}. Using default white.`);
    background = '#ffffff';
  }

  // Efficiently convert hex to RGB using bitwise operations (assuming 8-bit channels)
  const rgb = {
    r: parseInt(background.slice(1, 3), 16),
    g: parseInt(background.slice(3, 5), 16),
    b: parseInt(background.slice(5, 7), 16),
  };

  const luminance = (rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114) / 255;
  return luminance > 0.5 ? "black" : "white";
};
