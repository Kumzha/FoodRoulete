# from scrapper import WoltScrapper, BoltScrapper
import schemas, crud
from scrapper import scrapeBolt
from sqlalchemy.orm import Session

def generateRestaurants(payload: schemas.userSelection, db: Session) -> list[schemas.Restaurant]:
    print(payload.useraddress)
    
    #TODO implement wolt/bolt check

    restaurants = scrapeBolt(payload.useraddress)

    print(restaurants)

    return restaurants
