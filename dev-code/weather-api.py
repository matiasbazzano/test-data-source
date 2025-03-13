import requests

API_KEY = "your_api_key"
BASE_URL = "http://api.weatherapi.com/v1/current.json"

def get_weather(city):
    params = {"key": API_KEY, "q": city}
    response = requests.get(BASE_URL, params=params)
    
    if response.status_code == 200:
        data = response.json()
        print(f"City: {data['location']['name']}, Temperature: {data['current']['temp_c']}°C")
    else:
        print("Error fetching weather data.")

if __name__ == "__main__":
    city = input("Enter city name: ")
    get_weather(city)
