import tuscon
import shutil
import os.path
import json
import json_csv


# Quality-of-life function to join tuscon.output_dir with other paths
def output_path(*paths):
    return os.path.join(tuscon.output_dir, *paths)


# Set up tuscon
tuscon.output_dir = "docs/"  # For use with Github Pages
tuscon.empty_output_folder()

# Copy favicons
shutil.copytree("static/favicon", output_path("favicon"))
shutil.move(output_path("favicon/favicon.ico"), output_path("favicon.ico"))

# Copy images
shutil.copytree("static/artwork", output_path("artwork"))
shutil.copytree("static/gifs", output_path("gifs"))
shutil.copytree("static/icons", output_path("icons"))

# Copy scripts
shutil.copytree("static/scripts", output_path("scripts"))

# Copy unchanging HTML pages (non-templates)
shutil.copy("static/pages/index.html", output_path("index.html"))
shutil.copy("static/pages/roboplato.html", output_path("roboplato.html"))
shutil.copy("static/pages/favorite_games.html", output_path("favorite_games.html"))
