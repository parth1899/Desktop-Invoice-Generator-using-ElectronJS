$(document).ready(function () {
    $('.content-section').hide();
    $('#create_customers').show();

    $('.nav-menu-item').click(function (e) {
        e.preventDefault();
        const sectionToShow = $(this).attr('href');
        $('.content-section').hide();
        $(sectionToShow).show();
    });
    // Function to update the height of the main menu based on window size
    $('.menu-toggle').click(function (e) {
        e.stopPropagation(); // Prevent event bubbling
        $('#mainMenu').toggleClass('expanded');
    });

    // Close menu when clicking outside
    $(document).click(function (e) {
        if (!$(e.target).closest('.main-menu').length) {
            $('#mainMenu').removeClass('expanded');
        }
    });

    $('.show-details').click(function () {
        $(this).next('.milestone-details').slideToggle(300);
    });
});
