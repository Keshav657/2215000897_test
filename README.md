# Social Media Analytics

This project is a responsive React web application that provides real-time analytical insights into user behavior on a social media platform. The application is designed for business stakeholders to monitor user interactions without requiring user registration or login.

## Features

- **Top Users**: Displays the top five users with the most comments posted.
- **Trending Posts**: Shows posts with the maximum number of comments, accommodating multiple posts if they meet the criteria.
- **Feed**: A dynamic feed that displays posts in real-time, with the newest posts appearing at the top.

## Project Structure

```
social-media-analytics
├── public
│   ├── index.html          # Main HTML file for the application
│   └── favicon.ico         # Favicon for the application
├── src
│   ├── components          # Contains reusable components
│   │   ├── Feed.tsx       # Component for displaying the feed of posts
│   │   ├── TopUsers.tsx   # Component for displaying top users
│   │   ├── TrendingPosts.tsx # Component for displaying trending posts
│   │   └── Shared          # Shared components
│   │       ├── Header.tsx  # Header component
│   │       ├── Footer.tsx  # Footer component
│   │       └── Loader.tsx  # Loader component for data fetching
│   ├── pages               # Contains page components
│   │   ├── FeedPage.tsx    # Page for the feed
│   │   ├── TopUsersPage.tsx # Page for top users
│   │   └── TrendingPostsPage.tsx # Page for trending posts
│   ├── services            # API service for data retrieval
│   │   └── api.ts          # Functions for making API calls
│   ├── utils               # Utility functions and constants
│   │   ├── constants.ts     # Constants used in the application
│   │   └── helpers.ts       # Helper functions for data manipulation
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point for the React application
│   └── styles              # CSS styles
│       └── global.css      # Global CSS styles
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/Keshav657/2215000897.git
   ```

2. Navigate to the project directory:
   ```
   cd social-media-analytics
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage Guidelines

- The application is designed to be responsive and performant, ensuring a smooth user experience.
- All API calls are made exclusively to the test server, and no third-party APIs are utilized.
- The application can handle changes in the sorting order of data returned by the server.

## License

This project is licensed under the MIT License.#   2 2 1 5 0 0 0 8 9 7  
 #   2 2 1 5 0 0 0 8 9 7  
 #   2 2 1 5 0 0 0 8 9 7  
 