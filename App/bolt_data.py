import requests
import json
from utils import formatBoltDeliveryTime
from schemas import BoltRestaurant, AddressSuggestion


def getBoltRestaurants(address: str) -> list[BoltRestaurant]:

    first_selection = getSuggestionsBolt(address=address)

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
        ('delivery_lat', {first_selection['lat']}),
        ('delivery_lng', {first_selection['lng']}),
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

    # print(response_object['data']['providers'][0]['delivery_price']['price_str'])
    

    #TODO delivery price must be checked if outside Europe(euro)
    for provider in response_object['data']['providers']:

        if provider['is_available'] == True:

            # if provider['rating_info'] is None or provider['rating_info']["rating_value"] is None:
            #     #TODO can play around with this
            #     rating = '0.0' 
            # else:
            #     rating = provider['rating_info']["rating_value"]

            restaurant = BoltRestaurant(
                            url="https://food.bolt.eu/lt-LT/9-vilnius/p/" + str(provider['provider_id']),
                            name=provider['name']['value'],
                            address=provider['address'],
                            estimates_delivery_time=formatBoltDeliveryTime(provider['min_delivery_eta'],provider['max_delivery_eta']),
                            image=provider['images']['provider_list_v1']['aspect_ratio_map']['original']['1x'],
                            #TODO implement tags/categories
                            tags=provider['tags'],
                            delivery_price=provider['delivery_price']['price_str']
                            )
            
            restaurant_list.append(restaurant)
    
    # Writes all gathered info into a file
    # file_path = 'textfiles/jsonfile.txt'
    # with open(file_path, 'w', encoding='utf-8') as file:
    #     file.write(response_string) 

    # Writes all reduced info into a file
    restaurant_dicts = [restaurant.dict() for restaurant in restaurant_list]
    restaurant_string = json.dumps(restaurant_dicts, indent = 4)
    file_path = 'textfiles/bolt_providers.txt'
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(restaurant_string)

    return restaurant_list




# If we are going to have auto-complete suggestions during typing of address, gona have to rewrite this in the front-end side of code
def getSuggestionsBolt(address: str) -> AddressSuggestion:

    #Sends a request after the user inputs an address into the address_field and submits it, in order to get lat,lng values from bolt/wolt api
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
    #TODO implement lat, lng getter
    params = (
        ('search_string', {address}),
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
    # file_path = 'textfiles/suggestions.txt'
    # with open(file_path, 'w', encoding='utf-8') as file:
    #     file.write(response_string)


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

getBoltRestaurants("Pavasario gatve 30")

