const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setViewport({ 
    width: 1440, 
    height: 900, 
    deviceScaleFactor: 2 
  });
  
  await page.goto('https://ai-platform-seven-navy.vercel.app/', { 
    waitUntil: 'networkidle2', 
    timeout: 30000 
  });
  
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  await page.screenshot({ 
    path: 'public/projects/redyoi-ai.png', 
    type: 'png' 
  });
  
  await browser.close();
  console.log('Screenshot captured at 2880x1800');
})();
