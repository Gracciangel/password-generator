# creando una base de datos usando SQLite 
# SQLite es una base de datos ligera que permite hacer consultas SQL.

import sqlite3
connection = sqlite3.connect('dataBase')
cursor = connection.cursor()
cursor.execute()