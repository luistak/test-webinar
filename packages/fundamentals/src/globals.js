const test = async (title, callback) => {
  try {
    await callback()
    console.log(`✓ ${title}`)
  } catch (error) {
    console.error(`✕ ${title}`)
    console.error(error)
  }
};

const expect = (result) => ({
  toBe: (expected) => {
    if (result !== expected) {
      throw new Error(`${result} should be: ${expected}`);
    }
  }
});

global.test = test;
global.expect = expect;