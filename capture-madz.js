const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setViewport({ 
    width: 1440, 
    height: 900, 
    deviceScaleFactor: 2 
  });
  
  try {
    await page.goto('https://mads-xi.vercel.app/', { 
      waitUntil: 'networkidle2', 
      timeout: 30000 
    });
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    await page.screenshot({ 
      path: 'public/projects/madz-concierge.png', 
      type: 'png' 
    });
    
    console.log('Screenshot captured at 2880x1800');
  } catch (error) {
    console.log('Error:', error.message);
    console.log('Trying gate.html instead...');
    
    await page.goto('https://mads-xi.vercel.app/gate.html', { 
      waitUntil: 'networkidle2', 
      timeout: 30000 
    });
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    await page.screenshot({ 
      path: 'public/projects/madz-concierge.png', 
      type: 'png' 
    });
    
    console.log('Screenshot captured from gate.html at 2880x1800');
  }
  
  await browser.close();
})();
