/**
    states.js includes constant for all
    possible states in the application flow
*/

module.exports = {
    CANCELED: 0,                // Request Cancelled
    RAW_MSG: 1,                 // Recieved Message
    PENDING_TRANSLATION: 2,     // Sent for Translation
    TRANSLATED_MSG: 3,          // Recieved Translation
    TUTORS_REQUESTED: 4,        // Sent Messages to Tutors
    TUTOR_FOUND: 5,             // Tutor Responded
    PENING_CONFIRMATION: 6,     // Sent Tutor Card to User
    SESION_CONFIRMED: 7,        // Sent Tutor Confirmation
    SESSION_START: 8,           // Session Started
    SESSION_END: 9,             // Session Ended -- Payment Processed -- Review Requested
    RECIEPT_SENT: 10            // Reciept Sent (sms and email)
}
