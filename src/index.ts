export default (date?: Date) => (date?.getMilliseconds() ?? Date.now()) ** 2;
