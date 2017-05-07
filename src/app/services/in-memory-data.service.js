"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var quizes = [
            { id: 1, name: 'Quiz No1',
                questions: [
                    {
                        id: 1010,
                        name: 'Yes?',
                        options: [
                            {
                                id: 1055,
                                questionId: 1010,
                                name: 'yes',
                                isAnswer: false
                            },
                            {
                                id: 1056,
                                questionId: 1010,
                                name: 'Yes',
                                isAnswer: true
                            },
                            {
                                id: 1057,
                                questionId: 1010,
                                name: 'no',
                                isAnswer: false
                            },
                            {
                                id: 1058,
                                questionId: 1010,
                                name: 'maybe',
                                isAnswer: false
                            }
                        ]
                    },
                    {
                        id: 1011,
                        name: 'What is the colour of the sky?',
                        options: [
                            {
                                id: 1059,
                                questionId: 1011,
                                name: 'blue',
                                isAnswer: true
                            },
                            {
                                id: 1060,
                                questionId: 1011,
                                name: 'green',
                                isAnswer: false
                            },
                            {
                                id: 1061,
                                questionId: 1011,
                                name: 'pink',
                                isAnswer: false
                            },
                            {
                                id: 1062,
                                questionId: 1011,
                                name: 'yellow',
                                isAnswer: false
                            }
                        ]
                    },
                    {
                        id: 1012,
                        name: '1+2=?',
                        options: [
                            {
                                id: 1063,
                                questionId: 1012,
                                name: '1',
                                isAnswer: false
                            },
                            {
                                id: 1064,
                                questionId: 1012,
                                name: '0',
                                isAnswer: false
                            },
                            {
                                id: 1065,
                                questionId: 1012,
                                name: '4',
                                isAnswer: false
                            },
                            {
                                id: 1066,
                                questionId: 1012,
                                name: '3',
                                isAnswer: true
                            }
                        ]
                    }
                ]
            },
            { id: 2, name: 'Quiz2',
                questions: [
                    {
                        id: 21,
                        name: 'Where is Szeged?',
                        options: [
                            {
                                id: 211,
                                questionId: 21,
                                name: 'in Hungary',
                                isAnswer: true
                            },
                            {
                                id: 212,
                                questionId: 21,
                                name: 'in Asia',
                                isAnswer: false
                            },
                            {
                                id: 213,
                                questionId: 21,
                                name: 'in NeverLand',
                                isAnswer: false
                            },
                            {
                                id: 214,
                                questionId: 21,
                                name: 'in Michigan',
                                isAnswer: false
                            }
                        ]
                    },
                    {
                        id: 22,
                        name: '0112358?',
                        options: [
                            {
                                id: 221,
                                questionId: 22,
                                name: '?',
                                isAnswer: false
                            },
                            {
                                id: 222,
                                questionId: 22,
                                name: '121',
                                isAnswer: false
                            },
                            {
                                id: 223,
                                questionId: 22,
                                name: '13',
                                isAnswer: true
                            },
                            {
                                id: 224,
                                questionId: 22,
                                name: '0',
                                isAnswer: false
                            }
                        ]
                    },
                    {
                        id: 23,
                        name: 'Triss or Yen?',
                        options: [
                            {
                                id: 231,
                                questionId: 23,
                                name: 'Triss',
                                isAnswer: false
                            },
                            {
                                id: 232,
                                questionId: 23,
                                name: 'Yen',
                                isAnswer: false
                            },
                            {
                                id: 233,
                                questionId: 23,
                                name: 'Both',
                                isAnswer: false
                            },
                            {
                                id: 234,
                                questionId: 23,
                                name: 'Geralt',
                                isAnswer: true
                            }
                        ]
                    }
                ]
            }
        ];
        return { quizes: quizes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map