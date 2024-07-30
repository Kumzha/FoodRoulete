# from scrapper import WoltScrapper, BoltScrapper
import schemas, crud
from sqlalchemy.orm import Session

def generateRestaurants(payload: schemas.UserSelection, db: Session) -> list[schemas.Restaurant]:
    print(payload.useraddress)
    
    #TODO implement wolt/bolt check

def formatBoltDeliveryTime(min: int, max: int) -> str:
    min_minutes = int(min/60)
    max_minutes = int(max/60)
    return f"{min_minutes}-{max_minutes} min"

def formatWoltDeliveryTime(est_time: str) -> str:
    return est_time + ' min'

def formatBoltRating(rating: str) -> str:
    return 