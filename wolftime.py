from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time

# Open mypack portal and add cookies
browser = webdriver.Chrome()
browser.get('https://mypack.ncsu.edu/')
browser.add_cookie(cookie)
browser.add_cookie(cookie)
time.sleep(3)

# Log in
element = browser.find_element_by_xpath('//*[@id="idpSelectPreferredIdPTile"]/div[2]/a/div[1]/img')
element.click()
time.sleep(3)
element = browser.find_element_by_id('username')
element.send_keys('YourUnityID')
element = browser.find_element_by_id('password')
element.send_keys('YourPassword')
element = browser.find_element_by_id('formSubmit')
element.click()
time.sleep(3)


# Shibboleth Login Service, agree to release information to mypack portal
element = browser.find_element_by_xpath('//*[@id="content"]/main/form/div[1]/p[2]/input[2]')
element.click()
time.sleep(3)
# Get cookies when you log in for the first time
cookie = browser.get_cookies()
print(cookie)

# Click Wolftime to clock in and out
element = browser.find_element_by_xpath('//*[@id="NC_WOLFTIME"]')
element.click()
time.sleep(3)

element = browser.find_element_by_xpath('//*[@id="TL_WEB_CLOCK_WK_TL_SAVE_PB"]')
element.click()
time.sleep(3)

# Close browser
browser.close()
