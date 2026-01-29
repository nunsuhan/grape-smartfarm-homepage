import asyncio
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None
    
    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()
        
        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )
        
        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)
        
        # Open a new page in the browser context
        page = await context.new_page()
        
        # Navigate to your target URL and wait until the network request is committed
        await page.goto("http://localhost:3000", wait_until="commit", timeout=10000)
        
        # Wait for the main page to reach DOMContentLoaded state (optional for stability)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=3000)
        except async_api.Error:
            pass
        
        # Iterate through all iframes and wait for them to load as well
        for frame in page.frames:
            try:
                await frame.wait_for_load_state("domcontentloaded", timeout=3000)
            except async_api.Error:
                pass
        
        # Interact with the page elements to simulate user flow
        # -> Find and click the link or menu item that leads to the Yield Prediction blog page.
        frame = context.pages[-1]
        # Click on the 의사결정 지원 (DSS) link which mentions GDD Algorithm and PMI Prediction, likely related to Yield Prediction.
        elem = frame.locator('xpath=html/body/main/section[5]/div[2]/div[2]/div[3]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Scroll down to locate and verify content specifically about Growing Degree Days (GDD) and AI vision yield prediction. Check images and layout consistency.
        await page.mouse.wheel(0, 600)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=VitiCanopy & Yield Algo').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=스마트폰 사진으로 수관 밀도와 공극률을 분석해 광합성 효율과 엽면적(LAI)을 추정, 최종 예상 수확량 계산.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Core Algorithm Logic').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=FarmSense는 단순 진단을 넘어섭니다.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=© 2025 FarmSense. All rights reserved.').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    