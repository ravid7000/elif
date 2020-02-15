interface ElifTypes {
  convert: (GQuery: string) => string;
}

const Elif = (config: object): ElifTypes => {
  return {
    convert: (GQuery: string): string => {
      return "DBQuery";
    },
  };
};

it("should pass test", () => {
    const elif = Elif({
      database: {
        user: "",
        password: "",
        type: "postgres",
      },
    });
    elif.convert(`
      query {

      }
    `);
});
