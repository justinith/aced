var sendgrid  = require('sendgrid')('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');

// Input: target address, subs
exports.sendReceipt = function(targetEmail, subs){

    var Email = sendgrid.Email;

    var from_address = "team@justaced.com";
    
    // SUBJECT
    var subject = "ACED Recepit";

    // TEXT BODY
    var text_body = "Please get in touch with us if you have any concerns or questions about your session charge or any other inquiries.";

    // HTML BODY
    var html_body = "Please get in touch with us if you have any concerns or questions about your session charge or any other inquiries.";

    var email = new Email({
        to:         targetEmail,
        from:       from_address,
        subject:    subject,
        text:       text_body,
        html:       html_body
    });

    var recipients = [
        targetEmail
    ];
    for (var i = 0; i < recipients.length; i++) {
        email.addTo(recipients[i]);
    }

    // ADD THE CATEGORIES
    var categories = [
        "Recepit"
    ];
    for (var i = 0; i < categories.length; i++) {
        email.addCategory(categories[i]);
    }

    // ADD THE SUBSTITUTION VALUES

    // {
    //     "%name%": [
    //         "Ayush"
    //     ],
    //     "%class%": [
    //         "CSE 373"
    //     ],
    //     "%location%": [
    //         "Suzz"
    //     ],
    //     "%start_time%": [
    //         "10:59pm"
    //     ],
    //     "%end_time%": [
    //         "11:56pm"
    //     ],
    //     "%tutor_name%": [
    //         "Justin I."
    //     ],
    //     "%blocks%": [
    //         "3"
    //     ],
    //     "%subtotal": [
    //         "30"
    //     ],
    //     "%total%": [
    //         "31.20"
    //     ],
    //     "%date%": [
    //         "2/24/16"
    //     ]
    // }
    for (var tag in subs) {
        email.addSubstitution(tag, subs[tag]);
    }

    email.setFilters({
        'templates': {
            'settings': {
                'enable': 1,
                'template_id' : '3ac9aa8e-3004-4aeb-b52c-f4bf0e48aa68',
            }
        }
    });

    sendgrid.send(email, function(err, json) {
      if (err) { return console.error(err); }
      console.log(json);
    });
}