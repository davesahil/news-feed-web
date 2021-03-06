const extractImageSourceUrl = (content) => {
  let startIndex = content.indexOf("src=") + 5;
  let endIndex = content.indexOf("alt=") - 2;

  if (endIndex < 0) {
    endIndex = content.indexOf("/>") - 2;
  }

  let srcUrl = content.substring(startIndex, endIndex);

  return srcUrl;
};

export { extractImageSourceUrl };
