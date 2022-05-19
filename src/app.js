

  var pronouns = ["the", "our"];
  var adjs = ["great", "big"];
  var nouns = ["jogger", "racoon"];
  var domains = [".com", ".net", ".io"];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let domain of domains) {
          console.log(pronoun + adj + noun + domain);
        }
      }
    }
  }

