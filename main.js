// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
console.log('Objective-Reasoning')

//isAdmin
// Check if user is ADMIN or not.
// Return true|false value
function isAdmin(user) {

    // check user role key for ADMIN status | Return
    return user.userRole === 'ADMIN'
}


//getEmail
//Return email
function getEmail(user) {
    // Create user email key | all lowercase: 
    // firstname.lastname@CodeImmersives.com
    user.email = user.firstName.toLowerCase() + '.' + user.lastName.toLowerCase() + '@codeimmersives.com';


    // Return user email key
    return user.email;
}


//  getPlayistLength
// Return number of songs in received playlist
function getPlaylistLength(playlist) {
    // Return number of items in the array
    // playlist.songs key
    return playlist.songs.length;
}


// getHardestHomework([])
// Return the lowest graded key for assignments
function getHardestHomework(homework) {
    if (homework.length === 0) {
        return ''
    }
    let lowestScore = 100;
    for (let i = 0; i < homework.length; i++) {
        const tempSum = homework[i].averageScore;
        if (tempSum < lowestScore) {
            lowestScore = tempSum;
        }



    }
    for (let i = 0; i < homework.length; i++) {
        const toughestWork = homework[i];
        if (toughestWork.averageScore === lowestScore) { return toughestWork.name }

    }
    if (homework.averageScore === lowestScore) {
        return homework.name;

    }
    console.log(lowestScore)
}



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};