import pandas as pd # library for data analysis
import requests # library to handle requests
from bs4 import BeautifulSoup # library to parse HTML documents

# get the response in the form of html
wikiurl="https://en.wikipedia.org/wiki/Tanishk_Bagchi#Hindi/Punjabi_albums_and_singles"
table_class="wikitable sortable jquery-tablesorter"
response=requests.get(wikiurl)
print(response.status_code)

# parse data from the html into a beautifulsoup object
soup = BeautifulSoup(response.text, 'html.parser')
tables = soup.find_all("table", class_="wikitable sortable")
pd.set_option('display.max_rows', None)

for table in tables:
    df=pd.read_html(str(table))
    # convert list to dataframe
    df=pd.DataFrame(df[0])

    print(df[2] +" "+ df[1])

    # drop the unwanted columns
    # data = df.drop(["Population(2001)"], axis=1)
    # # rename columns for ease
    # data = data.rename(columns={"State or union territory": "State","Population(2011)[3]": "Population"})
    # print(data.head())

