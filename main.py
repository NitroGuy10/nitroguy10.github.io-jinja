import json
from jinja2 import Environment, FileSystemLoader, select_autoescape
env = Environment(
    loader=FileSystemLoader("templates"),
    autoescape=select_autoescape()
)

print("Hello, nitroguy10.github.io!")

song_data = json.load(open("data/song_data.json"))
print(song_data["placeholder"][1]["foo"])

template = env.get_template("test.html")
print(template.render(template=True))
