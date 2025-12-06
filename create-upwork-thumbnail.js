const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Upwork thumbnail: 1000x750
  await page.setViewport({ 
    width: 1000, 
    height: 750, 
    deviceScaleFactor: 1 
  });
  
  await page.goto('https://omar-portfolio.xyz/', { 
    waitUntil: 'networkidle2', 
    timeout: 30000 
  });
  
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  await page.screenshot({ 
    path: 'upwork-portfolio-thumbnail.png', 
    type: 'png' 
  });
  
  await browser.close();
  console.log('Upwork thumbnail created at 1000x750');
})();
