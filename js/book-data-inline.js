const bookData = [
    {
        id: 1, 
        title: "Marvel's Spider-Man 2 (2023) #1",
        author: "Christos Gage",
        genre: "Comics",
        length: "short",
        image: "images/Spider-Man 2 (2023).jpg", 
        synopsis: "In the lead up to events in Marvel's Spider-Man 2, Peter and Miles team up to face an all-new threat!",
        rating: 4.8
    },
    {
        id: 2,
        title: "Moon Knight: Fist of Khonshu (2024)",
        author: "Joe Kelly, Jed MacKay",
        genre: "Comics",
        length: "short",
        image: "images/Moon Knight.jpg", 
        synopsis: "Following Marc Spector's triumphant return in BLOOD HUNT #4, Jed MacKay and Alessandro Cappuccio's acclaimed run continues in a special prelude issue to the new ongoing series.",
        rating: 4.9
    },
    {
        id: 3, 
        title: "Thanos: The Infinity Ending (2019)",
        author: "Jim Starlin",
        genre: "Comics",
        length: "medium",
        image: "images/Thanos.jpg", 
        synopsis: "The cosmic conclusion to Jim Starlin and Alan Davis' epic trilogy! All hail Thanos, lord of all that is – including himself! In the far future, Thanos has become the most powerful being in reality. But it's not enough to rule in his own time. The truly Mad Titan intends to command all of time and space – including his own past self!",
        rating: 4.7
    },
    {
        id: 4,
        title: "Dune",
        author: "Frank Herbert",
        genre: "Sci-Fi",
        length: "long",
        image: "images/Dune.jpg",
        synopsis: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the 'spice' melange.",
        rating: 4.8
    },
   {
        id: 5,
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        genre: "Fantasy",
        length: "long",
        image: "images/Harry potter goblet of fire.jpg", 
        synopsis: "Harry Potter wakes up with his scar burning and soon finds himself at the Quidditch World Cup. But the real mystery begins at Hogwarts, where he is mysteriously entered into the Triwizard Tournament, a grueling competition between three wizarding schools.",
        rating: 4.9
    },
    {
        id: 6,
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        length: "medium",
        image: "images/Harry Potter and the Sorcerer's Stone.jpg",
        synopsis: "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive.",
        rating: 4.8
    },
    {
        id: 7,
        title: "Scooby-Doo! and the Witching Hour",
        author: "Sonia Sander",
        genre: "Mystery",
        length: "short",
        image: "images/Scooby-Doo! and the Witching Hour.jpg", 
        synopsis: "Scooby and the gang are picking pumpkins for Halloween when they see a witch haunting the pumpkin patch, and again at the town's annual Halloween party.",
        rating: 3.7
    },
    {
        id: 8,
        title: "Scooby-Doo! A Very Scary Valentine's Day",
        author: "Mariah Balaban",
        genre: "Mystery",
        length: "short",
        image: "images/A Very Scary Valentine's Day.jpg", 
        synopsis: "It's Valentine's Day in Coolsville, and the kids from Mystery, Inc. are getting ready to celebrate at the big school dance. But when Fred, Velma, and Daphne disappear, Scooby and Shaggy are sure zombies are to blame!",
        rating: 3.6
    },
    {
        id: 9,
        title: "His Last Bow",
        author: "Arthur Conan Doyle",
        genre: "Mystery",
        length: "medium",
        image: "images/His Last Bow.jpg", 
        synopsis: "Holmes is retired in the English countryside and more interested in beekeeping than solving cases. But the imminent war with Germany brings him out of retirement for one last bow.",
        rating: 4.2
    },
    {
        id: 10,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Fiction",
        length: "short",
        image: "images/The-Alchemist.jpg", 
        synopsis: "Santiago, a young shepherd living in the hills of Andalucia, feels that there is more to life than his humble home and his flock. One day he finds the courage to follow his dreams into distant lands.",
        rating: 4.6
    },
    {
        id: 11,
        title: "Life of Pi",
        author: "Yann Martel",
        genre: "Fiction",
        length: "medium",
        image: "images/Life of Pi.jpg", 
        synopsis: "After a tragic shipwreck, young Pi Patel finds himself stranded on a lifeboat in the Pacific Ocean. His only companion is a fearsome 450-pound Royal Bengal tiger named Richard Parker.",
        rating: 4.4
    },
    {
        id: 12,
        title: "Ender's Game",
        author: "Orson Scott Card",
        genre: "Sci-Fi",
        length: "medium",
        image: "images/Ender’s Game.jpg", 
        synopsis: "In a future where humanity is at war with an alien race, young Andrew 'Ender' Wiggin is recruited to a military school in space to train as a commander through increasingly difficult war games.",
        rating: 4.3
    },
    {
        id: 13,
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Non-Fiction",
        image: "images/Atomic Habits.jpg",
        synopsis: "An easy and proven way to build good habits and break bad ones. Learn how tiny changes can lead to remarkable results.",
        rating: 4.8,
        length: "medium"
    },
    {
        id: 14,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        genre: "Non-Fiction",
        image: "images/Sapiens.jpg",
        synopsis: "A brief history of humankind, exploring how biology and history have defined us and enhanced our understanding of what it means to be human.",
        rating: 4.7,
        length: "long"
    },
    {
        id: 15,
        title: "Twisted Love",
        author: "Ana Huang",
        genre: "Romance",
        image: "images/TwistedLove.jpg",
        synopsis: "A cold, driven man agrees to watch over his best friend's sister and discovers she's the one person who can break through his walls, pulling them into a dark, intense romance shaped by secrets and past trauma.",
        rating: 3.71,
        length: "long"
    }

];

const authors = [
    { name: "J.K. Rowling", bio: "British author best known for the Harry Potter fantasy series." },
    { name: "Arthur Conan Doyle", bio: "British writer best known for creating the legendary character Sherlock Holmes." },
    { name: "Frank Herbert", bio: "American sci-fi author best known for the Dune saga." },
    { name: "Paulo Coelho", bio: "Brazilian author best known for his international bestseller The Alchemist." },
    { name: "Yann Martel", bio: "Canadian author famous for his philosophical novel Life of Pi." },
    { name: "James Clear", bio: "Author and speaker focused on habits, decision-making, and continuous improvement." },
    { name: "Yuval Noah Harari", bio: "Historian and philosopher known for his deep exploration of human history in Sapiens." },
    { name: "Ana Huang", bio: "Bestselling author known for her intense and popular contemporary romance novels like the Twisted series." },
    { name: "Christos Gage", bio: "Acclaimed writer for comics, film, and television, notably for Marvel's Spider-Man projects." }
];