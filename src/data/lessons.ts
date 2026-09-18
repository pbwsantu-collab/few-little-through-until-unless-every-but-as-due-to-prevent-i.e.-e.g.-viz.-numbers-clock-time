import type { Chapter } from "./types";

export const chapters: Chapter[] = [
  {
    id: "few-little",
    index: 1,
    article: "§308–310",
    titleEn: "Few, Little, Less, Fewer",
    titleBn: "Few, Little, Less ও Fewer",
    summaryBn: "সংখ্যা না পরিমাণ? নেতিবাচক না ইতিবাচক? এই পার্থক্যই পরীক্ষার ভিত্তি।",
    minutes: 12,
    sections: [
      {
        id: "few",
        article: "§308",
        titleEn: "Few, a few, the few, not a few",
        titleBn: "Few, a few, the few, not a few",
        ideaBn:
          "Few সংখ্যা বোঝায় এবং বহুবচন বিশেষ্যের সাথে বসে। নিয়ন্ত্রক (article) বদলালে অর্থ উল্টে যায়।",
        ideaEn:
          "Few counts number and takes a plural noun. The determiner in front of it flips the meaning from almost-none to some to all-of-the-small-group.",
        bullets: [
          {
            en: "Few = almost none (negative). Opposed to many.",
            bn: "Few = প্রায় কেউই নেই (নেতিবাচক)। Many-এর বিপরীত।",
          },
          {
            en: "A few = some, not none (affirmative).",
            bn: "A few = কিছু আছে, শূন্য নয় (ইতিবাচক)।",
          },
          {
            en: "The few = not many, but all that exist.",
            bn: "The few = বেশি নয়, কিন্তু যা আছে তার সবটা।",
          },
          {
            en: "Not a few = a fairly large number (many).",
            bn: "Not a few = কম নয়, অর্থাৎ যথেষ্ট/অনেক।",
          },
        ],
        examples: [
          { ok: true, en: "I have few friends here.", bn: "এখানে আমার প্রায় কোনো বন্ধু নেই।" },
          { ok: true, en: "I have a few friends here.", bn: "এখানে আমার কিছু বন্ধু আছে।" },
          {
            ok: true,
            en: "The few friends I had left me.",
            bn: "যে অল্প কয়েকজন বন্ধু ছিল, তারা সবাই ছেড়ে গেল।",
          },
          { ok: true, en: "He gave me not a few cakes.", bn: "সে আমাকে অনেক কেক দিল।" },
          { ok: true, en: "Few men are free from faults.", bn: "খুব কম মানুষই দোষমুক্ত।" },
        ],
      },
      {
        id: "little",
        article: "§309",
        titleEn: "Little, a little, the little, not a little",
        titleBn: "Little, a little, the little, not a little",
        ideaBn:
          "Little পরিমাণ বোঝায় (অগণনীয়)। গঠন exactly few-এর মতো, শুধু countable নয় uncountable।",
        ideaEn: "Little measures quantity (uncountable). Same four-way contrast as few.",
        bullets: [
          { en: "Little = almost nothing (negative).", bn: "Little = প্রায় কিছুই নেই।" },
          { en: "A little = a small quantity (affirmative).", bn: "A little = অল্প পরিমাণ আছে।" },
          {
            en: "The little = not much, but all that there is.",
            bn: "The little = বেশি নয়, কিন্তু যা আছে তার সব।",
          },
          { en: "Not a little = much.", bn: "Not a little = কম নয়, অর্থাৎ অনেক।" },
        ],
        examples: [
          { ok: true, en: "He has little time to spare.", bn: "তার ফাঁকা সময় প্রায় নেই।" },
          { ok: true, en: "I want a little sugar.", bn: "আমার অল্প চিনি চাই।" },
          { ok: true, en: "The little hope I had is gone.", bn: "যেটুকু আশা ছিল, তাও শেষ।" },
          { ok: true, en: "He gave me not a little trouble.", bn: "সে আমাকে অনেক ঝামেলা দিল।" },
        ],
      },
      {
        id: "few-vs-little",
        article: "§310",
        titleEn: "Few vs little; less vs fewer",
        titleBn: "Few বনাম little; less বনাম fewer",
        ideaBn:
          "Few = গণনীয় সংখ্যা (বহুবচন)। Little = অগণনীয় পরিমাণ (একবচন)। তুলনায় fewer সংখ্যার জন্য, less পরিমাণের জন্য।",
        ideaEn:
          "Few + plural countable. Little + singular uncountable. Fewer for number; less for quantity.",
        bullets: [
          { en: "He has few friends. / He has little strength.", bn: "বন্ধু = সংখ্যা; শক্তি = পরিমাণ।" },
          {
            en: "Safe exam rule: less for quantity, fewer for number.",
            bn: "পরীক্ষায় নিরাপদ নিয়ম: পরিমাণে less, সংখ্যায় fewer।",
          },
          {
            en: "Lesser is only an attributive adjective meaning ‘less important’.",
            bn: "Lesser শুধু বিশেষণ: কম গুরুত্বপূর্ণ — lesser evil, lesser powers।",
          },
        ],
        examples: [
          { ok: true, en: "There were no fewer than fifty men there." },
          { ok: false, en: "There were no less than fifty members present.", note: "সংখ্যার জন্য fewer চাই।" },
          { ok: true, en: "I want less sugar / fewer books." },
          { ok: true, en: "This is of lesser importance." },
        ],
        exceptions: [
          {
            titleEn: "The less-for-number debate",
            titleBn: "সংখ্যায় less — ব্যতিক্রম ও বিতর্ক",
            bodyEn:
              "Pocket Oxford once allowed ‘Less than 20 of them remain’ and ‘Had less men killed’. F. T. Wood allows less for number when a numeral follows. Clarendon Press later preferred fewer than. Chambers marks fewer-sense as archaic/colloquial. For students: keep less = quantity.",
            bodyBn:
              "কিছু অভিধান সংখ্যায় less মেনেছে, কিন্তু পরীক্ষা ও পাঠ্যবই fewer চায়। ছাত্রদের জন্য: সংখ্যায় fewer, পরিমাণে less — এটাই নিরাপদ।",
            examples: [
              { ok: true, en: "Less than a litre of milk is left." },
              { ok: true, en: "Fewer than twenty students remain." },
              { ok: false, en: "Less students came today." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "quantity-words",
    index: 2,
    article: "§311–314",
    titleEn: "Lots, people, sometime, whole/all",
    titleBn: "Lots, people, sometime, whole ও all",
    summaryBn: "অনানুষ্ঠানিক পরিমাণ, জাতি-জন, সময়ের বানান, এবং whole/all-এর article নিয়ম।",
    minutes: 10,
    sections: [
      {
        id: "lots",
        article: "§311",
        titleEn: "A lot of / lots of",
        titleBn: "A lot of, lots of",
        ideaBn:
          "দুটোই অনানুষ্ঠানিক। আনুষ্ঠানিক লেখায় a great deal of / a large number of / much / many ব্যবহার করুন। ক্রিয়া lot-এর রূপ দেখে নয়, মূল কর্তা দেখে বসে।",
        ideaEn:
          "Informal. Verb agrees with the real noun, not with lot/lots.",
        bullets: [
          {
            en: "A lot of time is needed. Lots of patience is needed.",
            bn: "অগণনীয় একবচন কর্তা → ক্রিয়া একবচন।",
          },
          {
            en: "A lot of my friends want to emigrate.",
            bn: "বহুবচন কর্তা → ক্রিয়া বহুবচন।",
          },
          {
            en: "Time = countable only when it means ‘occasion’: lots of times.",
            bn: "Time =বার/অবসর হলে গণনীয়: lots of times; স্থিতিকাল হলে lots of time।",
          },
        ],
        examples: [
          { ok: true, en: "There is a lot of water in the bucket." },
          { ok: true, en: "I have seen him lots of times." },
          { ok: false, en: "A lot of time are needed to learn a language." },
        ],
      },
      {
        id: "people",
        article: "§312",
        titleEn: "People, a people, peoples",
        titleBn: "People, a people, peoples",
        ideaBn: "Article ও বহুবচন জাতিকে ব্যক্তি থেকে আলাদা করে।",
        ideaEn: "Bare people = persons (plural). A people = a nation. Peoples = nations.",
        bullets: [
          { en: "People say you are wrong.", bn: "জনসাধারণ বলে — সবসময় বহুবচন।" },
          { en: "The Americans are a rich people.", bn: "A people = একটি জাতি।" },
          { en: "Different peoples have different customs.", bn: "Peoples = একাধিক জাতি।" },
        ],
        examples: [
          { ok: true, en: "People are suffering from malaria." },
          { ok: true, en: "The people of Japan are very active." },
          { ok: false, en: "Peoples say you are wrong." },
        ],
      },
      {
        id: "sometime",
        article: "§313",
        titleEn: "Sometime, some time, sometimes",
        titleBn: "Sometime, some time, sometimes",
        ideaBn: "এক শব্দ না দুই শব্দ — অর্থ পুরো বদলে যায়।",
        ideaEn: "Spelling is the whole grammar here.",
        bullets: [
          { en: "Sometime = formerly (সাবেক).", bn: "He was sometime Principal of this college." },
          {
            en: "Some time = for a period, or at an unspecified time.",
            bn: "কিছুক্ষণ ধরে, অথবা কোনো এক সময়ে।",
          },
          { en: "Sometimes = occasionally (মাঝে মাঝে).", bn: "Sometimes he acts thus." },
        ],
        examples: [
          { ok: true, en: "He was sometime a pleader there." },
          { ok: true, en: "We must have rest for some time." },
          { ok: true, en: "You may expect me some time today." },
          { ok: true, en: "He sometimes behaves rudely." },
        ],
      },
      {
        id: "whole-all",
        article: "§314",
        titleEn: "Whole, the whole, all",
        titleBn: "Whole, the whole, all",
        ideaBn: "Proper noun-এর আগে whole একা বসে না। Common noun-এ whole-এর আগে the চায়।",
        ideaEn: "Proper nouns take all or the whole of — never bare whole.",
        bullets: [
          {
            en: "All India / The whole of India — not Whole India.",
            bn: "Proper noun: all বা the whole of।",
          },
          {
            en: "All the mangoes (plural) or the whole mango (one entire fruit).",
            bn: "Give me all mango ভুল।",
          },
          {
            en: "All + the + singular uncountable for quantity: All the milk was spilt.",
            bn: "পরিমাণে all the milk চলে।",
          },
        ],
        examples: [
          { ok: true, en: "All (or The whole of) India mourns his death." },
          { ok: false, en: "Whole India mourns his death." },
          { ok: true, en: "Give me the whole mango / all the mangoes." },
          { ok: true, en: "He has spent all of his wealth." },
        ],
      },
    ],
  },
  {
    id: "much-very-too",
    index: 3,
    article: "§315–316",
    titleEn: "Much, many, very, too, enough",
    titleBn: "Much, many, very, too, enough",
    summaryBn: "গণনা বনাম পরিমাণ, তুলনামূলক মাত্রা, এবং too-এর ‘সীমা ছাড়িয়ে যাওয়া’ অর্থ।",
    minutes: 12,
    sections: [
      {
        id: "much-many",
        article: "§315",
        titleEn: "Much vs many",
        titleBn: "Much ও many",
        ideaBn: "Much = পরিমাণ + একবচন। Many = সংখ্যা + বহুবচন।",
        ideaEn: "Much water, much money; many rupees, many men.",
        bullets: [
          { en: "Much + uncountable singular.", bn: "much time, much bloodshed, much information।" },
          { en: "Many + countable plural.", bn: "many rumours, many families।" },
        ],
        examples: [
          { ok: true, en: "He has much money / many rupees." },
          { ok: false, en: "He has many money." },
        ],
      },
      {
        id: "very-too",
        article: "§316",
        titleEn: "Much, very, too, enough",
        titleBn: "Much, very, too, enough",
        ideaBn:
          "Very = ইতিবাচক মাত্রা। Too = সীমা ছাড়িয়ে গেছে (প্রায়ই to + infinitive সহ)। Enough = ঠিক যতটা দরকার। Much তুলনামূলক ও past participle-এ।",
        ideaEn:
          "Very with positives and present participles; much with comparatives and verbal past participles; too = excess; enough = sufficiency.",
        bullets: [
          { en: "very happy / much happier; very clever / much more intelligent.", bn: "Positive-এ very, comparative-এ much।" },
          {
            en: "very charming (present participle as adjective); much charmed (past participle still verbal).",
            bn: "Present participle-এ very; verbal past participle-এ much।",
          },
          {
            en: "Too is not a stylish very. He was too late for school = school was over.",
            bn: "Too = এত বেশি যে কাজটা আর সম্ভব নয়।",
          },
          {
            en: "Enough is the opposite of too: strong enough to walk.",
            bn: "Enough = যতটা দরকার ঠিক ততটা।",
          },
        ],
        examples: [
          { ok: true, en: "I am very happy. He is much happier than before." },
          { ok: true, en: "He was very late (he still attended) / too late (school over)." },
          { ok: true, en: "This room is hot enough for me / too hot for me." },
          { ok: false, en: "I am too pleased to meet you.", note: "এখানে very চাই।" },
          { ok: false, en: "His health is too good.", note: "সীমা ছাড়ানোর অর্থ নেই — very good।" },
        ],
        exceptions: [
          {
            titleEn: "Very + certain past participles",
            titleBn: "কিছু past participle এখন বিশেষণ",
            bodyEn:
              "When pleased, tired, delighted, contented have lost verbal force, very is now accepted (Vallins, Gowers).",
            bodyBn:
              "pleased, tired, delighted, contented এখন প্রায় বিশেষণ — very pleased চলে, much pleased-ও চলে।",
            examples: [
              { ok: true, en: "I am very tired / very pleased to see you." },
              { ok: true, en: "He was much (also very) pleased to see me." },
            ],
          },
          {
            titleEn: "Only too / none too",
            titleBn: "Only too এবং none too",
            bodyEn:
              "only too glad = very glad (not the reverse). none too pleasant = far from pleasant.",
            bodyBn:
              "only too glad = খুবই খুশি (নেতিবাচক নয়)। none too pleasant = মোটেই সুখকর নয়।",
          },
        ],
      },
    ],
  },
  {
    id: "any-some-each",
    index: 4,
    article: "§317–320",
    titleEn: "Any, some, anyone, many a, each, every",
    titleBn: "Any, some, anyone, many a, each, every",
    summaryBn: "অস্বীকৃতি/অনুরোধ, যৌগিক সর্বনাম, এবং দুই বনাম দুইয়ের বেশি।",
    minutes: 11,
    sections: [
      {
        id: "any-some",
        article: "§317",
        titleEn: "Any vs some",
        titleBn: "Any ও some",
        ideaBn: "নেতিবাচক বাক্যে any; ইতিবাচকে some। প্রশ্নে any ভালো, কিন্তু অনুরোধমূলক প্রশ্নে some।",
        ideaEn: "Any in negatives; some in affirmatives; any preferred in genuine questions; some in requests.",
        bullets: [
          { en: "He did not want any man. He gave me some books.", bn: "না-বাক্যে any, হ্যাঁ-বাক্যে some।" },
          { en: "Is there any man there?", bn: "সত্যিকারের প্রশ্নে any।" },
          { en: "Will you give me some water? = Please give me some water.", bn: "অনুরোধ-প্রশ্নে some।" },
          {
            en: "As demonstratives both work; any is more indefinite: Any road will lead you there.",
            bn: "নির্দেশক হিসেবে any আরও অনির্দিষ্ট।",
          },
        ],
        examples: [
          { ok: true, en: "I do not see any birds on the tree." },
          { ok: true, en: "Will you kindly give me some milk?" },
          { ok: true, en: "You may follow any course you like." },
        ],
      },
      {
        id: "anyone",
        article: "§318",
        titleEn: "Anyone vs any one",
        titleBn: "Anyone ও any one",
        ideaBn: "এক শব্দ = মানুষ। দুই শব্দ = জিনিস বা সংখ্যাগত ‘একজন/একটা’।",
        ideaEn: "Anyone (persons) is singular. Any one (two words) for things or numerical one.",
        bullets: [
          { en: "Has anyone a pen he can lend me? — not they, in strict grammar.", bn: "নির্দিষ্ট ব্যক্তিতে singular।" },
          { en: "Which dress? — any one would do.", bn: "জিনিসে দুই শব্দ।" },
        ],
        examples: [
          { ok: true, en: "Anyone who wants to enter may send his name." },
          { ok: true, en: "Any one of you will be suitable for the job." },
        ],
        exceptions: [
          {
            titleEn: "Generic anyone + they",
            titleBn: "সাধারণ অর্থে they চলে",
            bodyEn:
              "When anyone means all without exception, a plural is allowable: Anyone can enter, can’t they? (Wood). Strict school grammar still likes he.",
            bodyBn:
              "Anyone = সবাই, ব্যতিক্রম ছাড়া — তখন they শুনতে স্বাভাবিক। পরীক্ষায় প্রায়ই singular চান।",
          },
        ],
      },
      {
        id: "many-a",
        article: "§319",
        titleEn: "A many / many a",
        titleBn: "A many ও many a",
        ideaBn: "Many a = many one — singular noun ও singular verb। A great many + plural।",
        ideaEn: "many a book (singular); a great many books (plural). Never many a books.",
        bullets: [
          { en: "I have many a book of this kind.", bn: "many a + একবচন বিশেষ্য।" },
          { en: "I have a great many books of this kind.", bn: "a great many + বহুবচন।" },
          { en: "Many a man wants to get rich quickly.", bn: "wants — একবচন ক্রিয়া।" },
        ],
        examples: [
          { ok: true, en: "Many a man wants to get rich quickly." },
          { ok: false, en: "I have many a books." },
        ],
      },
      {
        id: "each-every",
        article: "§320",
        titleEn: "Each vs every",
        titleBn: "Each ও every",
        ideaBn: "Each = দুই বা ততোধিকের প্রত্যেক। Every = কেবল দুইয়ের বেশি।",
        ideaEn: "Each of two or more; every only of more than two.",
        bullets: [
          { en: "Each of the two books. The boys were fined one rupee each.", bn: "দুইজনেও each।" },
          { en: "Every boy out of ten has got a prize.", bn: "দুইয়ের বেশি — every।" },
        ],
        examples: [
          { ok: true, en: "I gave a book to each of the two boys." },
          { ok: true, en: "I gave a book to every one of the five boys." },
          { ok: false, en: "Every of the two books is torn." },
        ],
      },
    ],
  },
  {
    id: "order-degree",
    index: 5,
    article: "§321–327",
    titleEn: "Later, last, farther, elder, lesser, outer",
    titleBn: "Later–latter, last–latest, farther, elder, lesser, outer",
    summaryBn: "সময় বনাম ক্রম, দূরত্ব বনাম অতিরিক্ত, পরিবারের বয়স, এবং অবস্থান বনাম মাত্রা।",
    minutes: 12,
    sections: [
      {
        id: "later-last",
        article: "§321",
        titleEn: "Later, latest, latter, last",
        titleBn: "Later, latest, latter, last",
        ideaBn: "Later/latest = সময়। Latter/last = ক্রম/পর্যায়।",
        ideaEn: "Later/latest oppose sooner/earliest (time). Latter/last oppose former/first (order).",
        bullets: [
          { en: "This is a later / the latest edition.", bn: "সময়ের সংস্করণ।" },
          { en: "Virtue and vice… the former happiness, the latter misery.", bn: "দুটির দ্বিতীয়টি = latter।" },
          { en: "He came last of all.", bn: "ক্রমে শেষ।" },
        ],
        examples: [
          { ok: true, en: "He came later than my brother." },
          { ok: true, en: "I want the former, not the latter." },
          { ok: true, en: "What is the latest news?" },
          { ok: true, en: "He is the last boy in the class." },
        ],
      },
      {
        id: "farther",
        article: "§322–324",
        titleEn: "Farther/further; first/foremost; next/nearest",
        titleBn: "Farther, first, next",
        ideaBn: "দূরত্বে farther; সাধারণত further-ই চলে। First = ক্রম; foremost = সবচেয়ে বিশিষ্ট। Next = ক্রম; nearest = দূরত্ব।",
        ideaEn: "Farther for literal distance; further otherwise (and more popular). First = order; foremost = most conspicuous. Next = sequence; nearest = distance.",
        bullets: [
          { en: "He has gone farther than his brother. I have made further progress.", bn: "মাইল = farther; অতিরিক্ত = further।" },
          { en: "He stood first; he is the foremost player.", bn: "অবস্থান বনাম খ্যাতি।" },
          { en: "the next house (in the row) / the nearest house (when the storm began).", bn: "পরেরটা বনাম সবচেয়ে কাছেরটা।" },
        ],
        examples: [
          { ok: true, en: "Further examples are unnecessary." },
          { ok: true, en: "Thus far and no farther." },
          { ok: true, en: "We ran for shelter to the nearest house." },
          { ok: true, en: "The chairman took up the next item." },
        ],
      },
      {
        id: "elder-lesser-outer",
        article: "§325–327",
        titleEn: "Older/elder; less/lesser; outer/utter",
        titleBn: "Older–elder, less–lesser, outer–utter",
        ideaBn: "Elder শুধু একই পরিবারের মানুষ। Lesser শুধু attributive ‘কম গুরুত্বপূর্ণ’। Outer = বাইরের অবস্থান; utter = সম্পূর্ণ মাত্রা।",
        ideaEn: "Elder/eldest: same family only. Lesser: attributive ‘less important’. Outer = position; utter = degree.",
        bullets: [
          { en: "He is older than I. This tree is older than that.", bn: "Older সব প্রাণী ও বস্তুতে।" },
          { en: "He is my elder brother. She is my eldest sister.", bn: "একই পরিবার — elder/eldest।" },
          { en: "My age is less than yours. This is of lesser importance.", bn: "less তুলনা; lesser গুরুত্ব।" },
          { en: "the outer circle / utter ruin", bn: "অবস্থান বনাম সম্পূর্ণতা।" },
        ],
        examples: [
          { ok: true, en: "He is older than I / my elder brother." },
          { ok: false, en: "This tree is elder than that." },
          { ok: true, en: "Draw a tangent to the outer circle." },
          { ok: true, en: "This will bring on utter ruin." },
        ],
      },
    ],
  },
  {
    id: "adverb-pairs",
    index: 6,
    article: "§328–336",
    titleEn: "Hard, beside, presently, except, ago…",
    titleBn: "Hard/hardly, beside, presently, except, ago",
    summaryBn: "দেখতে-ভাই কথার জোড়া — অর্থ প্রায় উল্টো। প্রতিটি জোড়া আলাদা করে মুখস্থ নয়, যুক্তিতে বাঁধুন।",
    minutes: 14,
    sections: [
      {
        id: "late-hard-short",
        article: "§328–330",
        titleEn: "Late/lately; hard/hardly; short/shortly",
        titleBn: "Late, hard, short",
        ideaBn: "-ly যোগে নতুন অর্থ জন্মায়; hard-এর স্বাভাবিক ক্রিয়াবিশেষণ প্রায়ই hard, hardly নয়।",
        ideaEn: "late = after time; lately = recently. hard = diligently; hardly = scarcely. shortly now = soon.",
        bullets: [
          { en: "He came late. I heard the news lately.", bn: "বিলম্বে বনাম সম্প্রতি।" },
          { en: "He works hard. He hardly works.", bn: "কঠোর পরিশ্রম বনাম কদাচিৎ কাজ।", },
          { en: "MEU: except ‘scarcely’, the idiomatic adverb of hard is hard.", bn: "harshly/with difficulty অর্থে hardly অভিধানে আছে, কিন্তু আধুনিক ইডিয়ম hard চায়।" },
          { en: "shortly = soon (modern). in short = briefly.", bn: "Give in short an account… He will come shortly।" },
        ],
        examples: [
          { ok: true, en: "He worked so hard that his health broke down." },
          { ok: true, en: "I can hardly bear the strain." },
          { ok: true, en: "Write in short what you have to say." },
          { ok: true, en: "He will come here shortly." },
        ],
      },
      {
        id: "beside-presently",
        article: "§331–334",
        titleEn: "Beside/besides; presently; after all; at last",
        titleBn: "Beside, presently, after all",
        ideaBn: "Beside = পাশে/অপ্রাসঙ্গিক। Besides = অতিরিক্ত। After all কখনো স্বাভাবিক পরিণতির অর্থ দেয় না।",
        ideaEn: "beside = next to / wide of; besides = in addition. At present = now; presently = soon (AmE also now). After all = in spite of opposition, not ‘finally’.",
        bullets: [
          { en: "Sit beside me. Your remark is beside the point.", bn: "পাশে; অপ্রাসঙ্গিক।" },
          { en: "Besides money, he gave me a house. It is late; besides, I am tired.", bn: "preposition ও adverb দুই-ই।" },
          { en: "I am busy at present. He will come presently.", bn: "বর্তমান বনাম শীঘ্রই।" },
          { en: "Your enemy is after all an honest person.", bn: "যা-ই বলুন, তবুও।" },
          { en: "at last = after delay; at least = minimum; at length = after a long time / fully.", bn: "তিনটি at-phrase আলাদা।" },
        ],
        examples: [
          { ok: true, en: "There is none besides you to help me." },
          { ok: false, en: "He served thirty years and after all retired on a pension.", note: "finally / at last চাই।" },
          { ok: true, en: "I have found you out at last." },
          { ok: true, en: "This will cost me at least fifty rupees." },
        ],
        exceptions: [
          {
            titleEn: "American presently",
            titleBn: "আমেরিকান presently",
            bodyEn: "In modern American English presently is also used for ‘at the present time’.",
            bodyBn: "মার্কিন ইংরেজিতে presently = এখন-ও চলে। ভারতীয় পরীক্ষায় presently = শীঘ্রই রাখুন।",
          },
        ],
      },
      {
        id: "ago-except",
        article: "§335–336",
        titleEn: "Ago vs before; except family",
        titleBn: "Ago–before এবং except",
        ideaBn: "Ago = এখন থেকে পেছনে। Before = অতীতের কোনো নির্দিষ্ট সময়ের আগে। Except-এর চার রূপ আলাদা।",
        ideaEn: "Ago measures back from now; before from a past reference point. except / excepting / except for / except that are not interchangeable.",
        bullets: [
          { en: "I saw him two months ago. I had seen him two months before.", bn: "ago = now থেকে; before = সেই অতীত থেকে।" },
          { en: "Conjunction before takes a present tense even if the main verb is future.", bn: "The crops will die before the rains fall — shall fall নয়। when/after-ও তাই।" },
          { en: "except = not including. All except Ram went.", bn: "বাদ দিয়ে।" },
          { en: "excepting is used in the negative: not excepting = including.", bn: "All, not excepting the king, are mortal।" },
          { en: "except for = exception to a general statement (excluded item is of a different kind).", bn: "essay is good except for some mistakes।" },
          { en: "except that = apart from the fact that + clause.", bn: "except that she is careless।" },
        ],
        examples: [
          { ok: true, en: "He came here long ago / He had come here long before." },
          { ok: true, en: "When I see him, I shall give him the message." },
          { ok: false, en: "When I shall see him, I shall give him the message." },
          { ok: true, en: "All men, not excepting the king, are mortal." },
        ],
      },
    ],
  },
  {
    id: "prepositions-place",
    index: 7,
    article: "§337–340, §342",
    titleEn: "By/with, at/in, into, among, from/of",
    titleBn: "By, with, at, in, into, among, from, of",
    summaryBn: "কারক, স্থান, গতি এবং উপকরণ — কোন preposition কোন সম্পর্ক দেখায়।",
    minutes: 14,
    sections: [
      {
        id: "by-with",
        article: "§337",
        titleEn: "By vs with",
        titleBn: "By ও with",
        ideaBn: "By = কর্তা/doer। With = যন্ত্র/উপকরণ।",
        ideaEn: "By marks the agent; with marks the instrument.",
        bullets: [
          { en: "The work was done by me with my own hands.", bn: "কর্তা by, হাত with।" },
          { en: "bitten by a snake; struck by lightning; cut with a razor.", bn: "জীব/প্রকৃতি প্রায় by; হাতিয়ার with।" },
          { en: "He died by his own hand.", bn: "নিজের হাতে — by his own hand।" },
        ],
        examples: [
          { ok: true, en: "He was digging the earth with a spade when he was bitten by a snake." },
          { ok: true, en: "He struck me with a stick. He was struck by lightning." },
          { ok: true, en: "The planet may be seen with the naked eye." },
        ],
      },
      {
        id: "at-in-into",
        article: "§338–339",
        titleEn: "At, in, into",
        titleBn: "At, in, into",
        ideaBn: "সময়ের বিন্দুতে at, বিস্তারে in। ছোট স্থানে at, বড় স্থানে in। বিশ্রাম in, গতি/পরিবর্তন into।",
        ideaEn: "Time-point at; time-period in. Small place at; large place in. Rest in; motion/change into.",
        bullets: [
          { en: "at 4 p.m., at dawn, at noon, at Christmas; in an hour, in September, in the morning.", bn: "মুহূর্ত at, কাল in।" },
          { en: "lives in Kolkata / in the USA; lives at Jangipur in Murshidabad.", bn: "শহর-দেশ in, ছোট স্থান at।" },
          { en: "in a flat; at 12 Chowringhee Road; in Rash Behari Avenue; at the G.P.O.; in the Accounts Department.", bn: "ধরন in, নির্দিষ্ট ভবন at, রাস্তার নাম in।" },
          { en: "milk in the pot; ran into the hall; ice melted into water.", bn: "স্থিতি in, প্রবেশ/রূপান্তর into।" },
        ],
        examples: [
          { ok: true, en: "I shall see you at 3 o’clock in the afternoon." },
          { ok: true, en: "He lives at 25 Rash Behari Avenue in Kolkata." },
          { ok: true, en: "The Ganga flows into the Bay of Bengal." },
          { ok: false, en: "There was nobody into the room." },
        ],
      },
      {
        id: "among-from",
        article: "§340, §342",
        titleEn: "Among/between; from/of",
        titleBn: "Among, between, from, of",
        ideaBn: "সাধারণত দুইয়ে between, দুইয়ের বেশিতে among। From = রূপ বদলে যায়; of = উপকরণ অক্ষত।",
        ideaEn: "Between typically two; among more than two. From when composition is lost; of when material remains.",
        bullets: [
          { en: "divided between these two boys / among four brothers.", bn: "দুই between, চার among।" },
          { en: "Wine is made from grapes. The table is made of wood.", bn: "আঙুর আর থাকে না; কাঠ থাকে।" },
          { en: "The doll is made of plastic. Threads are made from cotton.", bn: "প্লাস্টিক চেহারা রাখে; তুলা সুতায় রূপ বদলায়।" },
        ],
        examples: [
          { ok: true, en: "There is a river between the opposing armies." },
          { ok: true, en: "Steel is made from iron ores. The bridge is made of steel." },
        ],
        exceptions: [
          {
            titleEn: "Between with more than two",
            titleBn: "দুইয়ের বেশিতেও between",
            bodyEn:
              "For mutual relation, between may apply to more than two: a treaty between six nations; difference between New York, London and Paris (MEU). Among = surrounded by / associated with more than two, followed by plural or collective.",
            bodyBn:
              "পারস্পরিক সম্পর্ক/চুক্তি/তুলনায় দুইয়ের বেশি হলেও between সঠিক। Among = ঘিরে থাকা/মিশে থাকা।",
            examples: [
              { ok: true, en: "A treaty between six nations." },
              { ok: true, en: "Among his books are many late editions." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "prepositions-time",
    index: 8,
    article: "§341, §343–345",
    titleEn: "Since, for, after, in, until, unless",
    titleBn: "Since, for, after, in, within, until, unless",
    summaryBn: "বিন্দু না বিস্তার, অতীত না ভবিষ্যৎ, শেষে না মধ্যে — সময়ের preposition এখানেই ভুল হয়।",
    minutes: 16,
    sections: [
      {
        id: "since-for",
        article: "§341",
        titleEn: "Since, for, from, ago",
        titleBn: "Since, for, from, ago",
        ideaBn: "For = সময়ের বিস্তার। Since/from = বিন্দু। Since শুধু অতীত বিন্দু + perfect। From সব tense-এ। Ago = এখন থেকে পেছনে (past indefinite)।",
        ideaEn: "For = duration. Since = past point continuing to now (perfect). From = starting point in any tense. Ago = back from now.",
        bullets: [
          { en: "He has been here for a week / for a long time.", bn: "কতক্ষণ = for।" },
          { en: "He has been here since Monday last / since 1920.", bn: "কখন থেকে (অতীত) = since।" },
          { en: "He began English from the age of ten. He begins from today. He will begin from tomorrow.", bn: "From অতীত-বর্তমান-ভবিষ্যৎ সব বিন্দুতে।" },
          { en: "As adverbs, since and ago often coincide: long ago = long since. Not ‘for a long time’.", bn: "long since ≠ for a long time।" },
          { en: "It was ten years ago that he died — not since. Ago + that, never ago since.", bn: "Ago since tautology।" },
        ],
        examples: [
          { ok: true, en: "I have been ill since yesterday / since you saw me last." },
          { ok: true, en: "I saw him two months since. (prefer ago in modern English)" },
          { ok: true, en: "It is ten years since he died. He died ten years ago." },
          { ok: false, en: "It is five years ago since he came here." },
          { ok: true, en: "He last came here five years ago. / It is five years since he came here last." },
        ],
        exceptions: [
          {
            titleEn: "Since as adverb / preposition / conjunction",
            titleBn: "Since-এর তিন পদ",
            bodyEn:
              "Adverb (from then till now) follows present/past perfect: have known him ever since. Adverb = ago follows past indefinite: He died long since. Preposition + past point + perfect: ill since January. Conjunction = from the time when; clause in past indefinite, main verb present or present perfect.",
            bodyBn:
              "ক্রিয়াবিশেষণ, পদান্বয়ী অব্যয়, সংযোজক — তিন অর্থে since। Perfect-এর সাথে ‘তখন থেকে এখন পর্যন্ত’; past indefinite-এর সাথে ‘আগে’ (আধুনিক লেখক ago পছন্দ করেন)।",
          },
        ],
      },
      {
        id: "for-before-after",
        article: "§343–344",
        titleEn: "For/before; after/in/within/at/by",
        titleBn: "For, before, after, in, within, at, by",
        ideaBn: "নেতিবাচক ভবিষ্যৎ বিস্তারে for। বিন্দুতে before। অতীত বিস্তারে after, ভবিষ্যৎ বিস্তারে in। In = শেষে; within = শেষের আগে। At = নির্দিষ্ট মুহূর্ত। By = তার পরে নয়।",
        ideaEn:
          "For (negatives) = future duration. Before = a point, any tense. After = past duration; in = future duration. In = at the end of; within = before the end of. At = exact point. By = not later than.",
        bullets: [
          { en: "The moon will not rise for five days. The moon will not rise before midnight.", bn: "বিস্তার for, বিন্দু before।" },
          { en: "He will come in a few days. He died after a few days.", bn: "ভবিষ্যৎ in, অতীত after। উল্টোটি ভুল।" },
          { en: "After + a point works in all tenses: after 5 o’clock.", bn: "বিন্দুতে after সব tense।" },
          { en: "I shall go in a week = after the week has ended. Within a week = before it has ended.", bn: "শেষে in, মধ্যে within।" },
          { en: "You must be back by 5 o’clock.", bn: "শেষ সময়সীমা — আগে হলেও চলে, পরে নয়।" },
          {
            en: "same time: in = same duration; at = same clock hour; within = each inside that duration; by = same deadline, perhaps staggered.",
            bn: "in/at/within/by the same time — চার অর্থ।",
          },
        ],
        examples: [
          { ok: false, en: "He will come after a few days." },
          { ok: true, en: "He will come in a few days." },
          { ok: false, en: "He died in a few days." },
          { ok: true, en: "He died after a few days." },
          { ok: true, en: "Applications should be received by 25th April." },
        ],
      },
      {
        id: "until-unless",
        article: "§345",
        titleEn: "Until and unless",
        titleBn: "Until ও unless",
        ideaBn: "দুটোতেই নেতিবাচক অর্থ আছে। সাথে আবার not দিয়ে হ্যাঁ বোঝানো যায় না।",
        ideaEn: "Both already mean ‘up to the time that not’ / ‘if not’. Do not add not to make an affirmative.",
        bullets: [
          { en: "Wait here until I come — not until I do not come.", bn: "যতক্ষণ না আসি।" },
          { en: "Unless you work hard, you will fail. Or: If you do not work hard…", bn: "Unless you do not work hard ভুল।" },
        ],
        examples: [
          { ok: true, en: "Wait here until I come." },
          { ok: false, en: "Unless you do not work hard, you will fail." },
        ],
      },
    ],
  },
  {
    id: "sticky-phrases",
    index: 9,
    article: "§346",
    titleEn: "But, as, due to, doubt, prevent…",
    titleBn: "But, as, due to এবং জটিল বাক্যাংশ",
    summaryBn: "একই শব্দের একাধিক পদ, এবং পরীক্ষায় ধরা পড়া idiom।",
    minutes: 18,
    sections: [
      {
        id: "but-as",
        article: "§346 a–c",
        titleEn: "But; as; as best",
        titleBn: "But, as, as best",
        ideaBn: "But preposition/adverb/relative/conjunction/verb/noun হতে পারে। As-ও তাই। Best-এর সাথে as…as তুলনা হয় না।",
        ideaEn: "But has six lives. As has four. Superlative best cannot take as…as comparison.",
        bullets: [
          { en: "Prep except: All had left but me. I cannot but go. But for you… He is all but ruined.", bn: "বাদে / না করে উপায় নেই / যদি তুমি না থাকতে।" },
          { en: "Adverb only: He is but a child.", bn: "কেবল।" },
          { en: "Relative = who not: none but wishes to be happy.", bn: "যে না চায় এমন কেউ নেই।" },
          { en: "Subordinating: It never rains but it pours.", bn: "যদি না / except that।" },
          { en: "Co-ordinating: poor but honest.", bn: "কিন্তু।" },
          { en: "He worked as best he could — not as best as he could.", bn: "as best as ভুল, কারণ best superlative।" },
        ],
        examples: [
          { ok: true, en: "There is none but wishes to be happy." },
          { ok: true, en: "Poor as he is, he can do this. As he is poor he cannot." },
          { ok: false, en: "I shall help you as best as I can." },
          { ok: true, en: "I shall help you as best I can." },
        ],
        exceptions: [
          {
            titleEn: "All but he had fled",
            titleBn: "But-এর পরে nominative",
            bodyEn:
              "Confusion of prep (but him) and conjunction (but he had not). OED defends nominative. Usage allows nominative when a verb follows immediately: Everyone but she knew; all but he had fled (Wood).",
            bodyBn:
              "কঠোর ব্যাকরণে but + object (him)। কিন্তু ঠিক পরে ক্রিয়া থাকলে nominative শোনা যায় এবং usage মেনে নেয়।",
          },
        ],
      },
      {
        id: "due-doubt-other",
        article: "§346 d–g",
        titleEn: "Due to, doubt, other, write (to) me",
        titleBn: "Due to, doubt, other, write",
        ideaBn: "Due বিশেষণ — কোনো noun-কে qualify করতে হবে। Doubt-এর পর whether/that নিয়ম আলাদা।",
        ideaEn: "due to is adjectival, unlike owing to. Positive doubt takes whether; negative/interrogative takes that.",
        bullets: [
          { en: "His illness was due to exposure. Not: I could not come due to illness.", bn: "due কোন noun-কে qualify করছে?" },
          { en: "Never begin a school sentence with Due to.", bn: "পাঠ্য নিয়ম: বাক্য due to দিয়ে শুরু নয়।" },
          { en: "I doubt whether Easter will be fine. I do not doubt that… Who doubts that…?", bn: "ইতিবাচক whether, নেতিবাচক/প্রশ্ন that।" },
          { en: "doubt about/as to + noun or gerund, not a that-clause.", bn: "There is a doubt as to his sanity — not about whether…" },
          { en: "other than (usual). COD allows none other but. Nesfield: other besides = in addition.", bn: "সাধারণত other than।" },
          { en: "I wrote you a letter / I wrote to you. Not I wrote you (except business letters).", bn: "indirect object তখনই যখন directও আছে।" },
        ],
        examples: [
          { ok: true, en: "The accident was due to his carelessness." },
          { ok: false, en: "I could not come due to illness." },
          { ok: true, en: "I have no friend other than you." },
        ],
        exceptions: [
          {
            titleEn: "Due to as a preposition — the losing battle",
            titleBn: "Due to preposition হয়ে উঠছে",
            bodyEn:
              "Fowler thought idiom might beat the ‘illiterates’. Gowers notes the construction is in The Times and on the BBC. School still marks sentence-initial due to wrong.",
            bodyBn:
              "সংবাদপত্রে due to preposition হিসেবে ঢুকেছে। পরীক্ষায় এখনও owing to / because of লিখুন, এবং due to noun-এর সাথে রাখুন।",
          },
        ],
      },
      {
        id: "prevent-worth-ie",
        article: "§346 h–n",
        titleEn: "Prevent, worth while, i.e./e.g./viz., provided, numbers, time, fractions",
        titleBn: "Prevent, worth, সংক্ষেপ, সংখ্যা, সময়",
        ideaBn: "Gerund-এ possessive; worth-এর object চাই; i.e. উদাহরণ নয়; provided = শর্তের দাবি; সংখ্যা ও ঘড়ির ইডিয়ম আলাদা।",
        ideaEn: "Modern prevent: X from doing / prevent argument / prevent his coming. worth needs an object; while supplies it only when nothing else does.",
        bullets: [
          { en: "I prevented him from troubling you. I shall try to prevent his coming.", bn: "from + gerund, অথবা possessive + gerund।" },
          { en: "That was worth doing — not worth while doing (doing already the object).", bn: "অন্য object থাকলে while বাড়তি।" },
          { en: "It is worth while doing the extra work. (it dummy; doing is the real subject)", bn: "dummy it হলে while দরকার।" },
          { en: "i.e. = that is; e.g. = for example; viz. = namely.", bn: "তিনটি গুলিয়ে ফেলবেন না।" },
          { en: "provided = a stipulation demanded by the speaker of the main clause.", bn: "আমি যাব provided আবহাওয়া ভালো — শর্ত আমার।" },
          { en: "2,512 = two thousand, five hundred and twelve. and before the last word.", bn: "শেষ শব্দের আগে and।" },
          { en: "100 = a hundred; 106 = one/a hundred and six.", bn: "একা hundred-এ a; সাথে অন্য সংখ্যা থাকলে one বেশি চলে।" },
          { en: "o’clock only for the whole hour; never with a.m./p.m. Minutes past/to; after 30, count to the next hour.", bn: "7.10 o’clock ভুল। 4 o’clock a.m. ভুল।" },
          { en: "Prefer a foot and a half to one and a half feet in literary English. After one and a half: plural noun, singular verb: one and a half lemons was enough.", bn: "মিশ্র ভগ্নাংশে পুরোনো রূপ ভালো: a foot and a half।" },
        ],
        examples: [
          { ok: true, en: "His decision will prevent argument." },
          { ok: true, en: "I shall prevent the letter being sent. (possessive not possible)" },
          { ok: true, en: "Admission by tickets only, i.e. only ticket-holders may enter." },
          { ok: true, en: "I shall go provided the weather is fine." },
          { ok: false, en: "Wake me at ten past seven o’clock." },
          { ok: true, en: "He gets up at 4 o’clock in the morning." },
        ],
        exceptions: [
          {
            titleEn: "Prevent him coming",
            titleBn: "Prevent him coming — চলিত",
            bodyEn:
              "Prevent him coming is common colloquially and marked ‘popular’ in OED. Grammar demands the possessive before a gerund, except where a possessive is impossible.",
            bodyBn:
              "কথ্য ইংরেজিতে prevent him coming শোনা যায়। লিখিত ব্যাকরণ চায় prevent his coming বা prevent him from coming।",
          },
          {
            titleEn: "Provided that in business English",
            titleBn: "Provided that",
            bodyEn: "Provided that is common in colloquial and business English; the textbook prefers not to use it in careful writing.",
            bodyBn: "ব্যবসায়িক চিঠিতে provided that চলে; রচনায় if/on condition that নিরাপদ।",
          },
        ],
      },
    ],
  },
  {
    id: "parts-of-speech",
    index: 10,
    article: "§347",
    titleEn: "Same words as different parts of speech",
    titleBn: "একই শব্দ, নানা পদ",
    summaryBn: "About থেকে wrong — প্রতিটি শব্দকে বাক্যে কাজ দেখে চিনুন, মুখস্থ তালিকা নয়।",
    minutes: 20,
    sections: [
      {
        id: "pos-method",
        article: "§347",
        titleEn: "How to test the part of speech",
        titleBn: "পদ কীভাবে চেনা যায়",
        ideaBn:
          "শব্দের নাম নয়, বাক্যে তার কাজই পদ নির্ধারণ করে। একই বানানের শব্দ noun, adjective, verb, adverb, preposition, conjunction — সব হতে পারে।",
        ideaEn:
          "Function in the sentence decides the class. The word list (About…Wrong) is a drill, not a separate grammar.",
        bullets: [
          { en: "Ask: is it naming, describing, acting, modifying a verb, linking a noun, or joining clauses?", bn: "নাম, বৈশিষ্ট্য, কাজ, ক্রিয়া-রূপ, সম্পর্ক, না সংযোগ?" },
          { en: "But me no buts — first but is a verb, second a noun.", bn: "প্রসঙ্গই পদ।" },
          { en: "COD/POD sometimes disagree (all, both, either, few, then). Learn both labels; prefer function.", bn: "অভিধানভেদে পদ আলাদা হতে পারে।" },
        ],
        examples: [
          { ok: true, en: "He is walking about. (adv)  What do you know about him? (prep)" },
          { ok: true, en: "Look above. (adv)  He is above meanness. (prep)  the above passage (adj)" },
          { ok: true, en: "I have lost my all. (noun)  All men must die. (adj)  He came all on a sudden. (adv)" },
        ],
        exceptions: [
          {
            titleEn: "Dictionary disagreements",
            titleBn: "অভিধানের মতভেদ",
            bodyEn:
              "COD treats all as adj/n/adv and still exemplifies all of us as a noun. POD/COD do not treat few as a pronoun (call it a noun). Both/either/neither in ‘both he and Ram’ are labelled adv or conj depending on the dictionary. MEU condemns adverbial that (‘I will go that far’) as unliterary. POD treats then in ‘If you are ill, then…’ as adverb; COD as conjunction.",
            bodyBn:
              "পরীক্ষায় function লিখুন: all of us = pronoun/noun-like; few know = pronoun use; both…and = correlative conjunction; that far এড়িয়ে so far লিখুন।",
          },
        ],
      },
    ],
  },
];

export const chapterById = Object.fromEntries(chapters.map((c) => [c.id, c]));
