describe('Basketball Stats', function () {
  
  describe('numPointsScored', function () {
    it('should return points scored by a player', function () {
      expect(numPointsScored('Alan Anderson')).to.equal(22);
      expect(numPointsScored('Ben Gordon')).to.equal(8);
    });
  });

  describe('shoeSize', function () {
    it('should return shoe size of a player', function () {
      expect(shoeSize('Alan Anderson')).to.equal(16);
      expect(shoeSize('Ben Gordon')).to.equal(15);
    });
  });
  
  describe('teamColors', function () {
    it('should return team colors', function () {
      expect(teamColors('Brooklyn Nets')).to.deep.equal(['Black', 'White']);
      expect(teamColors('Charlotte Hornets')).to.deep.equal(['Turquoise', 'Purple']);
    });
  });
  
  describe('teamNames', function () {
    it('should return team names', function () {
      expect(teamNames()).to.deep.equal(['Brooklyn Nets', 'Charlotte Hornets']);
    });
  });

  describe('playerNumbers', function () {
    it('should return player numbers of a team', function () {
      expect(playerNumbers('Brooklyn Nets')).to.deep.equal([0, 30, 11, 1, 31]);
      expect(playerNumbers('Charlotte Hornets')).to.deep.equal([4, 0, 2, 8, 33]);
    });
  });

  describe('playerStats', function () {
    it('should return stats of a player', function () {
      expect(playerStats('Alan Anderson')).to.deep.equal({
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1
      });

      expect(playerStats('Ben Gordon')).to.deep.equal({
        number: 33,
        shoe: 15,
        points: 8,
        rebounds: 3,
        assists: 2,
        steals: 1,
        blocks: 1,
        slamDunks: 0
      });
    });
  });

  describe('bigShoeRebounds', function () {
    it('should return number of rebounds for the player with the biggest shoe', function () {
      expect(bigShoeRebounds()).to.equal(12);
    });
  });
});

const gameObject = {
  home: {
    teamName: 'Brooklyn Nets',
    colors: ['Black', 'White'],
    players: [
      {
        firstName: 'Alan',
        lastName: 'Anderson',
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1
      },
      {
        firstName: 'Reggie',
        lastName: 'Evans',
        number: 30,
        shoe: 14,
        points: 12,
        rebounds: 12,
        assists: 4,
        steals: 2,
        blocks: 3,
        slamDunks: 1
      },
      {
        firstName: 'Brook',
        lastName: 'Lopez',
        number: 11,
        shoe: 17,
        points: 17,
        rebounds: 6,
        assists: 2,
        steals: 2,
        blocks: 2,
        slamDunks: 3
      },
      {
        firstName: 'Mason',
        lastName: 'Plumlee',
        number: 1,
        shoe: 19,
        points: 16,
        rebounds: 12,
        assists: 1,
        steals: 1,
        blocks: 1,
        slamDunks: 0
      },
      {
        firstName: 'Jason',
        lastName: 'Collins',
        number: 31,
        shoe: 18,
        points: 5,
        rebounds: 4,
        assists: 0,
        steals: 0,
        blocks: 0,
        slamDunks: 0
      }
    ]
  },

  away: {
    teamName: 'Charlotte Hornets',
    colors: ['Turquoise', 'Purple'],
    players: [
      {
        firstName: 'Jeff',
        lastName: 'Adrien',
        number: 4,
        shoe: 18,
        points: 10,
        rebounds: 7,
        assists: 1,
        steals: 2,
        blocks: 2,
        slamDunks: 0
      },
      {
        firstName: 'Bismack',
        lastName: 'Biyombo',
        number: 0,
        shoe: 16,
        points: 12,
        rebounds: 10,
        assists: 1,
        steals: 1,
        blocks: 1,
        slamDunks: 1
      },
      {
        firstName: 'Tyrus',
        lastName: 'Thomas',
        number: 2,
        shoe: 17,
        points: 6,
        rebounds: 5,
        assists: 0,
        steals: 1,
        blocks: 2,
        slamDunks: 1
      },
      {
        firstName: 'Michael',
        lastName: 'Kidd-Gilchrist',
        number: 8,
        shoe: 15,
        points: 7,
        rebounds: 8,
        assists: 2,
        steals: 1,
        blocks: 1,
        slamDunks: 0
      },
      {
        firstName: 'Ben',
        lastName: 'Gordon',
        number: 33,
        shoe: 15,
        points: 8,
        rebounds: 3,
        assists: 2,
        steals: 1,
        blocks: 1,
        slamDunks: 0
      }
    ]
  }
};

function numPointsScored(playerName) {
  for (const team of Object.values(gameObject)) {
    for (const player of team.players) {
      const name = `${player.firstName} ${player.lastName}`;

      if (name === playerName) {
        return player.points;
      }
    }
  }
}

function shoeSize(playerName) {
  for (const team of Object.values(gameObject)) {
    for (const player of team.players) {
      const name = `${player.firstName} ${player.lastName}`;

      if (name === playerName) {
        return player.shoe;
      }
    }
  }
}

function teamColors(teamName) {
  for (const team of Object.values(gameObject)) {
    if (team.teamName === teamName) {
      return team.colors;
    }
  }
}

function teamNames() {
  return Object.values(gameObject).map(team => team.teamName);
}

function playerNumbers(teamName) {
  for (const team of Object.values(gameObject)) {
    if (team.teamName === teamName) {
      return team.players.map(player => player.number);
    }
  }
}

function playerStats(playerName) {
  for (const team of Object.values(gameObject)) {
    for (const player of team.players) {
      const name = `${player.firstName} ${player.lastName}`;

      if (name === playerName) {
        return {
          number: player.number,
          shoe: player.shoe,
          points: player.points,
          rebounds: player.rebounds,
          assists: player.assists,
          steals: player.steals,
          blocks: player.blocks,
          slamDunks: player.slamDunks
        };
      }
    }
  }
}

function bigShoeRebounds() {
  let biggestShoe = 0;
  let rebounds = 0;

  for (const team of Object.values(gameObject)) {
    for (const player of team.players) {
      if (player.shoe > biggestShoe) {
        biggestShoe = player.shoe;
        rebounds = player.rebounds;
      }
    }
  }

  return rebounds;
}