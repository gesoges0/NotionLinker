chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'saveToNotion') {
    saveToNotion(request.apiKey, request.databaseId, request.pageData, request.fromTag)
      .then(result => sendResponse({ success: true }))
      .catch(error => sendResponse({ success: false, error: error.message }));
    return true; // Will respond asynchronously
  }
});

async function saveToNotion(apiKey, databaseId, pageData, fromTag) {
  const response = await fetch(`https://api.notion.com/v1/pages`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      parent: { database_id: databaseId },
      properties: {
        '既読': {
          checkbox: false
        },
        'タイトル': {
          title: [
            {
              text: {
                content: pageData.title
              }
            }
          ]
        },
        'URL': {
          url: pageData.url
        },
        '作成日': {
          date: {
            start: pageData.timestamp
          }
        },
        'FROM': {
          select: 
          {
            name: fromTag
          }
        }
      }
    })
  });

  if (!response.ok) {
    throw new Error('Failed to save to Notion');
  }
  return response.json();
}
