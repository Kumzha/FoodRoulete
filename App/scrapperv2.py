import requests
import json


def getBoltRestaurants(lat, lng):
    headers = {
        'accept': '*/*',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'origin': 'https://food.bolt.eu',
        'priority': 'u=1, i',
        'referer': 'https://food.bolt.eu/',
        '^sec-ch-ua': '^\\^Not/A)Brand^\\^;v=^\\^8^\\^, ^\\^Chromium^\\^;v=^\\^126^\\^, ^\\^Google',
        'sec-ch-ua-mobile': '?0',
        '^sec-ch-ua-platform': '^\\^Windows^\\^^',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    }

    params = (
        ('delivery_lat', '54.692317'),
        ('delivery_lng', '25.308777'),
        ('city_id', '9'),
        ('version', 'FW.1.70'),
        ('language', 'en-US'),
        ('session_id', '0'),
        ('device_name', 'web'),
        ('device_os_version', 'web'),
        ('deviceId', '0'),
        ('deviceType', 'web'),
    )

    response = requests.get('https://deliveryuser.live.boltsvc.net/deliveryClient/public/getHomeCategories', headers=headers, params=params)

    # response = requests.get('https://deliveryuser.live.boltsvc.net/deliveryClient/public/getHomeCategories?delivery_lat=54.692317&delivery_lng=25.308777&city_id=9&version=FW.1.70&language=en-US&session_id=2a921b3c-a7f4-4ae6-84d8-b77093095efaeater1722201169&device_name=web&device_os_version=web&deviceId=2a921b3c-a7f4-4ae6-84d8-b77093095efa&deviceType=web', headers=headers)


    file_path = 'textfiles/jsonfile.txt'

    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(response.text)

    print("success")

def getSuggestions(adress: str):

    headers = {
        'accept': '*/*',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'origin': 'https://food.bolt.eu',
        'priority': 'u=1, i',
        'referer': 'https://food.bolt.eu/',
        '^sec-ch-ua': '^\\^Not/A)Brand^\\^;v=^\\^8^\\^, ^\\^Chromium^\\^;v=^\\^126^\\^, ^\\^Google',
        'sec-ch-ua-mobile': '?0',
        '^sec-ch-ua-platform': '^\\^Windows^\\^^',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    }

    params = (
        ('search_string', {adress}),
        ('lng', '25.2816'),
        ('lat', '54.6912'),
        ('version', 'FW.1.70'),
        ('language', 'en-US'),
        ('session_id', '2a921b3c-a7f4-4ae6-84d8-b77093095efaeater1722201169'),
        ('device_name', 'web'),
        ('device_os_version', 'web'),
        ('deviceId', '2a921b3c-a7f4-4ae6-84d8-b77093095efa'),
        ('deviceType', 'web'),
    )

    response = requests.get('https://deliveryuser.live.boltsvc.net/deliveryClient/public/suggestDeliveryLocations', headers=headers, params=params)
    response_object = response.json()
    response_string = json.dumps(response_object, indent = 4)
    
    
    for suggestion in response_object['data']['suggestions']:
        print(suggestion['address_name'])


    # response = requests.get('https://deliveryuser.live.boltsvc.net/deliveryClient/public/suggestDeliveryLocations?search_string=Naugarduko&lng=25.2816&lat=54.6912&version=FW.1.70&language=en-US&session_id=2a921b3c-a7f4-4ae6-84d8-b77093095efaeater1722201169&device_name=web&device_os_version=web&deviceId=2a921b3c-a7f4-4ae6-84d8-b77093095efa&deviceType=web', headers=headers)

    file_path = 'textfiles/suggestions.txt'

    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(response_string)



getSuggestions('Naugarduko')       