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
                photo: null,
                bio: "\"All Star\" is composed in the key of F-sharp major with a tempo of 104 beats per minute.[3] According to a 2017 interview, songwriter Greg Camp was interested in exploring several layers of meaning with the stripped-down song: the social battle cry, the sports anthem, the fanbase affirmation, the poetic lyricism, the sweeping melody, the inclusion, the artistic music videos, and more."
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
                photo: null,
                bio: "\"All Star\" is composed in the key of F-sharp major with a tempo of 104 beats per minute.[3] According to a 2017 interview, songwriter Greg Camp was interested in exploring several layers of meaning with the stripped-down song: the social battle cry, the sports anthem, the fanbase affirmation, the poetic lyricism, the sweeping melody, the inclusion, the artistic music videos, and more."
            },
            {
                id: 3,
                title: "student",
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
                classification: "student",
                photo: null,
                bio: "\"All Star\" is composed in the key of F-sharp major with a tempo of 104 beats per minute.[3] According to a 2017 interview, songwriter Greg Camp was interested in exploring several layers of meaning with the stripped-down song: the social battle cry, the sports anthem, the fanbase affirmation, the poetic lyricism, the sweeping melody, the inclusion, the artistic music videos, and more."
            },
            {
                id: 4,
                title: "student",
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
                classification: "student",
                photo: null,
                bio: "\"All Star\" is composed in the key of F-sharp major with a tempo of 104 beats per minute.[3] According to a 2017 interview, songwriter Greg Camp was interested in exploring several layers of meaning with the stripped-down song: the social battle cry, the sports anthem, the fanbase affirmation, the poetic lyricism, the sweeping melody, the inclusion, the artistic music videos, and more."
            },
            {
                id: 5,
                title: "student",
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
                photo: null,
                bio: "\"All Star\" is composed in the key of F-sharp major with a tempo of 104 beats per minute.[3] According to a 2017 interview, songwriter Greg Camp was interested in exploring several layers of meaning with the stripped-down song: the social battle cry, the sports anthem, the fanbase affirmation, the poetic lyricism, the sweeping melody, the inclusion, the artistic music videos, and more."
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
                photo: null,
                bio: "\"All Star\" is composed in the key of F-sharp major with a tempo of 104 beats per minute.[3] According to a 2017 interview, songwriter Greg Camp was interested in exploring several layers of meaning with the stripped-down song: the social battle cry, the sports anthem, the fanbase affirmation, the poetic lyricism, the sweeping melody, the inclusion, the artistic music videos, and more."
            }
        ];
        return { users: users };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map