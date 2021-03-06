
function search_table(input_class, table_class) {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementsByClassName(input_class)[0];
    filter = input.value.toUpperCase();
    table = document.getElementsByClassName(table_class)[0];
    
    // Loop through all table rows, and hide those who don't match the search query
    tr = table.getElementsByTagName("tr");

    for (row = 0; row < tr.length; row++) {
        if (tr[row].id != "table_sep_tr") {
            show = false;
            t_cols = tr[row].getElementsByTagName("td");

            for (col = 0; col < t_cols.length; col++) {
                td_element = t_cols[col];

                if (td_element && !show) {
                    td_value = td_element.textContent || td_element.innerText;

                    if (td_value.toUpperCase().indexOf(filter) > -1) {
                        show = true;
                    }
                }
            }

            if (show) {
                tr[row].style.display = "";
            } else {
                tr[row].style.display = "none";
            }
        }
    }
}