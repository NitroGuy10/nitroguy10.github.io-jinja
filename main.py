from json import load as load_json
from jinja2 import Environment, FileSystemLoader, select_autoescape
from datetime import date
from subprocess import run


# Make a string lowercase and remove/replace unusable characters
# "()." are replaced with "" and " " is replaced with "_"
def make_safe(string):
    return string.lower().replace("(", "").replace(")", "").replace(".", "").replace(" ", "_")


# Create a datetime.date object that represents a song's release date
def get_release_date(item):
    date_parts = item["releaseDate"].split("/")
    return date(int(date_parts[2]), int(date_parts[1]), int(date_parts[0]))


# Format dates from "DD/MM/YYYY" to "(D)D english_month_name YYYY"
def format_date(date_string):
    # datetime.datetime.strptime(date_string, "%d/%m/%Y").strftime("%d %B %Y")
    # The above would work but it zero-pads the date and determines month name based on the current locale
    date_parts = date_string.split("/")
    return str(int(date_parts[0])) + [" January ", " February ", " March ", " April ", " May ", " June ", " July ",
                                " August ", " September ", " October ", " November ",
                                " December "][int(date_parts[1]) - 1] + date_parts[2]


# Set up Jinja environment
env = Environment(
    loader=FileSystemLoader("templates"),
    autoescape=select_autoescape()
)


# Create a dictionary of site-wide information
def get_site(path_to_root):
    site_ = {}

    template_ = env.get_template("components/head.html.jinja")
    site_["head"] = template_.render(path=path_to_root)

    template_ = env.get_template("components/footer.html.jinja")
    site_["footer"] = template_.render(path=path_to_root)

    return site_


print("Hello, nitroguy10.github.io!")

print("Reading JSON...")
song_data = load_json(open("data/song_data.json"))

print("Parsing JSON...")

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

# Reverse the order of songs in the Remixes and Singles collections for better design language
# As such, the most recent songs occur first
remixes_list = song_data["collections"]["Remixes"]["songs"]
singles_list = song_data["collections"]["Singles"]["songs"]
song_data["collections"]["Remixes"]["songs"] = reversed(remixes_list)
song_data["collections"]["Singles"]["songs"] = reversed(singles_list)

# Make a list of singles, remixes, and collections together in reverse chronological order
collections_list = list(song_data["collections"].values())[2:]  # Excludes Singles and Remixes
chronological_list = collections_list + remixes_list + singles_list
chronological_list = reversed(sorted(chronological_list, key=lambda item: get_release_date(item)))

print("Rendering Jinja templates...")

site = get_site("")
template = env.get_template("index.html.jinja")
with open("docs/index.html", "w") as file:
    file.write(template.render(collections=reversed(song_data["collections"].values()),
                               chronological_list=chronological_list, site=site))

template = env.get_template("links.html.jinja")
with open("docs/links.html", "w") as file:
    file.write(template.render(site=site))

site = get_site("../")
template = env.get_template("collection.html.jinja")
for collection in song_data["collections"].values():
    with open("docs/collections/" + collection["safeName"] + ".html", "w") as file:
        file.write(template.render(collection=collection, site=site))

site = get_site("../")
template = env.get_template("song.html.jinja")
for song in song_data["songs"].values():
    with open("docs/songs/" + song["safeName"] + ".html", "w") as file:
        file.write(template.render(song=song, site=site))

# Compile Sass
print("Compiling Sass...")
run(["sass", "sass/main.sass", "docs/stylesheets/main_sass.css"])

print("All done!")
