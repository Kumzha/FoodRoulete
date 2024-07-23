from selenium import webdriver
from selenium.webdriver.edge.service import Service
from selenium.webdriver.edge.options import Options


PATH = "C:/Users/kumza/Desktop/Programing/tools/chromedriver-win64/chromedriver.exe"
# PATH = "C:\\Users\\kumza\\Desktop\\Programing\\msedgedriver.exe"



# Create Chrome WebDriver options
chrome_options = Options()
# Uncomment the next line to run Chrome in headless mode
# chrome_options.add_argument("--headless")

# Initialize the Chrome WebDriver with the service and options
service = Service(PATH)
print("asd")
driver = webdriver.Chrome(service=service, options=chrome_options)
print("yo")
try:
    # Open a webpage
    driver.get("https://www.youtube.com")

    # Print the title of the page to confirm successful navigation
    print(driver.title)
finally:
    # Close the WebDriver
    driver.quit()