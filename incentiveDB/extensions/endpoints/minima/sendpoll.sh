#!/bin/bash

for i in {1..20}
do
   curl --silent --header "Content-Type: application/json" --request POST --data '{"cmd":"sendpoll 10000 MxG6W5CU32Z34KY3ONG4JZEOK5YAH7KTGS 0xE27EEFCD112ABB8D19366A867548FE8A3DBB96841A97FC693CE1A89BA8C1C2BFE631706348889DD3A744A80002F832716867085A89483767C51022DF0CCF4002"}' http://localhost:8055/custom/minima/cmd
done

#0xE67944AA008ED8C1C45F4A0758D12428A638C1CC
