const { createApp } = Vue

createApp({
    data() {
        return {
            activeContact: -1,
            userMessage: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.png',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.png',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_5.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],

        }
    },

    methods: {
        selectImage(i) {
            console.log(i);
            this.activeContact = i
        },
        getLastMessage(messages) {
            // console.log(messages)
            const lastMsgIndex = messages.length - 1
            return messages[lastMsgIndex].message
        },
        getHourlastMessage(messages) {
            const lastMsgIndex = messages.length - 1
            const dateLastMessage = messages[lastMsgIndex].date
            // console.log(dateLastMessage)
            const hourMessage = dateLastMessage.split(' ')[1]
            // console.log(hourMessage);
            const hour = hourMessage.split(':')[0]
            const Minuts = hourMessage.split(':')[1]
            return `${hour}:${Minuts}`
        },
        currentDate() {
            const date = new Date();

            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let currentDate = `${day}-${month}-${year}`;
            return currentDate
        },
        currentHour() {
            const d = new Date();
            let hour = d.getHours()
            let minut = d.getMinutes()
            console.log(hour);
            console.log(minut);
            let currentTime = `${hour}:${minut}`
            return currentTime;
        },
        messagePusch(index) {
            console.log(index)
            console.log(this.userMessage);
            const structureMssageUser = {
                date: `${this.currentDate()}, ${this.currentHour()}`,
                message: this.userMessage,
                status: 'sent'
            }
            console.log(structureMssageUser);
            console.log(this.contacts[1].messages[2].message);
            console.log(this.contacts[0].messages);
            if (this.userMessage.length > 0) {
                this.contacts[index].messages.push(structureMssageUser)
                this.userMessage = ''
                setTimeout(() => {
                    this.autoMessage(index)
                }, 1000);
            }
        },

        randomContactArrayNumber() {
            let min = 0
            let max = 7
            const random =  Math.floor(Math.random() * (max - min + 1) ) + min;
            return random;
        },
        randomMessageArrayNumber() {
            let min = 0
            let max = this.contacts[this.randomContactArrayNumber()].messages.length
            const random =  Math.floor(Math.random() * (max - min ) ) + min;
            return random;
        },

        autoMessage(index) {
            console.log('messaggio automatico');
            const structureMssageUser = {
                date: `${this.currentDate()}, ${this.currentHour()}`,
                message: this.contacts[this.randomContactArrayNumber()].messages[this.randomMessageArrayNumber()].message,
                status: 'received'
            }
            this.contacts[index].messages.push(structureMssageUser)

        }

    },
    mounted() {
        console.log(this.currentHour())
        console.log(this.randomContactArrayNumber())
        console.log(this.randomMessageArrayNumber())
    },
}).mount('#app')
