import * as fs from "fs";
import { Game } from "./game";

const ROOT_PATH = "./src/logs";

function generateFilePaths(testIndex: number) {
  return {
    master: `${ROOT_PATH}/master_${testIndex}.txt`,
    actual: `${ROOT_PATH}/actual_${testIndex}.txt`,
  };
}

function redirectLogsToFile(path: string): void {
  console.log = function (text: string): void {
    fs.appendFileSync(
      path,
      `${text}
`
    );
  };
}

function eraseFile(path: string): void {
  fs.writeFileSync(path, "");
}

function runGoldenMaster(testIndex: number, scenario: () => void): void {
  const { master, actual } = generateFilePaths(testIndex);

  function createMaster(): void {
    redirectLogsToFile(master);
    scenario();
  }

  function compareActualToMaster(): void {
    eraseFile(actual);
    redirectLogsToFile(actual);
    scenario();
    expect(fs.readFileSync(actual)).toEqual(fs.readFileSync(master));
  }

  if (!fs.existsSync(master)) {
    createMaster();
  } else {
    compareActualToMaster();
  }
}

it("Scenario #0-FullGametest", function () {
  runGoldenMaster(0, function () {
    const game = new Game();
    game.add("Chloe");
    game.add("Omar");
    game.add("Jaquie");
    game.roll(1); // chloe
    game.wrongAnswer();
    game.roll(1); // omar
    game.wasCorrectlyAnswered();//1
    game.roll(1); // Jacquie
    game.wasCorrectlyAnswered();
    game.roll(6); // chloe
    game.wasCorrectlyAnswered();
    game.roll(1); // omar
    game.wasCorrectlyAnswered();//2
    game.roll(1); // Jacquie
    game.wasCorrectlyAnswered();
    game.roll(5); // chloe
    game.wrongAnswer();
    game.roll(1); // omar
    game.wasCorrectlyAnswered();//3
    game.roll(1); // Jacquie
    game.wrongAnswer();
    game.roll(5); // chloe
    game.wasCorrectlyAnswered();//1
    game.roll(1); // omar
    game.wasCorrectlyAnswered();//4
    game.roll(2); // Jacquie
    game.wasCorrectlyAnswered();
    game.roll(6); // chloe
    game.wasCorrectlyAnswered();//1
    game.roll(1); // omar
    game.wasCorrectlyAnswered();//5
    game.roll(1); // Jacquie
    game.wasCorrectlyAnswered();
    game.roll(5); // chloe
    game.wasCorrectlyAnswered();//1
    game.roll(1); // omar
    const hasWon = game.wasCorrectlyAnswered(); // 6
    expect(hasWon).toEqual(false);
    game.roll(5); // chloe
    game.wasCorrectlyAnswered();//1
  });
});

it("Scenario #1-allCases", function () {
  runGoldenMaster(1, function () {
    const game = new Game();
    game.add("Chloe");
    game.roll(1); // chloe
    game.wasCorrectlyAnswered();
    game.roll(1); // chloe
    game.wasCorrectlyAnswered();
    game.roll(1); // chloe
    game.wasCorrectlyAnswered();
    game.roll(1); // chloe
    game.wasCorrectlyAnswered();
    game.roll(1); // chloe
    game.wasCorrectlyAnswered();
    game.roll(1); // chloe
    game.wasCorrectlyAnswered();
    game.roll(1); // chloe
    game.wasCorrectlyAnswered();
    game.roll(1); // chloe
    game.wasCorrectlyAnswered();
    game.roll(1); // chloe
    game.wasCorrectlyAnswered();
    game.roll(1); // chloe
    game.wasCorrectlyAnswered();
    game.roll(1); // chloe
    game.wasCorrectlyAnswered();
    game.roll(1); // chloe
    game.wasCorrectlyAnswered();
  });
});