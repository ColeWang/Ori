interface Test {
  name: string;
}

export function test (test: Test): void {
  console.log(test.name)
}
