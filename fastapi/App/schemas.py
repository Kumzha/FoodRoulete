from pydantic import BaseModel

class UserSelection(BaseModel):
    lat: float
    lng: float
    wolt: bool
    bolt: bool

class WoltRestaurant(BaseModel):
    url: str
    name: str
    adress: str
    estimated_delivery_time: str
    tags: list
    image: str
    delivery_price: str

class BoltRestaurant(BaseModel):
    url: str
    name: str
    address: str
    estimated_delivery_time: str
    tags: list
    image: str
    delivery_price: str

class Restaurant(BaseModel) :
    bolt: bool = False
    wolt: bool = False
    url: str
    name: str
    formatted_name: str = ''
    address: str
    estimated_delivery_time: str
    tags: list
    image: str
    delivery_price: str

class AddressSuggestion(BaseModel):
    address_name: str
    lat: str
    lng: str

class RestaurantsResponseModel(BaseModel):
    restaurants: list[Restaurant]