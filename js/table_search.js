

function search_table() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementsByClassName("search_input")[0];
    filter = input.value.toUpperCase();
    table = document.getElementsByClassName("searchable")[0];
    tr = table.getElementsByTagName("tr");
    
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td_class = tr[i].getElementsByTagName("td")[0];
        td_country = tr[i].getElementsByTagName("td")[1];
        td_professor = tr[i].getElementsByTagName("td")[2];

        if (td_class) {
            class_value = td_class.textContent || td_class.innerText;
            country_value = td_country.textContent || td_country.innerText;
            professor_value = td_professor.textContent || td_professor.innerText;
            if (class_value.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else if (country_value.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else if (professor_value.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        } 
    }
}