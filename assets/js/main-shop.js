var searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener('input', function(event) {
        searchInput.value = "hat";
    });
}

var searchInput = document.getElementById("searchInput");
var suggestions = ['Christmas hat', 'Green hat', 'Dog hats', 'Kids hats'];

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
    // Show a list of suggestions (you can implement your own UI logic here)
    var suggestionList = document.getElementById('suggestionList');
    if (suggestionList) {
        suggestionList.innerHTML = '';
        suggestions.forEach(function (suggestion) {
            var listItem = document.createElement('li');
            listItem.textContent = suggestion;
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
