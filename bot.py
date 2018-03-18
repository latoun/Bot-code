import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio
import time
import random


Client = discord.Client() #Initialise Client 
client = commands.Bot(command_prefix = "?") #Initialise client bot

@client.event 
async def on_ready():
    print("Bot is online and connected to Discord") #This will be called when the bot connects to the server

@client.event
async def on_message(message):
    if message.content.lower() == "!cookies":
        n = random.randrange(2,6)
        await client.send_message(message.channel, str(n) + " cookies for ya " + (":cookie: " * n)) #responds with Cookie emoji when someone says "cookie"
    if message.content.lower() == "!ping":
        await client.send_message(message.channel, "Pong !") #responds with Cookie emoji when someone says "cookie"
    if message.content.lower() == "!chat":

            
        

client.run("NDI0OTA1NjIxMjI2MTI3MzYx.DZBdUQ.fbGjEtPh2rDaIn9b0A1ybwW_Uqo") #Replace token with your bots token
