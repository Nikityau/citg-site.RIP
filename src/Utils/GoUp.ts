export const GoUp = async () => {
  await document.documentElement.setAttribute("style", "scroll-behavior: unset");
  await window.scrollTo(0, 0);
  await document.documentElement.setAttribute("style", "scroll-behavior: smooth");
};
