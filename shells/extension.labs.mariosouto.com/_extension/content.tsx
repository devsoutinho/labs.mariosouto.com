// eslint-disable-next-line no-console
const log = console.log;

function debounce(fn: (...args: unknown[]) => void, delay: number) {
  let timer: number;
  return function (...args: unknown[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay) as unknown as number;
  };
}

const debouncedSelectionChange = debounce(() => {
  // get text from selection
  const selection = document.getSelection();
  if (selection) {
    const text = selection.toString();
    const { length } = text;
    const totalWords = text.split(" ").filter(Boolean).length;
    log("Selected text length: ", length);
    log("Selected text total words: ", totalWords);
    const payload = {
      length,
      totalWords,
    };

    chrome.runtime.sendMessage(payload);

    chrome.storage.local
      .set({ wordCountApp: payload })
      .then(() => {
        log("Saved to storage");
      })
      .catch((error) => {
        log("Error saving to storage", error);
      });
  }
}, 1000);

document.addEventListener("selectionchange", debouncedSelectionChange);
