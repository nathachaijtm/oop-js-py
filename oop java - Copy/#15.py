import random

class Weather:
    def __init__(self, api_provider):
        self.api_provider = api_provider

    def get_forecast(self):
        try:
            if random.choice([True, False]):
                raise ConnectionError("API Failure")
            return f"{self.api_provider} forecast: Sunny"
        except ConnectionError:
            return random.choice(["Try again later.", "Switching API provider.", "Showing cached data."])

# Example
weather = Weather("WeatherAPI")
print(weather.get_forecast())