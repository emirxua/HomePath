// İlanlar için veriler
const listingsData = {
    rental: [
        {
            title: "2+1 Apartment in the City Center",
            description: "Spacious apartment, close to all amenities. Monthly rent: $1,200",
            price: "$1,200/month",
            image: "assets/images/house1.jpg"
        },
        {
            title: "3+1 Luxury Apartment with Sea View",
            description: "Beautiful sea view, secure gated community. Monthly rent: $2,500",
            price: "$2,500/month",
            image: "assets/images/house2.jpg"
        }
    ],
    sale: [
        {
            title: "4+1 House with Garden",
            description: "Beautiful house with a spacious garden and large living room. Price: $350,000",
            price: "$350,000",
            image: "assets/images/house3.jpg"
        },
        {
            title: "5+1 Luxury Villa with Private Pool",
            description: "Spacious villa with a private swimming pool and modern kitchen. Price: $800,000",
            price: "$800,000",
            image: "assets/images/house4.jpg"
        }
    ],
    investment: [
        {
            title: "Investment Land",
            description: "Prime location land for real estate development. Price: $200,000",
            price: "$200,000",
            image: "assets/images/land1.jpg"
        }
    ],
    office: [
        {
            title: "Office for Rent in the City Center",
            description: "Spacious office space, ideal for real estate businesses. Rent: $3,000/month",
            price: "$3,000/month",
            image: "assets/images/office1.jpg"
        }
    ]
};

// İlanları dinamik olarak gösterme fonksiyonu
function showListings(type) {
    const listingsContainer = document.getElementById('listings');
    listingsContainer.innerHTML = ''; // Önceki ilanları temizle

    const listings = listingsData[type];
    if (listings && listings.length > 0) {
        listings.forEach(listing => {
            const listingItem = document.createElement('div');
            listingItem.classList.add('listing-item');

            listingItem.innerHTML = `
                <img src="${listing.image}" alt="${listing.title}" class="property-image">
                <h3>${listing.title}</h3>
                <p class="property-description">${listing.description}</p>
                <p><strong>Price: ${listing.price}</strong></p>
            `;

            listingsContainer.appendChild(listingItem);
        });
    } else {
        listingsContainer.innerHTML = '<p>No listings available.</p>';
    }
}
