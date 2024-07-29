from pydantic import BaseModel

class userSelection(BaseModel):
    user_adress: str
    # wolt: bool
    # bolt: bool

#TODO adress fields
class Restaurant(BaseModel):
    name: str
    #adress: str
    #estimatedDeliveryTime: str
    #rating: float
    #image: image
    #priceRange: int
    #deliveryPrice: float

class AdressSuggestion(BaseModel):
    address_name: str
    lat: str
    lng: str
