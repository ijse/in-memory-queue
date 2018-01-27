/*
const queueService = require('../services/queue.service');
const messageService = require();

const test = function (topic) {
    const arr = [];
    for (let i = 1; i <= 5; i++) {
        const msgJson = {
            code: i,
            value: `message ${i}`
        };
        arr.push(createMessage(topic, JSON.stringify(msgJson)));
    }

    return Promise.mapSeries(arr)
        .then(() => {
            console.log(`All messages created for ${topic}`);
        });
};

const inti = function () {
    queueService.QueueConfiguration.size = 100;
    queueService.QueueConfiguration.maxRetry = 9;
    topicService.createTopic('topic1');
    topicService.createTopic('topic4');
    consumerService.createConsumer('topic1', 1, message => {
        console.log(`Message received at consumer for topic1 message`);
        return Promise.resolve();
    }).then(() => {
        return test('topic4');
    });

    consumerService.createConsumer('topic1', 1, message => {
        console.log(`Message received at consumer for topic1 message`);
        return Promise.resolve();
    }).then(() => {
        consumerService.createConsumer('topic1', 2, message => {
            console.log(`Message received at consumer for topic1 message`);
            return Promise.resolve();
        });
        consumerService.createConsumer('topic1', 3, message => {
            console.log(`Message received at consumer for topic1 message`);
            return Promise.resolve();
        });
        consumerService.createConsumer('topic4', 2, message => {
            console.log(`In consumer handler with priority 2, this will be rejected for topic1 for message ${message.getId()}`);
            return Promise.reject(`this will be rejected for topic4 for message ${message.getId()}`);
        });
    }).then(() => {
        return test('topic2');
    }).then(() => {
        return consumerService.createConsumer('topic4', 99, message => {
            console.log(`Message received 99 at consumer for topic4 message`);
            return Promise.resolve();
        }).then(() => {
            return test('topic3')
                .then(test('topic4'));
        });
    });
};

inti();*/