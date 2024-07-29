from pydantic import BaseModel

class userSelection(BaseModel):
    user_address: str
    # wolt: bool
    # bolt: bool

class Restaurant(BaseModel):

    id: int
    name: str
    address: str
    minimum_delivery_time: int
    maximum_delivery_time: int
    rating: float
    price_level: str
    image: str
    tags: list
    delivery_price: str


class addressSuggestion(BaseModel):
    address_name: str
    lat: str
    lng: str
