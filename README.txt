In order to run this application you need to disable a security feature in your browser.
In late 2019 most browsers added a security feature that does not let you fetch files locally from your computer,
which is exactly what we need to do here.

We used Firefox for all our testing. To make it work in Firefox write "about:config" in the URL.
This opens a page where you can search for features to enable and disable. From there search
"privacy.unique_file_origin" and set this to False. The web application should then be able to fetch
the datasets locally.

The folder contains the following: 
Application
-main.html: The main site for our visualisation
-leaf.js: Functions to draw using Leaflet API 
-fetch.js: Fetches, parses and takes use of functions in leaf.js to draw datapoints on map
-covid.css: Style sheet to match colors

Data
-tweets (subfolder): Contains the tweet datasets we used
-useddata (subfolder): Contains the exported cleaned and preprocessed data used by the web application
-covid (subfolder): Contains the covid-19 data from John Hopkins University

Preprocessing
-tweet_extractor.ipynb: Extracts tweets 
-./covid/covid_csv_cleaning: Drops unused features from John Hopkins covid-19 dataset so they can be used the same (different dates contains different features)

Upstream dataset links: 
Covid-19 confirmed data = https://github.com/CSSEGISandData/COVID-19 
Twitter geotagged data = https://ieee-dataport.org/open-access/coronavirus-covid-19-geo-tagged-tweets-dataset