const menuData = {
    anaYemek: ["Meatball", "Grilled chicken", "Pasta with vegetables"],
    araSicak: ["Cigarette Pie", "Potato Croquettes", "Lentil Soup"],
    tatli: ["Baklava", "Kazandibi", "Revani"],
    icecek: ["Ayran", "Limonata", "Fruit Juice"],
};
//@Lolita
const recipeData = {
    Meatball: {
        malzemeler: [
            "500 gr medium-fat ground beef",
            "1 medium grated onion",
            "1 clove of garlic",
            "1 egg",
            "Half a tea glass of breadcrumbs",
            "1 tablespoon of oil",
            "1 handful of finely chopped parsley",
            "1 teaspoon of cumin",
            "Half a teaspoon of black pepper",
            "1.5 teaspoons of salt",
        ],
        tarif: [
            "Let's take our mince into a suitable mixing bowl.",
            " Let's take the grated and squeezed onion, small cut garlic, egg, breadcrumbs, vegetable oil, parsley, salt, pepper and cumin and knead until the ingredients are well mixed.",
            "Let's cover the dough we prepared with cling and let it rest in the refrigerator for 30 minutes.",
            "At the end of the time, let's take our mortar from the cupboard and shape it by tearing off pieces with our hands. I made the shape oval, but you can shape it as you wish.",
            " However, you should pay attention to the fact that your meatballs are thin so that the insides are cooked.",
            " Let's take our meatballs that we have shaped into a suitable plate. If you wish, you can rest your meatballs at this stage.",
            " To cook our meatballs, let's take oil in our pan on the stove and heat it.",
            "Then, let's take our meatballs to our pan and cook them by turning both sides.",
            "Let's take the cooked meatballs to a plate on which we lay paper towels to drain the excess oil and serve. Enjoy your meal.",
        ],
    },
    "Grilled chicken": {
        malzemeler: [
            "2 kg chicken cutlet",
            " 1 head of garlic",
            " 1 teaspoon thyme ",
            " 1 tablespoon of salt ",
            " 1 teaspoon paprika",
            " 1 cup of olive oil",
            " 1 teaspoon of chili paste",
        ],
        tarif: [
            "After washing the chickens, we drain the water and put them in a deep bowl.",
            " Add all the spices and grate the garlic.",
            "Add the tomato paste and olive oil and mix well.",
            "We place the bones side by side in the electric grill at home, cook for 15 minutes in this way and cook the other side for 10 minutes and serve.",
            "If you do not have an electric grill, you can also do this in a fireproof pan. Enjoy your meal",
        ],
    },

    "Pasta with vegetables": {
        malzemeler: [
            "1 package of penne pasta",
            " 1 tablespoon of olive oil",
            " 4 green peppers",
            "2 red peppers",
            "2 tomatoes",
            "1 onion",
            "1 pinch of parsley",
            "1 coffee cup of olive oil",
            "2 tablespoons of tomato paste (mixed)",
            "1 teaspoon paprika",
            "1/2 (half) teaspoon of black pepper",
            "1/2 (half) teaspoon of dried basil",
            "enough salt",
        ],
        tarif: [
            "For the vegetable pasta recipe, let's put hot water in the pot. Let's add salt and olive oil.",
            "When it boils, add the pasta. Let it cook for 10 minutes.",
            "While it's cooking, let's prepare the sauce. Chop the onion, peppers and parsley. Let's grate the tomatoes.",
            "Put the olive oil in the pan and put the onion and peppers. Let's dry it well.",
            "Add 2 tablespoons of tomato and pepper mixed tomato paste. Let's fry some more.",
            "Let's add the grated tomatoes.",
            "Add salt and seasoning. Let's adjust the salt and spice according to our own taste.",
            "Drain the cooked pasta and add it to the sauce. Put the chopped parsley on it. Let's mix it up.",
            "Take the pasta on the serving plate. Sprinkle grated cheddar cheese on top.",
            " Vegetable pasta recipe, ready to serve",
        ],
    },
    "Cigarette Pie": {
        malzemeler: ["eady-made phyllo", " Pastry Curd Cheese", "Parsley"],
        tarif: [
            "The dough is divided into 12 equal parts in the shape of a triangle.",
            "The inner mortar is prepared by mixing chopped parsley and cheese.",
            "Spread a spoonful of cheese mixture on the lower end of each triangular phyllo.",
            "The edges of the dough are bent inward so that the material does not spill, and the dough is wrapped in rolls.",
            "If you cover the tip by slightly wetting it with water, your pastries will not open.",
            "Prepared pastries are cooked by turning in hot oil.",
            "If you wish, you can keep the pastries you will prepare in your spare time in the freezer with a cupboard bag, and you can fry as much as you want when you eat. Enjoy your meal…",
        ],
    },
    "Potato Croquettes": {
        malzemeler: [
            "4-5 boiled potatoes",
            "2 egg yolks (we will use it to find the white)",
            "Black pepper (about 1 teaspoon)",
            "Paprika (optional)",
            "Red powdered pepper",
            "1 teaspoon grated cheddar cheese",
            "60g room temperature butter",
            "Egg white",
            "Fame",
            "Breadcrumbs",
        ],
        tarif: [
            "Potatoes are boiled and grated or mashed with a fork or potato masher.",
            "Let's add butter, spices and egg yolk to our mashed potatoes and mix well. Let's get a smooth consistency.",
            "Finally, add the grated cheddar cheese and mix.",
            "Let's fill the potato mortar we prepared into a squeezing bag or a double-lock leakproof bag.",
            "Let's lay baking paper so that it does not stick to our plate and squeeze the potato mortar in strips on it.",
            "Let's leave it in the freezer for about half an hour for our mortar to rest.",
            "After taking it from the freezer, let's cut it into slices of the desired length.",
            "Let's dip each piece in the flour first, then the egg white and finally the breadcrumbs. After all the croquettes are ready, we can move on to the cooking stage.",
        ],
    },
    "Lentil soup": {
        malzemeler: [
            "2 cups red lentils",
            "1 onion",
            "2 tablespoons of flour",
            "1 carrot",
            "Half a tablespoon of pepper or tomato paste (you can increase it if you want it to be red or not use it at all)",
            "1 teaspoon salt",
            "Half a teaspoon of black pepper",
            "1 teaspoon cumin (optional)",
            "2 liters of hot water",
            "5 tablespoons of oil",
            "For the sauce:",

            "2 spoonful butter",
            "1 teaspoon red chili powder",
        ],
        tarif: [
            "For the red lentil soup, the oil is poured into the pan and the chopped onions are roasted until they turn slightly pink.",
            "Then flour is added and frying is continued on low heat.",
            " If tomato paste is to be used, tomato paste is added, after roasting, diced carrots and thoroughly washed and drained lentils are added.",
            "Add water to it, mix it and close the lid of the pot.",
            "Our soup is cooked on medium heat until it boils, and after boiling, it is cooked on low heat, stirring occasionally, until the lentils and carrots soften.",
            "After the soup is cooked, it is well crushed with a hand blender.",
            " If you don't have a blender, you can also strain it.",
            "Add black pepper, salt and optionally cumin and mix. Cook for another 5 minutes and remove from the stove.",
            "If the consistency is dark, some water is added and boiled for a while.",
            "In the meantime, take two tablespoons of butter in a small pan, heat it up and add a teaspoon of red pepper powder and take it off the stove.",
            "After the lentil soup is taken into a serving bowl, red pepper sauce is poured over it and served with a slice of lemon.",
        ],
    },
    Baklava: {
        malzemeler: [
            "For sherbet:",
            " 4 cups sugar",
            "4 glasses of water",
            "1 teaspoon lemon juice",
            "For the dough:",
            "3.5 cups flour",
            "2 eggs",
            "1 teacup of oil",
            "1 teaspoon of milk",
            "1 tablespoon of vinegar",
            "Salt with teaspoon tip",
            "To open the dough:",
            " Starch",
            "For between:",

            "2 cups cracked walnuts",
            "Over:",

            "250g butter",
            "Half a teaspoon of oil",
        ],
        tarif: [
            "Take sugar and water in a suitable pot.",
            "After mixing, let our syrup boil.",

            "At the end of the time, add the lemon juice and boil for a few more minutes and remove from the stove.",
            "For the baklava dough, let's take eggs, oil, milk, vinegar and salt into the kneading bowl and mix. ",
            "Then, add the flour gradually and knead the dough until it reaches a non-sticky consistency.",
            " Let's stretch the dough we kneaded and let it rest for 30 minutes. This way, the dough will roll out much easier.",
            "At the end of the time, let's take our dough to the counter and knead it a couple more times and collect it.",
            "Let's first divide our dough into 3 parts equally, then divide each part into 9 parts.",
            " Let's knead the pieces we cut from the outside inwards and turn them into meringue by rolling them in our hands. In total, we will have 27 meringues.",
            "After turning all the pieces into meringue, let's cover them with cling film. Thus, we will prevent them from drying until the dough rolling process is finished.",
            "Let's take one of our meringues to the counter where we sprinkle starch, and roll it in the size of a dessert plate with the help of a roller. In this way, let's open the first 9 meringues one by one, sprinkle starch between them and place them on top of each other.",
            "Then, let's open the 9 layers of dough that we prepared, a little bigger than the size of the tray, by turning it inside out once in a while. Here, when you turn the dough inside out, it will expand equally in the small layers at the bottom.",
            "Then, again, carefully, gently separate the dough into layers.",
            "Let's place the thin, dice-like baklava dough on our tray. If you wish, you can put the phyllo dough by separating them, or you can put them whole without separating them.",
            "After placing the first 9 layers on the tray, let's sprinkle walnut pieces on it. If you wish, you can put hazelnuts or peanuts at this stage.",
            "Let's open the other 9 meringues in the same way, sprinkle starch between them and place them on top of each other. Then let's expand it to tray size.",
            "Let's divide the expanded dough into layers again and place them on our tray. If you are going to place the layers one by one and your place is available, you can lay the dough somewhere to dry and wait for 3-4 minutes.",
            "Let's sprinkle walnut crumbs on the dough we placed on the tray.",
            "Let's expand our last 9 meringues to the size of the tray by applying the same procedures and place them on our tray.",
            "While cutting our baklava, let's first cut it into 4 parts. Then let's divide these 4 parts into small triangles.",
            "Finally, let's pour the melted butter and oil mixture over our baklava and let it cook for 1 hour in the preheated 170 ° C oven.",
            "At the end of the time, let's pour our cold sherbet over the hot baklava we bought from the oven and let it rest to absorb the syrup.",
        ],
    },
    'Kazandibi': {
        malzeme: ['6 cups of milk',
            '2 tablespoons of starch',
            ' 1 cup of flour',
            '1 glass of sugar',
            '1 tablespoon of butter',
            '1 packet of vanilla'
        ],
        tarif: ["Mix all the ingredients in a medium sized saucepan.",
            "We get the custard. Lastly, pour the butter and vanilla and cook our pudding for 5 minutes. until we cook.",
            "We spread plenty of butter on a medium-sized aluminum tray and pour 3 tablespoons of sugar into the tray.",
            "Make sure all places are equal.",
            "Then we pour the cooked custard on the tray and cook the custard by constantly turning it over medium heat.",
            "25-30 min. enough, the important thing here is to cook in a controlled manner by constantly turning the tray, to take care that the edges are cooked, and the smell of the pudding, which holds the bottom, comes out a little.",
            "Then we immediately remove it from the stove and let it cool.",
            "After it cools down, we put it in the refrigerator for 1-2 hours.",
            "Then you can slice and serve as you wish. Enjoy your meal."
        ]
    },
    'Revani': {
        malzemeler: ['3 eggs',
            '1 glass of sugar',
            '1 cup of yogurt',
            '1 cup of semolina',
            '1 cup of flour',
            '1 packet of vanilla',
            '1 packet of baking powder',
            '1 teacup of oil',
            'For sherbet:',

            '3 glasses of water',
            '3 cups of sugar',
            'Juice of half a lemon'
        ],
        tarif: ["First, syrup is prepared. For sherbet, sugar and water are boiled in a saucepan. After boiling, add half lemon juice and boil for 1-2 more minutes and turn off the heat.",
            "For the cake, beat the eggs and sugar in a mixing bowl.",
            "Then oil, yogurt and semolina are added and whisked.",
            "Finally, add flour, baking powder and vanilla and mix well.",
            "Cake batter is poured into the greased baking dish.",
            "Bake in the oven at 170 degrees for about 30 minutes until the top is golden brown.",
            " The first temperature of the cake is cut into slices and cooled syrup is poured on the hot cake.",
            "After resting for 1-2 hours, you can add whipped cream, coconut or peanuts, etc., if desired. Served with garnish. Enjoy your meal"
        ]

    },
    'Ayran': {
        malzemeler: ['1 cup of yogurt',
            'half a cup of milk',
            'Half a glass of mineral water',
            ' 1 glass of cold water',
            ' 1 teaspoon Salt'
        ],
        tarif: ["First, let's take our yogurt in a suitable container. If there is no homemade yogurt, you can use ready-made yogurt.",
            "Then add our other ingredients except water. Mix it with a blender until it reaches a homogeneous consistency. You can adjust the salt according to you.",
            "Add the water and continue mixing with the blender. If you want your buttermilk to be thicker and more fluid, you can adjust it according to your taste by adding cold water gradually.",
            "It makes a delicious buttermilk. If you wish, you can sprinkle a pinch of dried mint on top or serve it with fresh mint."
        ]
    },
    'Lemonade': {
        malzemeler: ['6 large lemons',
            '1 large orange',
            '1 glass of granulated sugar (with 210 ml glass)',
            ' 1 glass of hot water (with 250 ml glass)',
            ' 5 glasses of cold water'
        ],
        tarif: ["First of all, we grate the peels of the lemons with a medium-mesh grater without touching the white part.",
            "Then we grate the orange carefully without going down to the white part and transfer the peels to a deep bowl.",
            "We add sugar on it and mix the sugar and shells together by hand.",
            "Add 1 glass of hot water and mix well until the sugar dissolves.",
            " Squeeze the juices of the lemons and oranges (2 cups of juice in total) and add them to the mixture. In this way, mix it in between and keep it aside for 30 minutes.",
            "At the end of the time, we add cold water and mix it.",
            " We strain it into a jug with a strainer, separate our lemonade from the pulp, and check the taste.",
            "We add whatever is missing or excess sugar in the water and adjust it according to our taste.",
            "After cooling and resting for 1-2 hours in the refrigerator, we can serve and drink with pleasure.",
            "If you wish, you can add 1-2 tiny sprigs of fresh mint half an hour before drinking, and the excess can hurt the taste and spoil the smell."
        ]
    },
    'Fruit Juice': {
        malzemeler: ['4 apples',
            ' 2 pears',
            '3 oranges',
            ' Dried fruits (apricot, damson, pineapple)',
            ' 1 glass of sugar',
            '2 liters of water'
        ],
        tarif: ["Chop the apples and pears into cubes and put them in the pot.",
            " I didn't chop the orange because the peel would be bitter.",
            "Chop the dried fruits and throw them in.",
            "Boil well with 2 liters of water.",
            "When it softens, lightly crush the fruits in it.",
            "Let's turn it off and wait for a while.",
            "Then strain it and put it back in the pot.",
            "Squeeze the oranges and add them.",
            "Let's add 1 cup of sugar (you can add more sugar if you want).",
            "Let it boil until the sugar dissolves.",
            "Let's filter it again and put it in our jug ​​and after it gets warm, let's cool it in the fridge."
        ]
    }
    // Diğer yemeklerin tarifleri buraya eklenir
};

let currentMenu = null;

function getRandomMenuItem(menuType) {
    return menuData[menuType][
        Math.floor(Math.random() * menuData[menuType].length)
    ];
}

function showMenu() {
    document.getElementById("ingredients").style.display = "none";
    document.getElementById("recipe").style.display = "none";

    if (currentMenu === null) {
        document.getElementById("menu").style.display = "block";

        const anaYemek = getRandomMenuItem("anaYemek");
        const araSicak = getRandomMenuItem("araSicak");
        const tatli = getRandomMenuItem("tatli");
        const icecek = getRandomMenuItem("icecek");

        document.getElementById("anaYemekButton").textContent = anaYemek;
        document.getElementById("araSicakButton").textContent = araSicak;
        document.getElementById("tatliButton").textContent = tatli;
        document.getElementById("icecekButton").textContent = icecek;

        currentMenu = "menu";
    } else {
        document.getElementById(currentMenu).style.display = "none";
        currentMenu = null;
    }
}

function showRecipe(menuType) {
    const selectedMenu = document.getElementById(`${menuType}Button`).textContent;
    const malzemeler = recipeData[selectedMenu].malzemeler;
    const tarif = recipeData[selectedMenu].tarif;

    if (menuType === "icecek") {
        document.getElementById("recipe").style.display = "none";
    } else {
        document.getElementById("recipe").style.display = "block";
        document.getElementById("tarif").textContent = tarif;
    }

    document.getElementById("menu").style.display = "none";
    document.getElementById("ingredients").style.display = "block";

    const malzemelerListesi = document.getElementById("malzemeler");
    malzemelerListesi.innerHTML = "";
    malzemeler.forEach((malzeme) => {
        const listItem = document.createElement("li");
        listItem.textContent = malzeme;
        malzemelerListesi.appendChild(listItem);
    });

    currentMenu = "ingredients";
}