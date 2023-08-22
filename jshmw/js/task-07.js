const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

function handleFontSizeChange() {
  const fontSizeValue = fontSizeControl.value + 'px';
  textSpan.style.fontSize = fontSizeValue;
}

fontSizeControl.addEventListener('input', handleFontSizeChange);
