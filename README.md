# AWS Bedrock Agent Chatbot

A React-based chatbot client that interfaces with AWS Bedrock Agent through AWS Lambda, built with Vite and React-chatbotify.
![borislam.com](https://blog.bbsteps.net/blogimg/bedrock-react.jpg)

[Detail Instructions for this tuturial: PART 1](https://www.borislam.com/2025/01/bedrock-rag-pinecone.html)

[Detail Instructions for this tuturial: PART 2](https://www.borislam.com/2025/01/bedrock-react-lambda.html)
## Overview

This project implements a web-based chatbot interface that leverages AWS Bedrock's foundation models for intelligent conversations. The application uses React-chatbotify for the UI components and communicates with AWS services through Lambda functions.

## Features

- Interactive chat interface using React-chatbotify
- Real-time communication with AWS Bedrock Agent
- Serverless backend using AWS Lambda
- Modern development setup with React + Vite

## Prerequisites

- Node.js (v16 or later)
- npm or yarn
- AWS account with appropriate permissions
- AWS CLI configured locally
- Required AWS services set up:
  - AWS Lambda function
  - AWS Bedrock Agent
  - API Gateway (for Lambda integration)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```
npm install
```

## Development

To start the development server:
```
npm run dev
```

## Building for Production

To create a production build:
```
npm run build
```
The built files will be in the dist directory.

