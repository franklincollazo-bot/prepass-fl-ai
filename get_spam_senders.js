(() => {
  const rows = document.querySelectorAll('tr[role="row"]');
  const counts = {};
  rows.forEach(row => {
    const senderElem = row.querySelector('span[email]');
    const senderNameElem = row.querySelector('span[name]');
    let sender = '';
    if (senderElem) {
      sender = senderElem.getAttribute('email');
    } else if (senderNameElem) {
      sender = senderNameElem.getAttribute('name');
    } else {
      // Fallback to text content of the sender cell
      const cell = row.querySelector('td.yX.xY');
      if (cell) sender = cell.textContent.trim();
    }
    
    if (sender) {
      counts[sender] = (counts[sender] || 0) + 1;
    }
  });
  
  const sorted = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
    
  return sorted;
})()