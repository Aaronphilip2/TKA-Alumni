"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var users = [
            {
                id: 1,
                title: "Senior Engineer",
                firstName: "Bob",
                lastName: "Jones",
                occupation: "Apple",
                major: "CS",
                degree: "B.S.",
                college: "USC",
                specialization: "IT",
                email: "bob.jones@gmail.com",
                phone: 1234567890,
                city: "Mountain View",
                state: "California",
                classification: "alumni",
                photo: null
            },
            {
                id: 2,
                title: "Senior Engineer",
                firstName: "Bill",
                lastName: "Jank",
                occupation: "google",
                major: "EE",
                degree: "B.S.",
                college: "UCSD",
                specialization: "Dance",
                email: "bill.jank@gmail.com",
                phone: 1987654321,
                city: "Mountain View",
                state: "California",
                classification: "alumni",
                photo: null
            },
            {
                id: 3,
                title: "Senior Engineer",
                firstName: "Sam",
                lastName: "Jack",
                occupation: "google",
                major: "EE",
                degree: "B.S.",
                college: "UCSD",
                specialization: "Dance",
                email: "bill.jank@gmail.com",
                phone: 3987654321,
                city: "Mountain View",
                state: "California",
                classification: "alumni",
                photo: null
            },
            {
                id: 4,
                title: "Senior Engineer",
                firstName: "Jill",
                lastName: "Hill",
                occupation: "google",
                major: "EE",
                degree: "B.S.",
                college: "UCSD",
                specialization: "Dance",
                email: "bill.jank@gmail.com",
                phone: 2987654321,
                city: "Mountain View",
                state: "California",
                classification: "alumni",
                photo: null
            },
            {
                id: 5,
                title: "Senior Engineer",
                firstName: "Mary",
                lastName: "Bary",
                occupation: "google",
                major: "EE",
                degree: "B.S.",
                college: "UCSD",
                specialization: "Dance",
                email: "bill.jank@gmail.com",
                phone: 4987654321,
                city: "Mountain View",
                state: "California",
                classification: "alumni",
                photo: null
            },
            {
                id: 6,
                title: "Senior Engineer",
                firstName: "Samantha",
                lastName: "Wig",
                occupation: "google",
                major: "EE",
                degree: "B.S.",
                college: "UCSD",
                specialization: "Dance",
                email: "bill.jank@gmail.com",
                phone: 5987654321,
                city: "Mountain View",
                state: "California",
                classification: "alumni",
                photo: null
            }
        ];
        return { users: users };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map