# ClickVenture

ClickVenture is a web-based travel planning application aimed at simplifying trip planning in the Kingdom of Bahrain. By utilizing both user-customizable and AI-generated trips, ClickVenture allows users to explore, review, and share experiences while earning rewards through gamification. This application aims to enhance local tourism and create an engaging user community around travel experiences.

## Features
- **Custom Trip Creation**: Users can plan their trips manually, selecting places, activities, and itineraries based on personal preferences.
- **AI-Suggested Trips**: For users seeking convenience, an AI engine suggests trip itineraries tailored to their interests and preferences.
- **Review & Rating System**: Users can share feedback on places and experiences, fostering a collaborative travel community.
- **Reward System**: Gamification through points and achievements encourages user interaction, with potential rewards from sponsors.
- **Responsive Design**: Accessible on both desktop and mobile for seamless user experience across devices.

## Technology Stack
- **Frontend**: React and Material-UI for an interactive and user-friendly interface.
- **Backend**: Node.js with Express, integrated with MongoDB for flexible data management.
- **APIs**: Google Maps API for location data, OpenAI API for AI-generated trips, and Mongoose ODM for database management.

## Installation
To set up the project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/Ali-El-Mikdadi/ClickVenture.git
    ```
2. Navigate to the project directory:
    ```bash
    cd ClickVenture
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables (MongoDB URI, OpenAI API Key, etc.) in a `.env` file:
    ```bash
    MONGO_URL=your_mongodb_uri
    OPENAI_API_KEY=your_openai_key
    ```
5. Start the server:
    ```bash
    npm start
    ```

## Usage:
- Register or log in to create a user profile.
- Start a new trip and either use the AI to generate a suggested itinerary or manually select locations.
- Explore destinations, add reviews, and interact with the community.
- Earn points for activities, which can be redeemed for rewards.

## Future Enhancements
- Personalized User Profiles: Offer tailored content based on user history and preferences.
- Mobile App Development: Expand to a hybrid mobile application.
- Expanded Regional Support: Broaden the platform to cover GCC countries beyond Bahrain.
