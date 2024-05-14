function setFont() {
  const selectedFont = document.getElementById("font-selector").value;

  if ("bootstrap" === selectedFont) {
    document.documentElement.style.setProperty(
      "--arabic-font",
      // This is just a copy of the Bootstrap "native font stack"
      "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    );
  } else {
    document.documentElement.style.setProperty("--arabic-font", selectedFont);
  }
}

document.getElementById("font-selector").addEventListener("change", setFont);
