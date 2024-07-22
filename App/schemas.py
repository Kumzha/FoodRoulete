from pydantic import BaseModel

class userSelection(BaseModel):
    userAdress: str
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
