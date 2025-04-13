// 简单的内存存储（生产环境应使用数据库）
const consentedIPs = new Set();

// 检查IP是否已同意的端点
app.post('/api/check-cookie-consent', (req, res) => {
  const { ip } = req.body;
  res.json({ hasConsented: consentedIPs.has(ip) });
});

// 存储IP同意状态的端点
app.post('/api/store-cookie-consent', (req, res) => {
  const { ip } = req.body;
  consentedIPs.add(ip);
  res.json({ success: true });
});
