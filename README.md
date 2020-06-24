# ac-turnip-calculator

[![CircleCI](https://circleci.com/gh/Coteh/ac-turnip-calculator.svg?style=shield)](https://circleci.com/gh/Coteh/ac-turnip-calculator)

A simple React application I made to quickly calculate total amount of bells the Nooklings will spend on your turnips given the buy price and quantity of turnips. It will also calculate how much to tip, in the case that you are on another player's island and want to tip them.

**[Click here to open](https://acturnip-calc.netlify.app/)**

## Motivation

When travelling to other players' islands via r/acturnips to sell turnips, it's generally expected to give the players hosting the island a tip. I found myself having to do quick mental maths and opening a calculator every time I wanted to calculate how many stacks of bells I needed to leave for the player for a 10% tip (the community standard tip percentage). Although the calculation is rather simple, I wanted to build a tool that automatically did it so I can save time.

**This project is still under construction.**

## Features

- Allows for input of the following items:
  - Turnip price
  - Number of turnips (4000, a full inventory of 10x turnips, by default)
  - Tip percentage (Community standard of 10% is set as the default)
- Calculates the following:
  - Amount of bells the Nooklings will pay you for your turnips given the price and quantity
  - Amount of bells to tip the player, given buy price and tip percentage

## Non-Features

- Calculates turnip price trajectories (use [Turnip Prophet](https://turnipprophet.io/) for that instead)

## Setup

### Development

You can run the following to start the server in development mode: (standard CRA setup atm)

```
yarn start
```

### Build

Run the following command to build web app for production:

```
yarn build
```

Web app will be built to the `build` directory.

## Running Tests

Run the following command to run tests:

```
yarn test
```
