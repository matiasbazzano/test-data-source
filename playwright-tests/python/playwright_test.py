from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()
    
    page.goto("https://www.bing.com")
    page.fill("input[name='q']", "Playwright automation")
    page.press("input[name='q']", "Enter")
    
    page.wait_for_selector("h2 a")
    results = page.locator("h2 a").all_text_contents()
    print("Resultados:", results[:5])

    browser.close()
