import requests
import json
from schemas import WoltRestaurant, AddressSuggestion
from bolt_data import getSuggestionsBolt
from utils import formatWoltDeliveryTime


def getWoltRestaurants(address: str) -> list[WoltRestaurant]:

    first_selection = getSuggestionsBolt(address=address)

    import requests

    headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9,lt;q=0.8',
        'app-language': 'en',
        'client-version': '1.13.3',
        'clientversionnumber': '1.13.3',
        '^cookie': '__woltAnalyticsId=bf1d2c70-4e0d-4477-87b1-3182166d3013; cwc-consents=^{^%^22analytics^%^22:true^%^2C^%^22functional^%^22:true^%^2C^%^22interaction^%^22:^{^%^22bundle^%^22:^%^22allow^%^22^}^%^2C^%^22marketing^%^22:true^%^2C^%^22updatedAt^%^22:^{^%^22bundle^%^22:^%^222024-07-29T18:12:07.107Z^%^22^}^%^2C^%^22versions^%^22:^{^}^}; _gcl_au=1.1.2056707607.1722276727; __woltUid=a0544e63-6f56-4149-a9c8-0cf29f427241; __woltDeviceId=8440ee4faff6e9ff9258dc816e3ea07b; _ga=GA1.1.2062846297.1722276727; intercom-id-qwum5ehb=35c7576a-4e85-4bf7-a855-530fb30b9167; intercom-session-qwum5ehb=; intercom-device-id-qwum5ehb=37aed6d0-17bf-48d9-80df-bf8af4f10e0c; _yjsu_yjad=1722276729.f22c994a-e4a5-4f15-9757-efaa9a6c7a0e; _fbp=fb.1.1722276729766.908194793928457431; _clck=14r5vwn^%^7C2^%^7Cfnv^%^7C0^%^7C1671; __woltUidProspect=f4d7ea3b-7777-4533-9839-80eeb8c0774e; _uetsid=1258a1504dd611efa4d6ff41003e8bfd; _uetvid=12589b104dd611efad9965ee8ef36aad; _clsk=1vicu18^%^7C1722279469232^%^7C6^%^7C0^%^7Cf.clarity.ms^%^2Fcollect; _ga_CP7Z2F7NFM=GS1.1.1722278731.2.1.1722279492.18.0.0^',
        'origin': 'https://wolt.com',
        'platform': 'Web',
        'priority': 'u=1, i',
        'referer': 'https://wolt.com/',
        '^sec-ch-ua': '^\\^Not)A;Brand^\\^;v=^\\^99^\\^, ^\\^Microsoft',
        'sec-ch-ua-mobile': '?0',
        '^sec-ch-ua-platform': '^\\^Windows^\\^^',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0',
        'w-wolt-session-id': 'bf1d2c70-4e0d-4477-87b1-3182166d3013',
        'x-wolt-web-clientid': 'a0544e63-6f56-4149-a9c8-0cf29f427241',
    }

    params = (
        ('lat', first_selection['lat']),
        ('lon', first_selection['lng']),
    )

    response = requests.get('https://consumer-api.wolt.com/v1/pages/restaurants', headers=headers, params=params)

    response_object = response.json()
    response_string = json.dumps(response_object, indent = 4)

    file_path = 'textfiles/wolt_providers.txt'
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(response_string) 

    restaurant_list = []
    
    for provider in response_object['sections'][1]['items']:

        if provider['venue']['delivers'] == True:

            restaurant = WoltRestaurant(
                    url = provider['link']['target'],
                    name=provider['title'],
                    adress=provider['venue']['address'],
                    estimated_delivery_time=formatWoltDeliveryTime(provider['venue']['estimate_range']),
                    tags=provider['filtering']['filters'][0]['values'],
                    image=provider['image']['url'],
                    #TODO delivery price, for regular users
                    delivery_price='0'
                                        )
            restaurant_list.append(restaurant)

#     # Writes all gathered info into a file
#     # file_path = 'textfiles/jsonfile.txt'
#     # with open(file_path, 'w', encoding='utf-8') as file:
#     #     file.write(response_string) 


    # Writes all reduced info into a file
    restaurant_dicts = [restaurant.dict() for restaurant in restaurant_list]
    restaurant_string = json.dumps(restaurant_dicts, indent = 4)
    file_path = 'textfiles/wolt_providers.txt'
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(restaurant_string)

    return restaurant_list


restaurant_list = getWoltRestaurants("Pavasario gatve 30")