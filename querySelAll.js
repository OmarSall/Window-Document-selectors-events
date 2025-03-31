const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
    paragraph.classList.add("large-text");
});

paragraphs.forEach(paragraph => {
    paragraph.classList.add("red-text");
    paragraph.classList.add("underline");
});