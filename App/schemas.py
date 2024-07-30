from pydantic import BaseModel

class UserSelection(BaseModel):
    user_address: str
    # wolt: bool
    # bolt: bool

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
    estimates_delivery_time: str
    image: str
    tags: list
    delivery_price: str

class Restaurant(BaseModel):
    has_bolt: bool
    has_wolt: bool

    bolt_info: BoltRestaurant
    wolt_info: WoltRestaurant

class AddressSuggestion(BaseModel):
    address_name: str
    lat: str
    lng: str
