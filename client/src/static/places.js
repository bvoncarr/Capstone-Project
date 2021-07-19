const places = [
    {
        title: 'The Moon',
        description: "The Moon is 238,900 miles from Earth, and is Earth's only natural satellite. It is the largest object in our nighttime sky and is full of mystery. Everyone has looked up to the moon and wondered what was up there. How would you like to find out? The moon can be yours, today!",
        imageUrl: process.env.PUBLIC_URL + '/images/viewOfEarth.jpeg',
        time: 1500,
    },
    {
        title: 'Mars',
        description: "Mars is a mind-blowing 232.31 MILLION miles from Earth. It is a captivating planet that you have to see to believe. Are you ready for the ride of a lifetime? Mars is waiting for you!",
        imageUrl: process.env.PUBLIC_URL + '/images/mars2.jpeg',
        time: 1500,
    },
    {
        title: 'In Flight Snacks',
        description: "You have a long ride ahead of you. Don't go off without the snacks!",
        imageUrl: process.env.PUBLIC_URL + '/images/inflightSnacks.jpeg',
        time: 1500,
    },
     {
        title: 'The Merch',
        description: "No trip to outer space is complete without some swag. Get your moon or Mars tshirts for your flight!",
        imageUrl: process.env.PUBLIC_URL + '/images/moon-marsShirts.jpg',
        time: 1500,
    },
   
];

export default places;