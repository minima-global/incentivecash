#!/bin/sh

rm -rf ./minidapp

mkdir minidapp

mkdir minidapp/incentivecash

cp -rf www/* minidapp/incentivecash

cp src/assets/bg.svg minidapp/incentivecash

cp ./service.js minidapp/incentivecash

cp src/assets/minidapp.conf minidapp/incentivecash

zip -r ./minidapp/incentivecash.minidapp minidapp/incentivecash


