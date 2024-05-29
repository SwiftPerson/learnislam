document.addEventListener('DOMContentLoaded', function () {
    const books = [
        {
            title: '99 Names Of Allaah (Memorise)',
            author: '',
            image: 'assets/names.png',
            description: 'A comprehensive guide to memorizing the 99 names of Allah, providing their meanings and significance.',
            pages: 15,
            category: 'Islamic Studies',
            pdf: 'assets/99 Names Of Allaah (Memorise).pdf'
        },
        {
            title: 'Gateway To Understanding Aqeedah, Fiqh, Sirah, Tafsir',
            author: 'Shykh Haythami',
            image: 'assets/aqeeda.png',
            description: 'An essential resource for understanding Islamic theology, jurisprudence, the life of the Prophet, and Quranic exegesis.',
            pages: 257,
            category: 'Islamic Studies',
            pdf: 'assets/Gateway To Understanding Aqeedah, Fiqh, Sirah, Tafsir.pdf'
        },
        {
            title: 'Qualities of the Slaves of ALLAH',
            author: '',
            image: 'assets/quality.png',
            description: 'A detailed exploration of the virtues and qualities that define a devout Muslim, as described in the Quran and Hadith.',
            pages: 42,
            category: 'Islamic Studies',
            pdf: 'assets/Qualities of the Slaves of ALLAH.pdf'
        },
        {
            title: 'Relation With ALLAH',
            author: '',
            image: 'assets/relation.png',
            description: 'Guidance on how to strengthen and maintain a personal relationship with Allah through various acts of worship and devotion.',
            pages: 70,
            category: 'Islamic Studies',
            pdf: 'assets/Relation With ALLAH.pdf'
        },
        {
            title: 'Salah of our Prophet Mohammed',
            author: '',
            image: 'assets/salah.png',
            description: 'A comprehensive guide on how to perform Salah (prayer) according to the practices of Prophet Mohammed (PBUH).',
            pages: 8,
            category: 'Islamic Studies',
            pdf: 'assets/Salah of our Prophet Mohammed.pdf'
        },
        {
            title: 'Selected Hadees For Students',
            author: '',
            image: 'assets/hadees.png',
            description: 'A collection of selected Hadiths tailored for students, emphasizing morals, ethics, and Islamic knowledge.',
            pages: 83,
            category: 'Islamic Studies',
            pdf: 'assets/Selected Hadees For Students.pdf'
        },
        {
            title: 'Forgotten Sunnah',
            author: '',
            image: 'assets/sunnah.png',
            description: 'An enlightening guide that brings to light the often overlooked or neglected practices of the Prophet Muhammad (PBUH). This book serves as a reminder of the small yet significant acts of worship and daily habits that were an integral part of the Prophet\'s life. It aims to revive these Sunnahs in our own lives, helping readers to develop a deeper connection with Islamic traditions and enhance their spiritual journey.',
            pages: 364,
            category: 'Islamic Studies',
            pdf: 'assets/Forgotten Sunnah.pdf'
        }
    ];

    const bookList = document.getElementById('books');
    const bookModal = document.getElementById('bookModal');
    const bookInfo = document.getElementById('book-info');
    const readPdfButton = document.getElementById('read-pdf');
    const relatedBooksList = document.getElementById('related-books-list');
    const closeButton = document.querySelector('.close');
    let currentBookPdf = '';

    function displayBooks(filteredBooks) {
        bookList.innerHTML = '';
        filteredBooks.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book');
            bookElement.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
            `;
            bookElement.addEventListener('click', () => {
                showBookDetails(book);
            });
            bookList.appendChild(bookElement);
        });
    }

    function showBookDetails(book) {
        bookInfo.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>${book.description}</p>
            <p>Pages: ${book.pages}</p>
        `;
        currentBookPdf = book.pdf;
        bookModal.style.display = 'block';
        showRelatedBooks(book.category);
    }

    function showRelatedBooks(category) {
        relatedBooksList.innerHTML = '';
        const relatedBooks = books.filter(b => b.category === category && b.title !== bookInfo.querySelector('h3').textContent);
        relatedBooks.forEach(book => {
            const relatedBookElement = document.createElement('div');
            relatedBookElement.classList.add('book');
            relatedBookElement.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
            `;
            relatedBookElement.addEventListener('click', () => {
                showBookDetails(book);
            });
            relatedBooksList.appendChild(relatedBookElement);
        });
    }

    window.openPDF = function () {
        window.open(currentBookPdf, '_blank');
    }

    window.searchBooks = function () {
        const searchTerm = document.getElementById('search').value.toLowerCase();
        const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm));
        displayBooks(filteredBooks);
    }

    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
    toggleDarkModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    closeButton.addEventListener('click', () => {
        bookModal.style.display = 'none';
    });

    window.onclick = function (event) {
        if (event.target === bookModal) {
            bookModal.style.display = 'none';
        }
    }

    displayBooks(books);
});
