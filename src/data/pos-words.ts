import type { PosWord } from "./types";

export const posWords: PosWord[] = [
  {
    word: "About",
    uses: [
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "He is walking about.", exampleBn: "সে এদিক-ওদিক হাঁটছে।" },
      { pos: "Preposition", posBn: "পদান্বয়ী অব্যয়", example: "What do you know about him?", exampleBn: "তাকে নিয়ে তুমি কী জানো?" },
    ],
  },
  {
    word: "Above",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "I look for help from above.", exampleBn: "আমি উপর থেকে সাহায্য চাই।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "Give the substance of the above passage.", exampleBn: "উপরের অনুচ্ছেদের সারমর্ম দাও।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "Look above.", exampleBn: "উপরে তাকাও।" },
      { pos: "Preposition", posBn: "পদান্বয়ী অব্যয়", example: "He is above meanness.", exampleBn: "সে নীচতা থেকে ঊর্ধ্বে।" },
    ],
  },
  {
    word: "After",
    uses: [
      { pos: "Adjective", posBn: "বিশেষণ", example: "His after life was miserable.", exampleBn: "তার পরবর্তী জীবন দুঃখময় ছিল।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "He came soon after.", exampleBn: "সে কিছুক্ষণ পরেই এল।" },
      { pos: "Preposition", posBn: "পদান্বয়ী অব্যয়", example: "There is none to look after me here.", exampleBn: "এখানে আমাকে দেখাশোনা করার কেউ নেই।" },
      { pos: "Conjunction", posBn: "সংযোজক", example: "He went after we had left.", exampleBn: "আমরা চলে যাওয়ার পর সে গেল।" },
    ],
  },
  {
    word: "All",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "I have lost my all. All is lost.", exampleBn: "আমার সব হারিয়েছি।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "All men must die.", exampleBn: "সব মানুষকেই মরতে হয়।" },
      { pos: "Pronoun", posBn: "সর্বনাম", example: "All of us know it. Are you all ready?", exampleBn: "আমরা সবাই জানি।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "He came all on a sudden.", exampleBn: "সে হঠাৎ করে এল।" },
    ],
    notes: [
      {
        en: "COD lists all as adj., n. & adv., and still gives all of us as a noun example.",
        bn: "COD all of us-কে noun ধরে; পাঠ্যবই pronoun-ও বলে। কাজ দেখে পদ লিখুন।",
      },
    ],
  },
  {
    word: "Any",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "Point out the errors if there be any.", exampleBn: "থাকলে ভুলগুলো দেখাও।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "Any pen will do.", exampleBn: "যেকোনো কলম চলবে।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "I cannot bear this any longer.", exampleBn: "আর সহ্য হয় না।" },
    ],
  },
  {
    word: "As",
    uses: [
      { pos: "Relative pronoun", posBn: "আপেক্ষিক সর্বনাম", example: "This is the same book as that.", exampleBn: "এটা সেই একই বই।" },
      { pos: "Simple adverb", posBn: "সরল ক্রিয়াবিশেষণ", example: "Come as soon as you can.", exampleBn: "যত তাড়াতাড়ি পারো এসো।" },
      { pos: "Conjunction", posBn: "সংযোজক", example: "As I am ill I cannot go.", exampleBn: "অসুস্থ বলে যেতে পারছি না।" },
    ],
  },
  {
    word: "Back",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "He struck me on the back.", exampleBn: "সে আমার পিঠে আঘাত করল।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "He escaped by the back door.", exampleBn: "পিছনের দরজা দিয়ে পালাল।" },
      { pos: "Verb", posBn: "ক্রিয়া", example: "He backed me in the trial.", exampleBn: "বিচারে সে আমাকে সমর্থন করল।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "Come back as soon as possible.", exampleBn: "যত তাড়াতাড়ি পারো ফিরে এসো।" },
    ],
  },
  {
    word: "Before",
    uses: [
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "I saw him once before.", exampleBn: "আগে একবার দেখেছি।" },
      { pos: "Preposition", posBn: "পদান্বয়ী অব্যয়", example: "He stood before me.", exampleBn: "সে আমার সামনে দাঁড়াল।" },
      { pos: "Conjunction", posBn: "সংযোজক", example: "Look before you leap.", exampleBn: "লাফানোর আগে দেখো।" },
    ],
  },
  {
    word: "Better",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "Respect your betters.", exampleBn: "তোমার গুণীজনদের সম্মান করো।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "He is a better singer than I.", exampleBn: "সে আমার চেয়ে ভালো গায়ক।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "He knows English better than I.", exampleBn: "সে আমার চেয়ে ভালো ইংরেজি জানে।" },
      { pos: "Verb", posBn: "ক্রিয়া", example: "Try to better your lot.", exampleBn: "নিজের অবস্থা উন্নত করার চেষ্টা করো।" },
    ],
  },
  {
    word: "Both",
    uses: [
      { pos: "Adjective", posBn: "বিশেষণ", example: "Both the boys must be guilty.", exampleBn: "দুই ছেলেই দোষী।" },
      { pos: "Pronoun", posBn: "সর্বনাম", example: "Both of them were present.", exampleBn: "তারা দুজনেই উপস্থিত ছিল।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "She is both dead and buried.", exampleBn: "সে মৃত এবং সমাহিত — দুই-ই।" },
      { pos: "Conjunction", posBn: "সংযোজক", example: "Both he and Ram must be guilty.", exampleBn: "সে এবং রাম দুজনেই দোষী।" },
    ],
    notes: [
      { en: "COD & POD treat correlative both as adverb; Chambers as adv. or conj.", bn: "both…and-কে অভিধানভেদে adverb বা conjunction বলা হয়।" },
    ],
  },
  {
    word: "But",
    uses: [
      { pos: "Relative pronoun", posBn: "আপেক্ষিক সর্বনাম", example: "There was none but shed tears.", exampleBn: "এমন কেউ ছিল না যে কাঁদেনি।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "You are but a child.", exampleBn: "তুমি কেবল একটি শিশু।" },
      { pos: "Preposition", posBn: "পদান্বয়ী অব্যয়", example: "None but him was present there.", exampleBn: "তাকে ছাড়া কেউ ছিল না।" },
      { pos: "Co-ordinating conjunction", posBn: "সমসংযোজক", example: "He is poor but honest.", exampleBn: "সে গরিব কিন্তু সৎ।" },
      { pos: "Subordinating conjunction", posBn: "অধীন সংযোজক", example: "It never rains but it pours.", exampleBn: "বৃষ্টি হলেই বন্যা।" },
      { pos: "Verb / Noun", posBn: "ক্রিয়া / বিশেষ্য", example: "But me no buts.", exampleBn: "আমাকে আপত্তি শুনিয়ো না।" },
    ],
  },
  {
    word: "By",
    uses: [
      { pos: "Adjective", posBn: "বিশেষণ", example: "His action surprised the by-standers.", exampleBn: "দর্শকরা অবাক হল।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "The train has passed by.", exampleBn: "ট্রেন চলে গেছে।" },
      { pos: "Preposition", posBn: "পদান্বয়ী অব্যয়", example: "Sit by me.", exampleBn: "আমার পাশে বোসো।" },
    ],
  },
  {
    word: "Close",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "The ceremony came to a close.", exampleBn: "অনুষ্ঠান শেষ হল।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "He is a close friend of mine.", exampleBn: "সে আমার অন্তরঙ্গ বন্ধু।" },
      { pos: "Verb", posBn: "ক্রিয়া", example: "The school closes at 4 p.m.", exampleBn: "স্কুল চারটায় বন্ধ হয়।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "Our examination is close at hand.", exampleBn: "পরীক্ষা একেবারে কাছে।" },
    ],
  },
  {
    word: "Down",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "He has had ups and downs in life.", exampleBn: "জীবনে উত্থান-পতন দেখেছে।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "The down train is coming.", exampleBn: "ডাউন ট্রেন আসছে।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "The sun has gone down.", exampleBn: "সূর্য ডুবেছে।" },
      { pos: "Preposition", posBn: "পদান্বয়ী অব্যয়", example: "The boat is sailing down the river.", exampleBn: "নৌকা নদী বেয়ে যাচ্ছে।" },
    ],
  },
  {
    word: "Either",
    uses: [
      { pos: "Adjective", posBn: "বিশেষণ", example: "There are trees on either side of the street.", exampleBn: "রাস্তার দুই পাশেই গাছ।" },
      { pos: "Pronoun", posBn: "সর্বনাম", example: "Either of the pencils will do.", exampleBn: "দুটির যেকোনোটি চলবে।" },
      { pos: "Conjunction", posBn: "সংযোজক", example: "Either you or your brother should go.", exampleBn: "তুমি না হয় তোমার ভাই যাবে।" },
    ],
  },
  {
    word: "Enough",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "We have had enough of everything.", exampleBn: "সবকিছুরই যথেষ্ট পেয়েছি।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "I have money enough for the purpose.", exampleBn: "কাজের জন্য যথেষ্ট টাকা আছে।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "He is strong enough to walk.", exampleBn: "হাঁটার মতো শক্তি তার আছে।" },
    ],
  },
  {
    word: "Fast",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "A well-timed fast is better than a cure.", exampleBn: "সময়মতো উপবাস ওষুধের চেয়ে ভালো।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "He is my fast friend.", exampleBn: "সে আমার অকৃত্রিম বন্ধু।" },
      { pos: "Verb", posBn: "ক্রিয়া", example: "He fasts every Sunday.", exampleBn: "প্রতি রবিবার সে উপবাস করে।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "Don't run so fast.", exampleBn: "এত তাড়াতাড়ি ছুটো না।" },
    ],
  },
  {
    word: "Few",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "A few of his friends were present there.", exampleBn: "তার কিছু বন্ধু উপস্থিত ছিল।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "There are few men here.", exampleBn: "এখানে মানুষ নেই বললেই চলে।" },
      { pos: "Pronoun", posBn: "সর্বনাম", example: "Few know where he is.", exampleBn: "সে কোথায়, খুব কম লোকই জানে।" },
    ],
    notes: [{ en: "POD/COD treat the third use as a noun, not a pronoun.", bn: "অভিধান প্রায়ই একে noun বলে।" }],
  },
  {
    word: "Half",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "The half of ten is five.", exampleBn: "দশের অর্ধেক পাঁচ।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "We shall have a half-holiday today.", exampleBn: "আজ অর্ধেক ছুটি।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "He was half dead with fear.", exampleBn: "ভয়ে সে প্রায় মৃত।" },
    ],
  },
  {
    word: "Last",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "He will fight to the last.", exampleBn: "শেষ পর্যন্ত লড়বে।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "I shall go by the last train.", exampleBn: "শেষ ট্রেনে যাব।" },
      { pos: "Verb", posBn: "ক্রিয়া", example: "It will last long.", exampleBn: "এটা অনেকদিন চলবে।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "He came last.", exampleBn: "সে শেষে এল।" },
    ],
  },
  {
    word: "Less",
    uses: [
      { pos: "Adjective", posBn: "বিশেষণ", example: "I want less sugar.", exampleBn: "আরও কম চিনি চাই।" },
      { pos: "Pronoun", posBn: "সর্বনাম", example: "I cannot take less.", exampleBn: "এর কম নিতে পারি না।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "He is less clever than his brother.", exampleBn: "ভাইয়ের চেয়ে কম চালাক।" },
      { pos: "Preposition", posBn: "পদান্বয়ী অব্যয়", example: "Pay me the price less the usual discount.", exampleBn: "ছাড় বাদ দিয়ে দাম দাও।" },
    ],
  },
  {
    word: "Like",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "Like begets like.", exampleBn: "সদৃশ সদৃশকে জন্ম দেয়।" },
      { pos: "Adjective (prep. force)", posBn: "বিশেষণ", example: "Men like him are rare.", exampleBn: "তার মতো মানুষ দুর্লভ।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "He seemed angry like.", exampleBn: "রাগতার মতো দেখাচ্ছিল।" },
      { pos: "Verb", posBn: "ক্রিয়া", example: "I do not like him.", exampleBn: "আমি তাকে পছন্দ করি না।" },
      { pos: "Preposition", posBn: "পদান্বয়ী অব্যয়", example: "Do not talk like that.", exampleBn: "এভাবে কথা বলো না।" },
    ],
  },
  {
    word: "Little",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "I got little of his company. Wait a little.", exampleBn: "তার সাহচর্য প্রায় পাইনি।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "He is a little boy.", exampleBn: "সে একটি ছোট ছেলে।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "He is little liked by the people.", exampleBn: "লোকে তাকে প্রায় পছন্দ করে না।" },
    ],
  },
  {
    word: "Long",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "He will come before long.", exampleBn: "শীঘ্রই আসবে।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "It is a long story.", exampleBn: "লম্বা গল্প।" },
      { pos: "Verb", posBn: "ক্রিয়া", example: "Boys long for holidays.", exampleBn: "ছেলেরা ছুটির জন্য ব্যাকুল।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "I cannot wait long.", exampleBn: "বেশিক্ষণ অপেক্ষা করতে পারি না।" },
    ],
  },
  {
    word: "Many",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "A great many stayed away.", exampleBn: "অনেকেই আসেনি।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "I have many friends.", exampleBn: "অনেক বন্ধু আছে।" },
      { pos: "Pronoun", posBn: "সর্বনাম", example: "Many have seen the sight.", exampleBn: "অনেকেই দেখেছে।" },
    ],
    notes: [{ en: "POD treats many as a noun only after a good / a great.", bn: "a great many — এখানেই noun।" }],
  },
  {
    word: "More",
    uses: [
      { pos: "Adjective", posBn: "বিশেষণ", example: "I want more money.", exampleBn: "আরও টাকা চাই।" },
      { pos: "Pronoun", posBn: "সর্বনাম", example: "I hope to see more of you.", exampleBn: "আরও দেখা হবে আশা করি।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "Be more careful.", exampleBn: "আরও সাবধান হও।" },
    ],
  },
  {
    word: "Much",
    uses: [
      { pos: "Adjective", posBn: "বিশেষণ", example: "The news gives me much pleasure.", exampleBn: "খবরটা খুব আনন্দ দিল।" },
      { pos: "Pronoun", posBn: "সর্বনাম", example: "Too much of anything is bad.", exampleBn: "কিছুরই বাড়াবাড়ি খারাপ।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "It will not harm me much.", exampleBn: "বেশি ক্ষতি হবে না।" },
    ],
  },
  {
    word: "Near",
    uses: [
      { pos: "Adjective", posBn: "বিশেষণ", example: "He is a near relation of mine.", exampleBn: "ঘনিষ্ঠ আত্মীয়।" },
      { pos: "Verb", posBn: "ক্রিয়া", example: "The ship is nearing the shore.", exampleBn: "জাহাজ তীরের কাছে আসছে।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "Come near.", exampleBn: "কাছে এসো।" },
      { pos: "Preposition", posBn: "পদান্বয়ী অব্যয়", example: "I saw the man near the station.", exampleBn: "স্টেশনের কাছে দেখেছি।" },
    ],
  },
  {
    word: "Need",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "I am in need of your advice.", exampleBn: "তোমার পরামর্শ দরকার।" },
      { pos: "Verb", posBn: "ক্রিয়া", example: "I need your help.", exampleBn: "তোমার সাহায্য চাই।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "He must needs go there.", exampleBn: "তাকে অবশ্যই যেতেই হবে।" },
    ],
  },
  {
    word: "Neither",
    uses: [
      { pos: "Adjective", posBn: "বিশেষণ", example: "Neither report is true.", exampleBn: "কোনো খবরই সত্য নয়।" },
      { pos: "Pronoun", posBn: "সর্বনাম", example: "Neither of the reports is true.", exampleBn: "দুটির কোনোটিই সত্য নয়।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "Neither I nor he knows.", exampleBn: "আমিও না, সেও না।" },
      { pos: "Conjunction", posBn: "সংযোজক", example: "I know not, neither can I guess.", exampleBn: "জানি না, অনুমানও করতে পারি না।" },
    ],
  },
  {
    word: "Next",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "Details will be given in my next.", exampleBn: "পরের চিঠিতে বিস্তারিত।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "He came the next day.", exampleBn: "পরের দিন এল।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "He came next.", exampleBn: "সে তার পর এল।" },
      { pos: "Preposition", posBn: "পদান্বয়ী অব্যয়", example: "He sat next (next to) me.", exampleBn: "আমার ঠিক পাশে বসল।" },
    ],
  },
  {
    word: "One",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "I am at one with you.", exampleBn: "আমি তোমার সঙ্গে একমত।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "Give me one rupee.", exampleBn: "এক টাকা দাও।" },
      { pos: "Pronoun", posBn: "সর্বনাম", example: "One should obey one's parents.", exampleBn: "প্রত্যেকেরই মা-বাবাকে মানতে হয়।" },
    ],
  },
  {
    word: "Only",
    uses: [
      { pos: "Adjective", posBn: "বিশেষণ", example: "He was the only son of his father.", exampleBn: "বাবার একমাত্র ছেলে।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "He can only read.", exampleBn: "সে শুধু পড়তেই পারে।" },
      { pos: "Conjunction", posBn: "সংযোজক", example: "You may go there, only remain silent.", exampleBn: "যেতে পারো, শুধু চুপ থাকো।" },
    ],
  },
  {
    word: "Past",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "I cannot forget the past.", exampleBn: "অতীত ভুলতে পারি না।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "My past life was miserable.", exampleBn: "অতীত জীবন দুঃখময়।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "I saw him hasten past.", exampleBn: "তাকে ছুটে যেতে দেখলাম।" },
      { pos: "Preposition", posBn: "পদান্বয়ী অব্যয়", example: "It is half past three now.", exampleBn: "এখন সাড়ে তিনটে।" },
    ],
  },
  {
    word: "Right",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "You have no right to do it.", exampleBn: "এ কাজের অধিকার নেই।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "Show me your right hand.", exampleBn: "ডান হাত দেখাও।" },
      { pos: "Verb", posBn: "ক্রিয়া", example: "I shall right the wrong.", exampleBn: "অন্যায় শোধরাব।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "He walked right across the garden.", exampleBn: "সোজা বাগান পেরিয়ে গেল।" },
    ],
  },
  {
    word: "Round",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "The watchman is on his rounds.", exampleBn: "প্রহরী প্রদক্ষিণে আছে।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "Draw a round figure.", exampleBn: "গোলাকার ছবি আঁকো।" },
      { pos: "Verb", posBn: "ক্রিয়া", example: "Who rounded the Cape of Good Hope?", exampleBn: "কে কেপ ঘুরেছিল?" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "The earth moves round and round.", exampleBn: "পৃথিবী ঘুরছে।" },
      { pos: "Preposition", posBn: "পদান্বয়ী অব্যয়", example: "Drake sailed round the world.", exampleBn: "ড্রেক পৃথিবী প্রদক্ষিণ করল।" },
    ],
  },
  {
    word: "Since",
    uses: [
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "He died two weeks since.", exampleBn: "দুই সপ্তাহ আগে মারা যায়।" },
      { pos: "Preposition", posBn: "পদান্বয়ী অব্যয়", example: "He has been ill since that day.", exampleBn: "সেদিন থেকে অসুস্থ।" },
      { pos: "Conjunction", posBn: "সংযোজক", example: "Since you are ill you need not go.", exampleBn: "অসুস্থ বলে যাওয়ার দরকার নেই।" },
    ],
  },
  {
    word: "So",
    uses: [
      { pos: "Pronoun", posBn: "সর্বনাম", example: "So and so told me this. I said so.", exampleBn: "অমুক বলল। আমি তা-ই বললাম।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "I am so glad you have passed.", exampleBn: "পাশ করেছ বলে খুব খুশি।" },
      { pos: "Conjunction", posBn: "সংযোজক", example: "He was ill, so he could not go.", exampleBn: "অসুস্থ, তাই যেতে পারেনি।" },
      { pos: "Interjection", posBn: "বিস্ময়সূচক", example: "A little to the right, so!", exampleBn: "একটু ডানে, এই!" },
    ],
  },
  {
    word: "Some",
    uses: [
      { pos: "Pronoun", posBn: "সর্বনাম", example: "Some of them were present there.", exampleBn: "কিছুজন উপস্থিত ছিল।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "Give me some milk.", exampleBn: "কিছু দুধ দাও।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "Some fifty men were present there.", exampleBn: "প্রায় পঞ্চাশজন ছিল।" },
    ],
  },
  {
    word: "Still",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "The thief came in the still of night.", exampleBn: "রাতের নিস্তব্ধতায় চোর এল।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "The night is still.", exampleBn: "রাত নিস্তব্ধ।" },
      { pos: "Verb", posBn: "ক্রিয়া", example: "Still the child.", exampleBn: "শিশুকে শান্ত করো।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "He is still there.", exampleBn: "সে এখনও সেখানে।" },
      { pos: "Conjunction", posBn: "সংযোজক", example: "He was weak, still he went.", exampleBn: "দুর্বল, তবু গেল।" },
    ],
  },
  {
    word: "That",
    uses: [
      { pos: "Adjective", posBn: "বিশেষণ", example: "Who is that boy?", exampleBn: "ওই ছেলেটা কে?" },
      { pos: "Relative pronoun", posBn: "আপেক্ষিক সর্বনাম", example: "The books that I bought have been stolen.", exampleBn: "যে বই কিনেছিলাম চুরি হয়েছে।" },
      { pos: "Demonstrative pronoun", posBn: "নির্দেশক সর্বনাম", example: "That is just what I want.", exampleBn: "ঠিক তা-ই চাই।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "I will go that far.", exampleBn: "ওই পর্যন্ত যাব।" },
      { pos: "Relative adverb", posBn: "আপেক্ষিক ক্রিয়াবিশেষণ", example: "It was yesterday that we came.", exampleBn: "গতকালই আমরা এসেছিলাম।" },
      { pos: "Conjunction", posBn: "সংযোজক", example: "He told me that he was ill.", exampleBn: "সে বলল যে সে অসুস্থ।" },
    ],
    notes: [{ en: "MEU condemns adverbial that as unliterary.", bn: "that far সাহিত্যিক নয় — so far লিখুন।" }],
  },
  {
    word: "Then",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "I shall be ready by then.", exampleBn: "ততক্ষণে তৈরি থাকব।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "The then Governor approved the bill.", exampleBn: "তৎকালীন গভর্নর অনুমোদন দিলেন।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "He came to me then.", exampleBn: "তখন সে আমার কাছে এল।" },
      { pos: "Conjunction", posBn: "সংযোজক", example: "If you are ill, then you may go.", exampleBn: "অসুস্থ হলে তবে যেতে পারো।" },
    ],
    notes: [{ en: "POD treats the last as adverb; COD as conjunction.", bn: "POD adverb, COD conjunction।" }],
  },
  {
    word: "Up",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "He had ups and downs in life.", exampleBn: "জীবনে উত্থান-পতন।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "The up-train is coming.", exampleBn: "আপ-ট্রেন আসছে।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "The sun is up.", exampleBn: "সূর্য উঠেছে।" },
      { pos: "Preposition", posBn: "পদান্বয়ী অব্যয়", example: "He went up the hill.", exampleBn: "পাহাড়ে উঠল।" },
    ],
  },
  {
    word: "Well",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "Let well alone. A well was dug there.", exampleBn: "ভালোকে আঁচড়াবেন না। কূপ কাটা হল।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "I am quite well.", exampleBn: "আমি ভালো আছি।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "You have done well.", exampleBn: "ভালো করেছ।" },
      { pos: "Interjection", posBn: "বিস্ময়সূচক", example: "Well, what do you want?", exampleBn: "আচ্ছা, কী চাও?" },
    ],
  },
  {
    word: "What",
    uses: [
      { pos: "Interrogative pronoun", posBn: "প্রশ্নবোধক সর্বনাম", example: "What is your name?", exampleBn: "তোমার নাম কী?" },
      { pos: "Relative pronoun", posBn: "আপেক্ষিক সর্বনাম", example: "That is just what I want.", exampleBn: "ঠিক যা চাই।" },
      { pos: "Interrogative adjective", posBn: "প্রশ্নবোধক বিশেষণ", example: "What book do you like best?", exampleBn: "কোন বই সবচেয়ে পছন্দ?" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "What with illness and what with poverty…", exampleBn: "আংশিক অসুখে, আংশিক দারিদ্র্যে।" },
      { pos: "Interjection", posBn: "বিস্ময়সূচক", example: "What! can this be true?", exampleBn: "কী! এ কি সত্যি?" },
    ],
  },
  {
    word: "While",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "I worked for a while.", exampleBn: "কিছুক্ষণ কাজ করলাম।" },
      { pos: "Verb", posBn: "ক্রিয়া", example: "Do not while away your time.", exampleBn: "সময় নষ্ট কোরো না।" },
      { pos: "Conjunction", posBn: "সংযোজক", example: "While I was reading, I fell asleep.", exampleBn: "পড়তে পড়তে ঘুমিয়ে পড়লাম।" },
    ],
  },
  {
    word: "Worth",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "He is a man of no worth.", exampleBn: "তার কোনো মূল্য নেই।" },
      { pos: "Adjective (prep. force)", posBn: "বিশেষণ", example: "This house is worth a large sum.", exampleBn: "বাড়িটি অনেক টাকার।" },
    ],
  },
  {
    word: "Wrong",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "He has done no wrong.", exampleBn: "কোনো অন্যায় করেনি।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "You have followed the wrong path.", exampleBn: "ভুল পথ ধরেছ।" },
      { pos: "Verb", posBn: "ক্রিয়া", example: "You have wronged me.", exampleBn: "তুমি আমার অন্যায় করেছ।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "He led me wrong.", exampleBn: "সে আমাকে ভুল পথে নিয়ে গেল।" },
    ],
  },
];
