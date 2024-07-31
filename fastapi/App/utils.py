from bolt_data import getBoltRestaurants
from wolt_data import getWoltRestaurants
import schemas, crud
from sqlalchemy.orm import Session

def formatBoltRating(rating: str) -> str:
    return 

def mergeLists(bolt_list: list[schemas.BoltRestaurant],wolt_list: list[schemas.WoltRestaurant]) -> list[schemas.Restaurant]:
    return list[schemas.Restaurant]

def getRestaurantList(adress: str) -> schemas.RestaurantsResponseModel:

    bolt_restaurants = getBoltRestaurants(adress)
    wolt_restaurants = getWoltRestaurants(adress)

    restaurants_dict = schemas.RestaurantsResponseModel(bolt_restaurants=bolt_restaurants, wolt_restaurants=wolt_restaurants)

    return restaurants_dict

