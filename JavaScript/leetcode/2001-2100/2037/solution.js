/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
function minMovesToSeat(seats, students) {
    // Sort both arrays
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);

    let totalMoves = 0;

    // Calculate the total moves required
    for (let i = 0; i < seats.length; i++) {
        totalMoves += Math.abs(seats[i] - students[i]);
    }

    return totalMoves;
}