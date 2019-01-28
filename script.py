import requests
import json
import sys

configFilePath = "./data/config.json"

print("python script invoked")

def updateConfigFile():   
    print("Owner: ", sys.argv[1])       
    print("Repo name: ", sys.argv[2])
    print("version: ", sys.argv[3]) 

if len(sys.argv) > 1:
    updateConfigFile()
else:
    print("No args")    


print("received")
sys.stdout.flush()


