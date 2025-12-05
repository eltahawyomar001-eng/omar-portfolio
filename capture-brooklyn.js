const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setViewport({ 
    width: 1440, 
    height: 900, 
    deviceScaleFactor: 2 
  });
  
  await page.goto('https://brooklynvintagecarclub.com/', { 
    waitUntil: 'networkidle2', 
    timeout: 30000 
  });
  
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  // Scroll down to show the red Porsche
  await page.evaluate(() => window.scrollTo(0, 400));
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  await page.screenshot({ 
    path: 'public/projects/90s-car-club.png', 
    type: 'png' 
  });
  
  await browser.close();
  console.log('Screenshot captured with red Porsche at 2880x1800');
})();
