
function selectRandomQuote(quotes) {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  return  selectedQuote.quote;

}
const quotes = [
  {
    quote:
      "Word on the streets of Sanctuary is that Tyrael has secretly been practicing interpretive dance. The Archangel of Justice has got moves you won't believe! #DancingTyrael",
  },
  {
    quote:
      "Rumor has it that Deckard Cain has been seen hitting the gym lately, preparing for his new career as a Barbarian. Stay awhile and lift, my friends! #RippedCain",
  },
  {
    quote:
      "Griswold, the Blacksmith, has started a singing career and is releasing his debut album 'Anvil of Love.' Will his hammering voice win the hearts of fans? #BlacksmithCrooner",
  },
  {
    quote:
      "Leah has taken up stand-up comedy, sharing hilarious tales of her adventures in Sanctuary. Who knew the Nephalem had such a knack for making people laugh? #ComedyNephalem",
  },
  {
    quote:
      "Whispers in Tristram say that Diablo has developed an unhealthy obsession with collecting adorable kittens. The Lord of Terror's softer side revealed! #KittenLord",
  },
  {
    quote:
      "A secret romance between Adria and Haedrig? The Enchantress and the Blacksmith forging more than just weapons? Love is in the air in New Tristram! #ForbiddenLove",
  },
  {
    quote:
      "Zoltun Kulle has opened a magical bakery, enchanting bread to taste like the most delectable treats. Try his 'Summoned Scones' for a truly enchanting breakfast! #MagicalBakery",
  },
  {
    quote:
      "Mephisto has taken up knitting, creating cursed scarves that make you itch uncontrollably. Stay warm, but at what cost? #KnittingMephisto",
  },
  {
    quote:
      "Rakanoth, the Lord of Despair, has started a motivational blog, spreading despair to inspire others. You'll never feel motivated again! #DespairMotivation",
  },
  {
    quote:
      "Breaking news: The Cow King has been elected mayor of the Fields of Misery. Expect udderly fantastic policies and plenty of moovements! #MooMayor",
  },
  {
    quote:
      "Did you hear? Tyrael has taken up knitting to make fluffy angelic scarves. He'll keep you warm while dispensing justice! #KnittingJustice",
  },
  {
    quote:
      "Word on the streets is that Covetous Shen has started a 'Chaos Cleanup' service. Need help tidying up your demonic mess? Shen's got you covered! #TidyTreasures",
  },
  {
    quote:
      "Leah has discovered a hidden talent for rap music. Get ready for her new album 'Nephalem Flow' with sick rhymes straight from the Burning Hells! #RappingNephalem",
  },
  {
    quote:
      "Malthael has been seen redecorating the Pandemonium Fortress with delicate floral arrangements. The Angel of Death has a surprisingly gentle side! #FloralFortress",
  },
  {
    quote:
      "Whispers suggest that Kadala has launched a fashion line called 'Random Couture.' You'll never know what you'll get, but it'll be legendary! #FashionGamble",
  },
  {
    quote:
      "Deckard Cain's latest obsession? Collecting rare monster toenail clippings for his 'Cain's Curiosities' collection. It's toe-tally weird! #MonstrousCollectibles",
  },
  {
    quote:
      "Griswold has started a reality show called 'Blacksmith Wars,' where contestants forge weapons while battling giant demons. Let the sparks fly! #ForgingChampions",
  },
  {
    quote:
      "Adria has taken up breakdancing in her spare time, incorporating dark magic into her electrifying moves. The Mistress of Dance! #BreakdancingWitch",
  },
  {
    quote:
      "Zoltun Kulle has invented a potion that turns everyone into chickens. It's cluckin' madness in Sanctuary! #PotionofFowlPlay",
  },
  {
    quote:
      "Whispers from Tristram claim that the Skeleton King has become a life coach, helping lost souls find their true purpose. Unlife goals, anyone? #UndeadMotivation",
  },
  {
    quote:
      "Rumor has it that Tyrael has started a celestial karaoke night in Heaven. Who knew angels had such heavenly voices? #AngelVibes",
  },
  {
    quote:
      "Leah's new YouTube channel 'Leah's Lethal Lessons' features tutorials on vanquishing demons while keeping your hair flawless. #DemonSlayerGlam",
  },
  {
    quote:
      "Deckard Cain's secret hobby? Knitting sweaters for Hell's minions. Stay warm and stylish, even in the fiery depths! #FashionableInferno",
  },
  {
    quote:
      "Mephisto has started a book club in the depths of Hell. The Lord of Hatred loves a good page-turner! #DevilishReads",
  },
  {
    quote:
      "Adria has discovered the ancient art of demon yoga. Find your inner darkness and achieve inner peace while summoning demonic energies! #YogicDarkness",
  },
  {
    quote:
      "Rakanoth has joined a local theater group, showcasing his dramatic monologues about despair. He's a real 'dark' star! #TheaterofDespair",
  },
  {
    quote:
      "Breaking news: Diablo has started a matchmaking service called 'Hellish Hearts.' Love is in the air, along with fire and brimstone! #FieryRomance",
  },
  {
    quote:
      "Whispers from Tristram say that Covetous Shen has become a professional yo-yo master, performing gravity-defying tricks with enchanted yo-yos. #YoYoEnchanter",
  },
  {
    quote:
      "Leah's latest venture? Hosting a reality show called 'Sanctuary's Got Talent,' where demons showcase their hidden talents. The infernal variety show you never knew you needed! #InfernalTalent",
  },
  {
    quote:
      "Rumor has it that Tyrael has become a fashion icon, launching his own line of celestial armor. Halo couture, anyone? #AngelFashion",
  },
  {
    quote:
      "Griswold has opened a hair salon in New Tristram, offering 'Sword-Trimming' services. A sharp look is guaranteed! #StylishSmith",
  },
  {
    quote:
      "Whispers suggest that Adria has developed a spell to make her voice sound like a chorus of angels. It's the ultimate enchanting karaoke experience! #EnchantingDivas",
  },
  {
    quote:
      "Zoltun Kulle's latest invention? A magical bubble bath that grants temporary invulnerability. Soak your worries away! #BubbleofImmunity",
  },
  {
    quote:
      "Breaking news: Lyndon the Scoundrel has opened a matchmaking service called 'Rogue Romance.' He's always got an eye for love... and shiny things! #LoveScoundrel",
  },
  {
    quote:
      "Malthael has taken up gardening, nurturing a garden of shadowy roses. The Angel of Death has a green thumb! #GardeningReaper",
  },
  {
    quote:
      "Rakanoth, the Lord of Despair, has started a motivational podcast called 'Despair to Dare.' Find inspiration in the depths of darkness! #MotivationFromAbyss",
  },
  {
    quote:
      "Whispers say that Diablo has been binge-watching 'Nephalem's Got Talent' and has a secret crush on the show's host, Leah. Will love bloom in the inferno? #DiabloHeartsLeah",
  },
  {
    quote:
      "Breaking news: Covetous Shen has unveiled a line of 'Mystic Makeovers.' Transform your appearance with enchantments and surprise your friends! #MagicalMakeovers",
  },
  {
    quote:
      "Tyrael has become a life coach, offering motivational speeches to demons to help them unleash their inner potential. Believe in yourself, even if you're evil! #HeavenlyMotivation",
  },
  {
    quote:
      "Leah's latest venture? Starting her own line of magical smoothies made from the essence of slain demons. Get your daily dose of infernal nutrition! #SmoothieSorceress",
  },
  {
    quote:
      "Whispers suggest that Zoltun Kulle has opened a magical escape room in Caldeum. Can you solve the riddles and escape before he traps you forever? #KulleEscape",
  },
  {
    quote:
      "Griswold has launched a new line of enchanted armor called 'Griswold's Glamour.' Look stylish while slaying demons! #FashionableProtection",
  },
];

const selectedQuote = selectRandomQuote(quotes);
console.log(selectedQuote);

module.exports = {
  selectRandomQuote,
  quotes
};