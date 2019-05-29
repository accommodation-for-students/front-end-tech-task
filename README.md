# Junior Front-End Developer Tech Task #

## Introduction ##

This is a short exercise to rebuild the property card component shown in the `Property Grid Example` section below. Don't worry about rendering multiple cards, please focus on rendering one card showing all of the following elements:

- Rent price per week (pw)
- What bills are included
- Number of rooms available
- Property title (1 bed house, Manchester)
- Address (Foo Road, Bar, F00 B4Z)

The centre property on the second row of the example image is an example of this. This is the property with the title `6 bed house, Moldgreen`.

## To do ##

- Clone repository
- Install the project's dependencies with `npm i`
- Run the app with `npm run`
- Run the tests with `npm test`
- Feel free to remove the placeholder `Message` component
- Build the property card component

Extra challenges if you'd like to attempt them:

- Layout multiple cards in a 3 column grid
- Only render properties with the property type `house`

## Notes ##

- You can find mock data for some properties in `src/data/properties.js`
- You will find variables for all the colours you need in `src/App.scss` 
- For the map pin icon you can use the existing component in `src/components/MapPinIcon.js` 
- The font used `Apax` is already available and can be used with the following property in your selectors `font-family: 'Apax', Helvetica, Arial, sans-serif`

## Property Grid Example ##

![Example Image](/example.png "Example")