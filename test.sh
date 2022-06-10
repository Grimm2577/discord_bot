#!/bin/sh

read LINE

curl    "https://www.merriam-webster.com/dictionary/$LINE" |
        pup -c |
        grep content |
        grep meta |
        grep --color name=\"description |
        grep --color -E -o 'content=".*"' > ~/.local/tmp/merriam_webster.txt

sed -i 's/content="//g' ~/.local/tmp/merriam_webster.txt
sed -i 's/"//g' ~/.local/tmp/merriam_webster.txt

echo " "
echo " "
echo " "
echo " "
echo "------------------------------"
cat ~/.local/tmp/merriam_webster.txt 
echo "------------------------------"
