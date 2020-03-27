import { from } from 'rxjs';

const getFirst = () => [1, 2, 3];

export const dependencies = {
    getFirstAPI: (...args: Parameters<typeof getFirst>) => from(getFirst(...args)),
    // getSecondAPI: (...args: Parameters<typeof getHeroProfile>) =>
    //   from(getSecond(...args)),
    // patchSecondAPI: (...args: Parameters<typeof patchHeroProfile>) =>
    //   from(patchSecond(...args))
};

export type Dependencies = typeof dependencies;
