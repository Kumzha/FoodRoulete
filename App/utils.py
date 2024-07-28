# from scrapper import WoltScrapper, BoltScrapper
import schemas, models, database, crud
from scrapper import scrapeBolt
from sqlalchemy.orm import Session

def generateRestaurants(payload: schemas.userSelection, db: Session) -> list[schemas.Restaurant]:
    print(payload.userAdress)
    
    #TODO implement wolt/bolt check

    restaurants = scrapeBolt(payload.userAdress)

    print(restaurants)

    return restaurants
