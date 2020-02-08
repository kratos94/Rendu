import sqlite3
conn = sqlite3.connect('flask.db')

c = conn.cursor()

c.execute("CREATE TABLE test()")

c.execute("INSERT INTO stocks VALUES ('teest1', 'test2', 'test3')")
conn.commit()

conn.close()