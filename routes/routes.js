function home(req, res) {
    res.render('home', {
        title: 'I love my city',
        headline: 'For those who are lost, there will always be cities that feel like home.'
    })
}

function city(req, res) {
    var cityName = req.params.cityName;
    var title, headline, noOfImages = 4;

    switch (cityName) {
        case 'bangalore':
            title = 'Bangalore';
            headline = "I was in Bangalore when I realised that the world was flat.";
            break;
        case 'kashmir':
            title = 'Kashmir';
            headline = "Kashmir: If there's heaven on earth, it's here, it's here, it's here!";
            break;
        case 'delhi':
            title = 'Delhi';
            headline = "Delhi: Yeh sheher nahi Mehfil hai!";
            break;
        case 'kolkata':
            title = 'Kolkata';
            headline = "Kolkata's the only city where you are actively encouraged to stop strangers at random for a quick chat.";
            break;
        default:
            res.render('error', {
                title: 'Lost somewhere!',
                headline: 'Click here to go to home page'
            })
    }

    res.render('city', {
        title: title,
        headline: headline,
        noOfImages: noOfImages,
        cityName: cityName
    })
}
module.exports = {
    home: home,
    city: city
}
