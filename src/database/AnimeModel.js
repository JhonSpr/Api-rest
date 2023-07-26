const DB = require("./db.json");

const getAllAnime = (filterParams) => {
  try {
    let animes = DB.animes;
    if (filterParams.info) {
      return DB.animes.filter((anime) => anime.name === filterParams.info);
    }
    if (filterParams.name) {
      return DB.animes.filter((anime) =>
        anime.name.includes(filterParams.name.toLowerCase()),
      );
    }
    if (filterParams.años) {
      return DB.animes.filter(
        (anime) => anime.year === Number(filterParams.años),
      );
    }
    if (filterParams.estado) {
      return DB.animes.filter(
        (anime) => anime.estado == String(filterParams.estado),
      );
    }
    if (filterParams.type) {
      return DB.animes.filter(
        (anime) => anime.tipo == String(filterParams.type),
      );
    }
    if (filterParams.episodes) {
      return DB.animes.filter(
        (anime) => anime.episodios == String(filterParams.episodes),
      );
    }
    if (filterParams.genero) {
      return DB.animes.filter(
        (anime) =>
          anime.genero1 == String(filterParams.genero.toLowerCase()) ||
          anime.genero2 == String(filterParams.genero.toLowerCase()) ||
          anime.genero3 == String(filterParams.genero.toLowerCase()) ||
          anime.genero4 == String(filterParams.genero.toLowerCase()) ||
          anime.genero5 == String(filterParams.genero.toLowerCase()) ||
          anime.genero6 == String(filterParams.genero.toLowerCase()) ||
          anime.genero7 == String(filterParams.genero.toLowerCase()),
      );
    }

    return animes;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

module.exports = {
  getAllAnime,
};
