
document.addEventListener('DOMContentLoaded', function() {
    const selectedItems = document.getElementById('selectedItems');
    const dropdown = document.querySelector('.dropdown');
    const checkboxes = document.querySelectorAll('.dropdown input[type="checkbox"]');

    selectedItems.addEventListener('click', function() {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        selectedItems.classList.toggle('selected');
    });

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            let selected = [];
            checkboxes.forEach(function(checkbox) {
                if (checkbox.checked) {
                    selected.push(checkbox.parentElement.textContent.trim());
                }
            });
            selectedItems.textContent = selected.length > 0 ? selected.join(', ') : 'Select employees';
        });
    });


    document.addEventListener('click', function(e) {
        if (!e.target.closest('.custom-select')) {
            dropdown.style.display = 'none';
            selectedItems.classList.remove('selected');
        }
    });
});
