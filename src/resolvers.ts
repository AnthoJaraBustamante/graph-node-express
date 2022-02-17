import { adjectives, uniqueNamesGenerator } from 'unique-names-generator';
import { Task, tasks } from "./sample";

export default {
    Query: {
        hello: () => 'Hello world with GraphQL',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        age: () => 18,
        date: () => new Date().toISOString(),
        tasks: () => tasks,
    },
    Mutation: {
        createTask: (parent: unknown, { input }: any): Task[] => {
            const randomNumber = Math.round(Math.random() * 100000);
            const task: Task = {
                _id: tasks.length + 1,
                description: input.description ?? uniqueNamesGenerator({
                    dictionaries: [adjectives, adjectives, adjectives, adjectives, adjectives, adjectives, adjectives],
                    separator: ' ',


                }),
                number: input.number ?? randomNumber,
                title: new Date().toISOString(),
            }
            tasks.push(task);

            return tasks;
        },
    },
};   