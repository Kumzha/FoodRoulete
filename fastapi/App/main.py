from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
import schemas, crud
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from starlette.requests import Request
from utils import getRestaurantList
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()

origins = [
    "http://localhost:3000",
    # You can add more origins here
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

templates = Jinja2Templates(directory="templates")

@app.get('/main', response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse('index.html', {'request': request})

@app.post('/submitAddress', response_model=schemas.RestaurantsResponseModel)
def postaddress(payload: schemas.UserSelection):

    #TODO implement address check and formating
    address = payload.user_address


    restaurants_list = getRestaurantList(address)
    print(type(restaurants_list))
    return restaurants_list

@app.get('/test')
def test():
    return "test"