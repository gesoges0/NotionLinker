document.addEventListener('DOMContentLoaded', () => {
  // Save button event listener
  document.getElementById('saveButton').addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    chrome.storage.sync.get(['notionKey', 'databaseId', 'fromTag'], async (data) => {
      if (!data.notionKey || !data.databaseId) {
        alert('Please set Notion API Key and Database ID in settings');
        return;
      }

      const pageData = {
        title: tab.title,
        url: tab.url,
        timestamp: new Date().toISOString(),
      };

      try {
        const response = await chrome.runtime.sendMessage({
          type: 'saveToNotion',
          apiKey: data.notionKey,
          databaseId: data.databaseId,
          fromTag: data.fromTag,
          pageData: pageData
        });

        if (response.success) {
          alert('Saved successfully!');
        } else {
          alert('Failed to save: ' + response.error);
        }
      } catch (error) {
        alert('Failed to save: ' + error.message);
      }
    });
  });

  // Settings button event listener
  document.getElementById('settingButton').addEventListener('click', () => {
    chrome.tabs.create({ url: 'settings.html' });
  });
});
