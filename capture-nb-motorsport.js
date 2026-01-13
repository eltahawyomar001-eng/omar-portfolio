const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setViewport({ 
    width: 1440, 
    height: 900, 
    deviceScaleFactor: 2 
  });
  
  await page.goto('https://www.nbmotorsport.de/', { 
    waitUntil: 'networkidle2', 
    timeout: 30000 
  });
  
  // Wait for animations to complete
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  // Click accept cookies if present
  try {
    await page.click('button:has-text("Alle akzeptieren")');
    await new Promise(resolve => setTimeout(resolve, 1000));
  } catch (e) {
    // Cookie banner might not be present
  }
  
  await page.screenshot({ 
    path: 'public/projects/nb-motorsport.png', 
    type: 'png' 
  });
  
  await browser.close();
  console.log('Screenshot captured for NB Motorsport at 2880x1800');
})();
