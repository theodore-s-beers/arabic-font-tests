function setFont() {
  const selectedFont = document.getElementById("fontSelector").value;

  if ("bootstrap" === selectedFont) {
    document.documentElement.style.setProperty(
      "--arabic-font",
      // This is just a copy of the Bootstrap "native font stack"
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    );
  } else {
    document.documentElement.style.setProperty("--arabic-font", selectedFont);
  }
}
