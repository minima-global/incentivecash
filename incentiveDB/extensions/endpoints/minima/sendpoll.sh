#!/bin/bash

for i in {1..20}
do
   curl --silent --header "Content-Type: application/json" --request POST --data '{"cmd":"sendpoll 10000 0x9662B5F646158D2173F72433DD36A893EE619330 0xCBDE084D0A44A8F6EBDBD2CBF448D448E88E06EC008F4A0E3C004EC234A50C21E59A9CE4D7C7ECE60351FE1E90A5D1E80DA816734C2BA2C3B5363448D9245B50"}' http://localhost:8055/custom/minima/cmd
done