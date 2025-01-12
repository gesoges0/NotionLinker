document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get(['notionKey', 'databaseId', 'fromTag'], (data) => {
    document.getElementById('notionKey').value = data.notionKey || '';
    document.getElementById('databaseId').value = data.databaseId || '';
    document.getElementById('fromTag').value = data.fromTag || '';
  });
});

document.getElementById('saveSettings').addEventListener('click', () => {
  const notionKey = document.getElementById('notionKey').value;
  const databaseId = document.getElementById('databaseId').value;
  const fromTag = document.getElementById('fromTag').value;

  chrome.storage.sync.set({
    notionKey: notionKey,
    databaseId: databaseId,
    fromTag: fromTag
  }, () => {
    alert('Settings saved successfully!');
  });
});
