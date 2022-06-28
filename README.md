# Generating a feed out of a folder of files

## What is dumpster

Dumpster is a gallery that contains references, sketches, memories and dreams.

In practice is a folder where I keep screenshots, save renders and bring references together.

## Not everything is my own creation

Because I literally just move files to this folder, the files don't have metadata or credits. I do my best to reference people on filename or take a screenshot with url/handles but it's not always the case. I'm sorry for that.

## What do I want

### Dumping

- Drop files in a folder
- Run a script
	- Append new files to db
		- Download db
		- Load db into memory
		- List files
		- Create data: filename, extension, fullname
		- Append data to db in memory
		- Write db back to file
	- Optimize thumbnails for web
		- Thumbnails for images
			- Copy and resize images with imagemagik
			- Prepend thumbnail_
		- Thumbnails for videos
			- Create png thumnails with ffmpeg
			- Prepend thumbnails_
		- Progressive
		- JPG compression
	- Generate a static html page from db (aka "app")
	- RSS (TODO)
	- Erase files from hard drive only after upload success
		- Upload/Send/Sync files in temporary folder and app
		- Upload/Send/Sync files in app folder
		- Erase temp folder
		- Prompt to erase local folder


### Vieweing / Gallery app

- Display page
- Lazy load images
- If javascript is enabled, show only a few
- Infinite scroll
- Reveal effect (TODO)
- Browse by date (TODO)
- Info and credits (TODO)
- Contact (NOPE)


## How does it work

- There is a file called `dump`. That's a python script that does all the magic.
- There is a folder called `todump`. Put the files to dump there.
- The `temporary` folder is a workbench. It's where thumbnails are generated, db is downloaded and altered, etc...
- The folder `app` has the (rather minimal) source code for the gallery app.
