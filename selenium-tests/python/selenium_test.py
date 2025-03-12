from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome()
driver.get("https://www.google.com")

search_box = driver.find_element(By.NAME, "q")
search_box.send_keys("Selenium WebDriver")
search_box.send_keys(Keys.RETURN)

time.sleep(2)
results = driver.find_elements(By.CSS_SELECTOR, "h3")
for result in results[:5]:
    print(result.text)

driver.quit()
