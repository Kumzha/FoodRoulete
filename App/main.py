from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
import schemas, crud
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from starlette.requests import Request
from bolt_data import getBoltRestaurants


app = FastAPI()

templates = Jinja2Templates(directory="templates")

@app.get('/main', response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse('index.html', {'request': request})

@app.post('/submitAddress', response_model=list[schemas.Restaurant])
def postaddress(payload: schemas.userSelection):

    #TODO implement address check
    address = payload.user_address


    restaurants_list = getBoltRestaurants(address=address)
    return restaurants_list