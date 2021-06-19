const articles = [ 
  { title: '100+ Creative Photography Ideas: Techniques, Compositions & Mixed Media Approaches', 
  category: 'Art', 
  link: 'https://www.studentartguide.com/articles/creative-photography-ideas', description: 'This article contains over 100 creative techniques and mixed media approaches that Fine Art / Photography students may wish to use within their work. It showcases student and artist examples along with brief descriptions of the techniques that have been used. Approaches relate specifically to mixed media photography techniques, technical / trick photography ideas and interesting, fun or unique compositional strategies.' 
},
  { title: 'How to make an art portfolio for college or university (the ultimate guide)', 
  category: 'Art', 
  link: 'https://www.studentartguide.com/articles/how-to-make-an-art-portfolio-for-college-or-university', 
  description: 'This article explains how to make an art portfolio for college or university and is packed with tips from leading art and design school admissions staff from around the world. It is written for those who are in the process of creating an application portfolio for a foundation course, certificate, associate or undergraduate degree and contains advice for specific art-related areas, such as Architecture, Fine Art, Graphic Design, Illustration, Interior Design, Animation, Game Design, Film and other creative, visual art-based courses.' 
},
  { title: 'Digging Your Way Out of Debt in 8 Steps', 
  category: 'Finance', 
  link: 'https://www.investopedia.com/personal-finance/digging-out-of-debt/', 
  description: "Americans are buried in debt from mortgages, credit cards, personal loans, bills, and student loans, and the amount owed in total is on the rise. In 2020, Experian reported that the average American owes approximately $$92,727 in total debt—the highest amount on record in the U.S. Who's carrying the most debt? Members of Generation X owe a staggering $140,643, followed by Baby Boomers ($97,290) and Millennials ($87,448). This debt includes mortgages, student loans, credit cards, and other types of personal debt."
},
  { title: 'Why Knowing Your Net Worth Is Important', 
  category: 'Finance', 
  link: 'https://www.investopedia.com/articles/pf/13/importance-of-knowing-your-net-worth.asp', 
  description: "Your net worth is the amount by which your assets exceed your liabilities. In simple terms, net worth is the difference between what you own and what you owe. If your assets exceed your liabilities, you have a positive net worth. Conversely, if your liabilities are greater than your assets, you have a negative net worth."
},
  { title: 'Best Android phones to buy for 2021', 
  category: 'Tech', 
  link: 'https://www.cnet.com/news/best-android-phones-2021/', 
  description: "These are the best Android phones you can buy right now, hand-picked by CNET Editors."
},
  { title: 'CatMeows: A Publicly-Available Dataset of Cat Vocalizationst', 
  category: 'Tech', 
  link: 'https://zenodo.org/record/4008297#.YM1FD2hKiUk', 
  description: "This dataset, composed of 440 sounds, contains meows emitted by cats in different contexts. Specifically, 21 cats belonging to 2 breeds (Maine Coon and European Shorthair) have been repeatedly exposed to three different stimuli that were expected to induce the emission of meows:"
},
  { title: "Disney's New Gaming Philosophy Is About Making Developers' Dreams Come True", 
  category: 'Entertainment', 
  link: 'https://www.ign.com/articles/disney-games-lucasfilm-philosophy-star-wars-avatar-pirates-indie', 
  description: "Luigi Priore has a very clear idea about what a Disney game is – and isn’t – these days. The phrase ‘licensed game’ comes with an in-built wince for players of a certain age, bringing to mind wonky retellings of movie scripts achieved primarily through bargain-bucket action mechanics."
},
  { title:"The Flash Director Teases Sasha Calle's Supergirl Costume", 
  category: 'Entertainment', 
  link: 'https://www.ign.com/articles/the-flash-supergirl-costume-sasha-calle-dceu', 
  description: `The Flash director Andy Muschietti has shared a first look teaser of Sasha Calle's Supergirl costume for the upcoming DCEU film.
  Muschietti revealed the image on Instagram in a similar fashion to how he gave a glimpse of Ezra Miller's new costume and Michael Keaton's classic Batman suit.`
},
 ]

 exports.articles = articles

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('articles').insert(articles)
};
