# CryptoDash

This project is a Cryptocurrency Dashboard application built using React.js. It provides users with real-time data on cryptocurrency prices and population statistics.
This project consists of implementing three main tasks:

1. **Create a Side Navigation Bar**: Implement a responsive side navigation bar with at least three navigation items. The active navigation item should be highlighted.

2. **Graph Population Data**: Fetch population data from the provided API and create a graph to display the population data for different nations. The graph should include appropriate labels, legends, and axis titles.

3. **Display Cryptocurrency Prices**: Fetch cryptocurrency prices from the provided API and display them in visually appealing cards. The cards should showcase Bitcoin prices in multiple currencies.

## Task 1: Create a Side Navigation Bar

Objective: Implement a side navigation bar similar to the provided image.
Requirements:
- Responsive layout with a hamburger menu for smaller screens.
- At least three navigation items.
- Highlight the active navigation item.

## Task 2: Graph Population Data

Objective: Fetch population data from the provided API and create a graph.
Requirements:
- Utilize React JS and Chart.js.
- Display population data for different nations.
- Provide appropriate labels, legends, and axis titles.

## Task 3: Display Cryptocurrency Prices

Objective: Fetch cryptocurrency prices from the provided API and display them in cards.
Requirements:
- Fetch data asynchronously using React's lifecycle methods or hooks.
- Display Bitcoin prices in multiple currencies.
- Design visually appealing cards to showcase the cryptocurrency prices.

## Tech Stack

- React.js
- Axios (for making HTTP requests)
- Chart.js (for rendering graphs)
- Tailwind CSS (for styling)
- Lucide Icons (for sidebar icons)

### Installation
1. Clone the repository:
   
   ```
   git clone https://github.com/DiyaVj/CryptoDash.git
   ```
   
3. Navigate to the project directory:
     ```
       cd project-directory
     ```
5. Install dependencies:
     ```
   npm install
      ```

### Usage
- Start the development server:
  ```
  npm start
  ```
- Access the application in the browser:
  ```
  http://localhost:3000
  ```

## Credits
- [DataUSA API](https://datausa.io/api/data?drilldowns=Nation&measures=Population)
- [CoinDesk API](https://api.coindesk.com/v1/bpi/currentprice.json)

## License

This project is licensed under the MIT License.
