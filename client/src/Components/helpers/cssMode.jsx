const cssMode = (setMode, setToggle) => {
  const elementsLight = Array.prototype.slice.call(document.getElementsByClassName('light'));
  const elementsDark = Array.prototype.slice.call(document.getElementsByClassName('dark'));
  if (elementsLight.length > 0) {
    for (let i = 0; i < elementsLight.length; i += 1) {
      const element = elementsLight[i];
      element.classList.remove('light');
      element.classList.add('dark');
      setMode('dark');
    }
  } else {
    for (let i = 0; i < elementsDark.length; i += 1) {
      const element = elementsDark[i];
      element.classList.remove('dark');
      element.classList.add('light');
      setMode('light');
    }
  }
};

export default cssMode;
