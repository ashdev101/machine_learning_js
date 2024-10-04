const commonArray = [
  "irresponsible",
  "uninviting",
  "unapproachable",
  "disorganized",
  "not flexible",
  "refuse",
  "impolite",
  "lazy",
  "horrible",
  "uncooperative",
  "inadequate",
  "ignorant",
  "horrific",
  "careless",
  "empty",
  "stench",
  "stink",
  "inattentive",
  "disrespectful",
  "offensive",
  "unresponsive",
  "unwelcoming",
  "slow",
  "arrogant",
  "not professional",
  "rude",
  "inefficient",
  "off putting",
  "nobody",
  "unfriendly",
  "unprofessional",
  "unorganised",
  "awful",
  "gloomy",
  "reek",
  "ignoring",
  "unsympathetic",
  "dirty",
  "discomfort",
  "staff behavior",
  "terrible",
  "smelling",
  "offensive",
  "dull",
  "horrible hospitality",
  "lousy",
  "negligent",
  "smelly",
  "dirty",
  "unhelpful",
  "unreliable",
  "horrendous",
  "not cooperative",
  "dismissive",
  "horrible hospitality",
  "biased",
  "dismissive",
  "cold",
  "indifferent",
  "delay",
  "unsafe",
  "unmanned",
  "inhospitable",
  "disgusting",
  "rude",
  "uncooperative",
  "ugly attitude",
  "unhelpful",
  "unpleasant",
  "stinky",
  "poor communication",
  "unkept",
  "urgent training",
  "noisy",
  "incompetent",
  "stinking",
  "unclean",
  "poor",
  "lazy",
];

const resultCommon = [
  1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0,
  1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0,
  1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0,
  1,
];

const finalData = [
  { keyword: "uninviting", department: "oops" },
  { keyword: "discomfort", department: "oops" },
  { keyword: "dirty", department: "oops" },
  { keyword: "poor", department: "oops" },
  { keyword: "unorganised", department: "oops" },
  { keyword: "horrible", department: "oops" },
  { keyword: "unhelpful", department: "oops" },
  { keyword: "slow", department: "oops" },
  { keyword: "inhospitable", department: "oops" },
  { keyword: "cold", department: "oops" },
  { keyword: "not flexible", department: "oops" },
  { keyword: "disrespectful", department: "oops" },
  { keyword: "unfriendly", department: "oops" },
  { keyword: "rude", department: "oops" },
  { keyword: "unwelcoming", department: "oops" },
  { keyword: "not professional", department: "oops" },
  { keyword: "unapproachable", department: "oops" },
  { keyword: "ignorant", department: "oops" },
  { keyword: "off putting", department: "oops" },
  { keyword: "dismissive", department: "oops" },
  { keyword: "unkept", department: "oops" },
  { keyword: "unclean", department: "oops" },
  { keyword: "unpleasant", department: "oops" },
  { keyword: "smelly", department: "oops" },
  { keyword: "stinky", department: "oops" },
  { keyword: "poor communication", department: "oops" },
  { keyword: "unsafe", department: "oops" },
  { keyword: "noisy", department: "oops" },
  { keyword: "unmanned", department: "oops" },
  { keyword: "empty", department: "oops" },
  { keyword: "nobody", department: "oops" },
  { keyword: "terrible", department: "oops" },
  { keyword: "uncooperative", department: "oops" },
  { keyword: "awful", department: "oops" },
  { keyword: "horrific", department: "oops" },
  { keyword: "horrendous", department: "oops" },
  { keyword: "inadequate", department: "oops" },
  { keyword: "gloomy", department: "oops" },
  { keyword: "dull", department: "oops" },
  { keyword: "lousy", department: "oops" },
  { keyword: "lazy", department: "oops" },
  { keyword: "refuse", department: "oops" },
  { keyword: "disgusting", department: "oops" },
  { keyword: "stink", department: "oops" },
  { keyword: "stench", department: "oops" },
  { keyword: "stinking", department: "oops" },
  { keyword: "smelling", department: "oops" },
  { keyword: "offensive", department: "oops" },
  { keyword: "reek", department: "oops" },
  { keyword: "horrible hospitality", department: "oops" },

  { keyword: "incompetent", department: "hr/oops" },
  { keyword: "unhelpful", department: "hr/oops" },
  { keyword: "negligent", department: "hr/oops" },
  { keyword: "unprofessional", department: "hr/oops" },
  { keyword: "inattentive", department: "hr/oops" },
  { keyword: "rude", department: "hr/oops" },
  { keyword: "indifferent", department: "hr/oops" },
  { keyword: "dismissive", department: "hr/oops" },
  { keyword: "inefficient", department: "hr/oops" },
  { keyword: "lazy", department: "hr/oops" },
  { keyword: "uncooperative", department: "hr/oops" },
  { keyword: "irresponsible", department: "hr/oops" },
  { keyword: "careless", department: "hr/oops" },
  { keyword: "unresponsive", department: "hr/oops" },
  { keyword: "disorganized", department: "hr/oops" },
  { keyword: "arrogant", department: "hr/oops" },
  { keyword: "dirty", department: "hr/oops" },
  { keyword: "impolite", department: "hr/oops" },
  { keyword: "unreliable", department: "hr/oops" },
  { keyword: "staff behavior", department: "hr/oops" },
  { keyword: "unsympathetic", department: "hr/oops" },
  { keyword: "offensive", department: "hr/oops" },
  { keyword: "ignoring", department: "hr/oops" },
  { keyword: "delay", department: "hr/oops" },
  { keyword: "not cooperative", department: "hr/oops" },
  { keyword: "horrible hospitality", department: "hr/oops" },
  { keyword: "ugly attitude", department: "hr/oops" },
  { keyword: "urgent training", department: "hr/oops" },
  { keyword: "biased", department: "hr/oops" },
];

// Example output
// console.log(finalData);

//shuffle data
const shuffledData = finalData.sort(() => 0.5 - Math.random());

// console.log(shuffledData);

const arrayOops = [
  "The restaurant had an uninviting atmosphere that made us reconsider our choice.",
  ,
  "From the moment we entered, the place felt cold and uninviting.",

  "I felt a sense of discomfort the entire time I was there.",
  "The seating was cramped, leading to considerable discomfort during my meal.",

  "The tables were dirty and hadn't been wiped down, which was off-putting.",
  "I was shocked at how dirty the floors were; it felt neglected.",

  "The service was poor, and it took forever to get our orders.",
  "I had high hopes, but the quality of the food was disappointingly poor.",

  "The event was completely unorganised, leading to a chaotic experience.",
  "I found the staff to be unorganised, which resulted in long wait times.",

  "I had a horrible experience with the customer service.",
  "The food was horrible, lacking flavor and presentation.",

  "The staff was unhelpful when I asked for assistance.",
  "I found the unhelpful attitude of the employees frustrating.",

  "The service was incredibly slow, and we waited too long for our drinks.",
  "I couldn't believe how slow the staff was to attend to our table.",

  "The staff's inhospitable demeanor made us feel unwelcome.",
  "It was a truly inhospitable environment, lacking any warmth or friendliness.",

  "The dining area was cold, making it uncomfortable to enjoy our meal.",
  "I was surprised at how cold it felt inside, despite the warm weather outside.",

  "The restaurant was not flexible with menu changes, which was disappointing.",
  "I found the staff to be not flexible when it came to accommodating dietary restrictions.",

  "The server was disrespectful when we pointed out an issue with our order.",
  "I couldn't believe the disrespectful tone taken by the staff.",

  "The staff were unfriendly and seemed disinterested in helping us.",
  "An unfriendly attitude from the employees made our visit less enjoyable.",

  "One of the waitstaff was incredibly rude when I asked for a different dish.",
  "I experienced rude service that really soured my mood.",

  "The atmosphere felt unwelcoming, with no one greeting us upon arrival.",
  "I found the overall vibe of the place to be unwelcoming and cold.",

  "The staff's behavior was not professional, lacking basic etiquette.",
  "It was clear that the service was not professional, which was disappointing.",

  "The manager seemed unapproachable, making it hard to voice our concerns.",
  "I found the staff to be unapproachable when I needed assistance.",

  "The employees were ignorant of their menu, which was frustrating.",
  "I was shocked by how ignorant the staff was about the specials.",

  "The overall cleanliness was off-putting and made us want to leave.",
  "I found the décor to be off-putting and not at all inviting.",

  "The waiter was dismissive when I asked for recommendations.",
  "I felt dismissed and undervalued as a customer during my visit.",

  "The restrooms were unkempt and needed serious attention.",
  "I noticed the outdoor area was unkempt and not well maintained.",

  "The tables were unclean, with crumbs left from previous diners.",
  "I was shocked by how unclean the facilities were.",

  "My overall experience was unpleasant, filled with issues.",
  "The food was unpleasant and didn’t taste fresh at all.",

  "The place had a smelly odor that made it hard to enjoy our meal.",
  "I couldn’t ignore the smelly environment; it was quite distracting.",

  "The stinky air made it uncomfortable to stay for long.",
  "I couldn't believe how stinky the kitchen area was.",

  "There was poor communication from the staff regarding our order.",
  "I experienced poor communication when trying to resolve an issue.",

  "I felt unsafe with the way things were managed around the restaurant.",
  "The environment felt unsafe, with several hazards in plain sight.",

  "The atmosphere was noisy, making it hard to hold a conversation.",
  "I found the place excessively noisy and chaotic.",

  "The reception area was unmanned when we arrived, which was frustrating.",
  "We were left waiting because the counter was unmanned for too long.",

  "The place was surprisingly empty, which made it feel eerie.",
  "I was taken aback by how empty the restaurant was on a weekend evening.",

  "There was nobody to help us when we walked in.",
  "I noticed nobody around to answer our questions about the menu.",

  "The food was terrible and did not meet our expectations.",
  "We had a terrible experience with the long wait times.",

  "The staff was uncooperative when we tried to change our reservation.",
  "I found the team to be uncooperative, making our visit difficult.",

  "The experience was awful, and I won’t be returning.",
  "I had an awful time with the service; it felt rushed and unkind.",

  "The state of the kitchen was horrific; I couldn’t believe my eyes.",
  "I had a horrific experience, from the service to the food quality.",

  "The wait time was horrendous, leaving us frustrated.",
  "I was appalled by the horrendous conditions of the dining area.",

  "The portion sizes were inadequate for the price we paid.",
  "I found the staff's response to be inadequate for the situation.",

  "The décor was gloomy and did not create an inviting atmosphere.",
  "It felt gloomy inside, which affected the overall experience.",

  "The menu options were dull and lacked creativity.",
  "I found the ambiance dull and uninspiring.",

  "The service was simply lousy, with inattentive staff.",
  "I had a lousy experience overall and wouldn't recommend it.",

  "The staff seemed lazy and uninterested in providing good service.",
  "I was disappointed by the lazy approach to customer care.",

  "The staff refused to accommodate our request for a different table.",
  "I was shocked when they refused to offer a refund for our meal.",

  "The food was disgusting, and I couldn't finish my meal.",
  "The restroom facilities were disgusting and in dire need of cleaning.",

  "There was a noticeable stink coming from the kitchen.",
  "I couldn't ignore the unpleasant stink lingering in the air.",

  "The stench of garbage was overwhelming as we entered.",
  "I was put off by the stench that permeated the dining area.",

  "The stinking odor made it difficult to enjoy my meal.",
  "There was a stinking smell that ruined the ambiance completely.",

  "The food was smelling off, which made me uneasy.",
  "I couldn't shake the feeling that something was smelling bad in the kitchen.",

  "The way the staff treated us was offensive and rude.",
  "I found the comments made by the staff to be offensive.",

  "The place reeked of old food and cleaning supplies.",
  "I was shocked at how much the place reeked of something foul.",

  "I experienced horrible hospitality, feeling like a nuisance rather than a guest.",
  "The horrible hospitality made it clear that they didn’t care about customer satisfaction.",
];


const arrayOopsResult = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

const arrayOopsHr = [
  "The staff was completely incompetent when it came to handling our order.",
  "I felt frustrated by the incompetent service that ruined our experience.",

  "The employees were unhelpful when I asked for basic information.",
  "I found the unhelpful attitude of the staff very disappointing.",

  "The negligent approach to cleanliness was alarming.",
  "I noticed several safety issues that seemed negligent on the part of management.",

  "The service was unprofessional, lacking any sense of courtesy.",
  "I was taken aback by the unprofessional behavior of the staff.",

  "The waiter was inattentive, making us wait far too long for service.",
  "I found the staff to be inattentive to our needs throughout the meal.",

  "One of the staff members was rude and dismissive when I raised a concern.",
  "I experienced rude service that left a bad taste in my mouth.",

  "The employees were indifferent to our complaints and requests.",
  "I was surprised by their indifferent attitude toward customer satisfaction.",

  "The manager's dismissive response to our feedback was unacceptable.",
  "I felt dismissed and unvalued during my entire visit.",

  "The service was inefficient, causing unnecessary delays.",
  "I was frustrated by the inefficient handling of our order.",

  "The staff seemed lazy and uninterested in providing quality service.",
  "I found the lazy approach to customer care quite disheartening.",

  "The team was uncooperative when we asked to make changes to our reservation.",
  "I encountered uncooperative staff who refused to address our concerns.",

  "The irresponsible handling of our complaints was shocking.",
  "I felt the staff was irresponsible in managing the dining area.",

  "The careless attitude of the employees affected the quality of our experience.",
  "I noticed several careless mistakes that were frustrating.",

  "The staff was unresponsive to our requests, making it a difficult visit.",
  "I felt ignored as the unresponsive staff failed to assist us.",

  "The restaurant was disorganized, leading to confusion and delays.",
  "I couldn't believe how disorganized the service was during our meal.",

  "The server had an arrogant attitude that made us uncomfortable.",
  "I was taken aback by the arrogant remarks made by the staff.",

  "The tables were dirty, which made the whole experience less enjoyable.",
  "I was shocked at how dirty the restroom facilities were.",

  "The staff was impolite when we inquired about the menu.",
  "I felt disrespected by the impolite demeanor of the waiter.",

  "The service was unreliable, with incorrect orders being common.",
  "I found the staff to be unreliable when it came to meeting our needs.",

  "The staff behavior was unprofessional and unwelcoming.",
  "I was appalled by the poor staff behavior throughout my visit.",

  "The staff was unsympathetic to our concerns about the food quality.",
  "I felt disappointed by the unsympathetic responses from the employees.",

  "Some of the comments made by the staff were offensive and inappropriate.",
  "I found the behavior of one employee to be offensive and uncalled for.",

  "The staff was busy ignoring our requests, which was frustrating.",
  "I felt like they were purposely ignoring our table throughout our visit.",

  "There was an excessive delay in receiving our food, which was unacceptable.",
  "The long delay made the entire experience less enjoyable.",

  "The team was not cooperative when we asked for assistance.",
  "I encountered several staff members who were not cooperative at all.",

  "The horrible hospitality made us feel like we were an inconvenience.",
  "I was disappointed by the horrible hospitality and lack of warmth.",

  "The server had an ugly attitude that ruined our dining experience.",
  "I couldn't believe the ugly attitude displayed by the staff.",

  "The level of service clearly indicated that urgent training was needed.",
  "I would suggest urgent training for the staff to improve their skills.",

  "I felt the service was biased, favoring certain customers over others.",
  "The biased treatment we received was disappointing and unfair.",
];

const arrayOopsHrResult = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1,
];


const array1 = ["esf", "efjy"];
const array1res = [0, 0];
const array2 = ["nhg", "sada"];
const array2res = [1, 1];

// Combine values and results into a single array of arrays
export const combined = arrayOops.concat(arrayOopsHr);
export const combinedResult = arrayOopsResult.concat(arrayOopsHrResult);

console.log(combinedResult);



