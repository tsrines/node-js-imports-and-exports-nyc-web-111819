
export const getUserArguments = () => {
  return process.argv.slice(2);
}

console.log(getUserArguments());