from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
import models, schemas, crud
from utils import generateRestaurants
from database import SessionLocal, engine
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from starlette.requests import Request


app = FastAPI()

templates = Jinja2Templates(directory="templates")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get('/main', response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse('index.html', {'request': request})

@app.post('/submitAdress', response_model=list[schemas.Restaurant])
def postAdress(payload: schemas.userSelection, db: Session = Depends(get_db)):

    #TODO implement adress check
    adress = payload.userAdress
    
    restaurants = generateRestaurants(payload, db)
    return restaurants