import type { navLinkInterface } from "~/types/NavLink";

export const useActiveLink = (
  links: navLinkInterface[],
  scrollPosition: number
): string => {
  const activeLink = ref<string>("");
  links.map((data, index, array) => {
    const indexData = array[index];
    const previousData = index > 0 ? array[index - 1] : null;
    if (previousData) {
      //@ts-ignore
      const previousPageRef: HTMLElement = document.getElementById(
        `${previousData.ref}`
      );
      //@ts-ignore
      const currentPageRef: HTMLElement = document.getElementById(
        `${data.ref}`
      );
      if (
        scrollPosition >
          previousPageRef?.offsetHeight + previousPageRef?.offsetTop &&
        scrollPosition < currentPageRef.offsetHeight + currentPageRef.offsetTop
      ) {
        activeLink.value = data.title;
      }
    } else if (indexData.ref) {
      activeLink.value = indexData.ref;
    }
  });

  return activeLink.value;
};

export const useTextSlpitter = (
  containerRef: HTMLElement,
  textData: string,
  avgCharacterWidth: number
): string[] => {
  const containerWidth = containerRef.clientWidth;
  const avgCharWidth = avgCharacterWidth;
  const charsPerLine = Math.floor(containerWidth / avgCharWidth);

  const lines: string[] = [];
  let currentLine = "";

  textData.split(" ").forEach((word) => {
    if ((currentLine + word).length <= charsPerLine) {
      currentLine += word + " ";
    } else {
      lines.push(currentLine.trim());
      currentLine = word + " ";
    }
  });
  if (currentLine) lines.push(currentLine.trim());

  return lines;
};
