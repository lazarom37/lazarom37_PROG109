window.onload = () => {
    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    };

    const numbersAction = document.getElementById('numbers-action');
    const numbersDisplay = document.getElementById('numbers-display'); //Both of these assign values (titled by the Parameters) from HTML to variables

    const languagesAction = document.getElementById('languages-action');
    const languagesDisplay = document.getElementById('languages-display'); //Same as above but for languages

    const techLanguagePopularityAction = document.getElementById('tech-language-names-action');
    const techLanguagePopularityDisplay = document.getElementById('tech-language-names-display');

    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5], //Assigns values for arrays
        languages: ["JavaScript", "HTML", "CSS", "Java", "C#", "Python", "C/C++"], //Assigns values for language
        languagePopularity: [
            {
                language: "JavaScript",
                rank: 1
            },
            {
                language: 'HTML',
                rank: 2
            },
            {
                language: 'CSS',
                rank: 3
            },
            {
                language: 'SQL',
                rank: 4
            },
            {
                language: 'Java',
                rank: 5
            }
        ] //End of languagePopularity
    }

    arrays.languagePopularity.sort(compareRank); //Sorts ranks by calling compareRank function
    arrays.numbers.sort((a, b) => a - b); //Sorts the numbers
    arrays.languages.sort(); //Sorts the languages

    numbersAction.onclick = () => {
        for (let number of arrays.numbers) { //Changes "number" to whatever value of "numbers"
            console.log(number);
            elfCode.appendToList(numbersDisplay, number);
        }
    }

    languagesAction.onclick = () => {
        for (let language of arrays.languages) { //Changes "language" to whatever value of "languages"
            console.log(language);
            elfCode.appendToList(languagesDisplay, language);
        }
    }
    techLanguagePopularityAction.onclick = () => {
        for (let namePopularity of arrays.languagePopularity) { //Changes "language" to whatever value of "languages"
            console.log(namePopularity);
            elfCode.appendToList(techLanguagePopularityDisplay, namePopularity);
        }
    }
    function compareRank(a, b) {
        const rankA = a.rank;
       const rankB = b.rank;
   
       let comparison = 0;
       if (rankA > rankB) {
           comparison = 1;
       } else if (rankA < rankB) {
           comparison = -1;
       }
       return comparison;
   }
}