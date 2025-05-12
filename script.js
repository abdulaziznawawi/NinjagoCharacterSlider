// Query selector to get all list items within the thumbnail container
// These represent the clickable character thumbnails at the bottom of the slider
const thumbs = document.querySelectorAll('.thumb li');

// Query selector to get all info slider containers
// These hold the text information (name, description, etc.) for each character
const infoSlider = document.querySelectorAll('.info-slider');

// Query selector to get all image slider containers
// These hold the main character images that will slide horizontally
const imageSlider = document.querySelectorAll('.image-slider');

// Query selector to get all carousel items
// These are the main container elements for each character's content
const items = document.querySelectorAll('.item');

// Define an array of background colors that correspond to each character
// Each color matches the character's theme or elemental power
const backgrounds = [
    'gainsboro',  // Light gray color for Master Wu - represents wisdom and age
    'green',      // Green for Lloyd - the green ninja, master of energy
    'darkred',    // Dark red for Kai - the red ninja, master of fire
    'darkblue',   // Dark blue for Jay - the blue ninja, master of lightning
    '#363636',    // Dark gray for Cole - the black ninja, master of earth
    'gray',       // Gray for Zane - the white ninja, master of ice
    '#607D8B',    // Blue-gray for Nya - the water ninja, master of water
];

// Initialize a variable to keep track of which character is currently displayed
// Starts at 0 (first character) by default
let index = 0;

// Set the initial background color for the first active item
// This ensures the slider has the correct background when the page loads
document.querySelector('.item.active .background').style.backgroundColor = backgrounds[0];

// Add click event listeners to each thumbnail image
// This creates the interactive functionality of the slider
thumbs.forEach((thumb, ind) => {
    // When a thumbnail is clicked, execute this function
    thumb.addEventListener('click', () => {
        // Log which thumbnail was clicked for debugging purposes
        console.log(`Thumbnail ${ind} clicked!`);

        // Find the currently selected thumbnail
        // This is used to remove the selection styling from the previous selection
        const selectedThumb = document.querySelector('.thumb .selected');
        if (selectedThumb) {
            // Remove the 'selected' visual state from the previous thumbnail
            selectedThumb.classList.remove('selected');
            console.log('Removed selected class from previous thumbnail.');
        }

        // Add the 'selected' class to the clicked thumbnail
        // This provides visual feedback of which character is currently selected
        thumb.classList.add('selected');
        console.log('Added selected class to clicked thumbnail.');

        // Find the currently active item in the main display
        // This is used to remove the active state from the previous selection
        const activeItem = document.querySelector('.item.active');
        if (activeItem) {
            // Remove the 'active' state from the previous item
            activeItem.classList.remove('active');
            console.log('Removed active class from previous item.');
        }

        // Update the index to match the clicked thumbnail's position
        // This keeps track of which character should be displayed
        index = ind;

        // Add the 'active' class to the newly selected item
        // This makes the new character's content visible
        items[index].classList.add('active');
        console.log(`Added active class to item at index ${index}.`);

        // Find the background element of the newly active item
        // This is used to update the background color
        const backgroundElement = items[index].querySelector('.background');
        if (backgroundElement) {
            // If the background element exists, update its color
            console.log(`Found background element for item ${index}.`);
            backgroundElement.style.background = backgrounds[index];
            console.log(`Updated background color to ${backgrounds[index]}.`);
        } else {
            // Log an error if the background element isn't found
            console.error(`Background element not found for item ${index}.`);
        }

        // Update the vertical position of the info slider
        // This moves the text content to show the selected character's information
        infoSlider.forEach(slide => {
            slide.style.transform = `translateY(${index * -100}%)`;
            console.log(`Info slider transform: translateY(${index * -100}%)`);
        });

        // Update the horizontal position of the image slider
        // This moves the images to show the selected character's image
        imageSlider.forEach(slide => {
            slide.style.transform = `translateX(${index * -100}%)`;
            console.log(`Image slider transform: translateX(${index * -100}%)`);
        });
    });
});