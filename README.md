
# URL Shortener

A URL shortener application that allows users to convert long URLs into shorter, more manageable links.

## Features

- **URL Shortening**: Convert long URLs into short, easy-to-share links.
- **Custom Aliases**: Optionally create custom aliases for shortened URLs.
- **Redirects**: Redirect short URLs to their original long URLs.
- **URL History**: Display a list of previously shortened URLs.
- **Delete URLs**: Delete existing shortened URLs.
- **Alias Validation**: Prevent the use of an alias if it already exists.
- **Alias Restrictions**: Restrict special characters in aliases, allowing only alphanumeric characters and underscores (`_`).

## Installation

### Prerequisites

- Node.js
- MongoDB

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/eyad-hazem-elmorsy/url-shortener.git
    ```
2. Navigate to the project directory:
    ```bash
    cd url-shortener
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the application:
    ```bash
    npm start
    ```

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Enter the long URL you wish to shorten.
3. Provide a custom alias.
4. Click "Shorten" to generate the short URL.
5. Use the short URL to redirect to the original long URL.
6. Manage your URLs, including deleting them and checking for alias availability.

## Project Structure

- `bin/`: Application entry point.
- `models/`: URL schema definition.
- `routes/`: Route definitions.
- `views/`: EJS templates for rendering.
- `app.js`: Main application file.
- `package.json`: Project metadata and dependencies.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

Developed by [Eyad Hazem](https://github.com/eyad-hazem-elmorsy/).
