// eslint-disable-next-line no-console
console.log("[DS] Background");

chrome.runtime.onMessage.addListener((message) => {
  const totalWords = message.totalWords;
  chrome.action.setBadgeText({ text: totalWords.toString() });
});
