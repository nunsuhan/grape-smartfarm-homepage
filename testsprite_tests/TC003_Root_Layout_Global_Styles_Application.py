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
        # -> Navigate to the technology blog page to validate global styles and providers consistency.
        frame = context.pages[-1]
        # Click on '기술력 (Technology)' link to navigate to the technology blog page
        elem = frame.locator('xpath=html/body/main/section[5]/div[2]/div[2]/div[2]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Navigate to the water logic page to validate global styles and providers consistency.
        frame = context.pages[-1]
        # Click on '센서 연동 (Sensor Integration)' or relevant link to navigate to water logic page
        elem = frame.locator('xpath=html/body/footer/div/div/div[2]/div/a[4]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Navigate to the yield logic page to validate global styles and providers consistency.
        frame = context.pages[-1]
        # Click on '지능형 로직 (Intelligent Logic)' link to navigate to yield logic page
        elem = frame.locator('xpath=html/body/header[2]/div/nav/div[4]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Navigate to the advanced education page to validate global styles and providers consistency.
        frame = context.pages[-1]
        # Click on '센서 교육 가이드 (Sensor Education Guide)' link to navigate to advanced education page
        elem = frame.locator('xpath=html/body/header/div/nav/div[3]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Navigate to the beginner education page to validate global styles and providers consistency.
        frame = context.pages[-1]
        # Click on 'Beginner 입문/초급 (DIY 기초)' link to navigate to beginner education page
        elem = frame.locator('xpath=html/body/main/section[2]/div/div/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=기술력 (Technology)').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=센서 교육 가이드').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=지능형 로직').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=DIY Sensor Course').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=입문자를 위한 ESP32 센서 만들기').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=1만원짜리 보드(ESP32)와 온습도 센서(DHT22)로 나만의 스마트팜 센서를 만들어보세요.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=복잡한 코딩 없이, '복사'해서 '붙여넣기'하면 끝납니다.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=펌웨어 전체 코드 (Copy & Paste)').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=아래 코드는 DHT22 센서 값을 읽어 FarmSense 서버로 전송하는 전체 코드입니다.SSID와 PASSWORD 부분만 내 농장의 와이파이 정보로 수정하세요.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=설정이 어려우신가요?').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI에게 사진을 찍어 물어보세요').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    