from selenium import webdriver
from selenium.webdriver.edge.service import Service
from selenium.webdriver.edge.options import Options

# PATH = "C:/Users/kumza/Desktop/chrome-win64/chrome.exe"
PATH = "C:\\Users\\kumza\\Desktop\\Programing\\msedgedriver.exe"

edge_options = Options()

service = Service(PATH)
driver = webdriver.Edge(service=service, options=edge_options)

driver.get("http://www.youtube.com")
