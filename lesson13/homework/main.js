// console.log('start');
// setTimeout(() => {
//     let counter = 1;
//     console.log(counter, '7:00 - Підйом');
//     setTimeout(() => {
//         counter++;
//         console.log(counter, '7:10 - Зарядка');
//         setTimeout(() => {
//             counter++;
//             console.log(counter, '7:20 - Умивання');
//             setTimeout(() => {
//                 counter++;
//                 console.log(counter, '7:30 - Сніданок');
//                 setTimeout(() => {
//                     counter++;
//                     console.log(counter, '8:00 - Вихід на роботу');
//                     setTimeout(() => {
//                         counter++;
//                         console.log(counter, '9:00 - Початок роботи');
//                         setTimeout(() => {
//                             counter++;
//                             console.log(counter, '13:00 - Обід');
//                             setTimeout(() => {
//                                 counter++;
//                                 console.log(counter, '14:00 - Продовження роботи');
//                                 setTimeout(() => {
//                                     counter++;
//                                     console.log(counter, '18:00 - Закінчення роботи');
//                                     setTimeout(() => {
//                                         counter++;
//                                         console.log(counter, '19:00 - Прихід додому');
//                                         setTimeout(() => {
//                                             counter++;
//                                             console.log(counter, '19:15 - Душ');
//                                             setTimeout(() => {
//                                                 counter++;
//                                                 console.log(counter, '19:30 - Вечеря');
//                                                 setTimeout(() => {
//                                                     counter++;
//                                                     console.log(counter, '20:00 - Лекція в Okten');
//                                                     setTimeout(() => {
//                                                         counter++;
//                                                         console.log(counter, '21:30 - Закінчення лекції');
//                                                         setTimeout(() => {
//                                                             counter++;
//                                                             console.log(counter, '21:40 - Початок виконання homework i classwork');
//                                                             setTimeout(() => {
//                                                                 counter++;
//                                                                 console.log(counter, '23:45 - Закінчення виконання homework i classwork');
//                                                                 setTimeout(() => {
//                                                                     counter++;
//                                                                     console.log(counter, '00:00 - Сон');
//                                                                     setTimeout(() => {
//                                                                         counter++;
//                                                                         console.log('end');
//                                                                     }, 1000)
//                                                                 }, 1000)
//                                                             }, 2000)
//                                                         }, 2000)
//                                                     }, 2000)
//                                                 }, 2000)
//                                             }, 2000)
//                                         }, 2000)
//                                     }, 2000)
//                                 }, 2000)
//                             }, 2000)
//                         }, 2000)
//                     }, 2000)
//                 }, 2000)
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }, 2000)


new Promise((resolve, reject) => {
    let counter = 1;
    setTimeout(() => {
        console.log(counter, '7:00 - Підйом');
        counter++;
        resolve(counter);

    }, 1000);
})
    .then((counter) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(counter, '7:10 - Зарядка');
                counter++;
                resolve(counter);
            }, 2000)
        })
    })
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(counter, '7:20 - Умивання');
                counter++;
                resolve(counter);

            }, 2000)
        });
    })
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(counter, '7:30 - Сніданок');
                counter++;
                resolve(counter);

            }, 2000)
        });
    })
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(counter, '8:00 - Вихід на роботу');
                counter++;
                resolve(counter);

            }, 2000)
        });
    })
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(counter, '9:00 - Початок роботи');
                counter++;
                resolve(counter);

            }, 2000)
        });
    })
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(counter, '13:00 - Обід');
                counter++;
                resolve(counter);

            }, 2000)
        });
    })
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(counter, '14:00 - Продовження роботи');
                counter++;
                resolve(counter);

            }, 2000)
        });
    })
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(counter, '18:00 - Закінчення роботи');
                counter++;
                resolve(counter);

            }, 2000)
        });
    })
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(counter, '19:00 - Прихід додому');
                counter++;
                resolve(counter);

            }, 2000)
        });
    })
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(counter, '19:15 - Душ');
                counter++;
                resolve(counter);

            }, 2000)
        });
    })
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(counter, '19:30 - Вечеря');
                counter++;
                resolve(counter);

            }, 2000)
        });
    })
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(counter, '20:00 - Лекція в Okten');
                counter++;
                resolve(counter);

            }, 2000)
        });
    })
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(counter, '21:30 - Закінчення лекції');
                counter++;
                resolve(counter);

            }, 2000)
        });
    })
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(counter, '21:40 - Початок виконання homework i classwork');
                counter++;
                resolve(counter);

            }, 2000)
        });
    })
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(counter, '23:45 - Закінчення виконання homework i classwork');
                counter++;
                resolve(counter);

            }, 2000)
        });
    })
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(counter, '00:00 - Сон');
                counter++;
                resolve(counter);

            }, 2000)
        });
    });



