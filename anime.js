const animeDatabase = [
  { title: "Attack on Titan", genres: ["Action", "Dark", "Fantasy"] },
  { title: "Demon Slayer", genres: ["Action", "Fantasy"] },
  { title: "Jujutsu Kaisen", genres: ["Action", "Dark", "Fantasy"] },
  { title: "Spy × Family", genres: ["Comedy", "Action", "Family"] },
  { title: "Death Note", genres: ["Psychological", "Mystery", "Dark"] },
  { title: "Chainsaw Man", genres: ["Action", "Dark", "Horror"] },
  { title: "One Punch Man", genres: ["Action", "Comedy", "Superhero"] },
  { title: "My Hero Academia", genres: ["Action", "Superhero", "School"] },
  { title: "Hunter × Hunter", genres: ["Action", "Adventure", "Fantasy"] },
  { title: "Mob Psycho 100", genres: ["Action", "Comedy", "Supernatural"] },
  { title: "Tokyo Ghoul", genres: ["Horror", "Action", "Dark"] },
  { title: "Solo Leveling", genres: ["Action", "Fantasy"] },
  { title: "Dandadan", genres: ["Action", "Comedy", "Supernatural"] },
  { title: "Wind Breaker", genres: ["Action", "School"] },
  { title: "Fire Force", genres: ["Action", "Supernatural"] },
  { title: "Dr. Stone", genres: ["Adventure", "Sci-Fi"] },
  { title: "Hell's Paradise", genres: ["Action", "Dark", "Fantasy"] },
  { title: "Tokyo Revengers", genres: ["Action", "School", "Time Travel"] },
  { title: "Akame ga Kill!", genres: ["Action", "Dark", "Fantasy"] },
  { title: "Bleach", genres: ["Action", "Fantasy", "Supernatural"] },
  { title: "Black Clover", genres: ["Action", "Fantasy"] },
  { title: "Fairy Tail", genres: ["Action", "Adventure", "Fantasy"] },
  { title: "Fullmetal Alchemist: Brotherhood", genres: ["Action", "Adventure", "Fantasy"] },
  { title: "One Piece", genres: ["Action", "Adventure", "Fantasy"] },
  { title: "Naruto", genres: ["Action", "Adventure", "Fantasy"] },
  { title: "Dragon Ball Z", genres: ["Action", "Fantasy"] },
  { title: "Code Geass", genres: ["Mecha", "Action", "Psychological"] },
  { title: "86 Eighty-Six", genres: ["Mecha", "Sci-Fi", "Military"] },
  { title: "Cyberpunk: Edgerunners", genres: ["Sci-Fi", "Action", "Dark"] },
  { title: "Steins;Gate", genres: ["Sci-Fi", "Time Travel", "Psychological"] },
  { title: "Psycho-Pass", genres: ["Sci-Fi", "Psychological", "Mystery"] },
  { title: "Cowboy Bebop", genres: ["Sci-Fi", "Action", "Adventure"] },
  { title: "Re:Zero", genres: ["Isekai", "Fantasy", "Psychological"] },
  { title: "KonoSuba", genres: ["Isekai", "Comedy", "Fantasy"] },
  { title: "Overlord", genres: ["Isekai", "Fantasy", "Dark"] },
  { title: "Mushoku Tensei", genres: ["Isekai", "Fantasy", "Adventure"] },
  { title: "Sword Art Online", genres: ["Isekai", "Action", "Fantasy"] },
  { title: "That Time I Got Reincarnated as a Slime", genres: ["Isekai", "Fantasy", "Action"] },
  { title: "Frieren: Beyond Journey's End", genres: ["Fantasy", "Adventure", "Drama"] },
  { title: "Made in Abyss", genres: ["Fantasy", "Adventure", "Dark"] },
  { title: "Vinland Saga", genres: ["Adventure", "Action", "Historical"] },
  { title: "The Promised Neverland", genres: ["Psychological", "Mystery", "Dark"] },
  { title: "Erased", genres: ["Mystery", "Psychological", "Time Travel"] },
  { title: "Monster", genres: ["Psychological", "Mystery", "Thriller"] },
  { title: "Another", genres: ["Horror", "Mystery", "Psychological"] },
  { title: "Parasyte: The Maxim", genres: ["Horror", "Action", "Sci-Fi"] },
  { title: "Hellsing Ultimate", genres: ["Horror", "Action", "Dark"] },
  { title: "Summertime Rendering", genres: ["Mystery", "Supernatural", "Time Travel"] },
  { title: "Your Name", genres: ["Romance", "Fantasy", "Drama"] },
  { title: "A Silent Voice", genres: ["Romance", "Drama", "School"] },
  { title: "Horimiya", genres: ["Romance", "Comedy", "School"] },
  { title: "My Dress-Up Darling", genres: ["Romance", "Comedy", "School"] },
  { title: "Kaguya-sama: Love Is War", genres: ["Romance", "Comedy", "School"] },
  { title: "Your Lie in April", genres: ["Romance", "Drama", "Music"] },
  { title: "Haikyuu!!", genres: ["Sports", "School", "Drama"] },
  { title: "Blue Lock", genres: ["Sports", "Action", "School"] },
  { title: "Kuroko's Basketball", genres: ["Sports", "School", "Action"] },
  { title: "Assassination Classroom", genres: ["School", "Action", "Comedy"] },
  { title: "The Disastrous Life of Saiki K.", genres: ["Comedy", "Supernatural", "School"] },
  { title: "Gintama", genres: ["Comedy", "Action", "Adventure"] },
  { title: "Blood Lad", genres: ["Action", "Comedy", "Supernatural"] },
  { title: "Undead Unluck", genres: ["Action", "Comedy", "Supernatural"] },
  { title: "Ninja Kamui", genres: ["Action", "Sci-Fi"] },
  { title: "Devil May Cry", genres: ["Action", "Dark", "Supernatural"] },
  { title: "Chained Soldier", genres: ["Action", "Fantasy", "Supernatural"] },
  { title: "High Card", genres: ["Action", "Fantasy"] },
  { title: "Darwin's Game", genres: ["Action", "Dark", "Sci-Fi"] },
  { title: "Kingdoms of Ruin", genres: ["Action", "Dark", "Fantasy"] },
  { title: "Gachiakuta", genres: ["Action", "Dark", "Fantasy"] },
  { title: "Tougen Anki", genres: ["Action", "Dark", "Supernatural"] },
  { title: "Lord of Mysteries", genres: ["Fantasy", "Mystery", "Dark"] },
  { title: "Ranger Reject", genres: ["Action", "Superhero", "School"] },
  { title: "Lazarus", genres: ["Sci-Fi", "Action"] },
    { title: "Juni Taisen: Zodiac War", genres: ["Action", "Dark", "Psychological"] },
  { title: "The God of High School", genres: ["Action", "Fantasy", "School"] },
  { title: "God Eater", genres: ["Action", "Fantasy", "Sci-Fi"] },
  { title: "Kabaneri of the Iron Fortress", genres: ["Action", "Horror", "Fantasy"] },
  { title: "Seraph of the End", genres: ["Action", "Dark", "Fantasy"] },
  { title: "Ajin: Demi-Human", genres: ["Action", "Horror", "Supernatural"] },
  { title: "Inuyashiki", genres: ["Action", "Sci-Fi", "Dark"] },
  { title: "Akudama Drive", genres: ["Action", "Sci-Fi", "Dark"] },
  { title: "Basilisk", genres: ["Action", "Dark", "Romance"] },
  { title: "K", genres: ["Action", "Supernatural", "Mystery"] },
  { title: "Kekkai Sensen", genres: ["Action", "Fantasy", "Supernatural"] },
  { title: "Bungo Stray Dogs 2nd Season", genres: ["Action", "Mystery", "Supernatural"] },
  { title: "Lycoris Recoil", genres: ["Action", "Comedy", "Drama"] },
  { title: "The Case Study of Vanitas", genres: ["Action", "Fantasy", "Supernatural"] },
  { title: "Undead Girl Murder Farce", genres: ["Mystery", "Supernatural", "Fantasy"] },
  { title: "Wind Breaker Season 2", genres: ["Action", "School"] },

  // FANTASY
  { title: "Black Butler", genres: ["Fantasy", "Mystery", "Dark"] },
  { title: "The Case Study of Vanitas", genres: ["Fantasy", "Supernatural", "Mystery"] },
  { title: "Seraph of the End", genres: ["Fantasy", "Action", "Dark"] },
  { title: "The Seven Deadly Sins", genres: ["Fantasy", "Action", "Adventure"] },
  { title: "Magi: The Labyrinth of Magic", genres: ["Fantasy", "Adventure", "Action"] },
  { title: "Magi: The Kingdom of Magic", genres: ["Fantasy", "Adventure", "Action"] },
  { title: "Noragami Aragoto", genres: ["Fantasy", "Action", "Supernatural"] },
  { title: "Rage of Bahamut: Genesis", genres: ["Fantasy", "Adventure", "Action"] },
  { title: "The Faraway Paladin", genres: ["Fantasy", "Adventure", "Drama"] },
  { title: "Record of Grancrest War", genres: ["Fantasy", "Action", "Romance"] },
  { title: "Ragna Crimson", genres: ["Fantasy", "Action", "Dark"] },
  { title: "The Witch and the Beast", genres: ["Fantasy", "Action", "Mystery"] },
  { title: "Wistoria: Wand and Sword", genres: ["Fantasy", "Action", "School"] },
  { title: "The Ossan Newbie Adventurer", genres: ["Fantasy", "Action", "Comedy"] },

  // ISEKAI
  { title: "The Rising of the Shield Hero", genres: ["Isekai", "Action", "Fantasy"] },
  { title: "The Eminence in Shadow", genres: ["Isekai", "Action", "Comedy"] },
  { title: "Cautious Hero: The Hero Is Overpowered but Overly Cautious", genres: ["Isekai", "Comedy", "Fantasy"] },
  { title: "Arifureta: From Commonplace to World's Strongest", genres: ["Isekai", "Action", "Fantasy"] },
  { title: "So I'm a Spider, So What?", genres: ["Isekai", "Fantasy", "Comedy"] },
  { title: "The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat", genres: ["Isekai", "Action", "Fantasy"] },
  { title: "The Saint's Magic Power Is Omnipotent", genres: ["Isekai", "Fantasy", "Romance"] },
  { title: "The Wrong Way to Use Healing Magic", genres: ["Isekai", "Fantasy", "Comedy"] },
  { title: "Campfire Cooking in Another World with My Absurd Skill", genres: ["Isekai", "Fantasy", "Comedy"] },
  { title: "Uncle from Another World", genres: ["Isekai", "Comedy", "Fantasy"] },
  { title: "The Executioner and Her Way of Life", genres: ["Isekai", "Fantasy", "Action"] },
  { title: "The 8th Son? Are You Kidding Me?", genres: ["Isekai", "Fantasy", "Adventure"] },

  // DARK / PSYCHOLOGICAL
  { title: "Tomodachi Game", genres: ["Psychological", "Thriller", "Mystery"] },
  { title: "Classroom of the Elite", genres: ["Psychological", "School", "Mystery"] },
  { title: "Talentless Nana", genres: ["Psychological", "Mystery", "School"] },
  { title: "Happy Sugar Life", genres: ["Psychological", "Horror", "Dark"] },
  { title: "School-Live!", genres: ["Psychological", "Horror", "School"] },
  { title: "Shiki", genres: ["Horror", "Mystery", "Dark"] },
  { title: "The Future Diary", genres: ["Psychological", "Action", "Dark"] },
  { title: "Heavenly Delusion", genres: ["Mystery", "Sci-Fi", "Dark"] },
  { title: "Terror in Resonance", genres: ["Psychological", "Mystery", "Thriller"] },
  { title: "Perfect Blue", genres: ["Psychological", "Horror", "Mystery"] },
  { title: "Paprika", genres: ["Psychological", "Sci-Fi", "Mystery"] },

  // COMEDY / SLICE OF LIFE
  { title: "Komi Can't Communicate", genres: ["Comedy", "Romance", "School"] },
  { title: "The Disastrous Life of Saiki K.", genres: ["Comedy", "School", "Supernatural"] },
  { title: "Nichijou", genres: ["Comedy", "Slice of Life", "School"] },
  { title: "Hinamatsuri", genres: ["Comedy", "Supernatural", "Slice of Life"] },
  { title: "Grand Blue", genres: ["Comedy", "Slice of Life", "College"] },
  { title: "Kaguya-sama: Love Is War", genres: ["Comedy", "Romance", "School"] },
  { title: "Monthly Girls' Nozaki-kun", genres: ["Comedy", "Romance", "School"] },
  { title: "Asobi Asobase", genres: ["Comedy", "School", "Slice of Life"] },
  { title: "Daily Lives of High School Boys", genres: ["Comedy", "School", "Slice of Life"] },
  { title: "Haven't You Heard? I'm Sakamoto", genres: ["Comedy", "School"] },
  { title: "The Way of the Househusband", genres: ["Comedy", "Slice of Life"] },
  { title: "K-On!", genres: ["Comedy", "Music", "Slice of Life"] },
  { title: "Bocchi the Rock!", genres: ["Comedy", "Music", "Slice of Life"] },
  
  // MORE ACTION / ADVENTURE
  { title: "Black Lagoon", genres: ["Action", "Adventure", "Crime"] },
  { title: "Samurai Champloo", genres: ["Action", "Adventure", "Historical"] },
  { title: "Dororo", genres: ["Action", "Dark", "Historical"] },
  { title: "Claymore", genres: ["Action", "Dark", "Fantasy"] },
  { title: "Darker than Black", genres: ["Action", "Mystery", "Supernatural"] },
  { title: "Gangsta.", genres: ["Action", "Crime", "Drama"] },
  { title: "Baccano!", genres: ["Action", "Mystery", "Supernatural"] },
  { title: "Durarara!!", genres: ["Action", "Mystery", "Supernatural"] },
  { title: "Samurai 7", genres: ["Action", "Adventure", "Mecha"] },
  { title: "Kill la Kill", genres: ["Action", "Comedy", "School"] },
  { title: "Soul Eater", genres: ["Action", "Fantasy", "Supernatural"] },
  { title: "Blue Exorcist", genres: ["Action", "Fantasy", "Supernatural"] },
  { title: "Noragami", genres: ["Action", "Fantasy", "Supernatural"] },
  { title: "Seraph of the End: Battle in Nagoya", genres: ["Action", "Dark", "Fantasy"] },
  { title: "Moriarty the Patriot", genres: ["Mystery", "Psychological", "Historical"] },
  { title: "Plunderer", genres: ["Action", "Fantasy", "Romance"] },
  // ROMANCE / COMEDY / SLICE OF LIFE
  { title: "Toradora!", genres: ["Romance", "Comedy", "School"] },
  { title: "Golden Time", genres: ["Romance", "Drama", "College"] },
  { title: "Oregairu", genres: ["Romance", "School", "Psychological"] },
  { title: "Rascal Does Not Dream of Bunny Girl Senpai", genres: ["Romance", "Supernatural", "School"] },
  { title: "The Quintessential Quintuplets", genres: ["Romance", "Comedy", "School"] },
  { title: "Rent-a-Girlfriend", genres: ["Romance", "Comedy", "College"] },
  { title: "My Love Story with Yamada-kun at Lv999", genres: ["Romance", "Comedy"] },
  { title: "Tomo-chan Is a Girl!", genres: ["Romance", "Comedy", "School"] },
  { title: "The Dangers in My Heart", genres: ["Romance", "Comedy", "School"] },
  { title: "Insomniacs After School", genres: ["Romance", "Drama", "Slice of Life"] },
  { title: "Skip and Loafer", genres: ["Romance", "Comedy", "Slice of Life"] },
  { title: "Kubo Won't Let Me Be Invisible", genres: ["Romance", "Comedy", "School"] },
  { title: "Shikimori's Not Just a Cutie", genres: ["Romance", "Comedy", "School"] },
  { title: "Tada Never Falls in Love", genres: ["Romance", "Comedy", "School"] },
  { title: "Wotakoi: Love Is Hard for Otaku", genres: ["Romance", "Comedy", "Slice of Life"] },
  { title: "Lovely★Complex", genres: ["Romance", "Comedy", "School"] },
  { title: "Kokoro Connect", genres: ["Romance", "Supernatural", "School"] },
  { title: "Tsuki ga Kirei", genres: ["Romance", "Drama", "School"] },
  { title: "Orange", genres: ["Romance", "Drama", "School"] },
  { title: "Ao Haru Ride", genres: ["Romance", "Drama", "School"] },
    // SCI-FI / MECHA
  { title: "Neon Genesis Evangelion", genres: ["Mecha", "Psychological", "Sci-Fi"] },
  { title: "Gurren Lagann", genres: ["Mecha", "Action", "Sci-Fi"] },
  { title: "Darling in the Franxx", genres: ["Mecha", "Romance", "Sci-Fi"] },
  { title: "Mobile Suit Gundam", genres: ["Mecha", "Sci-Fi", "Military"] },
  { title: "Mobile Suit Gundam: Iron-Blooded Orphans", genres: ["Mecha", "Action", "Military"] },
  { title: "86 Eighty-Six", genres: ["Mecha", "Sci-Fi", "Military"] },
  { title: "Aldnoah.Zero", genres: ["Mecha", "Action", "Sci-Fi"] },
  { title: "Knights of Sidonia", genres: ["Mecha", "Sci-Fi", "Action"] },
  { title: "Eureka Seven", genres: ["Mecha", "Romance", "Sci-Fi"] },
  { title: "Astra Lost in Space", genres: ["Sci-Fi", "Adventure", "Mystery"] },
  { title: "Vivy: Fluorite Eye's Song", genres: ["Sci-Fi", "Action", "Music"] },
  { title: "86: Eighty-Six Part 2", genres: ["Mecha", "Sci-Fi", "Military"] },
  { title: "Ghost in the Shell", genres: ["Sci-Fi", "Action", "Psychological"] },
  { title: "Ghost in the Shell: Stand Alone Complex", genres: ["Sci-Fi", "Action", "Mystery"] },
  { title: "Akira", genres: ["Sci-Fi", "Action", "Psychological"] },
  { title: "Trigun", genres: ["Sci-Fi", "Action", "Adventure"] },
  { title: "Trigun Stampede", genres: ["Sci-Fi", "Action", "Adventure"] },
  { title: "Space Dandy", genres: ["Sci-Fi", "Comedy", "Adventure"] },
  { title: "Planetes", genres: ["Sci-Fi", "Drama", "Space"] },
  { title: "ID: INVADED", genres: ["Sci-Fi", "Mystery", "Psychological"] },
    // HORROR / SUPERNATURAL
  { title: "Devilman Crybaby", genres: ["Horror", "Supernatural", "Dark"] },
  { title: "Paranoia Agent", genres: ["Psychological", "Horror", "Mystery"] },
  { title: "Mononoke", genres: ["Horror", "Mystery", "Supernatural"] },
  { title: "Ghost Hunt", genres: ["Horror", "Mystery", "Supernatural"] },
  { title: "Corpse Party: Tortured Souls", genres: ["Horror", "Dark", "Supernatural"] },
  { title: "Shiki", genres: ["Horror", "Mystery", "Supernatural"] },
  { title: "Yamishibai: Japanese Ghost Stories", genres: ["Horror", "Supernatural"] },
  { title: "Mieruko-chan", genres: ["Horror", "Comedy", "Supernatural"] },
  { title: "Dusk Maiden of Amnesia", genres: ["Horror", "Romance", "Supernatural"] },
  { title: "Tasogare Otome x Amnesia", genres: ["Horror", "Romance", "Supernatural"] },
  { title: "Dark Gathering", genres: ["Horror", "Supernatural", "Mystery"] },
  { title: "Ghost Stories", genres: ["Horror", "Comedy", "Supernatural"] },
  { title: "Shadows House", genres: ["Mystery", "Supernatural", "Horror"] },
  { title: "The Summer Hikaru Died", genres: ["Horror", "Mystery", "Supernatural"] },
  { title: "Uzumaki", genres: ["Horror", "Psychological", "Supernatural"] },
  { title: "Housing Complex C", genres: ["Horror", "Mystery", "Supernatural"] },
  { title: "The Junji Ito Collection", genres: ["Horror", "Psychological", "Supernatural"] },
  { title: "Junji Ito Maniac: Japanese Tales of the Macabre", genres: ["Horror", "Psychological", "Supernatural"] },
  { title: "Kokkoku", genres: ["Supernatural", "Mystery", "Psychological"] },
  { title: "Occultic;Nine", genres: ["Supernatural", "Mystery", "Psychological"] },
    // MORE ISEKAI / FANTASY
  { title: "Log Horizon", genres: ["Isekai", "Fantasy", "Adventure"] },
  { title: "No Game No Life", genres: ["Isekai", "Fantasy", "Comedy"] },
  { title: "Gate", genres: ["Isekai", "Fantasy", "Military"] },
  { title: "Grimgar: Ashes and Illusions", genres: ["Isekai", "Fantasy", "Drama"] },
  { title: "Problem Children Are Coming from Another World, Aren't They?", genres: ["Isekai", "Fantasy", "Comedy"] },
  { title: "The Devil Is a Part-Timer!", genres: ["Isekai", "Comedy", "Fantasy"] },
  { title: "How Not to Summon a Demon Lord", genres: ["Isekai", "Fantasy", "Comedy"] },
  { title: "Death March to the Parallel World Rhapsody", genres: ["Isekai", "Fantasy", "Adventure"] },
  { title: "In Another World with My Smartphone", genres: ["Isekai", "Fantasy", "Comedy"] },
  { title: "The Master of Ragnarok & Blesser of Einherjar", genres: ["Isekai", "Fantasy", "Romance"] },
  { title: "Wise Man's Grandchild", genres: ["Isekai", "Fantasy", "Romance"] },
  { title: "The 7th Time Loop", genres: ["Fantasy", "Romance", "Drama"] },
  { title: "Why Raeliana Ended Up at the Duke's Mansion", genres: ["Fantasy", "Romance", "Drama"] },
  { title: "The Ancient Magus' Bride", genres: ["Fantasy", "Romance", "Supernatural"] },
  { title: "Ranking of Kings", genres: ["Fantasy", "Adventure", "Drama"] },
  { title: "Delicious in Dungeon", genres: ["Fantasy", "Adventure", "Comedy"] },
  { title: "The Wrong Way to Use Healing Magic", genres: ["Isekai", "Fantasy", "Comedy"] },
  { title: "The Unwanted Undead Adventurer", genres: ["Fantasy", "Adventure", "Action"] },
  { title: "The Strongest Magician in the Demon Lord's Army Was a Human", genres: ["Fantasy", "Action", "Adventure"] },
  { title: "The Beginning After the End", genres: ["Isekai", "Fantasy", "Adventure"] },
    // MYSTERY / PSYCHOLOGICAL
  { title: "Death Parade", genres: ["Psychological", "Mystery", "Drama"] },
  { title: "Odd Taxi", genres: ["Mystery", "Psychological", "Drama"] },
  { title: "Link Click", genres: ["Mystery", "Supernatural", "Drama"] },
  { title: "Summertime Rendering", genres: ["Mystery", "Supernatural", "Time Travel"] },
  { title: "Moriarty the Patriot", genres: ["Mystery", "Psychological", "Historical"] },
  { title: "The Kubikiri Cycle", genres: ["Mystery", "Psychological"] },
  { title: "Gosick", genres: ["Mystery", "Romance", "Historical"] },
  { title: "Hyouka", genres: ["Mystery", "School", "Slice of Life"] },
  { title: "The Perfect Insider", genres: ["Mystery", "Psychological", "Thriller"] },
  { title: "ID: INVADED", genres: ["Mystery", "Psychological", "Sci-Fi"] },
  { title: "Pluto", genres: ["Mystery", "Sci-Fi", "Psychological"] },
  { title: "Undead Girl Murder Farce", genres: ["Mystery", "Supernatural", "Fantasy"] },
  { title: "Kamonohashi Ron's Forbidden Deductions", genres: ["Mystery", "Comedy", "Crime"] },
  { title: "The Apothecary Diaries", genres: ["Mystery", "Historical", "Drama"] },
  { title: "The Case Files of Jeweler Richard", genres: ["Mystery", "Drama", "Slice of Life"] },
  { title: "Beautiful Bones: Sakurako's Investigation", genres: ["Mystery", "Drama"] },
  { title: "In/Spectre", genres: ["Mystery", "Supernatural", "Romance"] },
  { title: "Summoned to Another World for a Second Time", genres: ["Isekai", "Fantasy", "Action"] },
  { title: "The Millionaire Detective Balance: UNLIMITED", genres: ["Mystery", "Crime", "Comedy"] },
  { title: "Ron Kamonohashi's Forbidden Deductions Season 2", genres: ["Mystery", "Comedy", "Crime"] },
    // SPORTS / COMPETITION
  { title: "Blue Box", genres: ["Sports", "Romance", "School"] },
  { title: "Ao Ashi", genres: ["Sports", "School", "Drama"] },
  { title: "Days", genres: ["Sports", "School", "Drama"] },
  { title: "The Knight in the Area", genres: ["Sports", "School", "Drama"] },
  { title: "Yowamushi Pedal", genres: ["Sports", "School", "Drama"] },
  { title: "Free!", genres: ["Sports", "School", "Slice of Life"] },
  { title: "Run with the Wind", genres: ["Sports", "Drama", "College"] },
  { title: "Megalo Box", genres: ["Sports", "Action", "Drama"] },
  { title: "Hajime no Ippo", genres: ["Sports", "Action", "Comedy"] },
  { title: "Slam Dunk", genres: ["Sports", "Comedy", "School"] },
  { title: "Ace of Diamond", genres: ["Sports", "School", "Drama"] },
  { title: "Initial D", genres: ["Sports", "Action", "Drama"] },
  { title: "Sk8 the Infinity", genres: ["Sports", "Action", "Comedy"] },
  { title: "Inazuma Eleven", genres: ["Sports", "Action", "School"] },
  { title: "Captain Tsubasa", genres: ["Sports", "Action", "School"] },
  { title: "Ping Pong the Animation", genres: ["Sports", "Drama", "Psychological"] },
  { title: "Chihayafuru", genres: ["Sports", "Romance", "School"] },
  { title: "Baby Steps", genres: ["Sports", "Romance", "School"] },
  { title: "Tsurune", genres: ["Sports", "School", "Drama"] },
  { title: "Hinomaru Sumo", genres: ["Sports", "Action", "School"] },
    // MUSIC / IDOL / PERFORMANCE
  { title: "Nana", genres: ["Music", "Drama", "Romance"] },
  { title: "Carole & Tuesday", genres: ["Music", "Drama", "Sci-Fi"] },
  { title: "Given", genres: ["Music", "Romance", "Drama"] },
  { title: "Beck: Mongolian Chop Squad", genres: ["Music", "Drama", "Comedy"] },
  { title: "Kids on the Slope", genres: ["Music", "Drama", "Romance"] },
  { title: "Sound! Euphonium", genres: ["Music", "Drama", "School"] },
  { title: "Ya Boy Kongming!", genres: ["Music", "Comedy", "Drama"] },
  { title: "Bocchi the Rock!", genres: ["Music", "Comedy", "Slice of Life"] },
  { title: "K-On!", genres: ["Music", "Comedy", "Slice of Life"] },
  { title: "Love Live! School Idol Project", genres: ["Music", "Idol", "School"] },
  { title: "The iDOLM@STER", genres: ["Music", "Idol", "Comedy"] },
  { title: "Zombie Land Saga", genres: ["Music", "Comedy", "Supernatural"] },
  { title: "Oshi no Ko", genres: ["Music", "Drama", "Mystery"] },
  { title: "Vivy: Fluorite Eye's Song", genres: ["Music", "Sci-Fi", "Action"] },
  { title: "Revue Starlight", genres: ["Music", "Drama", "Fantasy"] },
  { title: "Aikatsu!", genres: ["Music", "Idol", "School"] },
  { title: "Wake Up, Girls!", genres: ["Music", "Idol", "Drama"] },
  { title: "BanG Dream!", genres: ["Music", "School", "Comedy"] },
  { title: "Zombieland Saga Revenge", genres: ["Music", "Comedy", "Supernatural"] },
  { title: "Selection Project", genres: ["Music", "Idol", "Drama"] },
   // HISTORICAL / SAMURAI / MILITARY
  { title: "Golden Kamuy", genres: ["Historical", "Action", "Adventure"] },
  { title: "Kingdom", genres: ["Historical", "Action", "Military"] },
  { title: "The Elusive Samurai", genres: ["Historical", "Action", "Comedy"] },
  { title: "Drifters", genres: ["Historical", "Action", "Fantasy"] },
  { title: "Blade of the Immortal", genres: ["Historical", "Action", "Dark"] },
  { title: "Sword of the Stranger", genres: ["Historical", "Action", "Samurai"] },
  { title: "House of Five Leaves", genres: ["Historical", "Drama", "Samurai"] },
  { title: "Angolmois: Record of Mongol Invasion", genres: ["Historical", "Action", "Military"] },
  { title: "Oda Nobuna no Yabou", genres: ["Historical", "Comedy", "Romance"] },
  { title: "Nobunaga Concerto", genres: ["Historical", "Time Travel", "Comedy"] },
  { title: "Hyouge Mono", genres: ["Historical", "Drama", "Comedy"] },
  { title: "The Heike Story", genres: ["Historical", "Drama"] },
  { title: "In This Corner of the World", genres: ["Historical", "Drama", "War"] },
  { title: "The Wind Rises", genres: ["Historical", "Drama", "Romance"] },
  { title: "Grave of the Fireflies", genres: ["Historical", "Drama", "War"] },
  { title: "Joker Game", genres: ["Military", "Historical", "Psychological"] },
  { title: "Saga of Tanya the Evil", genres: ["Military", "Isekai", "Action"] },
  { title: "Girls und Panzer", genres: ["Military", "Sports", "School"] },
  { title: "Pumpkin Scissors", genres: ["Military", "Action", "Drama"] },
  { title: "Zipang", genres: ["Military", "Historical", "Time Travel"] },
  // BATCH 12 — ADVENTURE / FANTASY
  { title: "Magi: Adventure of Sinbad", genres: ["Fantasy", "Adventure", "Action"] },
  { title: "Yona of the Dawn", genres: ["Fantasy", "Adventure", "Romance"] },
  { title: "The Twelve Kingdoms", genres: ["Fantasy", "Adventure", "Drama"] },
  { title: "Moribito: Guardian of the Spirit", genres: ["Fantasy", "Adventure", "Action"] },
  { title: "Rokka: Braves of the Six Flowers", genres: ["Fantasy", "Mystery", "Action"] },
  { title: "Chaika: The Coffin Princess", genres: ["Fantasy", "Action", "Adventure"] },
  { title: "The Sacred Blacksmith", genres: ["Fantasy", "Action", "Romance"] },
  { title: "Granblue Fantasy: The Animation", genres: ["Fantasy", "Adventure", "Action"] },
  { title: "Children of the Whales", genres: ["Fantasy", "Drama", "Adventure"] },
  { title: "Somali and the Forest Spirit", genres: ["Fantasy", "Adventure", "Drama"] },
  { title: "Land of the Lustrous", genres: ["Fantasy", "Action", "Drama"] },
  { title: "The Ancient Magus' Bride Season 2", genres: ["Fantasy", "Romance", "Supernatural"] },
  { title: "The Idaten Deities Know Only Peace", genres: ["Fantasy", "Action", "Dark"] },
  { title: "The Seven Deadly Sins: Four Knights of the Apocalypse", genres: ["Fantasy", "Action", "Adventure"] },
  { title: "Sacrificial Princess and the King of Beasts", genres: ["Fantasy", "Romance", "Drama"] },
  { title: "The Kingdoms of Ruin", genres: ["Fantasy", "Action", "Dark"] },
  { title: "The Dawn of the Witch", genres: ["Fantasy", "Adventure", "Magic"] },
  { title: "The Iceblade Sorcerer Shall Rule the World", genres: ["Fantasy", "Action", "School"] },
  { title: "The Strongest Sage with the Weakest Crest", genres: ["Fantasy", "Action", "School"] },
  { title: "The Aristocrat's Otherworldly Adventure", genres: ["Isekai", "Fantasy", "Comedy"] },

  // BATCH 13 — ROMANCE / DRAMA
  { title: "Fruits Basket", genres: ["Romance", "Drama", "Supernatural"] },
  { title: "Clannad", genres: ["Romance", "Drama", "School"] },
  { title: "Clannad: After Story", genres: ["Romance", "Drama", "Slice of Life"] },
  { title: "Kimi ni Todoke", genres: ["Romance", "Drama", "School"] },
  { title: "Lovely Complex", genres: ["Romance", "Comedy", "School"] },
  { title: "Maid Sama!", genres: ["Romance", "Comedy", "School"] },
  { title: "Ouran High School Host Club", genres: ["Romance", "Comedy", "School"] },
  { title: "Kamisama Kiss", genres: ["Romance", "Fantasy", "Comedy"] },
  { title: "Snow White with the Red Hair", genres: ["Romance", "Fantasy", "Drama"] },
  { title: "My Happy Marriage", genres: ["Romance", "Drama", "Fantasy"] },
  { title: "A Sign of Affection", genres: ["Romance", "Drama", "School"] },
  { title: "Insomniacs After School", genres: ["Romance", "Drama", "Slice of Life"] },
  { title: "Bloom Into You", genres: ["Romance", "Drama", "School"] },
  { title: "Sasaki and Miyano", genres: ["Romance", "School", "Slice of Life"] },
  { title: "Given: The Movie", genres: ["Romance", "Music", "Drama"] },
  { title: "Scum's Wish", genres: ["Romance", "Drama", "Psychological"] },
  { title: "Domestic Girlfriend", genres: ["Romance", "Drama", "School"] },
  { title: "White Album 2", genres: ["Romance", "Drama", "Music"] },
  { title: "Nagi-Asu: A Lull in the Sea", genres: ["Romance", "Fantasy", "Drama"] },
  { title: "Just Because!", genres: ["Romance", "Drama", "School"] },

  // BATCH 14 — COMEDY / SLICE OF LIFE
  { title: "Gekkan Shoujo Nozaki-kun", genres: ["Comedy", "Romance", "School"] },
  { title: "Barakamon", genres: ["Comedy", "Slice of Life", "Drama"] },
  { title: "Silver Spoon", genres: ["Comedy", "School", "Slice of Life"] },
  { title: "Laid-Back Camp", genres: ["Comedy", "Slice of Life", "Adventure"] },
  { title: "Kakushigoto", genres: ["Comedy", "Slice of Life", "Drama"] },
  { title: "Hitoribocchi no Marumaruseikatsu", genres: ["Comedy", "School", "Slice of Life"] },
  { title: "Tanaka-kun Is Always Listless", genres: ["Comedy", "School", "Slice of Life"] },
  { title: "Himouto! Umaru-chan", genres: ["Comedy", "School", "Slice of Life"] },
  { title: "Wasteful Days of High School Girls", genres: ["Comedy", "School", "Slice of Life"] },
  { title: "The Daily Life of the Immortal King", genres: ["Comedy", "Fantasy", "School"] },
  { title: "Sleepy Princess in the Demon Castle", genres: ["Comedy", "Fantasy", "Adventure"] },
  { title: "Uncle from Another World", genres: ["Comedy", "Isekai", "Fantasy"] },
  { title: "Kono Oto Tomare!", genres: ["Drama", "Music", "School"] },
  { title: "Hozuki's Coolheadedness", genres: ["Comedy", "Fantasy", "Supernatural"] },
  { title: "Skull-face Bookseller Honda-san", genres: ["Comedy", "Slice of Life"] },
  { title: "Play It Cool, Guys", genres: ["Comedy", "Slice of Life"] },
  { title: "The Yakuza's Guide to Babysitting", genres: ["Comedy", "Slice of Life", "Drama"] },
  { title: "Buddy Daddies", genres: ["Comedy", "Action", "Family"] },
  { title: "Hinamatsuri", genres: ["Comedy", "Supernatural", "Slice of Life"] },
  { title: "Azumanga Daioh", genres: ["Comedy", "School", "Slice of Life"] },

  // BATCH 15 — ACTION / SUPERNATURAL
  { title: "D.Gray-man", genres: ["Action", "Dark", "Supernatural"] },
  { title: "D.Gray-man Hallow", genres: ["Action", "Dark", "Supernatural"] },
  { title: "Shaman King", genres: ["Action", "Supernatural", "Adventure"] },
  { title: "Katekyo Hitman Reborn!", genres: ["Action", "Comedy", "Supernatural"] },
  { title: "Yu Yu Hakusho", genres: ["Action", "Supernatural", "Adventure"] },
  { title: "Inuyasha", genres: ["Action", "Fantasy", "Romance"] },
  { title: "Soul Eater NOT!", genres: ["Action", "Fantasy", "School"] },
  { title: "Kara no Kyoukai", genres: ["Action", "Mystery", "Supernatural"] },
  { title: "Kyoukai no Kanata", genres: ["Action", "Supernatural", "Romance"] },
  { title: "Twin Star Exorcists", genres: ["Action", "Supernatural", "Romance"] },
  { title: "Strike the Blood", genres: ["Action", "Supernatural", "Fantasy"] },
  { title: "Tokyo Ravens", genres: ["Action", "Supernatural", "School"] },
  { title: "Blood Blockade Battlefront & Beyond", genres: ["Action", "Supernatural", "Comedy"] },
  { title: "Kiznaiver", genres: ["Action", "Drama", "Psychological"] },
  { title: "Charlotte", genres: ["Supernatural", "School", "Drama"] },
  { title: "Beyond the Boundary", genres: ["Action", "Supernatural", "Romance"] },
  { title: "Deadman Wonderland", genres: ["Action", "Horror", "Dark"] },
  { title: "Highschool of the Dead", genres: ["Action", "Horror", "School"] },
  { title: "Black Bullet", genres: ["Action", "Sci-Fi", "Dark"] },
  { title: "Seraph of the End: Vampire Reign", genres: ["Action", "Dark", "Supernatural"] },

  // BATCH 16 — SCI-FI / FUTURE
  { title: "Ergo Proxy", genres: ["Sci-Fi", "Psychological", "Mystery"] },
  { title: "Serial Experiments Lain", genres: ["Sci-Fi", "Psychological", "Mystery"] },
  { title: "Texhnolyze", genres: ["Sci-Fi", "Psychological", "Dark"] },
  { title: "Blame!", genres: ["Sci-Fi", "Action", "Dark"] },
  { title: "Knights of Sidonia: Battle for Planet Nine", genres: ["Sci-Fi", "Mecha", "Action"] },
  { title: "Deca-Dence", genres: ["Sci-Fi", "Action", "Adventure"] },
  { title: "Godzilla Singular Point", genres: ["Sci-Fi", "Action", "Mystery"] },
  { title: "A.I.C.O. Incarnation", genres: ["Sci-Fi", "Action", "Mystery"] },
  { title: "Cagaster of an Insect Cage", genres: ["Sci-Fi", "Action", "Dark"] },
  { title: "Levius", genres: ["Sci-Fi", "Action", "Sports"] },
  { title: "Carole & Tuesday", genres: ["Sci-Fi", "Music", "Drama"] },
  { title: "Space Brothers", genres: ["Sci-Fi", "Drama", "Space"] },
  { title: "Moonlight Mile", genres: ["Sci-Fi", "Drama", "Space"] },
  { title: "Planetes", genres: ["Sci-Fi", "Drama", "Space"] },
  { title: "Eden of the East", genres: ["Sci-Fi", "Mystery", "Thriller"] },
  { title: "No. 6", genres: ["Sci-Fi", "Mystery", "Drama"] },
  { title: "From the New World", genres: ["Sci-Fi", "Psychological", "Dark"] },
  { title: "Children of the Whales", genres: ["Sci-Fi", "Fantasy", "Drama"] },
  { title: "Vampire Hunter D: Bloodlust", genres: ["Sci-Fi", "Horror", "Fantasy"] },
  { title: "Metropolis", genres: ["Sci-Fi", "Drama", "Mystery"] },

  // BATCH 17 — THRILLER / MYSTERY
  { title: "91 Days", genres: ["Thriller", "Crime", "Drama"] },
  { title: "Rainbow: Nisha Rokubou no Shichinin", genres: ["Drama", "Psychological", "Historical"] },
  { title: "Babylon", genres: ["Mystery", "Psychological", "Thriller"] },
  { title: "Boogiepop Phantom", genres: ["Mystery", "Psychological", "Horror"] },
  { title: "Boogiepop and Others", genres: ["Mystery", "Psychological", "Supernatural"] },
  { title: "Mouryou no Hako", genres: ["Mystery", "Horror", "Psychological"] },
  { title: "Beautiful Bones", genres: ["Mystery", "Drama", "Crime"] },
  { title: "Ghost Hound", genres: ["Mystery", "Psychological", "Supernatural"] },
  { title: "The Lost Village", genres: ["Mystery", "Horror", "Psychological"] },
  { title: "School Days", genres: ["Psychological", "Romance", "Drama"] },
  { title: "Aku no Hana", genres: ["Psychological", "Drama", "School"] },
  { title: "Welcome to the NHK", genres: ["Psychological", "Comedy", "Drama"] },
  { title: "Kaiji: Ultimate Survivor", genres: ["Psychological", "Thriller", "Drama"] },
  { title: "One Outs", genres: ["Psychological", "Sports", "Thriller"] },
  { title: "The Tatami Galaxy", genres: ["Psychological", "Comedy", "Romance"] },
  { title: "The Night Beyond the Tricornered Window", genres: ["Mystery", "Supernatural", "Horror"] },
  { title: "Pet", genres: ["Psychological", "Mystery", "Supernatural"]},
  { title: "Pet", genres: ["Psychological", "Mystery", "Supernatural"] },
  { title: "ID-0", genres: ["Sci-Fi", "Mystery", "Action"] },
  { title: "Migi & Dali", genres: ["Mystery", "Comedy", "Psychological"] },
  { title: "Heavenly Delusion: Kiruko and Maru", genres: ["Mystery", "Sci-Fi", "Dark"] },

  // BATCH 18 — SPORTS / COMPETITION
  { title: "Welcome to the Ballroom", genres: ["Sports", "Drama", "Romance"] },
  { title: "Keppeki Danshi! Aoyama-kun", genres: ["Sports", "Comedy", "School"] },
  { title: "All Out!!", genres: ["Sports", "School", "Drama"] },
  { title: "Days: Touin Gakuen-sen!", genres: ["Sports", "School", "Drama"] },
  { title: "Baki the Grappler", genres: ["Sports", "Action", "Martial Arts"] },
  { title: "Baki", genres: ["Sports", "Action", "Martial Arts"] },
  { title: "Kengan Ashura", genres: ["Sports", "Action", "Martial Arts"] },
  { title: "Hajime no Ippo: New Challenger", genres: ["Sports", "Action", "Drama"] },
  { title: "Air Gear", genres: ["Sports", "Action", "Comedy"] },
  { title: "Prince of Tennis", genres: ["Sports", "School", "Action"] },
  { title: "Prince of Stride: Alternative", genres: ["Sports", "School", "Drama"] },
  { title: "Harukana Receive", genres: ["Sports", "School", "Drama"] },
  { title: "Hanebado!", genres: ["Sports", "Drama", "School"] },
  { title: "Birdie Wing: Golf Girls' Story", genres: ["Sports", "Drama", "School"] },
  { title: "Ryman's Club", genres: ["Sports", "Drama", "Workplace"] },
  { title: "Salaryman's Club", genres: ["Sports", "Drama", "Workplace"] },
  { title: "Oblivion Battery", genres: ["Sports", "Comedy", "School"] },
  { title: "Medalist", genres: ["Sports", "Drama", "School"] },
  { title: "Giant Killing", genres: ["Sports", "Drama", "Workplace"] },
  { title: "Fanfare of Adolescence", genres: ["Sports", "Drama", "School"] },

  // BATCH 19 — MORE FANTASY / ISEKAI
  { title: "The Familiar of Zero", genres: ["Isekai", "Fantasy", "Romance"] },
  { title: "The Vision of Escaflowne", genres: ["Isekai", "Fantasy", "Mecha"] },
  { title: "The Twelve Kingdoms", genres: ["Isekai", "Fantasy", "Adventure"] },
  { title: "Kakuriyo: Bed & Breakfast for Spirits", genres: ["Fantasy", "Romance", "Supernatural"] },
  { title: "Black Summoner", genres: ["Isekai", "Fantasy", "Action"] },
  { title: "The Fruit of Evolution", genres: ["Isekai", "Fantasy", "Comedy"] },
  { title: "The Hidden Dungeon Only I Can Enter", genres: ["Fantasy", "Action", "Romance"] },
  { title: "The Strongest Magician in the Demon Lord's Army Was a Human", genres: ["Fantasy", "Action", "Adventure"] },
  { title: "The New Gate", genres: ["Isekai", "Fantasy", "Action"] },
  { title: "Failure Frame", genres: ["Isekai", "Fantasy", "Dark"] },
  { title: "The Great Cleric", genres: ["Isekai", "Fantasy", "Adventure"] },
  { title: "The Fruit of Grisaia", genres: ["Drama", "Psychological", "School"] },
  { title: "Black Summoner", genres: ["Isekai", "Fantasy", "Action"] },
  { title: "The 8th Son? Are You Kidding Me?", genres: ["Isekai", "Fantasy", "Adventure"] },
  { title: "The Master of Ragnarok & Blesser of Einherjar", genres: ["Isekai", "Fantasy", "Romance"] },
  { title: "The Familiar of Zero: Knight of the Twin Moons", genres: ["Isekai", "Fantasy", "Romance"] },
  { title: "Tsukimichi: Moonlit Fantasy", genres: ["Isekai", "Fantasy", "Comedy"] },
  { title: "The Dungeon of Black Company", genres: ["Isekai", "Fantasy", "Comedy"] },
  { title: "Kemono Michi: Rise Up", genres: ["Isekai", "Fantasy", "Comedy"] },
  { title: "I'm Standing on a Million Lives", genres: ["Isekai", "Fantasy", "Drama"] },

  // BATCH 20 — CLASSICS / CULT FAVORITES
  { title: "Trigun Maximum", genres: ["Action", "Sci-Fi", "Adventure"] },
  { title: "Outlaw Star", genres: ["Sci-Fi", "Action", "Adventure"] },
  { title: "Black Cat", genres: ["Action", "Adventure", "Comedy"] },
  { title: "Rurouni Kenshin", genres: ["Action", "Historical", "Romance"] },
  { title: "Yu Yu Hakusho", genres: ["Action", "Supernatural", "Adventure"] },
  { title: "Fist of the North Star", genres: ["Action", "Martial Arts", "Post-Apocalyptic"] },
  { title: "Initial D First Stage", genres: ["Sports", "Action", "Cars"] },
  { title: "Great Teacher Onizuka", genres: ["Comedy", "School", "Drama"] },
  { title: "Beck", genres: ["Music", "Drama", "Comedy"] },
  { title: "Mushishi", genres: ["Supernatural", "Mystery", "Slice of Life"] },
  { title: "Natsume's Book of Friends", genres: ["Supernatural", "Drama", "Slice of Life"] },
  { title: "Wolf's Rain", genres: ["Fantasy", "Adventure", "Drama"] },
  { title: "RahXephon", genres: ["Mecha", "Sci-Fi", "Romance"] },
  { title: "Gunbuster", genres: ["Mecha", "Sci-Fi", "Drama"] },
  { title: "FLCL", genres: ["Comedy", "Sci-Fi", "Action"] },
  { title: "The Big O", genres: ["Mecha", "Sci-Fi", "Mystery"] },
  { title: "Serial Experiments Lain", genres: ["Sci-Fi", "Psychological", "Mystery"] },
  { title: "Welcome to the NHK", genres: ["Psychological", "Comedy", "Drama"] },
  { title: "Black Lagoon: Roberta's Blood Trail", genres: ["Action", "Crime", "Thriller"] },
  { title: "Gungrave", genres: ["Action", "Crime", "Drama"] },

  // BATCH 21 — MORE POPULAR / MODERN
  { title: "Mashle: Magic and Muscles", genres: ["Action", "Comedy", "Fantasy"] },
  { title: "The Elusive Samurai", genres: ["Historical", "Action", "Comedy"] },
  { title: "Kaiju No. 8", genres: ["Action", "Sci-Fi", "Supernatural"] },
  { title: "Sakamoto Days", genres: ["Action", "Comedy", "Crime"] },
  { title: "The Apothecary Diaries", genres: ["Mystery", "Historical", "Drama"] },
  { title: "Delicious in Dungeon", genres: ["Fantasy", "Adventure", "Comedy"] },
  { title: "The Dangers in My Heart", genres: ["Romance", "Comedy", "School"] },
  { title: "A Sign of Affection", genres: ["Romance", "Drama", "School"] },
  { title: "The Angel Next Door Spoils Me Rotten", genres: ["Romance", "Comedy", "School"] },
  { title: "My Love Story with Yamada-kun at Lv999", genres: ["Romance", "Comedy"] },
  { title: "The Wrong Way to Use Healing Magic", genres: ["Isekai", "Fantasy", "Comedy"] },
  { title: "The Ossan Newbie Adventurer", genres: ["Fantasy", "Action", "Comedy"] },
  { title: "Wistoria: Wand and Sword", genres: ["Fantasy", "Action", "School"] },
  { title: "Kaiju No. 8 Season 2", genres: ["Action", "Sci-Fi", "Supernatural"] },
  { title: "Wind Breaker Season 2", genres: ["Action", "School", "Drama"] },
  { title: "Solo Leveling Season 2", genres: ["Action", "Fantasy"] },
  { title: "Demon Slayer: Hashira Training Arc", genres: ["Action", "Fantasy", "Drama"] },
  { title: "Jujutsu Kaisen Season 2", genres: ["Action", "Dark", "Supernatural"] },
  { title: "Attack on Titan: The Final Season", genres: ["Action", "Dark", "Fantasy"] },
  { title: "Spy × Family Season 2", genres: ["Comedy", "Action", "Family"] }
  ];
const animeList = document.getElementById("animeList");
const watchedCount = document.getElementById("watchedCount");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const statusFilter = document.getElementById("statusFilter");
const favoritesNav = document.getElementById("favoritesNav");
const homeNav = document.getElementById("homeNav");
const statsNav = document.getElementById("statsNav");
const statsPanel = document.getElementById("statsPanel");

const genres = new Set();

animeDatabase.forEach(anime => {
  anime.genres.forEach(genre => {
    genres.add(genre);
  });
});

[...genres].sort().forEach(genre => {
  const option = document.createElement("option");

  option.value = genre;
  option.textContent = genre;

  genreFilter.appendChild(option);
});

function getAnimeKey(title) {
  return "anime-watched-" + title;
}

function displayAnime() {
  animeList.innerHTML = "";

const searchTerm = searchInput.value.toLowerCase();
const selectedGenre = genreFilter.value;
const selectedStatus = statusFilter.value;

const filteredAnime = animeDatabase.filter(anime => {
  const matchesSearch =
    anime.title.toLowerCase().includes(searchTerm);

  const matchesGenre =
    selectedGenre === "All" ||
    anime.genres.includes(selectedGenre);

  const isFavorite =
    localStorage.getItem("anime-favorite-" + anime.title) === "true";

  const isWatched =
    localStorage.getItem(getAnimeKey(anime.title)) === "true";

  const matchesStatus =
    selectedStatus === "All" ||
    (selectedStatus === "Favorites" && isFavorite) ||
    (selectedStatus === "Watched" && isWatched) ||
    (selectedStatus === "Unwatched" && !isWatched);

  return matchesSearch &&
         matchesGenre &&
         matchesStatus;
});

  filteredAnime.forEach(anime => {
    const label = document.createElement("label");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const saved =
      localStorage.getItem(getAnimeKey(anime.title));

    checkbox.checked = saved === "true";

    const favoriteBtn = document.createElement("button");
const name = document.createElement("span");
name.textContent = anime.title;
favoriteBtn.textContent = "☆";
favoriteBtn.className = "favorite-btn";

const favoriteKey = "anime-favorite-" + anime.title;

if (localStorage.getItem(favoriteKey) === "true") {
  favoriteBtn.textContent = "★";
}

favoriteBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const isFavorite =
    localStorage.getItem(favoriteKey) === "true";

  if (isFavorite) {
    localStorage.removeItem(favoriteKey);
    favoriteBtn.textContent = "☆";
  } else {
    localStorage.setItem(favoriteKey, "true");
    favoriteBtn.textContent = "★";
  }
});

    checkbox.addEventListener("change", function () {
      localStorage.setItem(
        getAnimeKey(anime.title),
        checkbox.checked
      );

      updateCounter();
    });

    label.appendChild(checkbox);
label.appendChild(name);
label.appendChild(favoriteBtn);

    animeList.appendChild(label);
  });

  updateCounter();
}

function updateCounter() {
  let watched = 0;

  animeDatabase.forEach(anime => {
    if (
      localStorage.getItem(getAnimeKey(anime.title)) === "true"
    ) {
      watched++;
    }
  });

  watchedCount.textContent =
    watched + " / " + animeDatabase.length;
}

searchInput.addEventListener("input", displayAnime);

genreFilter.addEventListener("change", displayAnime);

statusFilter.addEventListener("change", displayAnime);

displayAnime();
favoritesNav.addEventListener("click", function () {
  statusFilter.value = "Favorites";
  statsPanel.innerHTML = "";
  displayAnime();

  favoritesNav.classList.add("active");
  homeNav.classList.remove("active");
  statsNav.classList.remove("active");
});
homeNav.addEventListener("click", function () {
  statusFilter.value = "All";
  statsPanel.innerHTML = "";
  displayAnime();

  homeNav.classList.add("active");
  favoritesNav.classList.remove("active");
  statsNav.classList.remove("active");
});
statsNav.addEventListener("click", function () {
  let watched = 0;
  let favorites = 0;

  animeDatabase.forEach(anime => {
    if (localStorage.getItem(getAnimeKey(anime.title)) === "true") {
      watched++;
    }

    if (localStorage.getItem("anime-favorite-" + anime.title) === "true") {
      favorites++;
    }
  });

  const total = animeDatabase.length;
  const remaining = total - watched;

  statsPanel.innerHTML = `
    <h2>📊 Your Anime Stats</h2>
    <p>🍿 Total Anime: ${total}</p>
    <p>✅ Watched: ${watched}</p>
    <p>⭐ Favorites: ${favorites}</p>
    <p>⏳ Remaining: ${remaining}</p>
  `;

  animeList.innerHTML = "";
});
  statsNav.classList.add("active");
  homeNav.classList.remove("active");
  favoritesNav.classList.remove("active");