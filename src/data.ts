const reviews: string[] = [
    "The hostel was good but the toilet was not clean",        // Mixed
    "Great stay, very clean facilities",                         // Good
    "Unhygienic food served at dinner",                         // Bad
    "The staff were very helpful and accommodating",            // Good
    "Breakfast was fantastic, fresh and delicious",             // Good
    "Room service was slow but the food was tasty",             // Mixed
    "The kitchen was dirty and poorly organized",               // Bad
    "Comfortable beds and friendly staff made my stay enjoyable", // Good
    "Dinner was cold and unappetizing",                         // Bad
    "The common area was clean and well-maintained",            // Good
    "Great variety of food options at breakfast",               // Good
    "The shower pressure was weak, but the water was hot",      // Mixed
    "The food was stale and lacked flavor",                     // Bad
    "Staff were polite, but the check-in process was lengthy",  // Mixed
    "The dining area was too cramped and noisy",                // Bad
    "Loved the cleanliness of the hostel and the outdoor space", // Good
    "Had issues with the Wi-Fi, but the staff were quick to resolve it", // Mixed
    "The food quality has improved significantly since my last visit", // Good
    "The reception area was welcoming and tidy",                 // Good
    "Unfriendly staff at the restaurant, which ruined the experience", // Bad
    "Great ambiance in the dining area, perfect for relaxing",  // Good
    "The location was perfect for exploring the city",          // Good
    "I appreciated the 24-hour front desk service",             // Good
    "Very noisy at night, hard to get a good sleep",            // Bad
    "The mattress was too firm for my liking",                  // Mixed
    "Helpful staff made my check-in process smooth",            // Good
    "Dinner was served late, but it was delicious",             // Mixed
    "The bathroom could use some renovations",                  // Mixed
    "The view from the room was stunning",                       // Good
    "Housekeeping was prompt and efficient",                     // Good
    "Food options were limited, but what I had was good",       // Mixed
    "The gym was small but had the essentials",                 // Mixed
    "Staff should be more attentive to guest needs",            // Mixed
    "The lobby area felt dated and could use a refresh",        // Bad
    "Excellent customer service throughout my stay",            // Good
    "The coffee at breakfast was terrible",                      // Bad
    "Really enjoyed the cultural events hosted at the hostel",  // Good
    "The internet connection was unstable",                      // Bad
    "The staff went above and beyond to help me",               // Good
    "Had a great experience overall, will recommend",           // Good
    "The dining options were overpriced for the quality",       // Bad
    "The laundry service was convenient and quick",             // Good
    "Very clean and spacious room",                              // Good
    "I loved the cozy atmosphere of the hostel",                // Good
    "The check-out process was confusing and slow",             // Bad
    "The fridge in the common area was not functioning",        // Bad
    "The reception staff were very friendly",                   // Good
    "Great location, close to public transport",                // Good
    "Food was not seasoned well and lacked variety",            // Bad
    "I felt very safe during my stay here",                     // Good
    "The air conditioning was noisy and not effective",         // Bad
    "The rooftop terrace was a highlight of my stay",           // Good
    "The food portions were generous",                           // Good
    "Staff seemed overwhelmed during peak hours",               // Mixed
    "Had a problem with my room key, but it was resolved quickly", // Mixed
    "The decor was charming and inviting",                      // Good
    "I was disappointed with the breakfast options",            // Bad
    "The shower was a bit moldy and needed cleaning",           // Bad
    "The hostel had a great social atmosphere",                 // Good
    "I didn't like the lack of vegetarian options",             // Bad
    "The staff were knowledgeable about local attractions",      // Good
    "The bed linens were fresh and clean",                       // Good
    "Overall, a pleasant experience despite a few hiccups",    // Mixed
    "The noise from the street was disturbing at night",        // Bad
    "The coffee shop in the hostel was a nice touch",           // Good
    "I enjoyed the daily activities organized by the hostel",   // Good
    "The kitchen was well-equipped for guests",                 // Good
    "The staff should improve their communication skills",      // Mixed
    "The spa services were a nice addition to the stay",       // Good
    "The beds were comfortable but the pillows were flat",      // Mixed
    "The shower had great water pressure",                       // Good
    "The common areas were well-decorated and inviting",        // Good
    "I was happy with the cleanliness of the premises",         // Good
    "The room was too dark and needed better lighting",         // Mixed
    "The buffet breakfast had a wide range of options",        // Good
    "Staff members were often seen cleaning and tidying up",    // Good
    "I enjoyed the peaceful atmosphere of the hostel",          // Good
    "The parking situation was inconvenient",                   // Bad
    "I appreciated the complimentary toiletries",                // Good
    "The hostel felt very welcoming and homey",                 // Good
    "The Wi-Fi was fast and reliable in most areas",            // Good
    "There were not enough power outlets in the room",          // Bad
    "The evening events were entertaining and well-organized",  // Good
    "The food at the hostel was reasonably priced",             // Good
    "The staff were friendly but a bit unorganized",           // Mixed
    "I liked the option to rent bikes for exploring",           // Good
    "The private rooms were worth the extra cost",              // Good
    "The restaurant had a lovely outdoor seating area",        // Good
    "The noise from neighboring rooms was bothersome",          // Bad
    "The hostel provided helpful maps and information",         // Good
    "Breakfast could have had more healthy options",            // Mixed
    "The lounge area was a great place to meet other guests",   // Good
    "The bed was too small for two people",                     // Mixed
    "The curtains in the room were old and faded",             // Bad
    "The hostel had a good security system in place",          // Good
    "I enjoyed the themed dinner nights",                       // Good
    "The pillows were fluffy and comfortable",                  // Good
    "The air conditioning kept the room cool",                  // Good
    "The staff were very friendly and accommodating",           // Good
    "The walls were thin, could hear everything",               // Bad
    "The amenities were decent for the price",                  // Mixed
    "The laundry facilities were very clean",                   // Good
    "The garden area was a nice escape from the city",         // Good
    "The food was generally good, but some dishes were bland", // Mixed
    "The bathroom was shared but kept clean",                   // Good
    "The location was slightly off the beaten path",            // Mixed
    "Had a pleasant experience overall, very cozy",             // Good
    "I enjoyed the free breakfast included in my stay",        // Good
    "The staff helped me with my luggage upon arrival",        // Good
    "The vending machines were often out of stock",            // Bad
    "There was a strange smell in the hallway",                 // Bad
    "The Wi-Fi was slow at peak times",                         // Bad
    "The beds had privacy curtains which I liked",              // Good
    "The kitchen could use a few more cooking utensils",       // Mixed
    "I liked the flexibility of check-in and check-out times", // Good
    "The breakfast area was a bit cramped",                     // Mixed
    "The decorations gave a nice local touch",                 // Good
    "The staff arranged for my airport transfer, which was convenient", // Good
    "The entertainment options in the lounge were limited",     // Mixed
    "I loved the cultural immersion activities offered",        // Good
    "The food was surprisingly good for a hostel",             // Good
    "The dormitory layout was well thought out",                // Good
    "The staff were often busy and hard to find",               // Mixed
    "I felt very comfortable during my stay",                   // Good
    "The proximity to attractions was a major plus",            // Good
    "The hostel organized fun outings to local attractions",    // Good
    "The check-in process could be improved",                  // Mixed
    "I appreciated the free coffee available all day",         // Good
    "The outdoor area was perfect for relaxing",                // Good
    "The food options were lacking in vegetarian choices",      // Bad
    "The ambiance in the dining area was lovely",               // Good
    "The building felt safe and secure",                        // Good
    "The staff were genuinely nice and helpful",                // Good
    "I was not impressed with the cleanliness of the bathrooms", // Bad
    "The art on the walls was a nice touch",                   // Good
    "I had a great time at the hostel, will come again",       // Good
    "The laundry facilities were sometimes busy",              // Mixed
    "The pool area was a great addition to the hostel",        // Good
    "The amenities were well-maintained and clean",            // Good
    "I appreciated the bike rental service offered",           // Good
    "The food was served in small portions",                    // Bad
    "The staff were quick to respond to my requests",          // Good
    "The music in the lounge was too loud",                    // Bad
    "The hostel's atmosphere was friendly and welcoming",      // Good
    "The private rooms were well worth it for the privacy",    // Good
    "The breakfast could have been better",                     // Mixed
    "The kitchen was a bit crowded during peak hours",         // Mixed
    "The outdoor lounge area was great for socializing",       // Good
    "The showers were clean but lacked privacy",                // Mixed
    "I loved the friendly vibe among the guests",              // Good
    "The hostel's cleanliness was impressive",                 // Good
    "The communal areas were bright and cheerful",             // Good
    "The atmosphere was often too noisy for my taste",        // Bad
    "The view from the rooftop was breathtaking",              // Good
    "The shared kitchen was a great idea, but could be improved", // Mixed
    "The location was perfect for sightseeing",                // Good
    "The check-in process was smooth and efficient",           // Good
    "I found the common areas to be cluttered at times",      // Mixed
    "The hostel organized great group activities",             // Good
    "The decor was unique and added character",                // Good
    "The lounge area was often too crowded",                   // Mixed
    "The internet speed was sufficient for my needs",          // Good
    "The staff could improve their response times",            // Mixed
    "I loved the friendly and welcoming atmosphere",           // Good
    "The hostel's location was convenient for my travels",     // Good
    "The bathroom facilities were shared but kept clean",     // Good
    "The staff were always willing to help with information",  // Good
    "I felt very comfortable and safe during my stay",         // Good
    "The hostel had a lively and social atmosphere",           // Good
    "The food could have been more diverse",                   // Mixed
    "The kitchen was very well-equipped",                       // Good
    "The view from my room was great",                          // Good
    "The parking was a bit limited",                            // Mixed
    "The air conditioning worked perfectly",                    // Good
    "I would recommend this hostel to others",                 // Good
    "The staff were very attentive to my needs",               // Good
    "The Wi-Fi connection was poor in some areas",             // Bad
    "The atmosphere was lively and fun",                        // Good
    "The shared bathrooms were often busy",                     // Mixed
    "I enjoyed the themed events hosted by the staff",         // Good
    "The food was decent but could use more flavor",          // Mixed
    "The overall experience was great, I'll be back!",         // Good
    "The linens were clean, but the mattress was uncomfortable", // Mixed
    "The garden area was a lovely retreat",                     // Good
    "The staff's friendliness made a big difference",          // Good
    "The hostel felt safe and secure",                          // Good
    "The evening entertainment could have been better",        // Mixed
    "The food was good, but not what I expected",              // Mixed
    "The overall vibe of the place was positive",              // Good
    "The kitchen was occasionally messy",                       // Mixed
    "The beds were comfortable and spacious",                   // Good
    "The location was noisy due to traffic",                   // Bad
    "The staff could benefit from more training",              // Mixed
    "The cleanliness of the hostel was outstanding",           // Good
    "The lounge was a great place to relax",                   // Good
    "The amenities offered were well thought out",              // Good
    "The breakfast could use more variety",                     // Mixed
    "The events organized were engaging and fun",              // Good
    "The staff were quick to respond to issues",               // Good
    "I appreciated the communal dining experience",            // Good
    "The hostel provided a sense of community",                // Good
    "The outdoor area was well-maintained",                    // Good
    "The location was central, but too noisy at night",       // Mixed
    "The Wi-Fi was free and easy to access",                   // Good
    "The food quality varied day by day",                      // Mixed
    "The social events were a highlight of my stay",           // Good
    "The hostel felt very modern and fresh",                    // Good
    "The shared spaces were often messy",                       // Bad
    "I enjoyed the outdoor seating during breakfast",          // Good
    "The decor in the common area was inspiring",              // Good
    "The staff could be more proactive in helping guests",     // Mixed
    "The atmosphere was perfect for meeting new people",       // Good
    "The kitchen was stocked with everything I needed",        // Good
    "The hostel had a welcoming atmosphere",                   // Good
    "The parking fees were a bit high",                        // Bad
    "The evening activities were well-organized",              // Good
    "The amenities were exactly what I needed",                // Good
    "I loved the variety of food served at dinner",            // Good
    "The showers had weak water pressure",                      // Bad
    "The hostel's environment was peaceful",                   // Good
    "The shared kitchen was sometimes crowded",                // Mixed
    "The location was great for public transport",             // Good
    "The staff were very helpful and friendly",                // Good
    "The bathrooms could use more attention",                  // Bad
    "The view from the rooftop was beautiful",                 // Good
    "The hostel provided a fantastic experience overall",      // Good
    "The staff were accommodating to dietary restrictions",     // Good
    "The evening entertainment was a nice addition",           // Good
    "I felt at home during my stay",                           // Good
    "The social atmosphere was lively and engaging",           // Good
    "The amenities made my stay more enjoyable",               // Good
    "The common areas could use more seating",                 // Mixed
    "The hostel was generally clean and well-maintained",      // Good
    "The outdoor area was a perfect place to relax",           // Good
    "The staff could improve their customer service skills",   // Mixed
    "The overall vibe of the hostel was friendly",             // Good
    "The amenities offered made my stay more enjoyable",       // Good
    "I enjoyed the events hosted by the staff",                // Good
    "The dining area could be more spacious",                  // Mixed
    "The cleanliness of the hostel exceeded my expectations",  // Good
    "The staff were attentive and helpful",                     // Good
    "The common room was cozy and inviting",                   // Good
  ];
  
  const labelsSentiment: number[] = [
    0, 1, 0, 1, 1, 0, 0, 1, 0, 1,
    1, 0, 0, 0, 0, 1, 0, 1, 0, 1,
    1, 1, 0, 0, 0, 1, 0, 1, 1, 0,
    0, 0, 1, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 0, 0, 1, 1, 1, 0, 1,
    1, 1, 0, 1, 0, 1, 1, 0, 0, 1,
    0, 1, 1, 1, 0, 1, 0, 0, 1, 1,
    0, 1, 0, 1, 0, 1, 1, 0, 0, 1,
    0, 1, 1, 0, 1, 0, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 0, 1, 0, 1, 1,
    1, 1, 0, 1, 1, 0, 0, 0, 1, 0,
    0, 1, 0, 1, 0, 0, 0, 0, 1, 1,
    0, 0, 1, 1, 1, 1, 0, 0, 1, 0,
    1, 1, 1, 1, 0, 1, 0, 1, 0, 1,
    1, 1, 1, 0, 1, 0, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 0, 1, 0, 1, 1,
    1, 1, 0, 1, 1, 0, 1, 0, 1, 1,
    0, 1, 0, 0, 0, 0, 0, 1, 1, 1,
    0, 0, 0, 1, 0, 0, 1, 1, 0, 1,
    0, 0, 1, 1, 1, 1, 1, 0, 1, 1,
    1, 0, 1, 1, 1, 0, 1, 1, 0, 0,
    1, 0, 1, 1, 1, 0, 1, 1, 0, 0,
    1, 1, 1, 0, 1, 1, 1, 0, 1, 0,
    1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
    0, 0, 1, 1, 1, 1, 0, 1, 1, 1,
    0, 1, 0, 1, 0, 0, 0, 0, 1, 1,
    1, 1, 0, 0, 1, 1, 0, 1, 0, 0,
    1, 1, 1, 1, 1, 0, 1, 1, 1, 0,
    0, 1, 0, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 1, 1, 0, 1, 0, 0, 1,
    0, 0, 1, 1, 0, 1, 1, 0, 1, 0,
    0, 1, 0, 0, 1, 1, 0, 0, 1, 0,
    1, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 1, 1, 1, 1, 1, 0, 1, 1,
    1, 1, 0, 1, 0, 0, 1, 0, 1, 0,
    1, 0, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
    0, 1, 1, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 1, 0, 1, 0, 0, 1, 0, 1,
    1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1
  ];
  
  const labelsDepartment: number[] = [
    0, 1, 1, 0, 1, 1, 1, 0, 1, 1,
    1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
    0, 1, 1, 0, 0, 0, 1, 1, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 1, 0, 1, 1,
    0, 0, 1, 1, 1, 1, 0, 1, 0, 1,
    0, 0, 1, 0, 1, 0, 0, 1, 1, 1,
    1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 0, 1, 1, 1, 0, 0, 0, 1, 0,
    0, 1, 1, 0, 1, 1, 1, 1, 0, 0,
    1, 0, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 0, 1, 0, 1, 1,
    0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    1, 0, 1, 0, 1, 0, 1, 1, 0, 1,
    1, 0, 1, 0, 1, 0, 0, 1, 0, 1,
    1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 1, 0, 1, 0, 1, 0, 1, 1,
    0, 0, 1, 1, 1, 1, 0, 1, 1, 1,
    0, 0, 0, 1, 0, 1, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 1, 1, 1, 1, 0,
    0, 0, 1, 1, 0, 1, 1, 1, 1, 0,
    0, 0, 1, 1, 0, 0, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
    0, 1, 0, 0, 1, 1, 1, 1, 0, 0,
    1, 0, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 0, 1, 0, 1, 1,
    0, 1, 1, 1, 1, 0, 1, 1, 1, 1,
    0, 1, 0, 0, 1, 0, 0, 1, 0, 1,
    1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 0, 1, 0, 0, 0, 1, 1,
    1, 1, 0, 0, 0, 1, 0, 1, 1, 1,
    1, 0, 1, 0, 0, 1, 0, 0, 0, 1,
    0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
    0, 0, 0, 1, 1, 0, 1, 1, 1, 1
  ];
  
  const departments: string[] = [
    "Operations",
    "Food and Beverage"
  ];
  