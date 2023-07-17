const heroes = [
    {
    "name": "Бетмен",
    "universe": "DC Comics",
    "alterego": "Брюс Уэйн",
    "occupation": "борец с преступностью, филантроп, миллиардер",
    "friends": "Робин, Бэтгерл",
    "superpowers": "интеллект, обширные познания, знания боевых искусств, ловкость",
    "url": "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg ",
    "info": "По популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили",
    "rating": ""
    },
    {
    "name": "Супермен",
    "universe": "DC Comics",
    "alterego": "Кларк Кент",
    "occupation": "супергерой, журналист",
    "friends": "Лоис Лейн, Лекс Лютор",
    "superpowers": "летать, высокая скорость, непроницаемость к болезням и ранениям",
    "url": "https://n1s1.hsmedia.ru/24/8b/01/248b011f254e0adbb13a3fa2648e53ef/547x397_0xac120002_2112479727150091972.jpg ",
    "info": "Супермен - символ справедливости и непобедимости. Он является последним выжившим представителем вымирающей планеты Криптон. Супермен обладает сверхсилой, способностью летать и непроницаемостью к большинству физических ранений и болезней. Кроме того, он обладает высокой скоростью и телекинезом. Кларк Кент, его гражданская личность, работает журналистом и использует свою профессию, чтобы быть ближе к событиям и помогать людям.",
    "rating": ""
    },
    {
    "name": "Железный человек",
    "universe": "Marvel Comics",
    "alterego": "Тони Старк",
    "occupation": "гений, миллиардер, плейбой, филантроп",
    "friends": "Властелин колец, Чёрная вдова, Халк",
    "superpowers": "сверхвысокий интеллект, реактивные летающие доспехи, лазерный луч, суперсила",
    "url": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/a9e33924426333.568c2ae14979f.jpg ",
    "info": "Тони Старк - гений и миллиардер, который самостоятельно создал реактивный летающий костюм и стал Железным человеком. Он обладает высоким интеллектом и создал множество передовых технологий. Железный человек использует лазерный луч, ракетные запуски и суперсилу, чтобы бороться со злом. Несмотря на свою некоторую арогантность, Тони Старк является настоящим героем и всегда готов защищать мир от угроз.",
    "rating": ""
    }
    ];

    const heroContainer = document.querySelector('.hero-container');
    const heroTemplate = document.getElementById('hero-template');

    heroes.forEach(hero => {
        const heroCard = heroTemplate.content.cloneNode(true);
        const heroImage = heroCard.querySelector('.hero-image');
        const heroName = heroCard.querySelector('.hero-name');
        const heroRating = heroCard.querySelector('.hero-rating');
        const heroDescription = heroCard.querySelector('.hero-description');
        const ratingInput = heroCard.querySelector('.rating');
        const submitButton = heroCard.querySelector('.submit-button');

        heroImage.src = hero.url;
        heroName.textContent = hero.name;
        heroDescription.textContent = hero.info;

        if (localStorage.getItem(hero.name)) {
            hero.rating = localStorage.getItem(hero.name);
        } else {
            hero.rating = 0;
        }

        ratingInput.value = hero.rating;
        ratingInput.addEventListener('change', () => {
            hero.rating = ratingInput.value;
            localStorage.setItem(hero.name, hero.rating);
        });

        heroRating.textContent = `Rating: ${hero.rating}`;

        heroContainer.appendChild(heroCard);
    });