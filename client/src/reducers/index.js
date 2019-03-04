import { combineReducers } from 'redux';
import campReducer from './campReducer';

export default combineReducers ({
    camps: campReducer
});


// const campsReducer = () => {
//     // return [
//     //     {
//     //         id: 1,
//     //         name: 'Paradise', 
//     //         price: '$11.00',
//     //         image: 'https://20dqe434dcuq54vwy1wai79h-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/Pear-Lake-Campsite-cruzntogether-OutThere-Colorado-450x300.png',
//     //         description: 'Beautiful place' 
//     //     },
//     //     {
//     //         id: 2,
//     //         name: 'Green piece', 
//     //         price: '$10.00',
//     //         image: 'https://www.nps.gov/choh/planyourvisit/images/rsz_paw_paw_campsite.jpg',
//     //         description: 'You will enjoy it' 
//     //     },
//     //     {
//     //         id: 3,
//     //         name: 'Sunny world', 
//     //         price: '$9.00',
//     //         image: 'https://i2-prod.cambridge-news.co.uk/incoming/article12958592.ece/ALTERNATES/s1200/Campsites.jpg',
//     //         description: 'Hot sunny days' 
//     //     },
//     //     {
//     //         id: 4,
//     //         name: 'Rocky Mountains', 
//     //         price: '$12.00',
//     //         image: 'https://www.freshoffthegrid.com/wp-content/uploads/guide-to-free-campsites-in-the-us-and-canada.jpg',
//     //         description: 'Lots of fresh air' 
//     //     },
//     //     {
//     //         id: 5,
//     //         name: 'Dream Place', 
//     //         price: '$12.50',
//     //         image: 'https://www.ghaub-namibia.com/assets/images/accommodation/ghaub-campsite03.jpg',
//     //         description: 'It will exceed your expectations' 
//     //     },
//     // ];

//     return (
//         fetch('/')
//         .then(res => res.json())
//     );
// };

// const selectedCampReducer = (selectedCamp = null, action) => {
//     if (action.type === 'CAMP_SELECTED') {
//         return action.payload;
//     }
//     return selectedCamp;
// };

// export default combineReducers({
//     camps: campsReducer,
//     selectedCamp: selectedCampReducer
// });