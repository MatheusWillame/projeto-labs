const puppeteer = require('puppeteer');

(async ()=>{
    // 
    const browser =await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    //await page.goto('https://instagram.com/rocketseat_oficial'); 

    await page.evaluate(()=>{
        
        const nodeList=document.querySelector('app-todo').shadowRoot.querySelectorAll('.list__container');
        const textArray=[...nodeList];

        const list=textArray.map((item)=>({
          item
        }));

        console.log("Dados do teste: ",list[0].item.innerText);
    })
})();
