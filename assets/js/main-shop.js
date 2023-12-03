var searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener('input', function(event) {
        searchInput.value = "hat";
    });
}

var searchInput = document.getElementById("searchInput");
var suggestions = ['Christmas hat', 'Green hat', 'Dog hats', 'Kids hats'];
var suggestionUrls = [
    'christmas-hat.html',
    'https://example.com/green-hat',
    'https://example.com/dog-hats',
    'https://example.com/kids-hats'
];

if (searchInput) {
    searchInput.addEventListener('input', function (event) {
        var inputValue = event.target.value.toLowerCase();

        if (inputValue.startsWith('hat')) {
            // Auto-fill 'hat' and show suggestions
            searchInput.value = 'hat';

            // Show suggestions
            showSuggestions();
        } else {
            // Clear suggestions if the input doesn't start with 'hat'
            clearSuggestions();
        }
    });
}

function showSuggestions() {
    // Show a list of suggestions 
    var suggestionList = document.getElementById('suggestionList');
    if (suggestionList) {
        suggestionList.innerHTML = '';
        suggestions.forEach(function (suggestion, index) {
            var listItem = document.createElement('li');
            var link = document.createElement('a')
            link.textContent = suggestion;
            link.href = suggestionUrls[index];
            listItem.appendChild(link);
            suggestionList.appendChild(listItem);
        });
    }
}

function clearSuggestions() {
    // Clear the list of suggestions
    var suggestionList = document.getElementById('suggestionList');
    if (suggestionList) {
        suggestionList.innerHTML = '';
    }
}
