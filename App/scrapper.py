from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time
import schemas
from requests_html import HTMLSession


PATH = "C:/Users/User/Desktop/Programs/chromedriver-win64/chromedriver.exe"
URL = "https://food.bolt.eu/en-US/landing"


chrome_options = webdriver.ChromeOptions()
service = Service(ChromeDriverManager().install())
# chrome_options.add_argument('--headless')
# chrome_options.add_argument('--disable-gpu')
# chrome_options.add_argument('--no-sandbox')

def scrapeBolt(adress: str) -> list[schemas.Restaurant]:
    try:
        driver = webdriver.Chrome(service=service, options=chrome_options)

        driver.get(URL)

        address_input = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, 'input[placeholder="Enter your address"]'))
        )

        address_input.send_keys(adress)

        # Wait for the suggestions to appear and click the first one
        first_suggestion = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.CLASS_NAME, 'r-w7s2jr'))
        )
        first_suggestion.click()

        time.sleep(5)

        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        # driver.execute_script("window.scrollBy(0, 1000);")
        
        time.sleep(5)
        html_content = driver.page_source

        file_path = 'pagehtml.txt'

        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(html_content)

        # search_results = driver.find_element(By.XPATH, "/html/body/div[2]/div/div/div/div/div/div/div[2]/div/div/div/div/div/div/div/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[3]/div/div/div/div[2]/div/div[16]/div/div/div/a/div/div/div[2]/div/div[1]/div/span" )
        # print(search_results.text)
        # for result in search_results:
        #     print(result.text)


        time.sleep(5) 

    finally:
        driver.quit()

    return[{"name": "Bolt"}]

scrapeBolt("Pavasario g. 30")