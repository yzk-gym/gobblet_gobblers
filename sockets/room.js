function room() {
  let room = {};
  let inPlayers = [];

  room.join = (name) => {
    if (inPlayers.length <= 2) {
      inPlayers.push(name);
    } else {
      return false;
    }
  };

  room.isStartGame = () => {
    if (inPlayers.length === 2) {
      return true;
    } else {
      return false;
    };
  };

  room.member = () => {
    return inPlayers;
  }

  return room;
};

module.exports = room;