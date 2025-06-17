from dotenv import load_dotenv
import os
import pymysql.cursors

class _config_ ():
  load_dotenv()

  API = os.getenv("API")
  VERSION = os.getenv("VERSION")

  # MAIN_DIR = os.environ.get('USERPROFILE') + '/AppData/Roaming/.HyperBox'
  MAIN_DIR = 'D:/HyperBox'

  CONFIG_FILE = f"{MAIN_DIR}/config.json"
  UPDATES_DIR = f"{MAIN_DIR}/updates"
  TEMP_DIR = os.environ['TEMP']

  SQL = pymysql.connect(
    host = os.getenv("host"), 
    port = int(os.getenv("port")), 
    user = os.getenv("user"),
    password = os.getenv("password"), 
    database = os.getenv("database"),
    cursorclass = pymysql.cursors.DictCursor
  )