document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get(['notionKey', 'databaseId'], (data) => {
    document.getElementById('notionKey').value = data.notionKey || '';
    document.getElementById('databaseId').value = data.databaseId || '';
  });
});

document.getElementById('saveSettings').addEventListener('click', () => {
  const notionKey = document.getElementById('notionKey').value;
  const databaseId = document.getElementById('databaseId').value;

  chrome.storage.sync.set({
    notionKey: notionKey,
    databaseId: databaseId
  }, () => {
    alert('Settings saved successfully!');
  });
});
