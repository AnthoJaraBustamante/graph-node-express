"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unique_names_generator_1 = require("unique-names-generator");
const sample_1 = require("./sample");
exports.default = {
    Query: {
        hello: () => 'Hello world with GraphQL',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        age: () => 18,
        date: () => new Date().toISOString(),
        tasks: () => sample_1.tasks,
    },
    Mutation: {
        createTask: (parent, { input }) => {
            const randomNumber = Math.round(Math.random() * 100000);
            const task = {
                _id: sample_1.tasks.length + 1,
                description: input.description ?? (0, unique_names_generator_1.uniqueNamesGenerator)({
                    dictionaries: [unique_names_generator_1.adjectives, unique_names_generator_1.adjectives, unique_names_generator_1.adjectives, unique_names_generator_1.adjectives, unique_names_generator_1.adjectives, unique_names_generator_1.adjectives, unique_names_generator_1.adjectives],
                    separator: ' ',
                }),
                number: input.number ?? randomNumber,
                title: new Date().toISOString(),
            };
            sample_1.tasks.push(task);
            return sample_1.tasks;
        },
    },
};
