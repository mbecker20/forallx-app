#!/bin/sh

read -p "markdown file name: " name

cd ~/GitHub/forallx-app/textbook

echo ' '
echo '------------------'
echo 'converting to html'
echo '------------------'
echo ' '

pandoc $name.md -f markdown -t html -o $name.html


