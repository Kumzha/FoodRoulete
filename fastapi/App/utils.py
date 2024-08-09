from bolt_data import getBoltRestaurants
from wolt_data import getWoltRestaurants
import schemas, crud
from sqlalchemy.orm import Session

def formatBoltRating(rating: str) -> str:
    return 

def mergeLists(bolt_list: list[schemas.BoltRestaurant],wolt_list: list[schemas.WoltRestaurant]) -> list[schemas.Restaurant]:
    return list[schemas.Restaurant]

def getRestaurantList(lat: float, lng: float, wolt: bool, bolt: bool) -> schemas.RestaurantsResponseModel:

    bolt_restaurants = []
    wolt_restaurants = []

    if(wolt == True):
        wolt_restaurants = getWoltRestaurants(lat, lng)
    
    if(bolt == True):
        bolt_restaurants = getBoltRestaurants(lat, lng)
    

    restaurants_dict = schemas.RestaurantsResponseModel(bolt_restaurants=bolt_restaurants, wolt_restaurants=wolt_restaurants)

    return restaurants_dict

