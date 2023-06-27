
var ourWineClub = document.getElementById("our-wine-clubs-container");
var wineClubNotes = document.getElementById("wine-club-note-container");
var upcomingEvents = document.getElementById("upcoming-events-container");


// our wine club container

function openOurWineClub() {
    ourWineClub.style.transform="scale(1,1)";
}
function closeOurWineClub() {
    ourWineClub.style.transform="scale(0,0)";
}

// wine club notes container

function openWineClubNotes() {
    wineClubNotes.style.transform="scale(1,1)";
}
function closeWineClubNotes() {
    wineClubNotes.style.transform="scale(0,0)";
}
// upcoming ebents container

function openUpcomingEvents() {
    upcomingEvents.style.transform="scale(1,1)";
}
function closeUpcomingEvents() {
    upcomingEvents.style.transform="scale(0,0)";
}