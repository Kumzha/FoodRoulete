# from scrapper import WoltScrapper, BoltScrapper
import schemas, models, database, crud
from sqlalchemy.orm import Session

def generateRestaurants(payload: schemas.userSelection, db: Session) -> list[schemas.Restaurant]:
    print(payload.userAdress)
    
    mylist = []
    mylist.append({"name": "name3"})
    return mylist
