import { from, of } from 'rxjs';

// Simulate fetching API
const getFirst = () => {
    return { count: 100 };
};
const getSecond = () => [1, 2, 3];

export const dependencies = {
    getFirstAPI: (...args: Parameters<typeof getFirst>) => of(getFirst(...args)),
    getSecondAPI: (...args: Parameters<typeof getSecond>) => from(getSecond(...args)),
    // patchSecondAPI: (...args: Parameters<typeof patchSecond>) =>
    //   from(patchSecond(...args))
};

export type Dependencies = typeof dependencies;
