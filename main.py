import json
from jinja2 import Environment, FileSystemLoader, select_autoescape


def make_safe(string):
    return string.lower().replace("(", "").replace(")", "").replace(".", "").replace(" ", "_")


def format_date(date_string):
    # datetime.datetime.strptime(date_string, "%d/%m/%Y").strftime("%d %B %Y")
    # The above would work but it zero-pads the date and determines month name based on the current locale
    date = date_string.split("/")
    return str(int(date[0])) + [" January ", " February ", " March ", " April ", " May ", " June ", " July ",
                                " August ", " September ", " October ", " November ",
                                " December "][int(date[1]) - 1] + date[2]


env = Environment(
    loader=FileSystemLoader("templates"),
    autoescape=select_autoescape()
)

print("Hello, nitroguy10.github.io!")

song_data = json.load(open("data/song_data.json"))
for collection in song_data["collections"].values():
    print(collection["name"])

song_data["collections"]["Candy Fractals EP"]["songs"] = []
for song in song_data["songs"].values():
    song["safeName"] = make_safe(song["name"])
    song["safeCollection"] = make_safe(song["collection"])
    song["releaseDateFormatted"] = format_date(song["releaseDate"])
    if song["collection"] == "Candy Fractals EP":
        song_data["collections"]["Candy Fractals EP"]["songs"].append(song)

template = env.get_template("collection.html.jinja")
with open("docs/collections/candy_fractals_ep.html", "w") as file:
    file.write(template.render(collection=song_data["collections"]["Candy Fractals EP"]))

template = env.get_template("song.html.jinja")
with open("docs/songs/endless_ft_vishnu.html", "w") as file:
    file.write(template.render(song=song_data["songs"]["Endless (ft. Vishnu)"]))
