#!/bin/sh

read -p "latex file name: " name

cd ~/GitHub/forallx-app/textbook

echo ' '
echo '----------------------'
echo 'converting to markdown'
echo '----------------------'
echo ' '

pandoc $name.tex -f latex -t markdown -s -o ~/Documents/tex2html/$name.md
