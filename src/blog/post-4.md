---
title: "Using the glob() function"
pubDate: 2025-10-03
description: "Learning how to use the glob() and map()."
author: "SnakeDoc"
image:
    url: "https://docs.astro.build/assets/rose.webp"
    alt: "The Astro logo on a dark background."
tags: ["glob()", "map()", "astro"]
---
# Creating list items dynamically

The glob() function grabs all files in a folder and stores them as an array, by using the *.md we grab all files in the folder named something.md, with * being a wildcard for anything.

The map() function allows us to loop through an array of objects and peform actions on them, in this case we made a new list item for each iteration, setting the href to the blog posts url and the frontmatter.title for the article text.