# Simple App with CI/CD Pipeline

A simple Node.js Express application with a complete CI/CD pipeline using GitHub Actions.

## Testing Workflow

This section was added to test the GitHub Actions workflow on a feature branch.

## Features

- **Express.js API** - Simple REST API with health checks and greeting endpoints
- **Automated Tests** - Jest test suite with supertest for endpoint testing
- **Code Linting** - ESLint configuration for code quality
- **CI/CD Pipeline** - GitHub Actions workflow for automated testing, building, and deployment
- **Multi-Node Support** - Tests run on Node.js 16.x and 18.x

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # GitHub Actions workflow
├── tests/
│   └── app.test.js            # Jest test suite
├── app.js                      # Main application file
├── package.json               # Dependencies and scripts
├── jest.config.js             # Jest configuration
├── .eslintrc.js               # ESLint configuration
└── README.md                  # This file
```

## Installation

```bash
npm install
```

## Running the Application

```bash
npm start
```

The application will start on `http://localhost:3000`

## API Endpoints

- `GET /` - Returns a greeting message
- `GET /health` - Health check endpoint
- `POST /api/greet` - Accepts JSON with name field and returns a personalized greeting

## Running Tests

```bash
npm test
```

## Running Linter

```bash
npm run lint
```

## CI/CD Pipeline

The GitHub Actions workflow runs automatically on:
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

### Pipeline Stages

1. **Test** - Runs linting and tests on Node.js 16.x and 18.x
2. **Build** - Builds and validates the application
3. **Deploy** - Deploys to production (only on main branch)

## Example API Usage

```bash
# Health check
curl http://localhost:3000/health

# Get greeting
curl http://localhost:3000/

# Post with name
curl -X POST http://localhost:3000/api/greet \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice"}'
```

## Requirements

- Node.js 16.x or higher
- npm 7.x or higher

## License

MIT
