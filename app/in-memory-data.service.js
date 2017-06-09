"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var users = [
            {
                id: 1,
                firstName: "Bob",
                lastName: "Jones",
                occupation: "Apple",
                major: "CS",
                college: "USC",
                degree: "CS",
                specialization: "IT",
                email: "bob.jones@gmail.com",
                phone: 1234567890,
                photo: null
            },
            {
                id: 2,
                firstName: "Bill",
                lastName: "Jank",
                occupation: "google",
                major: "EE",
                college: "UCSD",
                degree: "EE",
                specialization: "Dance",
                email: "bill.jank@gmail.com",
                phone: 1987654321,
                photo: null
            },
            {
                id: 3,
                firstName: "Sam",
                lastName: "Jack",
                occupation: "google",
                major: "EE",
                college: "UCSD",
                degree: "EE",
                specialization: "Dance",
                email: "bill.jank@gmail.com",
                phone: 3987654321,
                photo: null
            },
            {
                id: 4,
                firstName: "Jill",
                lastName: "Hill",
                occupation: "google",
                major: "EE",
                college: "UCSD",
                degree: "EE",
                specialization: "Dance",
                email: "bill.jank@gmail.com",
                phone: 2987654321,
                photo: null
            },
            {
                id: 5,
                firstName: "Mary",
                lastName: "Bary",
                occupation: "google",
                major: "EE",
                college: "UCSD",
                degree: "EE",
                specialization: "Dance",
                email: "bill.jank@gmail.com",
                phone: 4987654321,
                photo: null
            },
            {
                id: 6,
                firstName: "Samantha",
                lastName: "Wig",
                occupation: "google",
                major: "EE",
                college: "UCSD",
                degree: "EE",
                specialization: "Dance",
                email: "bill.jank@gmail.com",
                phone: 5987654321,
                photo: null
            }
        ];
        return { users: users };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map