import requests
import json
from schemas import Restaurant, AdressSuggestion


def getBoltRestaurants(latitude, longitude) -> list[Restaurant]:

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


    #TODO need to gather city id info
    params = (
        ('delivery_lat', {latitude}),
        ('delivery_lng', {longitude}),
        ('city_id', '9'),
        ('version', 'FW.1.70'),
        ('language', 'en-US'),
        ('session_id', '0'),
        ('device_name', 'web'),
        ('device_os_version', 'web'),
        ('deviceId', '0'),
        ('deviceType', 'web'),
    )
    # Do the request and make it readable, iteratable
    response = requests.get('https://deliveryuser.live.boltsvc.net/deliveryClient/public/getHomeCategories', headers=headers, params=params)
    response_object = response.json()
    response_string = json.dumps(response_object, indent = 4)

    restaurant_list = []

    print(response_object['data']['providers'][0])
    
    for provider in response_object['data']['providers']:
        provider_id = provider['provider_id']
        address = provider['address']
        price_level_str = provider['price_level_str']
        min_delivery_time = provider['min_delivery_eta']
        max_delivery_time = provider['max_delivery_eta']
        image = provider['images']['provider_list_v1']['aspect_ratio_map']['original']['1x']
        tags = provider['tags']
        
        if provider['rating_info']["rating_value"] is None:
              rating = provider['rating_info']["rating_value"]
        else:
            #TODO can play around with this
            rating = '0.0'    


    # Write all suggestions to a text file to help find errors
    file_path = 'textfiles/jsonfile.txt'
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(response_string)






# If we are going to have auto-complete suggestions during typing of adress, gona have to rewrite this in the front-end side of code
def getSuggestionsBolt(adress: str) -> AdressSuggestion:

    #Sends a request after the user inputs an adress into the adress_field and submits it, in order to get lat,lng values from bolt/wolt api
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

    # make response readable and iteratable
    response = requests.get('https://deliveryuser.live.boltsvc.net/deliveryClient/public/suggestDeliveryLocations', headers=headers, params=params)
    response_object = response.json()
    response_string = json.dumps(response_object, indent = 4)
    

    # Write all suggestions to a text file to help find errors
    file_path = 'textfiles/suggestions.txt'
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(response_string)


    # Gathers infor from first suggestio
    lat = response_object['data']['suggestions'][0]['lat']
    lng = response_object['data']['suggestions'][0]['lng']
    address_name = response_object['data']['suggestions'][0]['address_name']


    first_selection = {
        "address_name": address_name,
        "lat": lat,
        "lng": lng 
    }   

    # print(first_selection)
    return first_selection


first_selection = getSuggestionsBolt('Naugarduko gatve 3')
print(first_selection['address_name'])
getBoltRestaurants(first_selection['lat'], first_selection['lng']) 
