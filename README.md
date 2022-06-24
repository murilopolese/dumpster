# Generating a feed out of a folder of files

## What is dumpster

Dumpster is a gallery that contains references, sketches, memories and dreams.

In practice is a folder where I keep screenshots, save renders and bring references together.

## Not everything is my own creation

Because I literally just move files to this folder, the files don't have metadata or credits. I do my best to reference people on filename or take a screenshot with url/handles but it's not always the case. I'm sorry for that.

## What do I want

- Drop files in a folder
- Run a script

- Erase files from my hard drive after upload
	- Append new files to db
		- Download db
		- Load db into memory
		- List files
		- Create data: filename, extension, fullname
		- Append data to db in memory
		- Write db back to file
	- Erase files from hard drive only after upload success
		- Upload/Send/Sync files in temp folder and app
		- Erase temp folder
		- Prompt erase local folder
- Optimize thumbnails for web
	- Thumbnails for images
		- Copy and resize images with imagemagik
		- Prepend thumbnail_
	- Thumbnails for videos
		- Create png thumnails with ffmpeg
		- Prepend thumbnails_
	- Progressive
	- JPG compression
	- Lazy loading
- RSS (TODO)


## app
- Load db.js
- Display page
- Lazy load images
- Reveal effect
- Infinite scroll
- Browse by date (TODO)
- Info and credits (TODO)
- Contact (NOPE)
