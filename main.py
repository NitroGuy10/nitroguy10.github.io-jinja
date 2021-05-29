import json
from jinja2 import Environment, FileSystemLoader, select_autoescape


# Make a string lowercase and remove/replace unusable characters
# "()." are replaced with "" and " " is replaced with "_"
def make_safe(string):
    return string.lower().replace("(", "").replace(")", "").replace(".", "").replace(" ", "_")


# Format dates from "DD/MM/YYYY" to "(D)D english_month_name YYYY"
def format_date(date_string):
    # datetime.datetime.strptime(date_string, "%d/%m/%Y").strftime("%d %B %Y")
    # The above would work but it zero-pads the date and determines month name based on the current locale
    date = date_string.split("/")
    return str(int(date[0])) + [" January ", " February ", " March ", " April ", " May ", " June ", " July ",
                                " August ", " September ", " October ", " November ",
                                " December "][int(date[1]) - 1] + date[2]


# Set up Jinja environment
env = Environment(
    loader=FileSystemLoader("templates"),
    autoescape=select_autoescape()
)

print("Hello, nitroguy10.github.io!")

song_data = json.load(open("data/song_data.json"))


# Fill in supplementary data for each song
for collection in song_data["collections"].values():
    collection["safeName"] = make_safe(collection["name"])
    # Declare an array of songs for each collection
    collection["songs"] = []

# Fill in supplementary data for each song
for song in song_data["songs"].values():
    song["safeName"] = make_safe(song["name"])
    song["safeCollection"] = make_safe(song["collection"])
    song["releaseDateFormatted"] = format_date(song["releaseDate"])
    # Add a song to its collection's "songs" array
    song_data["collections"][song["collection"]]["songs"].append(song)

template = env.get_template("index.html.jinja")
with open("docs/index.html", "w") as file:
    file.write(template.render(collections=reversed(song_data["collections"].values())))

template = env.get_template("collection.html.jinja")
for collection in song_data["collections"].values():
    with open("docs/collections/" + collection["safeName"] + ".html", "w") as file:
        file.write(template.render(collection=collection))

template = env.get_template("song.html.jinja")
for song in song_data["songs"].values():
    with open("docs/songs/" + song["safeName"] + ".html", "w") as file:
        file.write(template.render(song=song))
