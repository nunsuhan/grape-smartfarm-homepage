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
        # -> Click on the '센서 교육 가이드' (Sensor Education Guide) menu to access the Beginner sensor guide page.
        frame = context.pages[-1]
        # Click on the '센서 교육 가이드' (Sensor Education Guide) menu item to open the sensor education beginner guide page.
        elem = frame.locator('xpath=html/body/main/footer/div/div/div[2]/div/a[4]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Scroll down to review the full ESP32 sensor building steps, code snippets, images, and explanatory text for completeness and formatting.
        await page.mouse.wheel(0, 800)
        

        # -> Scroll further down to check the ESP32 sensor building steps, code snippets, images, and explanatory text for completeness and proper formatting.
        await page.mouse.wheel(0, 1000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=센서 교육 가이드').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=FarmSense').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Smart Sensors').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=IoT Network & Environmental Monitoring: 초정밀 센서 기술로 완성하는 보이지 않는 곳의 관리').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=400M+').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=12 types').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=94%').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Why Smart Sensors?').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=기존 방식').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=감각 의존: "대충 덥네/습하네" 느낌으로 판단하여 오차 발생').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=수동 관리: 하루 종일 하우스에 붙어서 창을 열고 닫아야 하는 노동').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=사후 약방문: 이미 고온 장애나 냉해를 입은 후에야 문제 인지').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=FarmSense IoT').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=정밀 데이터: 12가지 환경 변수를 1분 단위로 0.1% 오차범위 내 측정').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=자동 제어: 설정값에 따라 측창/보온커튼/관수 등을 24시간 자동 제어').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=이상 감지: 장비 고장이나 급격한 환경 변화 시 즉시 스마트폰 알림').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=How It Works').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=1').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=1. Sensing').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=온도, 습도, CO2, 지온, 지습 등 12가지 핵심 환경 변수를 1분 단위로 오차 범위 0.1% 내에서 측정합니다.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=2').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=2. Transmission').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=LoRaWAN 저전력 장거리 통신 기술을 사용하여 통신 비용 없이 반경 2km 내의 데이터를 안정적으로 전송합니다.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=3').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=3. Processing').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=수집된 데이터는 엣지 디바이스에서 1차 보정 후 클라우드로 전송되어 이상 징후를 즉시 판별합니다.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Massive IoT Grid').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Multi-Sensor Fusion').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=단일 센서의 오차를 최소화하기 위해 다중 센서 간의 상관관계를 분석하여 데이터 무결성을 검증합니다. (예: 일사량과 온도의 관계 분석)').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Automated Calibration').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=센서 노후화에 따른 드리프트 현상을 AI가 자동으로 감지하고 보정하여 장기간 사용에도 초기 성능을 유지합니다.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Robust Hardware').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=IP67 방수/방진 등급의 하드웨어 설계로 고온다습한 하우스 환경과 외부 노지 환경에서도 내구성을 보장합니다.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Use Cases').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=정밀 환경 제어').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text="하우스 온도는 맞는데 작물 상태가 왜 이럴까요?"').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=→ 공기 온도가 아닌 '엽온(잎의 온도)'과 '근권 수분(뿌리 근처 수분)'을 측정하여 식물이 실제로 느끼는 스트레스를 94%의 정확도로 감지해 냅니다.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=장비 고장 조기 경보').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text="겨울밤 보일러가 고장난 줄 모르고 잤다가 냉해를 입었습니다."').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=→ 온도가 설정 범위 밖으로 급격히 떨어지는 패턴을 즉시 감지하여 새벽 2시에도 전화 알림을 발송하여 치명적인 사고를 막았습니다.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Related Papers').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=01').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Wireless sensor networks for agriculture').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Ojha et al., Computers and Electronics in Agriculture 2015').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=02').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TimescaleDB Documentation').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Timescale, 2024').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=03').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=스마트팜코리아').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=농림축산식품부, 공식 사이트').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=자주 묻는 질문').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=설치가 어렵지 않은가요?').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=전기 공사가 필요한가요?').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=정전이 되어도 작동하나요?').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=타사 제어기(컨트롤러)와 호환 되나요?').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=보이지 않는 것까지 관리하세요').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=FarmSense IoT 센서가 24시간 당신의 농장을 지켜드립니다.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=시연 신청하기').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=FarmSense').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI가 포도를 이해합니다').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=contact@farmsense.io').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=대한민국').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=기술').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=RAG 시스템').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI 진단').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=병해 예측').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=센서 연동').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=데이터 전략').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=서비스').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=서비스 소개').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=제품 소개').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=고객지원').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=FAQ').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=AI 스마트 도우미').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=1:1 문의').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=제휴 문의').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=시연 신청').first).to_be_visible(timeout=30000)
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
    